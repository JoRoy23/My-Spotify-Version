import React from "react";
import "../../css/PopPlaylist.css";

function PopPlaylist({ playlist }) {
  return (
    <div className="popPlaylist">
      <img src={playlist.images[0].url} alt={playlist.name} />
      <p className="popPlaylist__artists"></p>
    </div>
  );
}

export default PopPlaylist;
