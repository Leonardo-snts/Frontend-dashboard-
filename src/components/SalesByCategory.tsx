import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const SalesByCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/sales-by-category')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const categories = data.map(item => item['Category']);
  const amounts = data.map(item => item['Amount']);

  return (
    <Plot
      data={[
        {
          labels: categories,
          values: amounts,
          type: 'pie',
        },
      ]}
      layout={{ title: 'Distribuição de Vendas por Categoria' }}
    />
  );
};

export default SalesByCategory;
