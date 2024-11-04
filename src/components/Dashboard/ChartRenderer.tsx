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
  color: string;
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

  const colorMapping: Record<string, string> = {
    'entregue': '#4CAF50', // Verde
    'pendente': '#FFC107', // Amarelo
    'cancelado': '#F44336', // Vermelho
    'em trânsito': '#2196F3', // Azul
  };

  const getDataForChart = () => {
    if (config.type === 'pie') {
      return [
        {
          labels: data.map(item => item[config.xKey]), // Rótulos para o gráfico de pizza
          values: data.map(item => item[config.yKey]), // Valores para o gráfico de pizza
          type: 'pie',
        }
      ];
    } else if (config.type === 'histogram') {
      // Organize os dados para cada status com cores específicas
      return Object.keys(colorMapping).map((status) => ({
        x: data
          .filter(item => item[config.color] === status)
          .map(item => item[config.xKey]),
        y: data
          .filter(item => item[config.color] === status)
          .map(item => item[config.yKey]),
        type: 'bar', // Plotly usa barras para dados histogram agrupados por cor
        name: status, // Define o nome da legenda
        marker: { color: colorMapping[status] },
      }));
    } else {
      return [
        {
          x: data.map(item => item[config.xKey]),
          y: data.map(item => item[config.yKey]),
          type: config.type,
          mode: config.type === 'scatter' ? 'markers' : undefined,
          marker: { color: data.map(item => colorMapping[item[config.color]] || 'blue') },
        }
      ];
    }
  };

  return (
    <div>
      <h2>{config.title}</h2>
      <Plot
        data={getDataForChart()}
        layout={{ title: config.title, width: 600, height: 400 }}
      />
    </div>
  );
};

export default ChartRenderer;
