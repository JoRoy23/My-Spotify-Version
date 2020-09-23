import React from "react";
import "../../css/RecentlyPlayedSong.css";

function RecentlyPlayedSong({ song }) {
  // Get the artists of a song
  const getArtists = (song) => {
    const artistsList = song.track.album.artists.map((artist) => {
      return artist.name;
    });
    return artistsList.join(" & ");
  };

  return (
    <div className="recentlyPlayedSong">
      <img src={song.track.album.images[1].url} alt={song.track.album.name} />
      <p className="recentlyPlayedSong__artist">{getArtists(song)}</p>
      <p className="recentlyPlayedSong__name">{song.track.name}</p>
    </div>
  );
}

export default RecentlyPlayedSong;
