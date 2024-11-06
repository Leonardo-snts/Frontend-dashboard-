import React from 'react';
import { chartConfigs } from '../services/chartConfig'; // Importando as configurações dos gráficos
import ChartRenderer from '../services/ChartRenderer'; // Importando o renderizador de gráficos
import './css/Dashboard.css'; // Importando o CSS do Dashboard
import Grafico21 from '../components/Grafico21';

const Dashboard: React.FC = () => {
  return (
    <div> {/* Adicionando uma classe para estilo */}
      <h1>Dashboard de Vendas</h1>
      {chartConfigs.map((config) => (
        <ChartRenderer key={config.id} config={config} /> 
      ))}
      <Grafico21 /> 
    </div>
  );
};

export default Dashboard;
