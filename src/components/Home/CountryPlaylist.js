import React from "react";
import "../../css/CountryPlaylist.css";

function CountryPlaylist({ playlist }) {
  return (
    <div className="countryPlaylist">
      <img src={playlist.images[0].url} alt={playlist.name} />
      <p className="countryPlaylist__artists"></p>
    </div>
  );
}

export default CountryPlaylist;
