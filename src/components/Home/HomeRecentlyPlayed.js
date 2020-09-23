import React from "react";
import RecentlyPlayedSong from "./RecentlyPlayedSong";
import "../../css/HomeRecentlyPlayed.css";

function HomeRecentlyPlayed({ recentlyPlayed }) {
  // Rendering the recently played songs
  const renderingRecentlyPlayed = () => {
    if (recentlyPlayed.items) {
      const recentlyPlayedList = recentlyPlayed.items.map((song) => {
        return (
          <RecentlyPlayedSong
            key={song.track.id}
            id={song.track.id}
            song={song}
          />
        );
      });
      return recentlyPlayedList;
    }
    return [];
  };

  return (
    <div className="homeRecentlyPlayed">
      <h1 className="recently__title">Recently played</h1>
      <div className="recentlyPlayed__songs">{renderingRecentlyPlayed()}</div>
    </div>
  );
}

export default HomeRecentlyPlayed;
