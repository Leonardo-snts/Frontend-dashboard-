import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const ProdutoStatus = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/produtos-status')
        .then(response => response.json())
        .then(data => setData(data));
  }, []);

  // Preparando os dados para o gráfico Plotly
  const labels = data.map(item => item['Percentage']);
  const values = data.map(item => item['count']);

  return (
    <div style={{ width: '40%', margin: '0 auto' }}>
      <h2>Distribuição Percentual de Status de Vendas</h2>
      <Plot
        data={[
          {
            type: 'pie',
            labels: labels,
            values: values,
            hoverinfo: 'label+percent',
            textinfo: 'label+percent',
            marker: {
              colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
            },
          },
        ]}
        layout={{
          title: 'Distribuição Percentual de Status de Vendas',
          height: 400,
          width: 500,
        }}
      />
    </div>
  );
};

export default ProdutoStatus;
