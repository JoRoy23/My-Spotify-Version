import React from "react";
import "../../css/RecentlyPlayedSong.css";

function RecentlyPlayedSong({ album, artists }) {
  return (
    <div className="recentlyPlayedSong">
      <img src={album.images[1].url} alt={album.name} />
      <h4 className="recentlyPlayedSong__artist">{artists}</h4>
    </div>
  );
}

export default RecentlyPlayedSong;
