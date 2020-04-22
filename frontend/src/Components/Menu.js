import React from "react";
import userIcon from "../assets/icons/moroccan.png";

class Menu extends React.Component {

  constructor() {

    super();

      this.state = {
        pfmenu: 'menu_close'
      }

      this.openPfmenu = this.openPfmenu.bind(this);
  }

  onLogout() {
    localStorage.setItem("session_user", null);
    localStorage.setItem("session_user_id", null);
    localStorage.setItem("sessionApp", false);
    window.location.href = "/";
  }

  openPfmenu() {
    console.log(this.state.pfmenu)
    if(this.state.pfmenu == 'menu_close') {
      this.setState({ pfmenu: 'open' });
    }else{
      this.setState({ pfmenu: 'menu_close' });
    }
  }

  render(){
    let username = window.localStorage.getItem("session_user");
    let userimg = window.localStorage.getItem("session_user_img");
  
    let userPrifile = userimg == "false" ? userIcon : userimg;
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light col-md-12">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i class="fa fa-2x fa-bell" aria-hidden="true" />
            </a>
            <div className="pop-win" />
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              {username} <span className="sr-only">(current)</span>
            </a>
          </li>
          <li onClick={this.openPfmenu} className={ `${this.state.pfmenu} nav-item` }>
            <a
              className="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img width="32" height="32" src={userPrifile} />
            </a>
            <div className="profile-menu">
              <ul>
                <li>
                  <a href="/account/profile">My account</a>
                </li>
                <li>
                  <a href="#"
                    onClick={() => this.onLogout()}
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <i class="fa fa-sign-in" aria-hidden="true" /> Log out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
