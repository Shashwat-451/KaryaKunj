import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import { FaEdit } from "react-icons/fa";
import "../css/BudgetManagement.css"
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
        label: '55',
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
      width: 100, // Set width for this chart instance
      height: 100 // Set height for this chart instance
     
    },
  };

  // const options = {
  //   responsive: false, // Disable responsiveness
  //   maintainAspectRatio: false, // Disable maintaining aspect ratio
  //   width: 100, // Set width for this chart instance
  //   height: 150, // Set height for this chart instance
  // };

  return (
    <div className='piemain'>
      <h1 style={{textAlign:"center",color:"white",fontFamily:"georgia",fontWeight:"bold",padding:"40px"}}>Budget Management</h1>
      <div className='alllabels'>
        <div className='labels'>
          <p style={{ color: "#FF6384" }}>Initial Budget </p><p style={{color:"white"}}>${initialBudget}</p>
        </div>
        <div className='labels'>
          <p style={{ color: "#36A2EB" }}>Expenses: </p><p style={{color:"white"}}>${expenses}</p>
        </div>
        <div className='labels'>
          <p style={{ color: "#FFCE56" }}>Remaining Budget: </p><p style={{color:"white"}}>${remainingBudget}</p>
        </div>
        <div className='labels'>
          <p style={{ color: "#4CAF50" }}>Cost of Completed Tasks: </p><p style={{color:"white"}}>${costOfCompletedTasks}</p>
        </div>
        <div className='labels'>
          <p style={{color:"orange"}}>Budget Deviation: </p><p style={{color:"white"}}>${budgetDeviation}</p>
        </div>
      </div>

      <div className="pie" style={{ width: '800px', height: '500px'}}>
        <Pie data={pieChartData} options={options} />
      </div>
      
    </div>
  );
};

export default BudgetManagement;
