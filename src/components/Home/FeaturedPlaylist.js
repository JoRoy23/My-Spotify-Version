import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/FeaturedPlaylist.css";

function FeaturedPlaylist({ id, playlist, onFeaturedPlaylistClick }) {
  return (
    <div className="featuredPlaylist">
      <NavLink to="/playlist">
        <img
          src={playlist.images[0].url}
          alt={playlist.name}
          onClick={() => {
            onFeaturedPlaylistClick(id);
          }}
        />
      </NavLink>
      <p className="featuredPlaylist__artists"></p>
    </div>
  );
}

export default FeaturedPlaylist;
