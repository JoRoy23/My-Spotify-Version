import React from "react";
import { NavLink } from "react-router-dom";
import { customizePlaylistUrl } from "../../helpers";
import "../../css/PopPlaylist.css";

function PopPlaylist({ id, playlist, onPopPlaylistClick }) {
  return (
    <div className="popPlaylist">
      <NavLink to={customizePlaylistUrl("pop", playlist.name)}>
        <img
          src={playlist.images[0].url}
          alt={playlist.name}
          onClick={() => {
            onPopPlaylistClick(id);
          }}
        />
      </NavLink>
      <p className="popPlaylist__artists"></p>
    </div>
  );
}

export default PopPlaylist;
