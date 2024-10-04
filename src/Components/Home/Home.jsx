import React, { useState } from "react";
import Logo from "../../Assets/logo.svg";
import HomeIcon from "../../Assets/home-icon.png";
import DashboardIcon from "../../Assets/dashboard-icon.png";
import MoneyIcon from "../../Assets/money-icon.png";
import SearchIcon from "../../Assets/search-icon.png";
import { CircularProgressbar } from "react-circular-progressbar";
import { LineChart, Line, Tooltip } from "recharts";
import "./Home.css";
import Profile from "../../Assets/profile-icon.png";


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

  const [workData, setWorkData] = useState([
    { name: "Day 1", uploads: 5 },
    { name: "Day 2", uploads: 15 },
    { name: "Day 3", uploads: 10 },
    { name: "Day 4", uploads: 25 },
    { name: "Day 5", uploads: 20 },
  ]);

  const totalWorkUploaded = 70;
  const maxUploads = 100;

  return (
    <div className="home-container">
      <div className="home-sidebar">
        <img src={Logo} alt="logo" />
        <div className="icons">
          <img
            src={HomeIcon}
            alt="home"
            onClick={() => handleIconClick("home")}
          />
          <img
            src={DashboardIcon}
            alt="dashboard"
            onClick={() => handleIconClick("dashboard")}
          />
          <img
            src={MoneyIcon}
            alt="money"
            onClick={() => handleIconClick("money")}
          />
        </div>
      </div>
      <div className="home-middle-container">
        <div className="heading">
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
            <div className="total-task">
              <div style={{ width: "150px", height: "150px" }}>
                <CircularProgressbar
                  value={(totalWorkUploaded / maxUploads) * 100}
                  text={`${totalWorkUploaded} / ${maxUploads}`}
                />
              </div>
              <LineChart
                width={150}
                height={100}
                data={workData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <Tooltip />
                <Line type="monotone" dataKey="uploads" activeDot={{ r: 8 }} />
              </LineChart>
              <p> Last Updated <span> Today </span></p>
            </div>
          </div>
        </div>

        {/* Middle container content */}
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
