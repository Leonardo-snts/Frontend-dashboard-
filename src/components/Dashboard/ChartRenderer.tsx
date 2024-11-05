import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

type ChartConfig = {
  id: string;
  endpoint: string;
  title: string;
  type: 'bar' | 'pie' | 'line' | 'scatter' | 'histogram';
  xKey: string;
  yKey: string;
  cor: string;
};

type ChartData = Record<string, any>[];

interface ChartProps {
  config: ChartConfig;
}

const ChartRenderer: React.FC<ChartProps> = ({ config }) => {
  const [data, setData] = useState<ChartData>([]);

  useEffect(() => {
    axios.get(config.endpoint)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Erro ao carregar os dados:", error));
  }, [config.endpoint]);

  const getDataForChart = () => {
    
    if (config.type === 'histogram') {
      const statuses = ["cancelado", "enviado", "pendente"];
      
      return statuses.map(status => ({
        x: data
          .filter(item => item[config.cor] === status) // Filtra pelo status atual
          .map(item => item[config.xKey]), // Extrai o nome da loja
        y: data
          .filter(item => item[config.cor] === status) // Filtra pelo status atual
          .map(item => item[config.yKey]), // Extrai a contagem
        type: 'bar', // 'bar' para exibir barras
        name: status, // Nome da barra como o status de entrega
      }));
    } else if (config.type === 'pie') {
      return [
        {
          labels: data.map(item => item[config.xKey]),
          values: data.map(item => item[config.yKey]),
          type: 'pie',
        }
      ];
    }else if (config.type === 'scatter') {
      const products = ["cozinha", "casa", "ferramentas", "eletronico", "roupa"];
      
      return products.map(status => ({
        x: data
          .filter(item => item[config.cor] === status)
          .map(item => item[config.xKey]),
        y: data
          .filter(item => item[config.cor] === status)
          .map(item => item[config.yKey]),
        type: 'scatter',
        mode: 'markers+text',
        name: status,
      }));
    } else {
      return [
        {
          x: data.map(item => item[config.xKey]),
          y: data.map(item => item[config.yKey]),
          type: config.type,
          marker: {
            colors: data.map(item => item[config.cor])
          }
        }
      ];
    }
  };

  return (
    <div>
      <h2>{config.title}</h2>
      <Plot
        data={getDataForChart()}
        layout={{
          width: 600,
          height: 400,
          barmode: 'group',
          xaxis: { title: config.xKey, automargin: true },
          yaxis: { title: config.yKey, automargin: true },
        }}
      />
    </div>
  );
};

export default ChartRenderer;
