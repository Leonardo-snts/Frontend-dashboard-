import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

interface CityData {
    'cidade do envio': string;
    'estado do envio': string;
    'pais do envio': string;
    'quantidade comprada': number;
    'latitude': number;
    'longitude': number;
}

interface CountryData {
    country: string;
    'quantidade comprada': number;
}

const Grafico21: React.FC = () => {
    const [cityData, setCityData] = useState<CityData[]>([]);
    const [countryData, setCountryData] = useState<CountryData[]>([]);
    const [viewMode, setViewMode] = useState<'cities' | 'countries'>('cities');

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/grafico21')
            .then((response) => {
                setCityData(response.data.cities);
                setCountryData(response.data.countries);
            })
            .catch((error) => {
                console.error("Error fetching sales heatmap data:", error);
            });
    }, []);

    const data = viewMode === 'cities' ? [{
        type: 'scattergeo',
        locationmode: 'ISO-3',
        lon: cityData.map(d => d.longitude),
        lat: cityData.map(d => d.latitude),
        text: cityData.map(d => `${d['cidade do envio']}: ${d['quantidade comprada']} vendas`),
        marker: {
            size: 15,
            color: cityData.map(d => d['quantidade comprada']),
            colorscale: 'Viridis',
            colorbar: { title: "Vendas" },
            opacity: 0.7
        }
    }] : [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: countryData.map(d => d.country),
        z: countryData.map(d => d['quantidade comprada']),
        text: countryData.map(d => `${d.country}: ${d['quantidade comprada']} vendas`),
        colorscale: 'YlOrRd',
        colorbar: { title: "Vendas" }
    }];

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex mb-4 space-x-4">
                <button 
                    onClick={() => setViewMode('cities')} 
                    className={`px-4 py-2 rounded-lg text-white ${viewMode === 'cities' ? 'bg-blue-500' : 'bg-gray-400'}`}
                >
                    Visualizar por Cidades
                </button>
                <button 
                    onClick={() => setViewMode('countries')} 
                    className={`px-4 py-2 rounded-lg text-white ${viewMode === 'countries' ? 'bg-blue-500' : 'bg-gray-400'}`}
                >
                    Visualizar por Países
                </button>
            </div>
            <Plot
                data={data}
                layout={{
                    title: 'Mapa de Calor de Vendas',
                    geo: {
                        scope: 'world',
                        showland: true,
                        landcolor: 'rgb(217, 217, 217)',
                        countrycolor: 'rgb(255, 255, 255)',
                        lakecolor: 'rgb(173, 216, 230)',
                        showlakes: true,
                    }
                }}
                config={{ responsive: true }}
                className="w-full h-[500px]"
            />
        </div>
    );
};

export default Grafico21;
