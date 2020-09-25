import React from "react";
import MyPlaylistName from "./MyPlaylistName";
import "../../css/NavbarPlaylists.css";

function NavbarPlaylists({ myPlaylists }) {
  // Rendering my playlists
  const renderingMyPlaylists = () => {
    const myPlaylistsList = myPlaylists.items?.map((playlist) => {
      return (
        <MyPlaylistName
          key={playlist.id}
          id={playlist.id}
          name={playlist.name}
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
