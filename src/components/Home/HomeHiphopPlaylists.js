import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import HiphopPlaylist from "./HiphopPlaylist";
import "../../css/HomeHiphopPlaylists.css";

function HomeHiphopPlaylists({ hiphopPlaylists }) {
  const [state, dispatch] = useContext(SpotifyContext);

  // Set the information of the hip-hop playlist selected
  const handleHiphopPlaylistClick = (id) => {
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

  // Rendering the hiphop playlists
  const renderingHiphopPlaylists = () => {
    const hiphopList = hiphopPlaylists.playlists?.items.map((playlist) => {
      return (
        <HiphopPlaylist
          key={playlist.id}
          id={playlist.id}
          playlist={playlist}
          onHiphopPlaylistClick={handleHiphopPlaylistClick}
        />
      );
    });
    return hiphopList;
  };

  return (
    <div className="homeHiphopPlaylists">
      <h1 className="homeHiphopPlaylists__title">Hip-hop</h1>
      <div className="homeHiphopPlaylists__playlists">
        {renderingHiphopPlaylists()}
      </div>
    </div>
  );
}

export default HomeHiphopPlaylists;
