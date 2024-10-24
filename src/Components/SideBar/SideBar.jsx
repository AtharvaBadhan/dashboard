import { LuMessagesSquare } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import "./SideBar.css";
import Toggle from "../../Assets/navbar-logo.svg";
import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { PiSignOutBold } from "react-icons/pi";
import { MdQueryStats } from "react-icons/md";
import Logo from "../../Assets/logo.svg";
import { FaRegBookmark } from "react-icons/fa6";
import { LuFiles } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import Profile from "../../Assets/profile-img.png";
import { BiMessageRounded } from "react-icons/bi";

export default function SideBar() {
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
      if (bodypd) bodypd.classList.toggle("body-pd");
      if (headerpd) headerpd.classList.toggle("body-pd");
      if (logo) logo.classList.toggle("active");
      if (content) content.classList.toggle("content");
    };

    if (toggle) {
      toggle.addEventListener("click", showNavbar);
    }

    return () => {
      if (toggle) {
        toggle.removeEventListener("click", showNavbar);
      }
    };
  }, []);

  useEffect(() => {
    const linkColor = document.querySelectorAll(".nav_link");

    const colorLink = function () {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    };

    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    return () => {
      linkColor.forEach((l) => l.removeEventListener("click", colorLink));
    };
  }, []);

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
                {" "}
                <IoSearchOutline />{" "}
              </button>
            </form>
          </div>
          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
              <li className="nav-item dropdown">
                <a className="nav-link nav-icon" href="#">
                  <IoMdNotificationsOutline className="side-icons" />
                  <span className="badge bg-primary badge-number">4</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link nav-icon" href="#">
                  <BiMessageRounded className="side-icons" />
                  <span className="badge bg-danger badge-number">5</span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <FiMessageSquare className="side-icons" />
                  <span class="badge bg-success badge-number">3</span>
                </a>

                {/* <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                  <li class="dropdown-header">
                    You have 3 new messages
                    <a href="#">
                      <span class="badge rounded-pill bg-primary p-2 ms-2">
                        View all
                      </span>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li class="message-item">
                    <a href="#">
                      <img
                        src="assets/img/messages-1.jpg"
                        alt=""
                        class="rounded-circle"
                      />
                      <div>
                        <h4>Maria Hudson</h4>
                        <p>
                          Velit asperiores et ducimus soluta repudiandae labore
                          officia est ut...
                        </p>
                        <p>4 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li class="message-item">
                    <a href="#">
                      <img
                        src="assets/img/messages-2.jpg"
                        alt=""
                        class="rounded-circle"
                      />
                      <div>
                        <h4>Anna Nelson</h4>
                        <p>
                          Velit asperiores et ducimus soluta repudiandae labore
                          officia est ut...
                        </p>
                        <p>6 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li class="message-item">
                    <a href="#">
                      <img
                        src="assets/img/messages-3.jpg"
                        alt=""
                        class="rounded-circle"
                      />
                      <div>
                        <h4>David Muldon</h4>
                        <p>
                          Velit asperiores et ducimus soluta repudiandae labore
                          officia est ut...
                        </p>
                        <p>8 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li class="dropdown-footer">
                    <a href="#">Show all messages</a>
                  </li>
                </ul> */}
              </li>
              <li class="nav-item dropdown pe-3">
                <a
                  class="nav-link nav-profile d-flex align-items-center pe-0"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <img src={Profile} alt="Profile" class="rounded-circle" />
                  <span class="d-none d-md-block dropdown-toggle ps-2">
                    K. Anderson
                  </span>
                </a>

                {/* <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li class="dropdown-header">
              <h6>Kevin Anderson</h6>
              <span>Web Designer</span>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i class="bi bi-person"></i>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i class="bi bi-gear"></i>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                <i class="bi bi-question-circle"></i>
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <i class="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
            </li>

          </ul> */}
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
                <Link to="/home" className="nav_link active">
                  <TbLayoutDashboard className="side-icons" />
                  <span className="nav_name" id="content">
                    Dashboard
                  </span>
                </Link>
              </div>
              <div className="nav_option">
                <Link to="/users" className="nav_link">
                  <FaRegUser className="side-icons" />
                  <span className="nav_name">Users</span>
                </Link>
              </div>
              <div className="nav_option">
                <Link to="/messages" className="nav_link">
                  <LuMessagesSquare className="side-icons" />
                  <span className="nav_name">Messages</span>
                </Link>
              </div>
              <div className="nav_option">
                <Link to="/bookmark" className="nav_link">
                  <FaRegBookmark className="side-icons" />
                  <span className="nav_name">Bookmark</span>
                </Link>
              </div>
              <div className="nav_option">
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
