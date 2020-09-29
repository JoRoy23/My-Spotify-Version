import React from "react";
import { NavLink } from "react-router-dom";
import { customizePlaylistUrl } from "../../helpers";
import "../../css/PlaylistCover.css";

function PlaylistCover({
  playlistId,
  playlistImage,
  playlistName,
  onPlaylistCoverClick,
}) {
  return (
    <div className="playlistCover">
      <NavLink to={customizePlaylistUrl("", playlistName)}>
        <img
          className="playlistCover__cover"
          src={playlistImage}
          alt={playlistName}
          onClick={() => {
            onPlaylistCoverClick(playlistId);
          }}
        />
      </NavLink>
      <p className="playlistCover__artists"></p>
    </div>
  );
}

export default PlaylistCover;
