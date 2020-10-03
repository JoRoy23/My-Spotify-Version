import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import { getArtists } from "../../helpers";
import NewReleaseAlbum from "./NewReleaseAlbum";
import "../../css/HomeNewReleases.css";

function HomeNewReleases({ newReleasesData, rowTitle }) {
  const [, dispatch] = useContext(SpotifyContext);

  // Fetch the tracks of the new releases
  const handleNewReleaseClick = (albumId) => {
    // Informations about the albums and the tracks
    async function getAlbumInfo(_id) {
      const albumInfoResponse = await spotifyApi.getAlbum(_id);
      console.log(albumInfoResponse);
      // Albums informations
      const {
        id,
        name,
        images,
        artists,
        type,
        total_tracks,
        release_date,
      } = albumInfoResponse;
      const albumInfo = {
        id: id,
        type: type,
        albumName: name,
        albumImage: images[0].url,
        albumNbOfTracks: total_tracks,
        albumReleaseDate: release_date,
        albumArtists: getArtists(artists),
      };

      const albumTracks = albumInfoResponse.tracks.items.map((albumTrack) => {
        // Album tracks informations
        const { id, type, name, artists } = albumTrack;
        return {
          id: id,
          type: type,
          trackName: name,
          albumImage: images[0].url,
          artistsName: getArtists(artists),
          from: "album",
        };
      });

      dispatch({
        type: "SET_FEATURED-ITEM",
        featuredItem: albumInfo,
      });

      dispatch({
        type: "SET_ITEMS-LIST-SELECTED",
        itemsListSelected: albumTracks,
      });
    }
    getAlbumInfo(albumId);
  };

  // Rendering new releases
  const renderingNewReleases = () => {
    const newReleasesList = newReleasesData.map((album) => {
      return (
        <NewReleaseAlbum
          key={album.id}
          id={album.id}
          type={album.type}
          category={rowTitle}
          albumImage={album.albumImage}
          albumName={album.albumName}
          onNewReleaseClick={handleNewReleaseClick}
        />
      );
    });
    return newReleasesList;
  };

  return (
    <div className="homeNewReleases">
      <h1 className="homeNewReleases__title">{rowTitle}</h1>
      <div className="homeNewReleases__albums">{renderingNewReleases()}</div>
    </div>
  );
}

export default HomeNewReleases;
