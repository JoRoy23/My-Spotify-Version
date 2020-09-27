import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/PlaylistCover.css";

function PlaylistCover({ id, playlist, onPlaylistCoverClick }) {
  return (
    <div className="featuredPlaylist">
      <NavLink to="/playlist">
        <img
          src={playlist.images[0].url}
          alt={playlist.name}
          onClick={() => {
            onPlaylistCoverClick(id);
          }}
        />
      </NavLink>
      <p className="featuredPlaylist__artists"></p>
    </div>
  );
}

export default PlaylistCover;
