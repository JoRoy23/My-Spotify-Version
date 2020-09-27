import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/PlaylistCover.css";

function PlaylistCover({ id, playlist, onPlaylistCoverClick }) {
  return (
    <div className="playlistCover">
      <NavLink to="/playlist">
        <img
          className="playlistCover__cover"
          src={playlist.images[0].url}
          alt={playlist.name}
          onClick={() => {
            onPlaylistCoverClick(id);
          }}
        />
      </NavLink>
      <p className="playlistCover__artists"></p>
    </div>
  );
}

export default PlaylistCover;
