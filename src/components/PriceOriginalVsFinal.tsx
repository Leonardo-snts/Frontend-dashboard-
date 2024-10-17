import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

interface PriceData {
  Sku: string;
  'MRP Old': number;
  'Final MRP Old': number;
  'Price Variation (%)': number;
}

const PriceOriginalVsFinal: React.FC = () => {
  const [data, setData] = useState<PriceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<PriceData[]>('http://localhost:5000/api/price-original-vs-final');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados de preços:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Carregando dados...</div>;
  }

  // Configuração dos dados para o gráfico
  const plotData = [
    {
      x: data.map(item => item.Sku),
      y: data.map(item => item['MRP Old']),
      name: 'MRP Old',
      type: 'bar',
      marker: { color: '#FF6384' },
    },
    {
      x: data.map(item => item.Sku),
      y: data.map(item => item['Final MRP Old']),
      name: 'Final MRP Old',
      type: 'bar',
      marker: { color: '#36A2EB' },
    },
    {
      x: data.map(item => item.Sku),
      y: data.map(item => item['Price Variation (%)']),
      name: 'Price Variation (%)',
      type: 'scatter',
      mode: 'lines+markers',
      yaxis: 'y2',  // Variação de preço em um eixo diferente
      line: { shape: 'linear', color: '#FFCE56' },
    },
  ];

  const layout = {
    title: 'Comparação de Preços entre MRP Old e Final MRP Old',
    xaxis: {
      title: 'SKU',
    },
    yaxis: {
      title: 'Preço',
    },
    yaxis2: {
      title: 'Variação de Preço (%)',
      overlaying: 'y',
      side: 'right',
    },
    barmode: 'group',  // Barras agrupadas para comparação lado a lado
  };

  return (
    <div>
      <h2>Comparação de Preços por SKU</h2>
      <Plot data={plotData} layout={layout} />
    </div>
  );
};

export default PriceOriginalVsFinal;
