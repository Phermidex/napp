import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sidebar = () => {
  function onLogout() {
    localStorage.setItem("session_user", null);
    localStorage.setItem("session_user_id", null);
    localStorage.setItem("sessionApp", false);
    window.location.href = "/";
  }
  return (
    <div className="side-bar">
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i class="dash-icon" aria-hidden="true" />
            </Link>
            <div class="title-pop">
              <span>Dashboard</span>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/store/apps">
              <i class="fa fa-2x fa-rocket" aria-hidden="true" />
            </Link>
            <div class="title-pop">
              <span>Apps manager</span>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/systems/appkeys">
              <i class="fa fa-2x fa-key" aria-hidden="true" />
            </Link>
            <div class="title-pop">
              <span>App keys</span>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/systems/config">
              <i class="fa fa-2x fa-cog" aria-hidden="true" />
            </Link>
            <div class="title-pop">
              <span>Settings</span>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={() => onLogout()}>
              <i class="fa fa-2x fa-sign-in" aria-hidden="true" />
            </Link>
            <div class="title-pop">
              <span>Log out</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
