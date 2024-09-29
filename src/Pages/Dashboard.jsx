import React from "react";
import {useOutletContext } from "react-router-dom";
const Dashboard = ()=>{
    const{userName} = useOutletContext();
    return(
        <div>
        <h1>Welcome, {userName}! Explore Family Management System</h1>
        </div>
    );
;}
export default Dashboard;