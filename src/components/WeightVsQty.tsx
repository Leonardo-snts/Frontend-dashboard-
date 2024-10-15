import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const WeightVsQty = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/weight-vs-qty')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const weight = data.map(item => item['Weight']);
  const qty = data.map(item => item['QTY']);

  return (
    <Plot
      data={[
        {
          x: weight,
          y: qty,
          mode: 'markers',
          type: 'scatter',
          marker: { size: 12 },
        },
      ]}
      layout={{ title: 'Peso do Produto vs Quantidade Vendida' }}
    />
  );
};

export default WeightVsQty;
