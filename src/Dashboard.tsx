import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

interface Expense {
    Category: string;
    Stock: number;
}

const Dashboard: React.FC = () => {
    const [amazonSales, setAmazonSales] = useState([]);
    const [warehouseComparison, setWarehouseComparison] = useState([]);
    const [expenses, setExpenses] = useState<Expense[]>([]);  // Define o tipo

    const fetchData = async () => {
        try {
            const salesResponse = await axios.get('http://localhost:5000/api/amazon-sales');
            setAmazonSales(salesResponse.data);

            const warehouseResponse = await axios.get('http://localhost:5000/api/warehouse-comparison');
            setWarehouseComparison(warehouseResponse.data);

            const expensesResponse = await axios.get('http://localhost:5000/api/expenses');
            setExpenses(expensesResponse.data);
        } catch (error) {
            console.error("Erro ao buscar dados", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const amazonSalesChart = {
        x: amazonSales.map(sale => sale['ship-state']),
        y: amazonSales.map(sale => sale['Amount']),
        type: 'bar',
        marker: { color: 'blue' }
    };

    const warehouseComparisonChart = {
        x: warehouseComparison.map(item => item['Sku']),
        y: warehouseComparison.map(item => item['Amazon MRP']),
        type: 'bar',
        marker: { color: 'orange' }
    };

    return (
        <div>
            <h2>Amazon Sales by State</h2>
            <Plot
                data={[amazonSalesChart]}
                layout={{ title: 'Vendas da Amazon por Estado' }}
            />

            <h2>Comparison of Marketplace Prices</h2>
            <Plot
                data={[warehouseComparisonChart]}
                layout={{ title: 'Comparação de Preços por Marketplace' }}
            />

            <h2>Expenses by Category</h2>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.Category}>
                        {expense.Category}: {expense.Stock} items in stock
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
