import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const Dashboard = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('http://127.0.0.1:5000/api/amazon-sales-by-state')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
  
    const states = data.map(item => item['ship-state']);
    const amounts = data.map(item => item['Amount']);
  
    return (
      <Plot
        data={[
          {
            x: states,
            y: amounts,
            type: 'bar',
            marker: { color: 'blue' },
          },
        ]}
        layout={{ title: 'Vendas por Estado (Amazon)' }}
      />
    );
  };

export default Dashboard;
