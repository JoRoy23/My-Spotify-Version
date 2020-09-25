import React from "react";
import PopPlaylist from "./PopPlaylist";
import "../../css/HomePopPlaylists.css";

function HomePopPlaylists({ popPlaylists }) {
  // Rendering the pop playlists
  const renderingPopPlaylists = () => {
    const popList = popPlaylists.playlists?.items.map((playlist) => {
      return (
        <PopPlaylist key={playlist.id} id={playlist.id} playlist={playlist} />
      );
    });
    return popList;
  };

  return (
    <div className="homePopPlaylists">
      <h1 className="homePopPlaylists__title">Pop playlists</h1>
      <div className="homePopPlaylists__playlists">
        {renderingPopPlaylists()}
      </div>
    </div>
  );
}

export default HomePopPlaylists;
