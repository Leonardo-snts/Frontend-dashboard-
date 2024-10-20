// components/DashboardLayout.tsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  return (
    <div className="dashboard">
      <nav className="side-nav">
        <ul>
          <li><Link to="/amazon-sales-by-state">Vendas por Estado</Link></li>
          <li><Link to="/sales-by-category">Vendas por Categoria</Link></li>
          <li><Link to="/sales-over-time">Vendas ao Longo do Tempo</Link></li>
          <li><Link to="/price-comparison">Comparação de Preços</Link></li>
          <li><Link to="/top-stock">Produtos com Maior Estoque</Link></li>
          <li><Link to="/heat-map">Mapa de Calor</Link></li>
        </ul>
      </nav>
      <div className="content">
        <Outlet /> {/* Renderiza o componente da rota */}
      </div>
    </div>
  );
};

export default DashboardLayout;
