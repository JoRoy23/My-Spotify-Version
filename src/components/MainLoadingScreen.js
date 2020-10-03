import React, { useContext } from "react";
import { SpotifyContext } from "../ContextApi/SpotifyState";
import Player from "../components/Player";
import loadingScreenLogo from "../images/loadingScreenLogo.png";
import "../css/MainLoadingScreen.css";

function MainLoadingScreen() {
  const [{ isHomeDataLoaded }] = useContext(SpotifyContext);

  return (
    <React.Fragment>
      {isHomeDataLoaded ? (
        <Player />
      ) : (
        <div className="mainLoadingScreen">
          <img
            className="mainLoadingScreen__logo"
            src={loadingScreenLogo}
            alt="Spotify Logo"
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default MainLoadingScreen;
