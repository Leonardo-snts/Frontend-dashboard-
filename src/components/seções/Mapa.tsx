import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const Mapa = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:5000/graficoMapa')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erro ao carregar gráfico do Mapa:', error));
  }, []);

  return (
    <div>
      {data ? (
        <Plot data={data.data} layout={data.layout} />
      ) : (
        <p>Carregando gráfico do Mapa...</p>
      )}
    </div>
  );
};

export default Mapa;
