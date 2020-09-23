import React from "react";
import FeaturedPlaylist from "./FeaturedPlaylist";
import "../../css/HomeFeaturedPlaylists.css";

function HomeFeaturedPlaylists({ featuredPlaylists }) {
  // Rendering the featured playlist
  const renderingFeaturedPlaylists = () => {
    if (featuredPlaylists.playlists) {
      const featuredList = featuredPlaylists.playlists.items.map((playlist) => {
        return (
          <FeaturedPlaylist
            key={playlist.id}
            id={playlist.id}
            playlist={playlist}
          />
        );
      });
      return featuredList;
    }
    return [];
  };

  return (
    <div className="homeFeaturedPlaylists">
      <h1 className="featured__title">Featured playlists</h1>
      <div className="featured__playlists">{renderingFeaturedPlaylists()}</div>
    </div>
  );
}

export default HomeFeaturedPlaylists;
