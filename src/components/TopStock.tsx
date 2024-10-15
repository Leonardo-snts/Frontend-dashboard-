import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const TopStock = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/top-stock')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const sku = data.map(item => item['SKU']);
  const stock = data.map(item => item['Stock']);

  return (
    <Plot
      data={[
        {
          x: sku,
          y: stock,
          type: 'bar',
          marker: { color: 'orange' },
        },
      ]}
      layout={{ title: 'Produtos com Maior Estoque' }}
    />
  );
};

export default TopStock;
