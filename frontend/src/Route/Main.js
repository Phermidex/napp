import React from "react";
import Advanced from "../Advanced";

const Main = () => {
  if (localStorage.getItem("sessionApp") === "false") {
    window.location.href = "/login";
  } else {
    return (
      <div className="container-whapper col-sm-12">
        <Advanced />
        <p className="devword">
          Development by{" "}
          <a href="https://github.com/Phermidex/serachJokes">Phermidex</a>
        </p>
      </div>
    );
  }
};

export default Main;
