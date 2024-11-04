export const chartConfigs = [
  {
    id: "grafico1",
    endpoint: "http://127.0.0.1:5000/api/grafico1",
    title: "Distribuição de Vendas por Loja",
    type: "bar" as "bar", // Tipo de gráfico  type: 'bar' | 'pie' | 'line' | 'scatter';
    xKey: "tipo_do_produto",
    yKey: "contagem",
    color: "",
  },
  {
    id: "grafico2",
    endpoint: "http://127.0.0.1:5000/api/grafico2",
    title: "Distribuição de Vendas por Produto",
    type: "bar" as "bar",
    xKey: "loja",
    yKey: "contagem",
    color: "",
  },
  {
    id: "grafico3",
    endpoint: "http://127.0.0.1:5000/api/grafico3",
    title: "Valor Total de Venda por Tipo de Produto",
    type: "bar" as "bar",
    xKey: "tipo_do_produto",
    yKey: "valor_total_venda",
    color: "",
  },
  {
    id: "grafico4",
    endpoint: "http://127.0.0.1:5000/api/grafico4",
    title: "Valor de Compra vs Valor de Venda",
    type: "scatter" as "scatter",
    xKey: "valor de compra",
    yKey: "valor de venda",
    color: "",
  },
  {
    id: "grafico5",
    endpoint: "http://127.0.0.1:5000/api/grafico5",
    title: "Quantidade Comprada por Loja",
    type: "bar" as "bar",
    xKey: "loja",
    yKey: "quantidade_total",
    color: "",
  },
  {
    id: "grafico6",
    endpoint: "http://127.0.0.1:5000/api/grafico6",
    title: "Tipos de Envio",
    type: "pie" as "pie",
    xKey: "tipo_envio", // Define os rótulos da pizza
    yKey: "contagem", // Define os valores da pizza
    color: "",
  },
  {
    id: "grafico7",
    endpoint: "http://127.0.0.1:5000/api/grafico7",
    title: "Status de Entrega por Loja",
    type: "histogram" as "histogram",
    xKey: "loja que comprou", // Define os rótulos da pizza
    yKey: "contagem", // Define os valores da pizza
    color: "status da entrega",
  },
];
