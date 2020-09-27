import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import PlaylistCover from "./PlaylistCover";
import "../../css/PlaylistRow.css";

function PlaylistRow({ playlistData, playlistRowTitle }) {
  const [{}, dispatch] = useContext(SpotifyContext);

  // Set the information of the playlist selected
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

  // Rendering the featured playlist
  const renderingPlaylistCovers = () => {
    const playlistCovers = playlistData?.playlists?.items.map((playlist) => {
      return (
        <PlaylistCover
          key={playlist.id}
          id={playlist.id}
          playlist={playlist}
          onPlaylistCoverClick={handlePlaylistCoverClick}
        />
      );
    });
    return playlistCovers;
  };

  return (
    <div className="playlistsRow">
      <h1 className="playlistsRow__title">{playlistRowTitle}</h1>
      <div className="playlistsRow__covers">{renderingPlaylistCovers()}</div>
    </div>
  );
}

export default PlaylistRow;
