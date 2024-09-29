import React from "react";
import {useOutletContext } from "react-router-dom";
const Dashboard = ()=>{
    const { userName = 'Gabimaru' } = useOutletContext() || {};
    return(
        <div className="container3">
        <div className="welcome-card">
        <h1>Welcome, {userName}! Explore Family Management System</h1>
        </div>
        </div>
    );
;}
export default Dashboard;