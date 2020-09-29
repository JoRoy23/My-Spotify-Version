import React from "react";
import NewReleaseAlbum from "./NewReleaseAlbum";
import "../../css/NewReleasesSection.css";

function NewReleasesSection({ newReleasesData }) {
  // Rendering new releases
  const renderingNewReleases = () => {
    const newReleasesList = newReleasesData.map((album) => {
      return (
        <NewReleaseAlbum
          key={album.albumId}
          id={album.albumId}
          albumImage={album.albumImage}
          albumName={album.albumName}
        />
      );
    });
    return newReleasesList;
  };

  return (
    <div className="newReleasesSection">
      <h1 className="newReleasesSection__title">New releases</h1>
      <div className="newReleasesSection__albums">{renderingNewReleases()}</div>
    </div>
  );
}

export default NewReleasesSection;
