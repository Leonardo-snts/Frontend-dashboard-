import React from 'react';
import { chartConfigs } from '../../services/chartConfig'; // Importando as configurações dos gráficos
import ChartRenderer from '../../services/ChartRenderer';// Importando o renderizador de gráficos

const ProdutosSection: React.FC = () => {
  // IDs dos gráficos que você deseja renderizar
  const allowedChartIds = ["grafico1", "grafico14", "grafico15", "grafico16", "grafico17", "grafico18", "grafico19"];

  return (
    <div> {/* Adicionando uma classe para estilo */}
      <h1>Dashboard de Produtos</h1>
      {chartConfigs
        .filter((config) => allowedChartIds.includes(config.id)) // Filtrando pelos IDs específicos
        .map((config) => (
          <ChartRenderer key={config.id} config={config} />
        ))}
    </div>
  );
};

export default ProdutosSection;
