import React from "react";
import "../../css/RecentlyPlayedSong.css";

function RecentlyPlayedSong({ album, getArtists }) {
  return (
    <div className="recentlyPlayedSong">
      <img src={album.images[1].url} alt={album.name} />
      <h4 className="recentlyPlayedSong__artist">{getArtists(album, 15)}</h4>
    </div>
  );
}

export default RecentlyPlayedSong;
