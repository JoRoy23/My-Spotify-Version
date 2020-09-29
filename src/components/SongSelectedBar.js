import React from "react";
import musicNote from "../images/musicNote.png";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "../css/SongSelectedBar.css";

function SongSelectedBar({
  trackName,
  artistsName,
  albumImage,
  albumName,
  styleBar,
}) {
  return (
    <div className={`songSelectedBar ${styleBar()}`}>
      <div className="songSelectedBar__left">
        <img
          className="songSelected__albumImage"
          src={albumImage ? albumImage : musicNote}
          alt={albumName}
        />
        <div className="songSelected__songInformation">
          <h4 className="songSelected__song">{trackName}</h4>
          <p className="songSelected__artists">{artistsName}</p>
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
