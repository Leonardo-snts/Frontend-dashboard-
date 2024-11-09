import React from 'react';
import { chartConfigs } from '../../services/chartConfig';
import ChartRenderer from '../../services/ChartRenderer';

const ClienteSection: React.FC = () => {
  const allowedChartIds = ["grafico2", "grafico5", "grafico6", "grafico7", "grafico10"];

  return (
    <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {chartConfigs
        .filter((config) => allowedChartIds.includes(config.id))
        .map((config) => (
          <div key={config.id}>
            <h2 className="mb-4 text-2xl font-semibold text-center text-gray-900">
              Gráfico teste {config.id.replace("grafico", "")}
            </h2>
            <div className="gap-8 bg-blue-300 ">
              <ChartRenderer config={config} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ClienteSection;
