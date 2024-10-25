import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const Vendas = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:5000/graficoVendas')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erro ao carregar gráfico de Vendas:', error));
  }, []);

  return (
    <div>
      {data ? (
        <Plot data={data.data} layout={data.layout} />
      ) : (
        <p>Carregando gráfico de Vendas...</p>
      )}
    </div>
  );
};

export default Vendas;
