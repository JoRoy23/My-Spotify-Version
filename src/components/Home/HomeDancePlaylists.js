import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import PlaylistCover from "./PlaylistCover";
import "../../css/HomeDancePlaylists.css";

function HomeDancePlaylists({ dancePlaylists }) {
  const [state, dispatch] = useContext(SpotifyContext);

  // Set the information of the dance playlist selected
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

  // Rendering the dance playlists
  const renderingDancePlaylists = () => {
    const danceList = dancePlaylists.playlists?.items.map((playlist) => {
      return (
        <PlaylistCover
          key={playlist.id}
          id={playlist.id}
          playlist={playlist}
          onPlaylistCoverClick={handlePlaylistCoverClick}
        />
      );
    });
    return danceList;
  };

  return (
    <div className="homeDancePlaylists">
      <h1 className="homeDancePlaylists__title">Dance/Electronic</h1>
      <div className="homeDancePlaylists__playlists">
        {renderingDancePlaylists()}
      </div>
    </div>
  );
}

export default HomeDancePlaylists;
