import React, { useState } from 'react';
import SideNav from './SideNav';
import ClienteSection from '../seções/ClienteSection';
import VendasSection from '../seções/VendasSection';
import ProdutosSection from '../seções/ProdutosSection';
import MapaSection from '../seções/MapaSection';
import './css/Dashboard.css';

const Dashboard = () => {
  // Estado para controlar a seção ativa
  const [activeSection, setActiveSection] = useState('cliente');

  // Função para renderizar a seção ativa
  const renderSection = () => {
    switch (activeSection) {
      case 'cliente':
        return <ClienteSection />;
      case 'vendas':
        return <VendasSection />;
      case 'produtos':
        return <ProdutosSection />;
      case 'mapa':
        return <MapaSection />;
      default:
        return <ClienteSection />;
    }
  };

  return (
    <div className="dashboard-container">
      <SideNav setActiveSection={setActiveSection} />
      <div className="main-content">
        <h2>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
