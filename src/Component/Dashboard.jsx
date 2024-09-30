import React from "react";
import './Dashboard.css';
import { useOutletContext } from "react-router-dom"; 

const Dashboard = () => {
  const { userName } = useOutletContext();
  return (
   
      <div className="container-fluid  vh-100 d-flex justify-content-center align-items-center ">
        <div className="welcome-card">
          <h1>Welcome, {userName}! Explore Family Management System</h1>
        </div>
      </div>
  );
};

export default Dashboard;
