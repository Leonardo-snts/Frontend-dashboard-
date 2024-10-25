import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const Produtos = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:5000/graficoProdutos')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erro ao carregar gráfico de Produtos:', error));
  }, []);

  return (
    <div>
      {data ? (
        <Plot data={data.data} layout={data.layout} />
      ) : (
        <p>Carregando gráfico de Produtos...</p>
      )}
    </div>
  );
};

export default Produtos;
