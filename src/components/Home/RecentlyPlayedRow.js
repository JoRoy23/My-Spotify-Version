import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import { getArtists, truncate } from "../../helpers";
import RecentlyPlayedAlbum from "./RecentlyPlayedAlbum";
import "../../css/RecentlyPlayedRow.css";

function RecentlyPlayedRow({ recentlyPlayedData }) {
  const [{}, dispatch] = useContext(SpotifyContext);

  const handleRecentlyPlayedAlbumClick = (albumId) => {
    // Fetch the tracks of the album
    async function getAlbumTracks() {
      const albumTracksResponse = await spotifyApi.getAlbumTracks(albumId);

      const albumTracks = albumTracksResponse.items.map((albumTrack) => {
        const { id, name, artists } = albumTrack;

        return {
          trackId: id,
          trackName: name,
          artistsName: artists,
        };
      });
      dispatch({
        type: "SET_TRACKS-OF-PLAYLIST/ALBUM-SELECTED",
        tracksOfPlaylistSelected: albumTracks,
      });
    }
    getAlbumTracks();

    // Fetch the info of the album for the featured cover of the playlist page
    async function getAlbumInfo() {
      const albumInfoResponse = await spotifyApi.getAlbum(albumId);

      const {
        name,
        images,
        artists,
        type,
        total_tracks,
        release_date,
      } = albumInfoResponse;
      const albumInfo = {
        featuredCoverName: name,
        featuredCoverImage: images,
        featuredNbOfTracks: total_tracks,
        featuredReleaseDate: release_date,
        featuredType: type,
        featuredArtistName: artists,
      };

      dispatch({
        type: "SET_FEATUREDCOVER-OF-PLAYLIST/ALBUM-SELECTED",
        featuredOfPlaylistSelected: albumInfo,
      });
    }
    getAlbumInfo();
  };

  // Rendering the recently played album
  const renderingRecentlyPlayed = () => {
    const recentlyPlayedAlbums = recentlyPlayedData.map((album) => {
      return (
        <RecentlyPlayedAlbum
          key={album.albumId}
          albumId={album.albumId}
          albumName={album.albumName}
          albumImage={album.albumImage}
          artists={truncate(getArtists(album.albumArtists), 25)}
          onRecentlyPlayedAlbumClick={handleRecentlyPlayedAlbumClick}
        />
      );
    });
    return recentlyPlayedAlbums;
  };

  return (
    <div className="recentlyPlayedRow">
      <h1 className="recentlyPlayedRow__title">Recently played</h1>
      <div className="recentlyPlayedRow__album">
        {renderingRecentlyPlayed()}
      </div>
    </div>
  );
}

export default RecentlyPlayedRow;
