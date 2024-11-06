import React, { useState } from 'react';
import SideNav from '../components/SideNav';
import ClienteSection from './sections/CLienteSection';
import VendasSection from './sections/VendasSection';
import ProdutosSection from './sections/ProdutosSection';
import MapaSection from './sections/MapaSection';

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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <SideNav setActiveSection={setActiveSection} />
      
      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-auto">
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
