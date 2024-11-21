import React from "react";
import './Home2.css';
import SideBar from '../SideBar/SideBar';
import Dashboard from '../Dashboard/Dashboard';

export default function Home(){
    return(
        <div className="home-container-banner">
            <SideBar />
            <Dashboard />
        </div>
    )
}