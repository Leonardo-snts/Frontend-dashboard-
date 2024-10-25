import React from 'react';
import './css/SIdeNav.css';

const SideNav = () => {
  return (
    <div className="sidenav">
      <a href="#cliente">Cliente</a>
      <a href="#vendas">Vendas</a>
      <a href="#produtos">Produtos</a>
      <a href="#mapa">Mapa</a>
    </div>
  );
};

export default SideNav;
