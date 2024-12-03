import React, { useState, useEffect } from "react";
import "./SideBar.css";
import Toggle from "../../Assets/navbar-logo.svg";
import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { PiSignOutBold } from "react-icons/pi";
import Logo from "../../Assets/logo.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import Profile from "../../Assets/profile-img.png";
import { BiMessageRounded } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { SlUserFollowing } from "react-icons/sl";
import { useDispatch } from "react-redux";
import * as demoAction from "../../Redux/Actions/DemoActions";
import { useSelector } from "react-redux";

export default function SideBar() {
  const [menuButton, setmenuButton] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State to control dark mode
  let dispatch = useDispatch();

  // Load dark mode setting from localStorage when the component is mounted
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark-mode");
    }
  }, []);

  // Toggle dark mode and save preference to localStorage
  const handleDarkModeToggle = () => {
    const newDarkModeState = !darkMode;
    setDarkMode(newDarkModeState);
     
    localStorage.setItem("darkMode", newDarkModeState.toString());
    // dispatch({ type: demoAction.UPDATE_THEMECHANGE, payload: !darkMode });
     
    if (newDarkModeState) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  useEffect(() => {
    const toggle = document.getElementById("header-toggle");
    const nav = document.getElementById("nav-bar");
    const bodypd = document.getElementById("body-pd");
    const headerpd = document.getElementById("header");
    const logo = document.getElementById("logo");
    const content = document.getElementById("content"); // Corrected typo here

    const showNavbar = () => {
      if (nav) nav.classList.toggle("show");
      if (toggle) toggle.classList.toggle("bx-x");
      // if (bodypd) bodypd.classList.toggle("body-pd");
      if (headerpd) headerpd.classList.toggle("body-pd");
      if (logo) logo.classList.toggle("active");
      if (content) content.classList.toggle("content");
      setmenuButton(!menuButton);
      dispatch({ type: demoAction.UPDATE_NAVBAR, payload: !menuButton });
    };

    if (toggle) {
      toggle.addEventListener("click", showNavbar);
    }

    return () => {
      if (toggle) {
        toggle.removeEventListener("click", showNavbar);
      }
    };
  }, [menuButton]);
  
  let handleChangePage = (a) => {
    let doc = document.querySelectorAll(".datalink");
    doc.forEach((e) => {
      e.classList.remove("active-1");
    });
    a.target.classList.add("active-1");
  };

  const demoState = useSelector((state) => state.DemoState);

  return (
    <div id="body-pd" className="body-className">
      <header className="header" id="header">
        <div className="header_toggle">
          <img src={Toggle} alt="toggle" id="header-toggle" />
        </div>
        <div className="navbar-search">
          <div className="search-bar">
            <form
              className="search-form d-flex align-items-center"
              method="POST"
              action="#"
            >
              <input
                type="text"
                name="query"
                placeholder="Search"
                title="Enter search keyword"
              />
              <button type="submit" title="Search">
                <IoSearchOutline />
              </button>
            </form>
          </div>
          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
              <div className="btn">
                {/* Dark mode toggle button */}
                <svg display="none">
	<symbol id="light" viewBox="0 0 24 24">
		<g stroke="currentColor" stroke-width="2" stroke-linecap="round">
			<line x1="12" y1="17" x2="12" y2="20" transform="rotate(0,12,12)" />
			<line x1="12" y1="17" x2="12" y2="20" transform="rotate(45,12,12)" />
			<line x1="12" y1="17" x2="12" y2="20" transform="rotate(90,12,12)" />
			<line x1="12" y1="17" x2="12" y2="20" transform="rotate(135,12,12)" />
			<line x1="12" y1="17" x2="12" y2="20" transform="rotate(180,12,12)" />
			<line x1="12" y1="17" x2="12" y2="20" transform="rotate(225,12,12)" />
			<line x1="12" y1="17" x2="12" y2="20" transform="rotate(270,12,12)" />
			<line x1="12" y1="17" x2="12" y2="20" transform="rotate(315,12,12)" />
		</g>
		<circle fill="currentColor" cx="12" cy="12" r="5" />
	</symbol>
	<symbol id="dark" viewBox="0 0 24 24">
		<path fill="currentColor" d="M15.1,14.9c-3-0.5-5.5-3-6-6C8.8,7.1,9.1,5.4,9.9,4c0.4-0.8-0.4-1.7-1.2-1.4C4.6,4,1.8,7.9,2,12.5c0.2,5.1,4.4,9.3,9.5,9.5c4.5,0.2,8.5-2.6,9.9-6.6c0.3-0.8-0.6-1.7-1.4-1.2C18.6,14.9,16.9,15.2,15.1,14.9z" />
	</symbol>
</svg>
                <label className="switch">
                  <input
                    className="switch__input"
                    type="checkbox"
                    role="switch"
                    checked={darkMode}  // This ensures the toggle reflects the current state
                    onChange={handleDarkModeToggle}
                  />
                  <span className="switch__inner"></span>
                  <span className="switch__inner-icons">
                    <svg
                      className="switch__icon"
                      width="24px"
                      height="24px"
                      aria-hidden="true"
                    >
                      <use href="#light" />
                    </svg>
                    <svg
                      className="switch__icon"
                      width="24px"
                      height="24px"
                      aria-hidden="true"
                    >
                      <use href="#dark" />
                    </svg>
                  </span>
                  <span className="switch__sr">Dark Mode</span>
                </label>

              </div>
              {/* Notification Icon with Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link nav-icon" href="#">
                  <IoMdNotificationsOutline className="side-icons" />
                  <span className="badge bg-primary badge-number">5</span>
                </a>

                <div className="dropdown-padding">
                  <div className="dropdown-menu dropdown-menu-custom dropdown-menu-end">
                    <div className="dropdown-header">
                      <h6>Notification</h6>
                    </div>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      Project added to our work logs.
                    </a>
                    <a href="#" className="dropdown-item">
                      Salary credited to your Account.
                    </a>
                    <a href="#" className="dropdown-item">
                      New follow request
                    </a>
                    <a href="#" className="dropdown-item">
                      New message from John
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      View all notifications
                    </a>
                  </div>
                </div>
              </li>

              {/* Message Icon with Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link nav-icon" href="#">
                  <BiMessageRounded className="side-icons" />
                  <span className="badge bg-danger badge-number">2</span>
                </a>

                <div className="dropdown-padding">
                  <div className="dropdown-menu dropdown-menu-custom dropdown-menu-end">
                    <div className="dropdown-header">
                      <h6>Messages</h6>
                    </div>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      Message from Maria
                    </a>
                    <a href="#" className="dropdown-item">
                      Message from Anna
                    </a>
                    <a href="#" className="dropdown-item">
                      Message from David
                    </a>
                    <a href="#" className="dropdown-item">
                      Message from Sophie
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      Show all messages
                    </a>
                  </div>
                </div>
              </li>

              {/* Profile Icon with Dropdown */}
              <li className="nav-item dropdown pe-3">
                <a
                  className="nav-link nav-profile d-flex align-items-center pe-0"
                  href="#"
                >
                  <img src={Profile} alt="Profile" className="rounded-circle" />
                  <span className="d-none d-md-block dropdown-toggle ps-2">
                    K. Anderson
                  </span>
                </a>

                <div className="dropdown-padding">
                  <div className="dropdown-menu dropdown-menu-custom dropdown-menu-end">
                    <div className="dropdown-header">
                      <h6>Kevin Anderson</h6>
                      <span>Web Designer</span>
                    </div>
                    <div className="dropdown-divider" />
                    <a href="users-profile.html" className="dropdown-item">
                      <i className="bi bi-person"></i> My Profile
                    </a>
                    <a href="account-settings.html" className="dropdown-item">
                      <i className="bi bi-gear"></i> Account Settings
                    </a>
                    <a href="pages-faq.html" className="dropdown-item">
                      <i className="bi bi-question-circle"></i> Need Help?
                    </a>
                    <div className="dropdown-divider" />
                    <a href="/" className="dropdown-item">
                      <i className="bi bi-box-arrow-right"></i> Sign Out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div className="navbar">
            <a href="#" className="nav_logo">
              <img src={Logo} className="logo-img" alt="Logo" id="logo" />
            </a>
            <div className="nav_list">
              <div className="nav_option">
                <Link
                  to="/home"
                  onClick={(i) => {
                    handleChangePage(i);
                  }}
                  className="nav_link active-1 datalink"
                >
                  <TbLayoutDashboard className="side-icons" />
                  <span className="nav_name" id="content">
                    Dashboard
                  </span>
                </Link>
              </div>
              <div className="nav_option">
                <Link
                  to="/users"
                  className="nav_link datalink"
                  onClick={(i) => {
                    handleChangePage(i);
                  }}
                >
                  <FaRegUser className="side-icons" />
                  <span className="nav_name">Users</span>
                </Link>
              </div>
              <div className="nav_option">
                <Link
                  to="/account"
                  className="nav_link datalink"
                  onClick={(i) => {
                    handleChangePage(i);
                  }}
                >
                  <BsBank className="side-icons" />
                  <span className="nav_name">Account</span>
                </Link>
              </div>
              <div className="nav_option">
                <Link
                  to="/attendance"
                  className="nav_link datalink"
                  onClick={(i) => {
                    handleChangePage(i);
                  }}
                >
                  <SlUserFollowing className="side-icons" />
                  <span className="nav_name">Attendance</span>
                </Link>
              </div>
            </div>
          </div>
          <Link to="/" className="nav_link">
            <PiSignOutBold className="side-icons" />
            <span className="nav_name">SignOut</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
