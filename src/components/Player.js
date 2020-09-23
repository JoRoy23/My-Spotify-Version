import React from "react";
import Navbar from "./Navbar/Navbar";
import Content from "./Content";
import CurrentlyPlaying from "./CurrentlyPlaying";
import "../css/Player.css";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        <Navbar />
        <Content />
      </div>
      <footer className="player__footer">
        <CurrentlyPlaying />
      </footer>
    </div>
  );
}

export default Player;
