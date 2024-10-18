// import React from 'react';
// import './App.css';
// import Dashboard from './Dashboard';

// function App() {
//   return (
//     <div className="App">
//       <Dashboard />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AmazonSalesByState from './components/AmazonSalesByState';
import SalesByCategory from './components/SalesByCategory';
import SalesOverTime from './components/SalesOverTime';
import PriceComparison from './components/PriceComparison';
import TopStock from './components/TopStock';
import SalesQtyOverTime from './components/SalesQtyOverTime';
import PriceOriginalVsFinal from './components/PriceOriginalVsFinal';
import HeatMap from './components/HeatMap';
import ProdutoStatus from './components/ProdutosStatus';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/amazon-sales-by-state">1.Vendas por Estado (Amazon)</Link></li>
            <li><Link to="/sales-by-category">2.Distribuição de Vendas por Categoria</Link></li>
            <li><Link to="/sales-over-time">3.Vendas ao Longo do Tempo</Link></li>
            <li><Link to="/price-comparison">4.Comparação de Preços MRP</Link></li>
            <li><Link to="/top-stock">5.Produtos com Maior Estoque</Link></li>
            <li><Link to="/sales-qty-over-time">6.Vendas por Estilo ao Longo do Tempo</Link></li>
            <li><Link to="/price-original-vs-final">7.Preço Original vs Final</Link></li>
            <li><Link to="/heat-map">8.Mapa de Calor de Vendas</Link></li>
            <li><Link to="/produtos-status">9.Porcentagem dos Status dos produtos</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/amazon-sales-by-state" element={<AmazonSalesByState />} />
          <Route path="/sales-by-category" element={<SalesByCategory />} />
          <Route path="/sales-over-time" element={<SalesOverTime />} />
          <Route path="/price-comparison" element={<PriceComparison />} />
          <Route path="/top-stock" element={<TopStock />} />
          <Route path="/sales-qty-over-time" element={<SalesQtyOverTime />} />
          <Route path="/price-original-vs-final" element={<PriceOriginalVsFinal />} />
          <Route path="/heat-map" element={<HeatMap />} />
          <Route path="/produtos-status" element={<ProdutoStatus />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
