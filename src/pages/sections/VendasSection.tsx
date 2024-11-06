import React from 'react';
import { chartConfigs } from '../../services/chartConfig'; // Importando as configurações dos gráficos
import ChartRenderer from '../../services/ChartRenderer';// Importando o renderizador de gráficos

const VendasSection: React.FC = () => {
  // IDs dos gráficos que você deseja renderizar
  const allowedChartIds = ["grafico3", "grafico4", "grafico8", "grafico9", "grafico12", "grafico13"];

  return (
    <div> {/* Adicionando uma classe para estilo */}
      <h1>Dashboard de Vendas</h1>
      {chartConfigs
        .filter((config) => allowedChartIds.includes(config.id)) // Filtrando pelos IDs específicos
        .map((config) => (
          <ChartRenderer key={config.id} config={config} />
        ))}
    </div>
  );
};

export default VendasSection;
