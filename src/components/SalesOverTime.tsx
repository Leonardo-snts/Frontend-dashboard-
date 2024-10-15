import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const SalesOverTime = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/sales-over-time')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const dates = data.map(item => item['Date']);
  const amounts = data.map(item => item['Amount']);

  return (
    <Plot
      data={[
        {
          x: dates,
          y: amounts,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'green' },
        },
      ]}
      layout={{ title: 'Vendas ao Longo do Tempo' }}
    />
  );
};

export default SalesOverTime;
