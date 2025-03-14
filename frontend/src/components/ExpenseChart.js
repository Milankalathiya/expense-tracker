import React, { useEffect, useState } from "react";
import { getExpenses } from "../services/apiService";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";

function ExpenseChart() {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        getExpenses().then((expenses) => {
            const categories = {};
            expenses.forEach((expense) => {
                categories[expense.category] = (categories[expense.category] || 0) + expense.amount;
            });

            setChartData({
                labels: Object.keys(categories),
                datasets: [
                    {
                        label: "Expense Distribution",
                        data: Object.values(categories),
                        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
                    },
                ],
            });
        });
    }, []);

    return (
        <div className="container mt-4">
            <h2>Expense Analytics</h2>
            <div className="chart-container">
                <Pie data={chartData} />
                <Bar data={chartData} />
            </div>
        </div>
    );
}

export default ExpenseChart;
