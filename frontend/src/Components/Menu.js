import React from "react";
import userIcon from "../assets/icons/moroccan.png";

const Menu = (props) => {
  function onLogout() {
    localStorage.setItem("session_user", null);
    localStorage.setItem("session_user_id", null);
    localStorage.setItem("sessionApp", false);
    window.location.href = "/";
  }

  let username = window.localStorage.getItem("session_user");
  let userimg = window.localStorage.getItem("session_user_img");

  let userPrifile = (userimg == "undefined" ? userIcon : userimg);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light col-md-12">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i class="fa fa-bell" aria-hidden="true" />
          </a>
          <div className="pop-win" />
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">
            { username } <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img width="32" src={userPrifile} />
          </a>
          <div className="profile-menu">
            <ul>
              <li>
                <a href="#">My account</a>
              </li>
              <li>
                <a href="#">profile</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="btn btn-link"
            onClick={() => onLogout()}
            tabindex="-1"
            aria-disabled="true"
          >
            <i class="fa fa-sign-in" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
