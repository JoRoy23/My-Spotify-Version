import React from "react";
import "../../css/HiphopPlaylist.css";

function HiphopPlaylist({ playlist }) {
  return (
    <div className="hiphopPlaylist">
      <img src={playlist.images[0].url} alt={playlist.name} />
      <p className="hiphopPlaylist__artists"></p>
    </div>
  );
}

export default HiphopPlaylist;
