import React from 'react';
import './css/SIdeNav.css';

interface SideNavProps {
  setActiveSection: (section: string) => void;
}

const SideNav: React.FC<SideNavProps> = ({ setActiveSection }) => {
  return (
    <div className="sidenav">
      <button onClick={() => setActiveSection('cliente')}>Cliente</button>
      <button onClick={() => setActiveSection('vendas')}>Vendas</button>
      <button onClick={() => setActiveSection('produtos')}>Produtos</button>
      <button onClick={() => setActiveSection('mapa')}>Mapa</button>
    </div>
  );
};

export default SideNav;
