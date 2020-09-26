import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import CountryPlaylist from "./CountryPlaylist";
import "../../css/HomeCountryPlaylists.css";

function HomeCountryPlaylists({ countryPlaylists }) {
  const [state, dispatch] = useContext(SpotifyContext);

  // Set the information of the pop playlist selected
  const handleCountryPlaylistClick = (id) => {
    // Fetch the tracks of the playlist
    spotifyApi.getPlaylistTracks(id).then((songs) => {
      dispatch({
        type: "SET_SONGS-OF-PLAYLIST-SELECTED",
        songsOfPlaylistSelected: songs,
      });
    });

    // Fetch the info of the playlist album
    spotifyApi.getPlaylist(id).then((playlist) => {
      dispatch({
        type: "SET_INFO-OF-PLAYLIST-SELECTED",
        infoOfPlaylistSelected: playlist,
      });
    });
  };

  // Rendering the country playlists
  const renderingCountryPlaylists = () => {
    const countryList = countryPlaylists.playlists?.items.map((playlist) => {
      return (
        <CountryPlaylist
          key={playlist.id}
          id={playlist.id}
          playlist={playlist}
          onCountryPlaylistClick={handleCountryPlaylistClick}
        />
      );
    });
    return countryList;
  };

  return (
    <div className="homeCountryPlaylists">
      <h1 className="homeCountryPlaylists__title">Country</h1>
      <div className="homeCountryPlaylists__playlists">
        {renderingCountryPlaylists()}
      </div>
    </div>
  );
}

export default HomeCountryPlaylists;
