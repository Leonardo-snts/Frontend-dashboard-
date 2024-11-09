import React from 'react';
import { chartConfigs } from '../../services/chartConfig';
import ChartRenderer from '../../services/ChartRenderer';
import Grafico21 from '../../components/Grafico21';

const MapaSection: React.FC = () => {
  const allowedChartIds = ["grafico11", "grafico20"];

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Dashboard de Mapa</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {chartConfigs
          .filter((config) => allowedChartIds.includes(config.id))
          .map((config) => (
            <div
              key={config.id}
            >
              <ChartRenderer config={config} />
            </div>
          ))}
      </div>
      <div className="mt-8">
        <Grafico21 />
      </div>
    </div>
  );
};

export default MapaSection;
