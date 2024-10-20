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
  const amazonFbaMrp = data.map(item => item['Amazon FBA MRP']);
  const aijoMRP = data.map(item => item['Aijo MRP']);
  const limeroadMRP = data.map(item => item['Limeroad MRP']);
  const paytmMRP = data.map(item => item['Paytm MRP']);
  const snapdealMRP = data.map(item => item['Snadeal MRP']);



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
        {
          x: sku,
          y: amazonFbaMrp,
          name: 'Amazon FBA MRP',
          type: 'bar',
        },
        {
          x: sku,
          y: aijoMRP,
          name: 'Myntra MRP',
          type: 'bar',
        },
        {
          x: sku,
          y: limeroadMRP,
          name: 'Limeroad MRP',
          type: 'bar',
        },
        {
          x: sku,
          y: paytmMRP,
          name: 'Paytm MRP',
          type: 'bar',
        },
        {
          x: sku,
          y: snapdealMRP,
          name: 'Snapdeal MRP',
          type: 'bar',
        },
      ]}
      layout={{ title: 'Comparação de Preços', barmode: 'group' }}
    />
  );
};

export default PriceComparison;
