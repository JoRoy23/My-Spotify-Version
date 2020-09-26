import React from "react";
import { NavLink } from "react-router-dom";
import { customizePlaylistUrl } from "../../helpers";
import "../../css/CountryPlaylist.css";

function CountryPlaylist({ id, playlist, onCountryPlaylistClick }) {
  return (
    <div className="countryPlaylist">
      <NavLink to={customizePlaylistUrl("country", playlist.name)}>
        <img
          src={playlist.images[0].url}
          alt={playlist.name}
          onClick={() => {
            onCountryPlaylistClick(id);
          }}
        />
      </NavLink>

      <p className="countryPlaylist__artists"></p>
    </div>
  );
}

export default CountryPlaylist;
