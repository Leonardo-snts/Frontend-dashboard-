import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const Grafico5 = () => {
  const [graficoData, setGraficoData] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/grafico5') // Backend API
      .then(response => response.json())
      .then(data => {
        setGraficoData(JSON.parse(data));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {graficoData ? (
        <Plot
          data={graficoData.data}
          layout={graficoData.layout}
        />
      ) : (
        <p>Carregando gráfico...</p>
      )}
    </div>
  );
};

export default Grafico5;
