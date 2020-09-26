import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import FeaturedPlaylist from "./FeaturedPlaylist";
import "../../css/HomeFeaturedPlaylists.css";

function HomeFeaturedPlaylists({ featuredPlaylists }) {
  const [state, dispatch] = useContext(SpotifyContext);

  // Set the information of the featured playlist selected
  const handleFeaturedPlaylistClick = (id) => {
    // Fetch the tracks of the playlist
    spotifyApi.getPlaylistTracks(id).then((songs) => {
      dispatch({
        type: "SET_SONGS-OF-PLAYLIST-SELECTED",
        songsOfPlaylistSelected: songs,
      });
    });

    // Fetch the info of the playlist album
    spotifyApi.getPlaylist(id).then((playlist) => {
      dispatch({
        type: "SET_INFO-OF-PLAYLIST-SELECTED",
        infoOfPlaylistSelected: playlist,
      });
    });
  };

  // Rendering the featured playlist
  const renderingFeaturedPlaylists = () => {
    const featuredList = featuredPlaylists.playlists?.items.map((playlist) => {
      return (
        <FeaturedPlaylist
          key={playlist.id}
          id={playlist.id}
          playlist={playlist}
          onFeaturedPlaylistClick={handleFeaturedPlaylistClick}
        />
      );
    });
    return featuredList;
  };

  return (
    <div className="homeFeaturedPlaylists">
      <h1 className="homeFeaturedPlaylists__title">Popular playlists</h1>
      <div className="homeFeaturedPlaylists__playlists">
        {renderingFeaturedPlaylists()}
      </div>
    </div>
  );
}

export default HomeFeaturedPlaylists;
