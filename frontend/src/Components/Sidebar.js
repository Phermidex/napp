import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="side-bar">
            <nav>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to="/"><i class="dash-icon" aria-hidden="true"></i></Link>
                  <div class="title-pop">
                      <span>Dashboard</span>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pos"><i class="fa fa-2x fa-rocket" aria-hidden="true"></i></Link>
                  <div class="title-pop">
                      <span>Apps manager</span>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registercash"><i class="fa fa-2x fa-key" aria-hidden="true"></i></Link>
                  <div class="title-pop">
                      <span>App keys</span>
                  </div>
                  </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#"><i class="fa fa-2x fa-credit-card" aria-hidden="true"></i></Link>
                  <div class="title-pop">
                      <span>Payments</span>
                  </div>
                  </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#"><i class="async-icon" aria-hidden="true"></i></Link>
                  <div class="title-pop">
                      <span>Sync data</span>
                  </div>
                </li>
              </ul>
            </nav>
        </div>
    )
}

export default Sidebar;