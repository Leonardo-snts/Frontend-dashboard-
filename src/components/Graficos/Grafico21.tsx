import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const Grafico21 = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/grafico21')
      .then(response => response.json()) // Garante que está lidando com JSON
      .then(jsonData => {
        console.log(jsonData); // Verifica o que você está recebendo
        const parsedData = JSON.parse(jsonData); // Analisa o JSON
        setData(parsedData); // Define os dados no estado
      })
      .catch(error => console.error('Erro ao buscar gráfico:', error));
  }, []);

  if (!data) {
    return <div>Carregando gráfico...</div>;
  }

  return (
    <Plot
      data={data.data}  // Acessa os dados do gráfico
      layout={data.layout}  // Acessa o layout do gráfico
    />
  );
};

export default Grafico21;
