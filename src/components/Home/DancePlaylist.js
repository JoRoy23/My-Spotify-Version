import React from "react";
import { NavLink } from "react-router-dom";
import { customizePlaylistUrl } from "../../helpers";
import "../../css/DancePlaylist.css";

function DancePlaylist({ id, playlist, onDancePlaylistClick }) {
  return (
    <div className="dancePlaylist">
      <NavLink to={customizePlaylistUrl("dance-electronic", playlist.name)}>
        <img
          src={playlist.images[0].url}
          alt={playlist.name}
          onClick={() => {
            onDancePlaylistClick(id);
          }}
        />
      </NavLink>
      <p className="dancePlaylist__artists"></p>
    </div>
  );
}

export default DancePlaylist;
