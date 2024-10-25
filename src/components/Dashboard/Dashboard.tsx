import React from 'react';
import SideNav from '../Dashboard/SideNav';
import Cliente from '../seções/Cliente';
import Vendas from '../seções/Vendas';
import Produtos from '../seções/Produtos';
import Mapa from '../seções/Mapa';
import './css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideNav />
      <div className="main-content">
        <section id="cliente">
          <h2>Cliente</h2>
          <Cliente />
        </section>
        <section id="vendas">
          <h2>Vendas</h2>
          <Vendas />
        </section>
        <section id="produtos">
          <h2>Produtos</h2>
          <Produtos />
        </section>
        <section id="mapa">
          <h2>Mapa</h2>
          <Mapa />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
