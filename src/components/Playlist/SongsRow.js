import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../../css/SongsRow.css";

function SongsRow({ songName, artist, albumImage }) {
  return (
    <div className="songsRow">
      <div className="songsRow__left">
        <img className="songsRow__image" src={albumImage} alt="" />
        <div className="songsRow__informations">
          <h4 className="songsRow__song">{songName}</h4>
          <p className="songsRow__artist">{artist}</p>
        </div>
      </div>
      <MoreHorizIcon className="songsRow__icon" />
    </div>
  );
}

export default SongsRow;
