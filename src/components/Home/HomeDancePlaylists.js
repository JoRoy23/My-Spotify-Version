import React from "react";
import DancePlaylist from "./DancePlaylist";
import "../../css/HomeDancePlaylists.css";

function HomeDancePlaylists({ dancePlaylists }) {
  // Rendering the dance playlists
  const renderingDancePlaylists = () => {
    const danceList = dancePlaylists.playlists?.items.map((playlist) => {
      return (
        <DancePlaylist key={playlist.id} id={playlist.id} playlist={playlist} />
      );
    });
    return danceList;
  };

  return (
    <div className="homeDancePlaylists">
      <h1 className="homeDancePlaylists__title">Dance playlists</h1>
      <div className="homeDancePlaylists__playlists">
        {renderingDancePlaylists()}
      </div>
    </div>
  );
}

export default HomeDancePlaylists;
