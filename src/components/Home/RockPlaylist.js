import React from "react";
import "../../css/RockPlaylist.css";

function RockPlaylist({ playlist }) {
  return (
    <div className="rockPlaylist">
      <img src={playlist.images[0].url} alt={playlist.name} />
      <p className="rockPlaylist__artists"></p>
    </div>
  );
}

export default RockPlaylist;
