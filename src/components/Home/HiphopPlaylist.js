import React from "react";
import { NavLink } from "react-router-dom";
import { customizePlaylistUrl } from "../../helpers";
import "../../css/HiphopPlaylist.css";

function HiphopPlaylist({ id, playlist, onHiphopPlaylistClick }) {
  return (
    <div className="hiphopPlaylist">
      <NavLink to={customizePlaylistUrl("hip-hop", playlist.name)}>
        <img
          src={playlist.images[0].url}
          alt={playlist.name}
          onClick={() => {
            onHiphopPlaylistClick(id);
          }}
        />
      </NavLink>
      <p className="hiphopPlaylist__artists"></p>
    </div>
  );
}

export default HiphopPlaylist;
