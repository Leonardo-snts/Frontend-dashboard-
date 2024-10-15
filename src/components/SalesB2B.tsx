import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const SalesB2B = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/sales-b2b')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const channels = data.map(item => item['sales chanel']);
  const amounts = data.map(item => item['Amount']);

  return (
    <Plot
      data={[
        {
          labels: channels,
          values: amounts,
          type: 'pie',
        },
      ]}
      layout={{ title: 'Vendas B2B vs Outros Canais' }}
    />
  );
};

export default SalesB2B;
