import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const BudgetManagement = () => {
    const [initialBudget, setInitialBudget] = useState(10000); // Replace with your initial budget value
    const [expenses, setExpenses] = useState(3000); // Replace with your expenses value
    const [costOfCompletedTasks, setCostOfCompletedTasks] = useState(5000); // Replace with your completed tasks value
  
    // Calculate remaining budget and budget deviation
    const remainingBudget = initialBudget - expenses;
    const budgetDeviation = initialBudget - (expenses + costOfCompletedTasks);
  
    // Pie chart data
    const pieChartData = {
      labels: ['Initial Budget', 'Expenses', 'Remaining Budget', 'Cost of Completed Tasks'],
      datasets: [
        {
          data: [initialBudget, expenses, remainingBudget, costOfCompletedTasks],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        },
      ],
    };
  
    const options = {
      legend: {
        display: true,
        position: 'right',
      },
    };
  
    return (
      <div>
        <h1>Budget Management</h1>
  
        {/* Additional text-based information */}
        <p style={{color:"#FF6384"}}>Initial Budget: ${initialBudget}</p>
        <p style={{color:"#36A2EB"}}>Expenses: ${expenses}</p>
        <p style={{color:"#FFCE56"}}>Remaining Budget: ${remainingBudget}</p>
        <p style={{color:"#4CAF50"}}>Cost of Completed Tasks: ${costOfCompletedTasks}</p>
        <p >Budget Deviation: ${budgetDeviation}</p>
  
        {/* Pie chart */}
        <Pie data={pieChartData} options={options} />
      </div>
    );
};

export default BudgetManagement;
