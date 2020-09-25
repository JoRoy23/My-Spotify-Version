import React from "react";
import "../../css/DancePlaylist.css";

function DancePlaylist({ playlist }) {
  return (
    <div className="dancePlaylist">
      <img src={playlist.images[0].url} alt={playlist.name} />
      <p className="dancePlaylist__artists"></p>
    </div>
  );
}

export default DancePlaylist;
