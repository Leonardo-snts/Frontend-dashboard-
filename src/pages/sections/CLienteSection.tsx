import React from 'react';
import { chartConfigs } from '../../services/chartConfig';
import ChartRenderer from '../../services/ChartRenderer';

const ClienteSection: React.FC = () => {
  const allowedChartIds = ["grafico2", "grafico5", "grafico6", "grafico7", "grafico10"];

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {chartConfigs
        .filter((config) => allowedChartIds.includes(config.id))
        .map((config) => (
          <div key={config.id} className="flex flex-col p-6 transition-shadow duration-300 bg-white border-gray-200 rounded-lg shadow-sm hover:shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-center text-gray-700">
              Gráfico {config.id.replace("grafico", "")}
            </h2>
            <ChartRenderer config={config} />
          </div>
        ))}
    </div>
  );
};

export default ClienteSection;
