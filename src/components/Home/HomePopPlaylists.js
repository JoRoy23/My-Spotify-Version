import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import PlaylistCover from "./PlaylistCover";
import "../../css/HomePopPlaylists.css";

function HomePopPlaylists({ popPlaylists }) {
  const [state, dispatch] = useContext(SpotifyContext);

  // Set the information of the pop playlist selected
  const handlePlaylistCoverClick = (id) => {
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

  // Rendering the pop playlists
  const renderingPopPlaylists = () => {
    const popList = popPlaylists.playlists?.items.map((playlist) => {
      return (
        <PlaylistCover
          key={playlist.id}
          id={playlist.id}
          playlist={playlist}
          onPlaylistCoverClick={handlePlaylistCoverClick}
        />
      );
    });
    return popList;
  };

  return (
    <div className="homePopPlaylists">
      <h1 className="homePopPlaylists__title">Pop</h1>
      <div className="homePopPlaylists__playlists">
        {renderingPopPlaylists()}
      </div>
    </div>
  );
}

export default HomePopPlaylists;
