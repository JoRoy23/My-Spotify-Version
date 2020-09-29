import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import PlaylistCover from "./PlaylistCover";
import "../../css/PlaylistRow.css";

function PlaylistRow({ playlistData, playlistRowTitle }) {
  const [{}, dispatch] = useContext(SpotifyContext);

  // Set the information of the playlist selected
  const handlePlaylistCoverClick = (playlistId) => {
    // Fetch the tracks of the playlist
    async function getPlaylistTracks() {
      const playlistTracksResponse = await spotifyApi.getPlaylistTracks(
        playlistId
      );

      const playlistTracks = playlistTracksResponse.items?.map(
        (playlistTrack) => {
          const track = playlistTrack.track;
          const album = playlistTrack.track?.album;
          const artists = playlistTrack.track?.artists;

          return {
            trackId: track?.id,
            trackName: track?.name,
            artistsName: artists,
            albumImage: album?.images[0]?.url,
            albumName: album?.name,
          };
        }
      );

      dispatch({
        type: "SET_TRACKS-OF-PLAYLIST/ALBUM-SELECTED",
        tracksOfPlaylistSelected: playlistTracks,
      });
    }
    getPlaylistTracks();

    // Fetch the info of the playlist for the featured cover of the playlist page
    async function getPlaylist() {
      const playlistInfoResponse = await spotifyApi.getPlaylist(playlistId);

      const { id, followers, name, owner, images } = playlistInfoResponse;
      const playlistInfo = {
        featuredCoverId: id,
        featuredCoverFollowers: followers,
        featuredCoverName: name,
        featuredCoverOwner: owner,
        featuredCoverImage: images,
      };

      dispatch({
        type: "SET_FEATUREDCOVER-OF-PLAYLIST/ALBUM-SELECTED",
        featuredOfPlaylistSelected: playlistInfo,
      });
    }
    getPlaylist();
  };

  // Rendering the featured playlist
  const renderingPlaylistCovers = () => {
    const playlistCovers = playlistData?.map((playlist) => {
      return (
        <PlaylistCover
          key={playlist.id}
          playlistId={playlist.playlistId}
          playlistImage={playlist.playlistImages[0].url}
          playlistName={playlist.playlistName}
          onPlaylistCoverClick={handlePlaylistCoverClick}
        />
      );
    });
    return playlistCovers;
  };

  return (
    <div className="playlistsRow">
      <h1 className="playlistsRow__title">{playlistRowTitle}</h1>
      <div className="playlistsRow__covers">{renderingPlaylistCovers()}</div>
    </div>
  );
}

export default PlaylistRow;
