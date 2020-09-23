import React from "react";
import NewReleaseAlbum from "./NewReleaseAlbum";
import "../../css/HomeNewReleases.css";

function HomeNewReleases({ newReleases }) {
  // Rendering new releases
  const renderingNewReleases = () => {
    if (newReleases.albums) {
      const newReleasesList = newReleases.albums.items.map((newRelease) => {
        return (
          <NewReleaseAlbum
            key={newRelease.id}
            id={newRelease.id}
            newRelease={newRelease}
          />
        );
      });
      return newReleasesList;
    }
    return [];
  };

  return (
    <div className="NewReleasesAlbums">
      <h1 className="release__title">New releases</h1>
      <div className="newReleases__albums">{renderingNewReleases()}</div>
    </div>
  );
}

export default HomeNewReleases;
