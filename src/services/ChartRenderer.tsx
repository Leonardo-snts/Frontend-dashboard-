import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import { ChartConfig } from './chartConfig';

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
    } else {
      return defaultData;
    }
  };

  return (
      <Plot
        data={getDataForChart()}
        layout={{
          ...config.layout,
          title: {
            text: config.title,
            font: { size: 18, color: "#374151" }, // Ajuste o título
            x: 0.5, // Centraliza o título
          },
          // autosize: true,
          paper_bgcolor: "rgba(0,0,0,0)", // Fundo transparente
          plot_bgcolor: "rgba(0,0,0,0)", // Fundo do gráfico transparente
          barmode: "group",
          xaxis: {
            title: config.xKey,
            titlefont: { size: 14, color: "#6B7280" },
            tickfont: { size: 12, color: "#6B7280" },
          },
          yaxis: {
            title: config.yKey,
            titlefont: { size: 14, color: "#6B7280" },
            tickfont: { size: 12, color: "#6B7280" },
          },
          legend: {
            font: { size: 12, color: "#0000000" },
            orientation: "h",  // Define a orientação horizontal
            x: 0.3,              // Posiciona a legenda no eixo X
            y: -0.2            // Posiciona a legenda abaixo do gráfico
          },
        }}
      />
  );
};

export default ChartRenderer;
