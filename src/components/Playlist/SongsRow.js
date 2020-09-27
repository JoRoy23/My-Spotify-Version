import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../../css/SongsRow.css";

function SongsRow({
  songObject,
  song,
  album,
  albumImage,
  artists,
  onPlaylistSongClick,
}) {
  return (
    <div
      className="songsRow"
      onClick={() => {
        onPlaylistSongClick(songObject);
      }}
    >
      <div className="songsRow__left">
        <img className="songsRow__image" src={albumImage} alt={album} />
        <div className="songsRow__informations">
          <h4 className="songsRow__song">{song}</h4>
          <p className="songsRow__artist">{artists}</p>
        </div>
      </div>
      <MoreHorizIcon className="songsRow__icon" />
    </div>
  );
}

export default SongsRow;
