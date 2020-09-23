import React from "react";
import { truncate } from "../../helpers";
import "../../css/FeaturedPlaylist.css";

function FeaturedPlaylist({ playlist }) {
  return (
    <div className="featuredPlaylist">
      <img src={playlist.images[0].url} alt={playlist.name} />
      <p className="featuredPlaylist__title">{playlist.name}</p>
      <p className="featuredPlaylist__description">
        {truncate(playlist.description, 50)}
      </p>
    </div>
  );
}

export default FeaturedPlaylist;
