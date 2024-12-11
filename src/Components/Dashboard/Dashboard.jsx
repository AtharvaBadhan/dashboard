import "./Dashboard.css";
import React, { useState, useEffect, useRef } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { Calendar } from 'primereact/calendar';
import { useSelector } from "react-redux";


export default function Dashboard() {
  const [selectedIcon, setSelectedIcon] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const reportsChartRef = useRef(null); // Create a ref for the chart container
  const demoState= useSelector(state => state.DemoState);
  
  useEffect(() => {
    const add = document.getElementById("home-container");
    if(demoState.navbar) {
      add.classList.add("home-open")
    }else {
      add.classList.remove("home-open")
    }
    console.log(demoState);
  }, [demoState]);

  const [projects, setProjects] = useState([
    { name: "Project 1", progress: 30 },
    { name: "Project 2", progress: 100 },
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

  const totalProgress =
    projects.reduce((total, project) => total + project.progress, 0) /
    projects.length;

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
            color: "#ffffff",
            formatter: () => Math.round(totalProgress),
          },
        },
      },
    },
    color: "#ffffff",
    labels: ["Total Progress"],
  };

  const chartSeries = [totalProgress];

  useEffect(() => {
    // Ensure the chart ref is set
    if (reportsChartRef.current) {
      const chart = new ApexCharts(reportsChartRef.current, {
        series: [
          {
            name: "Sales",
            data: [31, 40, 28, 51, 42, 82, 56],
          },
          {
            name: "Revenue",
            data: [11, 32, 45, 32, 34, 52, 41],
          },
          {
            name: "Customers",
            data: [15, 11, 32, 18, 9, 24, 11],
          },
        ],

        chart: {
          height: 350,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        markers: {
          size: 4,
        },
        colors: ["#4154f1", "#2eca6a", "#ff771d"],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.3,
            opacityTo: 0.4,
            stops: [0, 90, 100],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        yaxis: {
          labels: {
            style: {
              colors: "#ffffff", // Change x-axis label color
              fontSize: "12px", // Change font size
            },
          },
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
          labels: {
            style: {
              colors: "#ffffff", // Change x-axis label color
              fontSize: "12px", // Change font size
            },
          },
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        plotOptions: {
          area: {
            dataLabels: {
              enabled: true,
              style: {
                colors: ["#4154f1", "#2eca6a", "#ff771d"], // Set colors for each series
                fontSize: "16px",
                fontWeight: 600,
              },
            },
          },
        },
      });

      chart.render();

      // Cleanup to destroy the chart on component unmount
      return () => {
        chart.destroy();
      };
    }
  }, [reportsChartRef]);

  return (
      
    <div className="home-container" id="home-container">
      <div className="home-middle-container">
        <div className="inner">
          <h4>Dashboard</h4>
        </div>
        <div className="project-details">
          <div className="project-task col-lg-5">
            <div className='project-newdiv'>
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
            </div>
            <div className="card-component-1">
              <div className="home-deadline">
                <div className="deadline">
                  <div className="min-dead">
                    <h2 className="no-of-days-1">30</h2>
                    <p>+3 Days</p>
                  </div>
                  <h5>Deadlines</h5>
                </div>
                <div className="deadline">
                  <div className="min-dead">
                    <h2 className="no-of-days-2">30</h2>
                    <p>+3 Days</p>
                  </div>
                  <h5>Deadlines</h5>
                </div>
                <div className="deadline">
                  <div className="min-dead">
                    <h2 className="no-of-days-3">30</h2>
                    <p>+3 Days</p>
                  </div>
                  <h5>Deadlines</h5>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body text-center">
                    <h5>Total Task Completed</h5>
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
          <div className="project-deadline col-lg-7">
            
            <div className="messeges">
              <div className="datepicker">
                <div className="datepicker-top">
                  <div className="btn-group">
                    <button className="tag">Today</button>
                    <button className="tag">Tomorrow</button>
                    <button className="tag">In 2 days</button>
                  </div>
                  <div className="month-selector">
                    <button className="arrow">
                      <FaChevronLeft />
                    </button>
                    <span className="month-name">December 2020</span>
                    <button className="arrow">
                      <FaChevronRight />
                    </button>
                  </div>
                  
                </div>
                <div className="datepicker-calendar">
                  <span className="day">Mo</span>
                  <span className="day">Tu</span>
                  <span className="day">We</span>
                  <span className="day">Th</span>
                  <span className="day">Fr</span>
                  <span className="day">Sa</span>
                  <span className="day">Su</span>
                  <button className="date faded">30</button>
                  <button className="date">1</button>
                  <button className="date">2</button>
                  <button className="date">3</button>
                  <button className="date">4</button>
                  <button className="date">5</button>
                  <button className="date">6</button>
                  <button className="date">7</button>
                  <button className="date">8</button>
                  <button className="date current-day">9</button>
                  <button className="date">10</button>
                  <button className="date">11</button>
                  <button className="date">12</button>
                  <button className="date">13</button>
                  <button className="date">14</button>
                  <button className="date">15</button>
                  <button className="date">16</button>
                  <button className="date">17</button>
                  <button className="date">18</button>
                  <button className="date">19</button>
                  <button className="date">20</button>
                  <button className="date">21</button>
                  <button className="date">22</button>
                  <button className="date">23</button>
                  <button className="date">24</button>
                  <button className="date">25</button>
                  <button className="date">26</button>
                  <button className="date">27</button>
                  <button className="date">28</button>
                  <button className="date">29</button>
                  <button className="date">30</button>
                  <button className="date">31</button>
                  <button className="date faded">1</button>
                  <button className="date faded">2</button>
                  <button className="date faded">3</button>
                </div>
              </div>
              <div className="card task-card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <BsThreeDots />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="card-body">
                  <h5 className="card-title">
                    Tasks |<span> Today's Task</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="card h-100">
              <div className=" card-body ">
                <h5 className="card-title">Upcoming Projects</h5>
                <table className="table1 table-bordered">
                  <thead className='p-5'>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Team Assigned</th>
                      <th scope="col">Time</th>
                      <th scope="col">Start Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Project 1</td>
                      <td>Design</td>
                      <td>28 days</td>
                      <td>2016-05-25</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Project 2</td>
                      <td>Developement</td>
                      <td>35 days</td>
                      <td>2014-12-05</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Project 3</td>
                      <td>Finance</td>
                      <td>45 days</td>
                      <td>2011-08-12</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Project 4</td>
                      <td>HR</td>
                      <td>34 days</td>
                      <td>2012-06-11</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Project 5</td>
                      <td>Marketing</td>
                      <td>47 days</td>
                      <td>2011-04-19</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 card-graph">
          <div className="card">
            <div className="filter">
              <a className="icon" href="#" data-bs-toggle="dropdown">
                <BsThreeDots />
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Today
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Month
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Year
                  </a>
                </li>
              </ul>
            </div>

            <div className="card-body">
              <h5 className="card-title">
                Reports /<span> Today</span>
              </h5>

              <div ref={reportsChartRef}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
  );
}
