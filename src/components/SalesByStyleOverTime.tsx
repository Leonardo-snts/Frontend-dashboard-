import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const SalesByStyleOverTime = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/sales-by-style-over-time')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const dates = data.map(item => item['Date']);
  const qty = data.map(item => item['QTY']);
  // const styles = data.map(item => item['Style']);

  return (
    <Plot
      data={[
        {
          x: dates,
          y: qty,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'purple' },
        },
      ]}
      layout={{ title: 'Vendas por Estilo ao Longo do Tempo' }}
    />
  );
};

export default SalesByStyleOverTime;
