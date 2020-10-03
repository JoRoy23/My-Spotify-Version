import React from "react";
import { loginUrl } from "../spotify";
import spotifyLogo from "../images/spotifyLogo.png";
import "../css/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img className="login__logo" src={spotifyLogo} alt="Spotify Logo" />
        <div className="login__bottomContainer">
          <h1 className="login__quote">
            Millions of songs.<br></br> Free on spotify
          </h1>
          <p className="login__smallText">Continue with</p>
          <a className="button button--login" href={loginUrl}>
            LOGIN
          </a>
          <button className=" button button--signup">SIGN UP</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
