import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const VendasSection = () => {
  const [grafico1Data, setGrafico1Data] = useState<any>(null);
  const [grafico2Data, setGrafico2Data] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:5000/graficoVendas1')
      .then(response => response.json())
      .then(data => setGrafico1Data(data))
      .catch(error => console.error('Erro ao carregar gráfico Vendas 1:', error));

    fetch('http://localhost:5000/graficoVendas2')
      .then(response => response.json())
      .then(data => setGrafico2Data(data))
      .catch(error => console.error('Erro ao carregar gráfico Vendas 2:', error));
  }, []);

  return (
    <div>
      {grafico1Data ? (
        <Plot data={grafico1Data.data} layout={grafico1Data.layout} />
      ) : (
        <p>Carregando gráfico Vendas 1...</p>
      )}
      {grafico2Data ? (
        <Plot data={grafico2Data.data} layout={grafico2Data.layout} />
      ) : (
        <p>Carregando gráfico Vendas 2...</p>
      )}
    </div>
  );
};

export default VendasSection;
