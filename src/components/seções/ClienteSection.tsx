import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const ClienteSection = () => {
  const [grafico1Data, setGrafico1Data] = useState<any>(null);
  const [grafico2Data, setGrafico2Data] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/grafico5')
      .then(response => response.json())
      .then(data => setGrafico1Data(data))
      .catch(error => console.error('Erro ao carregar gráfico Cliente 1:', error));

    fetch('http://localhost:5000/graficoCliente2')
      .then(response => response.json())
      .then(data => setGrafico2Data(data))
      .catch(error => console.error('Erro ao carregar gráfico Cliente 2:', error));
  }, []);

  return (
    <div>
      {grafico1Data ? (
        <Plot data={grafico1Data.data} layout={grafico1Data.layout} />
      ) : (
        <p>Carregando gráfico Cliente 1...</p>
      )}
      {grafico2Data ? (
        <Plot data={grafico2Data.data} layout={grafico2Data.layout} />
      ) : (
        <p>Carregando gráfico Cliente 2...</p>
      )}
    </div>
  );
};

export default ClienteSection;
