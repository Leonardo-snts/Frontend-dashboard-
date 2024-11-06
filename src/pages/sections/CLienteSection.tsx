import React from 'react';
import { chartConfigs } from '../../services/chartConfig'; // Importando as configurações dos gráficos
import ChartRenderer from '../../services/ChartRenderer'; // Importando o renderizador de gráficos
import '../../output.css';

const ClienteSection: React.FC = () => {
  // IDs dos gráficos que você deseja renderizar
  const allowedChartIds = ["grafico7", "grafico6", "grafico2", "grafico5", "grafico10"];

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <main className="flex-1 p-8 space-y-6 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard de Clientes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chartConfigs
            .filter((config) => allowedChartIds.includes(config.id)) // Filtrando pelos IDs específicos
            .map((config) => (
              <div
                key={config.id}
                id={config.id}
                className="bg-white rounded-lg shadow-md p-4 border-2 border-blue-500 transition duration-300 hover:shadow-lg hover:border-blue-600"
              >
                <ChartRenderer config={config} />
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default ClienteSection;
