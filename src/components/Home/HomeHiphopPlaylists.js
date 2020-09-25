import React from "react";
import HiphopPlaylist from "./HiphopPlaylist";
import "../../css/HomeHiphopPlaylists.css";

function HomeHiphopPlaylists({ hiphopPlaylists }) {
  // Rendering the hiphop playlists
  const renderingHiphopPlaylists = () => {
    const hiphopList = hiphopPlaylists.playlists?.items.map((playlist) => {
      return (
        <HiphopPlaylist
          key={playlist.id}
          id={playlist.id}
          playlist={playlist}
        />
      );
    });
    return hiphopList;
  };

  return (
    <div className="homeHiphopPlaylists">
      <h1 className="homeHiphopPlaylists__title">Hip-hop playlists</h1>
      <div className="homeHiphopPlaylists__playlists">
        {renderingHiphopPlaylists()}
      </div>
    </div>
  );
}

export default HomeHiphopPlaylists;
