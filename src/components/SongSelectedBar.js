import React from "react";
import { truncate } from "../helpers";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "../css/SongSelectedBar.css";

function SongSelectedBar({ song, artists, albumImage, album, styleBar }) {
  return (
    <div className={`songSelectedBar ${styleBar()}`}>
      <div className="songSelectedBar__left">
        <img
          className="songSelected__albumImage"
          src={albumImage}
          alt={album}
        />
        <div className="songSelected__songInformation">
          <h4 className="songSelected__song">{truncate(song, 19)}</h4>
          <p className="songSelected__artists">{artists}</p>
        </div>
      </div>
      <div className="songSelectedBar__right">
        <FavoriteIcon className="songSelected__icon" />
        <PlayArrowIcon className="songSelected__icon" />
      </div>
    </div>
  );
}

export default SongSelectedBar;
