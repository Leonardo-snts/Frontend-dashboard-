import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const PriceComparison = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/price-comparison')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const sku = data.map(item => item['Sku']);
  const amazonMRP = data.map(item => item['Amazon MRP']);
  const flipkartMRP = data.map(item => item['Flipkart MRP']);
  const myntraMRP = data.map(item => item['Myntra MRP']);

  return (
    <Plot
      data={[
        {
          x: sku,
          y: amazonMRP,
          name: 'Amazon MRP',
          type: 'bar',
        },
        {
          x: sku,
          y: flipkartMRP,
          name: 'Flipkart MRP',
          type: 'bar',
        },
        {
          x: sku,
          y: myntraMRP,
          name: 'Myntra MRP',
          type: 'bar',
        },
      ]}
      layout={{ title: 'Comparação de Preços MRP (Amazon, Flipkart, Myntra)', barmode: 'group' }}
    />
  );
};

export default PriceComparison;
