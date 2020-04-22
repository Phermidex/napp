import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Navbar from "./Components/Menu";
import Side from "./Components/Sidebar";
import "./styles.css";
import jokerlogo from "./joker.jpg";
import Advanced from "./Advanced.js";
import Main from "./Route/Main";
import Pos from "./Route/Pos";
import Appkeys from "./Route/AppKeys";
import ConfigPage from "./Route/Config";
import Login from "./Route/Login";
import Profile from "./Route/Profile";
//import {BASEURL, APIConectionOne} from "dotenv";


require('dotenv').config();

//const base_url = BASEURL;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      joke: null,
      tab: false,
      isFetchingJoke: false,
      current: "main",
      username: null,
      password: null,
      message: null,
      message_style: null,
      login: false
    };

    this.onTelljoke = this.onTelljoke.bind(this);
    this.AdvanceTab = this.AdvanceTab.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onUserchange = this.onUserchange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  componentDidMount() {
    console.log(`hola esto esss: ${process.env.REACT_APP_BASE_URL}`);
  }

  passencrypt(password) {
    let encode = new Buffer(password);
    return encode.toString("base64");
  }

  renderRedirect = () => {
    return <Redirect to="/" />;
  };

  onLogin(event) {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      fetch(
        `${process.env.REACT_APP_API_url_one}/users/${this.state.username}/${this.passencrypt(
          this.state.password
        )}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      )
        .then(response => response.json())
        .then(json => {
          // console.log(json[0].validated);
          if (json[0].validated === "TRUE") {
            this.setState({
              message: "welcome loading your session await please...",
              message_style: "alert alert-success"
            });

            localStorage.setItem("session_user", json[0].username);
            localStorage.setItem("session_user_id", json[0].id_users);
            localStorage.setItem("session_user_img", json[0].img_uri);
            localStorage.setItem("sessionApp", true);
              this.setState({ login: true });
          } else {
            localStorage.setItem("session_user", null);
            localStorage.setItem("session_user_id", null);
            localStorage.setItem("session_user_img", null);
            localStorage.setItem("sessionApp", false);
            this.setState({
              message: "Username or Password incorrect!",
              message_style: "alert alert-danger"
            });
            this.setState({ login: false });
          }
        });
    } else {
      this.setState({
        message: "Username or Password incorrect or all inputs are empty!",
        message_style: "alert alert-danger"
      });
    }
  }

  onUserchange(event) {
    this.setState({ username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  componentDidMount() {
    this.fecthjoke();
  }

  onRedirection(url = "/") {
    //return <Redirect to={url} />;
  }


  fecthjoke() {
    this.setState({ isFecthingJoke: true });
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          joke: json.joke,
          isFecthingJoke: false
        });
      });
  }

  onTelljoke() {
    this.fecthjoke();
  }

  onChangestateCurrent(nw) {
    this.setState({ current: nw });
  }

  AdvanceTab() {
    if (this.state.tab) {
      this.setState({ tab: false });
    } else {
      this.setState({ tab: true });
    }
  }

  render() {

    if (this.state.login == true) {
        console.log(`LOgin state is ${this.state.login}`);
        window.location.href = "/";
    }

    return (
      <Router>
          <Switch>
          <Route path="/register">
              <div className="row login">
                <Login
                  onLogin={this.onLogin}
                  onUserchange={this.onUserchange}
                  onPasswordChange={this.onPasswordChange}
                  message={this.state.message}
                  message_style={this.state.message_style}
                />
              </div>
            </Route>
            <Route path="/login">
              <div className="row login">
                <Login
                  onLogin={this.onLogin}
                  onUserchange={this.onUserchange}
                  onPasswordChange={this.onPasswordChange}
                  message={this.state.message}
                  message_style={this.state.message_style}
                />
              </div>
            </Route>
            <Route path="/store/apps">
              <div className="row pos">
                <Navbar AdvanceTab={this.AdvanceTab} />
                <Side />
                <Appkeys />
              </div>
            </Route>
            <Route path="/systems/appkeys">
              <div className="row cash">
                <Navbar AdvanceTab={this.AdvanceTab} />
                <Side />
                <Appkeys />
              </div>
            </Route>
            <Route path="/systems/config">
              <div className="row cash">
                <Navbar AdvanceTab={this.AdvanceTab} />
                <Side />
                <ConfigPage />
              </div>
            </Route>
            <Route path="/account/profile">
              <div className="row main">
                <Navbar AdvanceTab={this.AdvanceTab} />
                <Side />
                <Profile />
              </div>
            </Route>
            <Route path="/">
              <div className="row main">
                <Navbar AdvanceTab={this.AdvanceTab} />
                <Side />
                <Main />
              </div>
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
