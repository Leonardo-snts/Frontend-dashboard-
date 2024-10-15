import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const PriceOriginalVsFinal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/price-original-vs-final')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const sku = data.map(item => item['SKU']);
  const mrpOld = data.map(item => item['MRP Old']);
  const finalMRP = data.map(item => item['Final MRP']);

  return (
    <Plot
      data={[
        {
          x: sku,
          y: mrpOld,
          name: 'Preço Original',
          type: 'bar',
        },
        {
          x: sku,
          y: finalMRP,
          name: 'Preço Final',
          type: 'bar',
        },
      ]}
      layout={{ title: 'Comparação de Preço Original vs Final', barmode: 'group' }}
    />
  );
};

export default PriceOriginalVsFinal;
