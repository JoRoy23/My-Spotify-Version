import React from "react";
import { truncate } from "../../helpers";
import "../../css/NewReleaseAlbum.css";

function NewReleaseAlbum({ albumImage, albumName }) {
  return (
    <div className="newReleaseAlbum">
      <img src={albumImage[0].url} alt={albumName} />
      <p className="newReleaseAlbum__title">{truncate(albumName, 15)}</p>
    </div>
  );
}

export default NewReleaseAlbum;
