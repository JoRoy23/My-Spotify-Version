import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import MyPlaylistName from "./MyPlaylistName";
import "../../css/NavbarPlaylists.css";

function NavbarPlaylists({ myPlaylists }) {
  const [state, dispatch] = useContext(SpotifyContext);

  // Set the information of my personal playlist selected
  const handlePersonalPlaylistClick = (id) => {
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

  // Rendering my playlists
  const renderingMyPlaylists = () => {
    const myPlaylistsList = myPlaylists.items?.map((playlist) => {
      return (
        <MyPlaylistName
          key={playlist.id}
          id={playlist.id}
          name={playlist.name}
          onPersonalPlaylistClick={handlePersonalPlaylistClick}
        />
      );
    });
    return myPlaylistsList;
  };

  return (
    <div className="navbarPlaylists">
      <h2 className="navbarPlaylists__title">Playlists</h2>
      <div className="navbarPlaylists__underline"></div>
      {renderingMyPlaylists()}
    </div>
  );
}

export default NavbarPlaylists;
