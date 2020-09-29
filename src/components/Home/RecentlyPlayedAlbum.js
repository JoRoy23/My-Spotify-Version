import React from "react";
import { NavLink } from "react-router-dom";
import { customizePlaylistUrl } from "../../helpers";
import "../../css/RecentlyPlayedAlbum.css";

function RecentlyPlayedAlbum({
  albumId,
  albumName,
  albumImage,
  artists,
  onRecentlyPlayedAlbumClick,
}) {
  return (
    <div className="recentlyPlayedAlbum">
      <NavLink to={customizePlaylistUrl("", albumName)}>
        <img
          className="recentlyPlayedAlbum__cover"
          src={albumImage[1].url}
          alt={albumName}
          onClick={() => {
            onRecentlyPlayedAlbumClick(albumId);
          }}
        />
      </NavLink>
      <h4 className="recentlyPlayedAlbum__artists">{artists}</h4>
    </div>
  );
}

export default RecentlyPlayedAlbum;
