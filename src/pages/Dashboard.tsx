import React from 'react';
import { chartConfigs } from '../services/chartConfig'; // Importando as configurações dos gráficos
import ChartRenderer from '../services/ChartRenderer'; // Importando o renderizador de gráficos
import './css/Dashboard.css'; // Importando o CSS do Dashboard

const Dashboard: React.FC = () => {
  return (
    <div> {/* Adicionando uma classe para estilo */}
      <h1>Dashboard de Vendas</h1>
      {chartConfigs.map((config) => (
        <ChartRenderer key={config.id} config={config} /> // Renderizando cada gráfico com a configuração correspondente
      ))}
    </div>
  );
};

export default Dashboard;
