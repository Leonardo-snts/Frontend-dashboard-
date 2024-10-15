import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const SalesHeatmap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/sales-heatmap')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const regions = data.map(item => item['Region']);
  const amounts = data.map(item => item['Amount']);

  return (
    <Plot
      data={[
        {
          z: amounts,
          x: regions,
          y: amounts,
          type: 'heatmap',
        },
      ]}
      layout={{ title: 'Mapa de Calor de Vendas por Região' }}
    />
  );
};

export default SalesHeatmap;
