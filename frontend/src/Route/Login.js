import React from "react";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";
import "../assets/login.css";
import ggicons from "../assets/icons/google-btn.png";
import ccimg from "../assets/icons/characteristics.png";
import Moment from "moment";

const responseGoogle = response => {
  console.log(response);

  const today = new Date();

  let data = {
    givenname: response.profileObj.givenName,
    familyname: response.profileObj.familyName,
    username: `${response.profileObj.givenName}-${Moment(today).format(
      "YYMMDDhmmss"
    )}`,
    email: response.profileObj.email,
    img_uri: response.profileObj.imageUrl,
    creation_date: today,
  };

  const url = "http://localhost:3002/auth/login/";

  console.log(data);
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(json => {
      if (json[0].validated == true) {
        localStorage.setItem("session_user", json[0].username);
        localStorage.setItem("session_user_id", json[0].id_users);
        localStorage.setItem("session_user_img", json[0].img_uri);
        localStorage.setItem("sessionApp", true);
        console.log(json[0].id_users);
        window.location.href = "/";
      }
    });
};

const Login = props => {
  if (localStorage.getItem("sessionApp") === "true") {
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  } else {
    return (
      <div className="card login">
        <div className="card-body">
          <div className="row">
            <div className="div-frame-adviced col">
              <div />  <img src={ccimg} /> {" "}
            </div>{" "}
            {" "}
            <div className="div-frame-login col">
              <h2>
                Notch App <br />  {" "}
              </h2>{" "}
              {" "}
              <form onSubmit={props.onLogin}>
                <div className="form-group">
                  <label> Username </label> {" "}
                  <input
                    onChange={props.onUserchange}
                    className="form-control"
                  />
                </div>{" "}
                {" "}
                <div className="form-group">
                  <label> Password </label> {" "}
                  <input
                    type="password"
                    onChange={props.onPasswordChange}
                    className="form-control"
                  />
                </div>{" "}
                {" "}
                <div className={props.message_style}>
                  {" "}  {props.message}  {" "}
                </div>{" "}
                {" "}
                <div className="form-group">
                  <label>
                    {" "}<input type="checkbox" /> Remenber me{" "}
                  </label>{" "}
                  <br />
                  <a href="#"> recovery my password ? </a>{" "}
                </div>{" "}
                <div className="form-group">
                  <button className="btn btn-primary btn-block">
                    {" "} Sign in  {" "}
                  </button>{" "}
                   <p> Or </p> {" "}
                  <GoogleLogin
                    clientId="368908477176-71dsa4t0likfb6ku70g169iki23qr4hd.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    render={renderProps =>
                      <button
                        className="btn btn-light btn-block"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <img className="ggicons" src={ggicons} />Sign in with
                        Google  {" "}
                      </button>}
                  />
                </div>{" "}
                {" "}
              </form>{" "}
              {" "}
            </div>{" "}
            {" "}
          </div>{" "}
          {" "}
          <div>
            <p> & copy;Notchsoluctions 2020 </p> {" "}
          </div>{" "}
          {" "}
        </div>{" "}
        {" "}
      </div>
    );
  }
};

export default Login;
