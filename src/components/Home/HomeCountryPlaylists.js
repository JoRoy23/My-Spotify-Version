import React from "react";
import CountryPlaylist from "./CountryPlaylist";
import "../../css/HomeCountryPlaylists.css";

function HomeCountryPlaylists({ countryPlaylists }) {
  // Rendering the country playlists
  const renderingCountryPlaylists = () => {
    const countryList = countryPlaylists.playlists?.items.map((playlist) => {
      return (
        <CountryPlaylist
          key={playlist.id}
          id={playlist.id}
          playlist={playlist}
        />
      );
    });
    return countryList;
  };

  return (
    <div className="homeCountryPlaylists">
      <h1 className="homeCountryPlaylists__title">Country playlists</h1>
      <div className="homeCountryPlaylists__playlists">
        {renderingCountryPlaylists()}
      </div>
    </div>
  );
}

export default HomeCountryPlaylists;
