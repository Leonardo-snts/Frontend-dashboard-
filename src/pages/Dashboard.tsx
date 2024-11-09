import React, { useState } from 'react';
import SideNav from '../components/SideNav';
import ClienteSection from './sections/CLienteSection';
import VendasSection from './sections/VendasSection';
import ProdutosSection from './sections/ProdutosSection';
import MapaSection from './sections/MapaSection';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('cliente');

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
    <div className="flex h-screen bg-gray-400">
      <SideNav setActiveSection={setActiveSection} />
      <div className="flex-1 p-6">
          {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
