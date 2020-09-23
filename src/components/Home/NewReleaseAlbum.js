import React from "react";
import "../../css/NewReleaseAlbum.css";

function NewReleaseAlbum({ newRelease }) {
  return (
    <div className="newReleaseAlbum">
      <img src={newRelease.images[0].url} alt={newRelease.name} />
      <p className="newReleaseAlbum__title">{newRelease.name}</p>
    </div>
  );
}

export default NewReleaseAlbum;
