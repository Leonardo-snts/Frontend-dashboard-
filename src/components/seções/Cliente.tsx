import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const Cliente = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:5000/graficoCliente')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erro ao carregar gráfico de Cliente:', error));
  }, []);

  return (
    <div>
      {data ? (
        <Plot data={data.data} layout={data.layout} />
      ) : (
        <p>Carregando gráfico de Cliente...</p>
      )}
    </div>
  );
};

export default Cliente;
