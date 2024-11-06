import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartLine, faBox, faMap } from '@fortawesome/free-solid-svg-icons';

interface SideNavProps {
  setActiveSection: (section: string) => void;
}

const SideNav: React.FC<SideNavProps> = ({ setActiveSection }) => {
  return (
    <div className="sidenav bg-gray-800 h-screen w-20 flex flex-col items-center py-8 space-y-6 text-white shadow-lg">
      <button 
        onClick={() => setActiveSection('cliente')} 
        className="flex flex-col items-center text-sm hover:bg-gray-700 p-3 rounded-lg w-full transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faUser} size="lg" />
        <span className="mt-1">Cliente</span>
      </button>
      <button 
        onClick={() => setActiveSection('vendas')} 
        className="flex flex-col items-center text-sm hover:bg-gray-700 p-3 rounded-lg w-full transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faChartLine} size="lg" />
        <span className="mt-1">Vendas</span>
      </button>
      <button 
        onClick={() => setActiveSection('produtos')} 
        className="flex flex-col items-center text-sm hover:bg-gray-700 p-3 rounded-lg w-full transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faBox} size="lg" />
        <span className="mt-1">Produtos</span>
      </button>
      <button 
        onClick={() => setActiveSection('mapa')} 
        className="flex flex-col items-center text-sm hover:bg-gray-700 p-3 rounded-lg w-full transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faMap} size="lg" />
        <span className="mt-1">Mapa</span>
      </button>
    </div>
  );
};

export default SideNav;
