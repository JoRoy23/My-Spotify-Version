import React from "react";
import { NavLink } from "react-router-dom";
import { customizePlaylistUrl } from "../../helpers";
import "../../css/RockPlaylist.css";

function RockPlaylist({ id, playlist, onRockPlaylistClick }) {
  return (
    <div className="rockPlaylist">
      <NavLink to={customizePlaylistUrl("rock", playlist.name)}>
        <img
          src={playlist.images[0].url}
          alt={playlist.name}
          onClick={() => {
            onRockPlaylistClick(id);
          }}
        />
      </NavLink>
      <p className="rockPlaylist__artists"></p>
    </div>
  );
}

export default RockPlaylist;
