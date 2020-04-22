import React from "react";
import userIcon from "../assets/icons/moroccan.png";
import UploadImage from "../Components/ReactUploadImage";

const loadingHtml = () => {
  return (
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  );
};

class Account extends React.Component {
  constructor() {
    super();

    this.state = {
      givenname: "loading...",
      familyname: "loading...",
      email: "loading...",
      saveBtnstatus: "hidden",
      saveEvent: "hide",
    };

    const userImage = window.localStorage.getItem("session_user_img");
    this.userName = window.localStorage.getItem("session_user");
    this.userID = window.localStorage.getItem("session_user_id");
    this.userPrifile = userImage === "false" ? userIcon : userImage;
    this.saveData = this.saveData.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.profile();
  }

  profile() {
    fetch(`http://localhost:3002/profile/${this.userID}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(json => {
        const { givenname, familyname, email } = json[0]["results"][0];
        this.setState({
          givenname: givenname,
          familyname: familyname,
          email: email,
        });
      });
  }

  saveData(event) {
    event.preventDefault();
    const data = {};
    data["state"] = 0;
    data["givenname"] = this.state.givenname;
    data["familyname"] = this.state.familyname;
    data["email"] = this.state.email;

    fetch(`http://localhost:3002/profile/update/${this.userID}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json)
      .then(json => {
        this.setState({ saveBtnstatus: "hidden", saveEvent: "show" });

        setTimeout(() => {
          this.setState({ saveEvent: "hide" });
        }, 4000);
      });
  }

  onChange(data, name) {
    let param = data;
    let values = {};
    values[name] = data;

    if (data == "") {
      values["saveBtnstatus"] = "hidden";
      this.setState(values);
      this.profile();
    }

    if (data != "") {
      values["saveBtnstatus"] = "actived";
      this.setState(values);
    }
  }

  render() {
    //this.profile();
    return (
      <div className="container-whapper pos col-sm-12">
        <hr />
        <div className="media actived-tab">
          <div className="col-sm-12">
            <div className="card all">
              <div className="card-body center">
                <h5 className="card-title"> Profile </h5>{" "}
                <img
                  className="profile-img img-responsive rounded-circle rounded-sm"
                  src={this.userPrifile}
                />{" "}
                <h5 className="card-title"> {this.userName} </h5>{" "}
                <hr />
                <ul className="nav">
                  <li>
                    <button
                      className="btn btn-default"
                      data-toggle="modal"
                      data-target="#uploadProfile"
                    >
                      <i className="fa fa fa-camera-retro" /> upload image
                    </button>
                  </li>
                </ul>
                <div
                  class="modal fade"
                  id="uploadProfile"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <UploadImage />
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="card results">
                  <div className="card-body">
                    <form action="/profle/save">
                      <div className="form-group">
                        <label htmlFor="display_name">First name</label>
                        <input
                          onChange={event => { this.onChange(event.target.value, 'givenname') }}
                          name="givenname"
                          className="form-control"
                          placeholder={this.state.givenname}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="display_name">Last name</label>
                        <input
                          onChange={event => {
                            this.onChange(event.target.value, 'familyname')
                          }}
                          name="familyname"
                          className="form-control"
                          placeholder={this.state.familyname}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="display_name">Email</label>
                        <input
                          onChange={event => {
                            this.onChange(event.target.value, 'email')
                          }}
                          name="email"
                          className="form-control"
                          placeholder={this.state.email}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="display_name">Current plan</label>
                        <div className="input-group">
                          <input
                            name="plan"
                            className="form-control"
                            placeholder="Free"
                          />
                          <button className="btn btn-primary">
                            change plan
                          </button>
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          onClick={this.saveData}
                          className={`btn btn-success ${this.state
                            .saveBtnstatus}`}
                        >
                          Save
                        </button>
                        <div
                          class={`alert alert-success alert-dismissible fade ${this
                            .state.saveEvent}`}
                          role="alert"
                        >
                          <strong>Thank you</strong>, you have updated your
                          information
                          <button
                            type="button"
                            class="close"
                            data-dismiss="alert"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <p className="devword">
          Development by {" "}
          <a href="https://github.com/Phermidex/serachJokes">
            {" "}Phermidex{" "}
          </a>{" "}
        </p>{" "}
      </div>
    );
  }
}

export default Account;
