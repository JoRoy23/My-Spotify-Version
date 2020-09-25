import React from "react";
import { getArtists } from "../../helpers";
import RecentlyPlayedSong from "./RecentlyPlayedSong";
import "../../css/HomeRecentlyPlayed.css";

function HomeRecentlyPlayed({ recentlyPlayed }) {
  // Rendering the recently played album
  const renderingRecentlyPlayed = () => {
    const recentlyPlayedList = recentlyPlayed.items?.map((song) => {
      return { ...song, played_at: "" };
    });

    const uniqueRecentlyPlayed = new Set(recentlyPlayedList);
    // console.log(uniqueRecentlyPlayed);
    const updatedPlayedList = [...uniqueRecentlyPlayed].map((info) => {
      return (
        <RecentlyPlayedSong
          key={info.track.album.id}
          id={info.track.album.id}
          album={info.track.album}
          getArtists={getArtists}
        />
      );
    });
    return updatedPlayedList;
  };

  return (
    <div className="homeRecentlyPlayed">
      <h1 className="homeRecentlyPlayed__title">Recently played</h1>
      <div className="homeRecentlyPlayed__songs">
        {renderingRecentlyPlayed()}
      </div>
    </div>
  );
}

export default HomeRecentlyPlayed;
