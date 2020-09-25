import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import FeaturedPlaylist from "./FeaturedPlaylist";
import "../../css/HomeFeaturedPlaylists.css";

function HomeFeaturedPlaylists({ featuredPlaylists }) {
  const [{ playlistSelected }, dispatch] = useContext(SpotifyContext);
  console.log(playlistSelected);

  // Set the information of the featured playlist selected
  const handleFeaturedPlaylistClick = (id) => {
    spotifyApi.getPlaylistTracks(id).then((tracks) => {
      dispatch({
        type: "SET_PLAYLIST-SELECTED",
        playlistSelected: tracks,
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
