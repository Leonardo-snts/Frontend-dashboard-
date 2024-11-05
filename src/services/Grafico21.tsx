import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

const Grafico21: React.FC = () => {
    const [heatmapData, setHeatmapData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/grafico21');
                const data = response.data;

                setHeatmapData({
                    z: data.data,  // Matriz de dados
                    x: data.columns,  // Nomes das colunas
                    y: data.index,  // Nomes das linhas
                });
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Mapa de Calor com Plotly</h1>
            {heatmapData ? (
                <Plot
                    data={[
                        {
                            z: heatmapData.z,
                            x: heatmapData.x,
                            y: heatmapData.y,
                            type: 'heatmap',
                            colorscale: 'Viridis',
                        },
                    ]}
                    layout={{
                        title: 'Mapa de Calor',
                        xaxis: { title: 'Colunas' },
                        yaxis: { title: 'Linhas' },
                    }}
                />
            ) : (
                <p>Carregando dados...</p>
            )}
        </div>
    );
};

export default Grafico21;
