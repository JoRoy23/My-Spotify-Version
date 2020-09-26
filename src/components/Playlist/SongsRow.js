import React from "react";
import { truncate } from "../../helpers";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../../css/SongsRow.css";

function SongsRow({ song, album, onPlaylistSongClick }) {
  return (
    <div
      className="songsRow"
      onClick={() => {
        onPlaylistSongClick(song);
      }}
    >
      <div className="songsRow__left">
        <img
          className="songsRow__image"
          src={song.track.album.images[0].url}
          alt={album}
        />
        <div className="songsRow__informations">
          <h4 className="songsRow__song">{truncate(song.track.name, 27)}</h4>
          <p className="songsRow__artist">{song.track.artists[0].name}</p>
        </div>
      </div>
      <MoreHorizIcon className="songsRow__icon" />
    </div>
  );
}

export default SongsRow;
