import React from 'react';
import { chartConfigs } from '../services/chartConfig';
import ChartRenderer from '../services/ChartRenderer';
import './css/Dashboard.css'

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard de Vendas</h1>
      {chartConfigs.map((config) => (
        <ChartRenderer key={config.id} config={config} />
      ))}
    </div>
  );
};

export default Dashboard;
