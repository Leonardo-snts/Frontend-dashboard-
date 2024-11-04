import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

type ChartConfig = {
    id: string;
    endpoint: string;
    title: string;
    type: 'bar' | 'pie' | 'line' | 'scatter';
    xKey: string;
    yKey: string;
};

type ChartData = Record<string, any>[];

interface ChartProps {
    config: ChartConfig;
}

const DynamicChart: React.FC<ChartProps> = ({ config }) => {
    const [data, setData] = useState<ChartData>([]);

    useEffect(() => {
        axios.get(config.endpoint)
            .then((response) => setData(response.data))
            .catch((error) => console.error("Erro ao carregar os dados:", error));
    }, [config.endpoint]);

    const getDataForChart = () => {
        if (config.type === 'pie') {
            return [
                {
                    labels: data.map(item => item[config.xKey]), // Rótulos para o gráfico de pizza
                    values: data.map(item => item[config.yKey]), // Valores para o gráfico de pizza
                    type: 'pie',
                }
            ];
        } else {
            return [
                {
                    x: data.map(item => item[config.xKey]),
                    y: data.map(item => item[config.yKey]),
                    type: config.type,
                    mode: config.type === 'scatter' ? 'markers' : undefined,
                    marker: { color: 'blue' },
                }
            ];
        }
    };

    return (
        <div>
            <Plot
                data={getDataForChart()}
                layout={{ title: config.title, width: 600, height: 400 }}
            />
        </div>
    );
};

export default DynamicChart;
