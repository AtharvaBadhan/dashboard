import React, { useState } from "react";
import Chart from "react-apexcharts";
import Logo from "../../Assets/logo.svg";
import HomeIcon from "../../Assets/home-icon.png";
import DashboardIcon from "../../Assets/dashboard-icon.png";
import MoneyIcon from "../../Assets/money-icon.png";
import SearchIcon from "../../Assets/search-icon.png";
import "./Home.css";
import Profile from "../../Assets/profile-icon.png";
import SideBar from '../SideBar/SideBar';

export default function Home() {
  const [selectedIcon, setSelectedIcon] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const [projects, setProjects] = useState([
    { name: "Project 1", progress: 30 },
    { name: "Project 2", progress: 60 },
    { name: "Project 3", progress: 80 },
  ]);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
  };

  const totalProgress = projects.reduce((total, project) => total + project.progress, 0) / projects.length;

  const chartOptions = {
    chart: {
      type: "radialBar",
      height: 275,
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total Progress",
            formatter: () => Math.round(totalProgress), // Display the average project progress
          },
        },
      },
    },
    labels: ["Total Progress"], // Single label for total progress
  };

  const chartSeries = [totalProgress]; // Only display the total progress

  return (
    <div className="home-container">
      
      <div className="home-sidebar">
        {/* <img src={Logo} alt="logo" />
        <div className="icons">
          <img src={HomeIcon} alt="home" onClick={() => handleIconClick("home")} />
          <img src={DashboardIcon} alt="dashboard" onClick={() => handleIconClick("dashboard")} />
          <img src={MoneyIcon} alt="money" onClick={() => handleIconClick("money")} />
        </div> */}
       <SideBar />
      </div>
      <div className="home-middle-container">
        <div className="heading1">
          <h1>Dashboard</h1>
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <div className="search-input-container">
              <img src={SearchIcon} alt="search" className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </form>
        </div>
        <div className="project-details">
          <div className="project-name">
            <h3>Ongoing Projects</h3>
            {projects.map((project, index) => (
              <div className="projects" key={index}>
                <p>{project.name}</p>
                <div className="progess">
                  <div
                    className="progress-bar"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                  <p>{project.progress}%</p>
                </div>
              </div>
            ))}
          </div>

          <div className="project-deadline">
            <div className="home-deadline">
              <div className="deadline">
                <div className="min-dead">
                  <h2>30</h2>
                  <p>+3</p>
                </div>
                <h3>Deadlines</h3>
              </div>
              <div className="deadline">
                <div className="min-dead">
                  <h2>30</h2>
                  <p>+3</p>
                </div>
                <h3>Deadlines</h3>
              </div>
            </div>
            {/* Radial Bar Chart */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  
                  <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="radialBar"
                    height={275}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-right-container">
        <div className="header">
          <div className="profile">
            <img src={Profile} alt="profile" />
          </div>
          <h2>Unknown Person</h2>
        </div>
        {/* Right container content */}
      </div>
    </div>
  );
}
