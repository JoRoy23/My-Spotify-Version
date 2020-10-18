import React from "react";
import { NavLink } from "react-router-dom";
import { customizeUrl } from "../../helpers";
import "../../css/NewReleaseAlbum.css";

function NewReleaseAlbum({
  id,
  type,
  category,
  albumImage,
  albumName,
  onNewReleaseClick,
}) {
  return (
    <NavLink
      to={customizeUrl(type, category, albumName)}
      className="newReleaseAlbum"
      onClick={() => {
        onNewReleaseClick(id);
      }}
    >
      <img src={albumImage[0].url} alt={albumName} />
      <p className="newReleaseAlbum__title">{albumName}</p>
    </NavLink>
  );
}

export default NewReleaseAlbum;
