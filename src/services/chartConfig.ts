type ChartType = "bar" | "pie" | "heatmap" | "scatter" | "histogram" | "line";

export interface ChartConfig {
    id: string;
    endpoint: string;
    title: string;
    type: ChartType; // Deve ser um dos tipos literais
    xKey: string;
    yKey: string;
    status: string;
}

export const chartConfigs: ChartConfig[] = [
////////////////// Seção Clientes \\\\\\\\\\\\\\\\\\\\
  {
    id: "grafico7",
    endpoint: "http://127.0.0.1:5000/api/grafico7",
    title: "Status de Entrega por Loja",
    type: "histogram" as "histogram", // Alterado para 'bar' em vez de 'histogram'
    xKey: "loja que comprou",
    yKey: "contagem",
    status: "status de entrega", 
  },
  {
    id: "grafico6",
    endpoint: "http://127.0.0.1:5000/api/grafico6",
    title: "Tipos de Envio",
    type: "pie" as "pie",
    xKey: "tipo_envio",
    yKey: "contagem",
    status: "statusKey6",
  },
  {
    id: "grafico2",
    endpoint: "http://127.0.0.1:5000/api/grafico2",
    title: "Distribuição de Vendas por Produto",
    type: "bar" as "bar",
    xKey: "loja",
    yKey: "contagem",
    status: "statusKey2",
  },
  {
    id: "grafico5",
    endpoint: "http://127.0.0.1:5000/api/grafico5",
    title: "Quantidade Comprada por Loja",
    type: "bar" as "bar",
    xKey: "loja",
    yKey: "quantidade_total",
    status: "statusKey5",
  },
  {
    id: "grafico10",
    endpoint: "http://127.0.0.1:5000/api/grafico10",
    title: "Comparação de Preços entre Lojas e Distribuidora",
    type: "bar" as "bar",
    xKey: "loja",
    yKey: "valor",
    status: "statusKey10",
  },



/////////////////////////// Seção Vendas\\\\\\\\\\\\\\\\\\\\\\
  {
    id: "grafico1",
    endpoint: "http://127.0.0.1:5000/api/grafico1",
    title: "Distribuição de Vendas por Loja",
    type: "bar" as "bar",
    xKey: "tipo_do_produto",
    yKey: "contagem",
    status: "statusKey1",
  },
  {
    id: "grafico3",
    endpoint: "http://127.0.0.1:5000/api/grafico3",
    title: "Valor Total de Venda por Tipo de Produto",
    type: "bar" as "bar",
    xKey: "tipo_do_produto",
    yKey: "valor_total_venda",
    status: "statusKey3",
  },
  {
    id: "grafico4",
    endpoint: "http://127.0.0.1:5000/api/grafico4",
    title: "Valor de Compra vs Valor de Venda",
    type: "scatter" as "scatter",
    xKey: "valor de compra",
    yKey: "valor de venda",
    status: "tipo do produto",
  },
  {
    id: "grafico8",
    endpoint: "http://127.0.0.1:5000/api/grafico8",
    title: "Quantidade Comprada por Moeda Usada",
    type: "bar" as "bar",
    xKey: "moeda",
    yKey: "quantidade_total",
    status: "statusKey8",
  },
  {
    id: "grafico9",
    endpoint: "http://127.0.0.1:5000/api/grafico9",
    title: "Valor Total de Venda por Moeda",
    type: "bar" as "bar",
    xKey: "moeda",
    yKey: "valor_total_venda",
    status: "statusKey9",
  },
  {
    id: "grafico11",
    endpoint: "http://127.0.0.1:5000/api/grafico11",
    title: "Valor de Venda por Cidade",
    type: "bar" as "bar",
    xKey: "cidade",
    yKey: "valor_total_venda",
    status: "statusKey11",
  },
  {
    id: "grafico12",
    endpoint: "http://127.0.0.1:5000/api/grafico12",
    title: "Média de Valor de Venda por Tipo de Produto",
    type: "bar" as "bar",
    xKey: "tipo_do_produto",
    yKey: "media_valor_venda",
    status: "statusKey12",
  },
  {
    id: "grafico13",
    endpoint: "http://127.0.0.1:5000/api/grafico13",
    title: "Média de Valor de Compra por Tipo de Produto",
    type: "bar" as "bar",
    xKey: "tipo_do_produto",
    yKey: "media_valor_compra",
    status: "statusKey13",
  },
  {
    id: "grafico14",
    endpoint: "http://127.0.0.1:5000/api/grafico14",
    title: "Quantidade Comprada por Mês",
    type: "bar" as "bar",
    xKey: "mes",
    yKey: "quantidade_total",
    status: "statusKey14",
  },
  {
    id: "grafico15",
    endpoint: "http://127.0.0.1:5000/api/grafico15",
    title: "Distribuição dos Canais de Venda",
    type: "pie" as "pie",
    xKey: "canal_venda",
    yKey: "contagem",
    status: "statusKey15",
  },
  {
    id: "grafico16",
    endpoint: "http://127.0.0.1:5000/api/grafico16",
    title: "Quantidade Comprada por Tipo de Envio",
    type: "bar" as "bar",
    xKey: "tipo_envio",
    yKey: "quantidade_total",
    status: "statusKey16",
  },
  {
    id: "grafico17",
    endpoint: "http://127.0.0.1:5000/api/grafico17",
    title: "Valor Total por Status de Entrega",
    type: "bar" as "bar",
    xKey: "status_entrega",
    yKey: "valor_total_venda",
    status: "statusKey17",
  },
  {
    id: "grafico18",
    endpoint: "http://127.0.0.1:5000/api/grafico18",
    title: "Quantidade de Vendas por Status de Entrega",
    type: "bar" as "bar",
    xKey: "status_entrega",
    yKey: "contagem",
    status: "statusKey18",
  },
  {
    id: "grafico19",
    endpoint: "http://127.0.0.1:5000/api/grafico19",
    title: "Comparação de Valor de Venda por Canal de Venda",
    type: "bar" as "bar",
    xKey: "canal_venda",
    yKey: "valor_total_venda",
    status: "statusKey19",
  },
  {
    id: "grafico20",
    endpoint: "http://127.0.0.1:5000/api/grafico20",
    title: "Valor de Venda por Estado de Envio",
    type: "bar" as "bar",
    xKey: "estado_envio",
    yKey: "valor_total_venda",
    status: "statusKey20",
  },
];