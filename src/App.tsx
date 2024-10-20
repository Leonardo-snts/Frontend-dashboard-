import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import AmazonSalesByState from './components/Dashboard/Graficos/AmazonSalesByState';
import SalesByCategory from './components/Dashboard/Graficos/SalesByCategory';
import SalesOverTime from './components/Dashboard/Graficos/SalesOverTime';
import PriceComparison from './components/Dashboard/Graficos/PriceComparison';
import TopStock from './components/Dashboard/Graficos/TopStock';
import HeatMap from './components/Dashboard/Graficos/HeatMap';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="amazon-sales-by-state" element={<AmazonSalesByState />} />
          <Route path="sales-by-category" element={<SalesByCategory />} />
          <Route path="sales-over-time" element={<SalesOverTime />} />
          <Route path="price-comparison" element={<PriceComparison />} />
          <Route path="top-stock" element={<TopStock />} />
          <Route path="heat-map" element={<HeatMap />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
