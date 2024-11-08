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
    <div className="w-full p-4 transition duration-300 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl sm:p-6">
      <Plot
        data={getDataForChart()}
        layout={{
          title: {
            text: config.title,
            font: { size: 18, color: "#374151" }, // Ajuste o título
            x: 0.5, // Centraliza o título
          },
          autosize: true,
          paper_bgcolor: "rgba(0,0,0,0)", // Fundo transparente
          plot_bgcolor: "rgba(0,0,0,0)", // Fundo do gráfico transparente
          barmode: "group",
          margin: { l: 40, r: 20, t: 50, b: 40 }, // Ajuste de margens
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
        }}
        useResizeHandler
        style={{ width: "400px", height: "300px" }}
        className="h-[300px] sm:h-[400px] md:h-[500px]"
      />
    </div>
  );
};

export default ChartRenderer;
