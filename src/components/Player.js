import React from "react";
import Navbar from "./Navbar/Navbar";
import Content from "./Content";
import Footer from "./Footer";
import "../css/Player.css";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        <Navbar />
        <Content />
      </div>
      <footer className="player__footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Player;
