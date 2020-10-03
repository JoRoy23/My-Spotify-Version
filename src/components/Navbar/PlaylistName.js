import React from "react";
import { NavLink } from "react-router-dom";
import { customizeUrl } from "../../helpers";
import "../../css/PlaylistName.css";

function PlaylistName({ id, type, playlistName, onPlaylistClick }) {
  return (
    <NavLink
      className="playlistName"
      to={customizeUrl(type, "user playlist", playlistName)}
      onClick={() => {
        onPlaylistClick(id);
      }}
    >
      {playlistName}
    </NavLink>
  );
}

export default PlaylistName;
