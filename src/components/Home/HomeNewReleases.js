import React from "react";
import NewReleaseAlbum from "./NewReleaseAlbum";
import "../../css/HomeNewReleases.css";

function HomeNewReleases({ newReleases }) {
  // Rendering new releases
  const renderingNewReleases = () => {
    const newReleasesList = newReleases.albums?.items.map((newRelease) => {
      return (
        <NewReleaseAlbum
          key={newRelease.id}
          id={newRelease.id}
          newRelease={newRelease}
        />
      );
    });
    return newReleasesList;
  };

  return (
    <div className="homeNewReleases">
      <h1 className="homeNewReleases__title">New releases</h1>
      <div className="homeNewReleases__albums">{renderingNewReleases()}</div>
    </div>
  );
}

export default HomeNewReleases;
