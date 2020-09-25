import React from "react";
import RockPlaylist from "./RockPlaylist";
import "../../css/HomeRockPlaylists.css";

function HomeRockPlaylists({ rockPlaylists }) {
  // Rendering the rock playlists
  const renderingRockPlaylists = () => {
    const rockList = rockPlaylists.playlists?.items.map((playlist) => {
      return (
        <RockPlaylist key={playlist.id} id={playlist.id} playlist={playlist} />
      );
    });
    return rockList;
  };

  return (
    <div className="homeRockPlaylists">
      <h1 className="homeRockPlaylists__title">Rock playlists</h1>
      <div className="homeRockPlaylists__playlists">
        {renderingRockPlaylists()}
      </div>
    </div>
  );
}

export default HomeRockPlaylists;
