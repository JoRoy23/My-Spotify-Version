import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import { getArtists } from "../../helpers";
import PlaylistName from "./PlaylistName";
import "../../css/PersonalPlaylists.css";

function PersonalPlaylists() {
  const [{ userPlaylists }, dispatch] = useContext(SpotifyContext);

  const handlePlaylistClick = (userPlaylistId) => {
    // Informations about the user playlists and the tracks
    async function getUserPlaylist(_id) {
      const userPlaylistInfoResponse = await spotifyApi.getPlaylist(_id);
      // Playlists informations
      const {
        id,
        type,
        followers,
        name,
        owner,
        images,
      } = userPlaylistInfoResponse;
      const userPlaylistInfo = {
        id: id,
        type: type,
        playlistFollowers: followers.total,
        playlistName: name,
        playlistOwner: owner.display_name,
        playlistImage: images[0]?.url,
      };

      const userPlaylistTracks = userPlaylistInfoResponse.tracks.items.map(
        (userPlaylistTrack) => {
          // Playlist tracks informations
          const track = userPlaylistTrack.track;
          const album = userPlaylistTrack.track.album;
          const artists = userPlaylistTrack.track.artists;

          return {
            id: track.id,
            type: track.type,
            trackName: track.name,
            artistsName: getArtists(artists),
            albumImage: album.images[0].url,
            albumName: album.name,
            from: "playlist",
          };
        }
      );

      dispatch({
        type: "SET_FEATURED-ITEM",
        featuredItem: userPlaylistInfo,
      });

      dispatch({
        type: "SET_ITEMS-LIST-SELECTED",
        itemsListSelected: userPlaylistTracks,
      });
    }
    getUserPlaylist(userPlaylistId);
  };

  // Rendering user playlists
  const renderingUserPlaylists = () => {
    const userPlaylistsList = userPlaylists.map((playlist) => {
      return (
        <PlaylistName
          key={playlist.id}
          id={playlist.id}
          type={playlist.type}
          playlistName={playlist.userPlaylistName}
          onPlaylistClick={handlePlaylistClick}
        />
      );
    });
    return userPlaylistsList;
  };

  return (
    <div className="personalPlaylists">
      <h2 className="personalPlaylists__title">Playlists</h2>
      <div className="personalPlaylists__underline"></div>
      {renderingUserPlaylists()}
    </div>
  );
}

export default PersonalPlaylists;
