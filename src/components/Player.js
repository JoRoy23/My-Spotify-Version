import React, { useContext } from "react";
import { getArtists, truncate } from "../helpers";
import { SpotifyContext } from "../ContextApi/SpotifyState";
import SongSelectedBar from "./SongSelectedBar";
import Navbar from "./Navbar/Navbar";
import Content from "./Content";
import Footer from "./Footer";
import "../css/Player.css";

function Player() {
  const [{ songSelected }] = useContext(SpotifyContext);

  // The bar who's showing the song selected on mobile is visible
  const styleTrackSelectedBar = () => {
    return songSelected.length !== 0 ? "songSelectedBar--visible" : "";
  };

  return (
    <div className="player">
      <div className="player__body">
        <Navbar />
        <Content />
      </div>
      <SongSelectedBar //
        trackName={
          window.innerWidth < 600
            ? truncate(songSelected.trackName, 19)
            : songSelected.trackName
        }
        artistsName={
          window.innerWidth < 600
            ? truncate(songSelected.artistsName, 19)
            : songSelected.artistsName
        }
        albumImage={songSelected.albumImage}
        albumName={songSelected.albumName}
        styleBar={styleTrackSelectedBar}
      />
      <Footer />
    </div>
  );
}

export default Player;
