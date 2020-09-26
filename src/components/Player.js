import React, { useContext } from "react";
import { SpotifyContext } from "../ContextApi/SpotifyState";
import SongSelectedBar from "./SongSelectedBar";
import Navbar from "./Navbar/Navbar";
import Content from "./Content";
import Footer from "./Footer";
import "../css/Player.css";

function Player() {
  const [{ songSelected }] = useContext(SpotifyContext);

  // Show the selected track bar when the user click on a track
  const styleTrackSelectedBar = () => {
    return songSelected.length !== 0 ? "songSelectedBar--visible" : "";
  };

  return (
    <div className="player">
      <div className="player__body">
        <Navbar />
        <Content />
      </div>
      <SongSelectedBar
        song={songSelected.track?.name}
        artists={songSelected.track?.artists[0].name}
        albumImage={songSelected.track?.album.images[0].url}
        album={songSelected.track?.album.name}
        styleBar={styleTrackSelectedBar}
      />
      <footer className="player__footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Player;
