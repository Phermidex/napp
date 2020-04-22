import React from "react";
const axios = require("axios");

class ReactUploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      form: "actived",
      message: "",
      upload: 'hidden'
    };
    this.id = localStorage.getItem("session_user_id");
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myImage", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(`http://localhost:3002/upload/${this.id}`, formData, config)
      .then(response => {
        const { data } = response;
        console.log(data, data.file);
        localStorage.setItem("session_user_img", data.file);
        this.setState({ message: data.file, form: "hidden", upload: "show" });

        setTimeout(() => {
            this.setState({ message: '', form: "actived", upload: "hidden" })
        }, 3000);

      })
      .catch(error => {});
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  

  render() {
    return (
      <div className="upload-modal">
        <form onSubmit={this.onFormSubmit} className={this.state.form}>
          <h1>Change your profile image</h1>
          <input type="file" name="myImage" onChange={this.onChange} />
          <button className="btn btn-primary btn-block" type="submit">
            Upload
          </button>
        </form>
        <div className={this.state.upload}> 
          <img src={this.state.message} />
          <br />
          <div className={`alert alert-success ${this.state.upload}`}>
            The file is successfully uploaded
          </div>
        </div>
      </div>
    );
  }
}

export default ReactUploadImage;
