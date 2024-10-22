import React from 'react';
import SideNav from './SideNav';
import Grafico1 from '../Graficos/Grafico1';
import Grafico2 from '..//Graficos/Grafico2';
import Grafico3 from '..//Graficos/Grafico3';
import Grafico4 from '..//Graficos/Grafico4';
import Grafico5 from '../Graficos/Grafico5';
import './css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideNav />
      <div className="main-content">
        <section id="grafico1">
          <h2>Gráfico 1</h2>
          <Grafico1 />
        </section>
        <section id="grafico2">
          <h2>Gráfico 2</h2>
          <Grafico2 />
        </section>
        <section id="grafico3">
          <h2>Gráfico 3</h2>
          <Grafico3 />
        </section>
        <section id="grafico4">
          <h2>Gráfico 4</h2>
          <Grafico4 />
        </section>
        <section id="grafico5">
          <h2>Gráfico 5</h2>
          <Grafico5 />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
