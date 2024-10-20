import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

interface CountrySales {
  'ship-country': string;
  Amount: number;
}

const HeatMap: React.FC = () => {
  const [data, setData] = useState<CountrySales[]>([]);

  useEffect(() => {
    // Requisição para a API do Flask
    axios.get('http://127.0.0.1:5000/api/heat-map')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar dados", error);
      });
  }, []);

  // Preparando os dados para o Plotly
  const countries = data.map(item => item['ship-country']);
  const salesAmount = data.map(item => item.Amount);

  return (
    <Plot
      data={[
        {
          type: 'choropleth',
          locationmode: 'country names',
          locations: countries,
          z: salesAmount,
          colorscale: 'Blues', // Escolha da paleta de cores
          colorbar: {
            title: 'Vendas Totais ($)',
          },
        },
      ]}
      layout={{
        title: 'Mapa de Calor de Vendas por País',
        geo: {
          projection: {
            type: 'natural earth',
          },
        },
      }}
      style={{ width: '100%', height: '600px' }} // Ajuste de estilo
    />
  );
};

export default HeatMap;
