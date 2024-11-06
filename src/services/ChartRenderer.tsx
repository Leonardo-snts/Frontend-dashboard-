import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import { ChartConfig } from './chartConfig';
import Grafico21 from '../components/Grafico21';

type ChartData = Record<string, any>[];

interface ChartProps {
  config: ChartConfig;
}

const ChartRenderer: React.FC<ChartProps> = ({ config }) => {
  const [data, setData] = useState<ChartData>([]);

  useEffect(() => {
    axios.get(config.endpoint)
      .then((response) => {
        console.log("Dados recebidos:", response.data);
        setData(response.data);
      })
      .catch((error) => console.error("Erro ao carregar os dados:", error));
  }, [config.endpoint]);

  const getDataForChart = () => {
    if (!Array.isArray(data)) {
      console.error("Os dados não são um array:", data);
      return []; // Retorna um array vazio se data não for um array
    }

    // Dados padrão para o gráfico
    const defaultData = [
      {
        x: data.map(item => item[config.xKey]),
        y: data.map(item => item[config.yKey]),
        type: config.type,
      }
    ];

    if (config.type === 'histogram') {
      const statuses = ["cancelado", "enviado", "pendente"];

      return statuses.map(status => ({
        x: data.filter(item => item[config.status] === status).map(item => item[config.xKey]),
        y: data.filter(item => item[config.status] === status).map(item => item[config.yKey]),
        type: 'bar',
        name: status,
      }));
    } else if (config.type === 'pie') {
      return [{
        labels: data.map(item => item[config.xKey]),
        values: data.map(item => item[config.yKey]),
        type: 'pie',
      }];
    } else if (config.type === 'scatter') {
      const products = ["cozinha", "casa", "ferramentas", "eletronico", "roupa"];

      return products.map(status => ({
        x: data.filter(item => item[config.status] === status).map(item => item[config.xKey]),
        y: data.filter(item => item[config.status] === status).map(item => item[config.yKey]),
        type: 'scatter',
        mode: 'markers+text',
        name: status,
      }));
    } else if (config.type ==='heatmap') {
      return [
        <Grafico21 />
      ]

    } else {
      return defaultData;
    }
  };

  return (
    <div>
      <Plot
        data={getDataForChart()}
        layout={{
          title: config.title,
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
