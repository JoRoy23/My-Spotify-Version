import React from "react";
import { truncate } from "../../helpers";
import "../../css/NewReleaseAlbum.css";

function NewReleaseAlbum({ newRelease }) {
  return (
    <div className="newReleaseAlbum">
      <img src={newRelease.images[0].url} alt={newRelease.name} />
      <p className="newReleaseAlbum__title">{truncate(newRelease.name, 15)}</p>
    </div>
  );
}

export default NewReleaseAlbum;
