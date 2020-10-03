import React, { useContext } from "react";
import { truncate } from "../helpers";
import { SpotifyContext } from "../ContextApi/SpotifyState";
import Navbar from "./Navbar/Navbar";
import Content from "./Content";
import Footer from "./Footer";
import "../css/Player.css";

function Player() {
  const [{ isPlaying, mobileFooterVisible }, dispatch] = useContext(
    SpotifyContext
  );

  // Change the status of the play button when a click occur
  const handlePlayButtonClick = () => {
    dispatch({
      type: "SET_PLAY-BUTTON",
      isPlaying: !isPlaying,
    });
  };

  const setFooterVisibility = () => {
    return mobileFooterVisible ? "footer footer--visible" : "footer";
  };

  return (
    <div className="player">
      <div className="player__body">
        <Navbar />
        <Content />
      </div>
      <Footer
        footerVisibility={setFooterVisibility()}
        onPlayButtonClick={handlePlayButtonClick}
      />
    </div>
  );
}

export default Player;
