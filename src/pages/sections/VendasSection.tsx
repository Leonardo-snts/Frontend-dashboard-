import React from 'react';
import { chartConfigs } from '../../services/chartConfig'; // Importando as configurações dos gráficos
import ChartRenderer from '../../services/ChartRenderer';// Importando o renderizador de gráficos

const VendasSection: React.FC = () => {
  // IDs dos gráficos que você deseja renderizar
  const allowedChartIds = ["grafico3", "grafico4", "grafico8", "grafico9", "grafico12", "grafico13"];

  return (
    <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Dashboard de Clientes</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {chartConfigs
          .filter((config) => allowedChartIds.includes(config.id))
          .map((config) => (
            <div
              key={config.id}
              className="p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
            >
              <h2 className="mb-4 text-xl font-semibold text-center text-gray-700">Gráfico {config.id.replace("grafico", "")}</h2>
              <ChartRenderer config={config} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default VendasSection;
