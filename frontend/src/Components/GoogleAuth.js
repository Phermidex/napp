import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';





  class GoogleLogin_button extends React.Component {


      responseGoogle(response) {
        console.log(response);
      }

      render() {
          return(
          document.getElementById('googleButton')
          )
      }

  }


  export default GoogleLogin_button;