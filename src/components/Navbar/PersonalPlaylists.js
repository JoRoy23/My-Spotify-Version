import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import PersonalPlaylistName from "./PersonalPlaylistName";
import "../../css/PersonalPlaylists.css";

function PersonalPlaylists() {
  const [{ userPlaylists }, dispatch] = useContext(SpotifyContext);

  // Render the tracks/header of the playlist page when a user playlist is clicked
  const handlePersonalPlaylistClick = (userPlaylistId) => {
    // Fetch tracks info of the user playlists
    async function getUserPlaylistTracks() {
      const userPlaylistTracksResponse = await spotifyApi.getPlaylistTracks(
        userPlaylistId
      );

      const userPlaylistTracks = userPlaylistTracksResponse.items.map(
        (userPlaylistTrack) => {
          const track = userPlaylistTrack.track;
          const album = userPlaylistTrack.track.album;
          const artists = userPlaylistTrack.track.artists;

          return {
            trackId: track.id,
            trackName: track.name,
            artistsName: artists,
            albumImage: album.images[0].url,
            albumName: album.name,
          };
        }
      );

      dispatch({
        type: "SET_TRACKS-OF-PLAYLIST/ALBUM-SELECTED",
        tracksOfPlaylistSelected: userPlaylistTracks,
      });
    }
    getUserPlaylistTracks();

    // Fetch playlist info of the user playlists
    async function getUserPlaylist() {
      const userPlaylistInfoResponse = await spotifyApi.getPlaylist(
        userPlaylistId
      );

      const { followers, name, owner, images } = userPlaylistInfoResponse;
      const userPlaylistInfo = {
        featuredCoverFollowers: followers,
        featuredCoverName: name,
        featuredCoverOwner: owner,
        featuredCoverImage: images,
      };

      dispatch({
        type: "SET_FEATUREDCOVER-OF-PLAYLIST/ALBUM-SELECTED",
        featuredOfPlaylistSelected: userPlaylistInfo,
      });
    }
    getUserPlaylist();
  };

  // Rendering user playlists
  const renderingUserPlaylists = () => {
    const userPlaylistsList = userPlaylists.map((userPlaylist) => {
      return (
        <PersonalPlaylistName
          key={userPlaylist.userPlaylistId}
          userPlaylistId={userPlaylist.userPlaylistId}
          userPlaylistName={userPlaylist.userPlaylistName}
          onPersonalPlaylistClick={handlePersonalPlaylistClick}
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
