import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const SalesQtyOverTime = () => {
  const [data, setData] = useState([]);
  const [groupBy, setGroupBy] = useState<'D' | 'M' | 'Y'>('D'); // Estado para armazenar a escolha do usuário
  const [loading, setLoading] = useState(true); // Para controlar o estado de carregamento

  useEffect(() => {
    // Atualizar a URL para incluir o parâmetro group_by
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://127.0.0.1:5000/api/sales-qty-over-time?group_by=${groupBy}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Erro ao buscar dados do backend:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [groupBy]); // Atualiza os dados sempre que o usuário mudar o agrupamento

  // Configurar os dados do gráfico
  const plotData = [
    {
      x: data.map(item => item['Time']),
      y: data.map(item => item['Qty']),
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: '#36A2EB' },
      line: { shape: 'linear' },
    },
  ];

  const layout = {
    title: `Vendas por ${groupBy === 'D' ? 'Dia' : groupBy === 'Y' ? 'Ano' : 'Mês'}`,
    xaxis: {
      title: groupBy === 'D' ? 'Dia' : groupBy === 'Y' ? 'Ano' : 'Mês',
    },
    yaxis: {
      title: 'Quantidade Vendida',
    },
  };

  return (
    <div>
      <h2>Vendas ao Longo do Tempo</h2>

      {/* Seletor para escolher entre Dia, Mês ou Ano */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="groupBy">Visualizar por: </label>
        <select
          id="groupBy"
          value={groupBy}
          onChange={(e) => setGroupBy(e.target.value as 'D' | 'M' | 'Y')}
        >
          <option value="D">Dia</option>
          <option value="M">Mês</option>
          <option value="Y">Ano</option>
        </select>
      </div>

      {/* Mostrar um spinner enquanto os dados estão carregando */}
      {loading ? (
        <div>Carregando dados...</div>
      ) : (
        <Plot data={plotData} layout={layout} />
      )}
    </div>
  );
};

export default SalesQtyOverTime;
