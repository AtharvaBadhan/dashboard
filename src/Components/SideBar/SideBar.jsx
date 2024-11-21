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

export default function SideBar() {
  const [menuButton, setmenuButton] = useState(false);
  let dispatch = useDispatch();

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
  //Dropdown
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleDropdown = (type) => {
    if (type === "notification") setNotificationOpen(!notificationOpen);
    if (type === "message") setMessageOpen(!messageOpen);
    if (type === "profile") setProfileOpen(!profileOpen);
  };

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
              {/* Notification Icon with Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon"
                  href="#"
                  onClick={() => toggleDropdown("notification")}
                >
                  <IoMdNotificationsOutline className="side-icons" />
                  <span className="badge bg-primary badge-number">4</span>
                </a>
                {notificationOpen && (
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="#" className="dropdown-item">
                      New comment on your post
                    </a>
                    <a href="#" className="dropdown-item">
                      New like on your photo
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
                )}
              </li>

              {/* Message Icon with Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon"
                  href="#"
                  onClick={() => toggleDropdown("message")}
                >
                  <BiMessageRounded className="side-icons" />
                  <span className="badge bg-danger badge-number">5</span>
                </a>
                {messageOpen && (
                  <div className="dropdown-menu dropdown-menu-end">
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
                )}
              </li>

              {/* Profile Icon with Dropdown */}
              <li className="nav-item dropdown pe-3">
                <a
                  className="nav-link nav-profile d-flex align-items-center pe-0"
                  href="#"
                  onClick={() => toggleDropdown("profile")}
                >
                  <img src={Profile} alt="Profile" className="rounded-circle" />
                  <span className="d-none d-md-block dropdown-toggle ps-2">
                    K. Anderson
                  </span>
                </a>
                {profileOpen && (
                  <div className="dropdown-menu dropdown-menu-end">
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
                    <a href="#" className="dropdown-item">
                      <i className="bi bi-box-arrow-right"></i> Sign Out
                    </a>
                  </div>
                )}
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
              {/* <div className="nav_option">
                <Link to="/files" className="nav_link">
                  <LuFiles className="side-icons" />
                  <span className="nav_name">Files</span>
                </Link>
              </div>
              <div className="nav_option">
                <Link to="/stats" className="nav_link">
                  <MdQueryStats className="side-icons" />
                  <span className="nav_name">Stats</span>
                </Link>
              </div> */}
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
