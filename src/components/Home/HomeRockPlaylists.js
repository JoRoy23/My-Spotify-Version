import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import RockPlaylist from "./RockPlaylist";
import "../../css/HomeRockPlaylists.css";

function HomeRockPlaylists({ rockPlaylists }) {
  const [state, dispatch] = useContext(SpotifyContext);

  // Set the information of the rock playlist selected
  const handleRockPlaylistClick = (id) => {
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

  // Rendering the rock playlists
  const renderingRockPlaylists = () => {
    const rockList = rockPlaylists.playlists?.items.map((playlist) => {
      return (
        <RockPlaylist
          key={playlist.id}
          id={playlist.id}
          playlist={playlist}
          onRockPlaylistClick={handleRockPlaylistClick}
        />
      );
    });
    return rockList;
  };

  return (
    <div className="homeRockPlaylists">
      <h1 className="homeRockPlaylists__title">Rock</h1>
      <div className="homeRockPlaylists__playlists">
        {renderingRockPlaylists()}
      </div>
    </div>
  );
}

export default HomeRockPlaylists;
