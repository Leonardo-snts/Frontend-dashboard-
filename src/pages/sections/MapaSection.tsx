import React from 'react';
import { chartConfigs } from '../../services/chartConfig'; // Importando as configurações dos gráficos
import ChartRenderer from '../../services/ChartRenderer';// Importando o renderizador de gráficos
import Grafico21 from '../../components/Grafico21';

const MapaSection: React.FC = () => {
    // IDs dos gráficos que você deseja renderizar
    const allowedChartIds = ["grafico11", "grafico20"];

    return (
        <div> {/* Adicionando uma classe para estilo */}
            <h1>Dashboard de Mapa</h1>
            {chartConfigs
                .filter((config) => allowedChartIds.includes(config.id)) // Filtrando pelos IDs específicos
                .map((config) => (
                    <ChartRenderer key={config.id} config={config} />
                ))}
            <Grafico21 />
        </div>
    );
};

export default MapaSection;
