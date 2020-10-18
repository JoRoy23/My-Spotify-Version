import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { spotifyApi } from "../../App";
import { getArtists } from "../../helpers";
import RowItem from "./RowItem";
import "../../css/HomeRow.css";

function HomeRow({ rowData, rowTitle }) {
  const [{ mobileFooterVisible }, dispatch] = useContext(SpotifyContext);

  const handleItemClick = (itemId, itemType) => {
    // Fetch the informations of the item depending on is type (playlist, album, podcast)
    if (itemType === "playlist") {
      // Informations about the playlists and the tracks
      async function getPlaylist(_id) {
        const playlistInfoResponse = await spotifyApi.getPlaylist(_id);
        // Playlists informations
        const {
          id,
          type,
          followers,
          name,
          owner,
          images,
        } = playlistInfoResponse;
        const playlistInfo = {
          id: id,
          type: type,
          playlistFollowers: followers.total,
          playlistName: name,
          playlistOwner: owner.display_name,
          playlistImage: images[0].url,
        };

        const playlistTracks = playlistInfoResponse.tracks.items.map(
          (playlistTrack) => {
            // Playlists tracks informations
            const track = playlistTrack.track;
            const album = playlistTrack.track?.album;
            const artists = playlistTrack.track?.artists;

            return {
              id: track?.id,
              type: track?.type,
              trackName: track?.name,
              artistsName: getArtists(artists),
              albumImage: album?.images[0]?.url,
              albumName: album?.name,
              from: "playlist",
            };
          }
        );

        dispatch({
          type: "SET_FEATURED-ITEM",
          featuredItem: playlistInfo,
        });

        dispatch({
          type: "SET_ITEMS-LIST-SELECTED",
          itemsListSelected: playlistTracks,
        });
      }
      getPlaylist(itemId);
    }
    // Informations about the albums and the tracks
    else if (itemType === "album") {
      async function getAlbum(_id) {
        const albumInfoResponse = await spotifyApi.getAlbum(_id);
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
      getAlbum(itemId);
    }
    // Informations about the show and the episodes
    else if (itemType === "show") {
      async function getPodcasts(_id) {
        const podcastsInfoResponse = await spotifyApi.getShow(_id);
        // Show informations
        const {
          id,
          type,
          name,
          images,
          description,
          publisher,
          total_episodes,
        } = podcastsInfoResponse;
        const podcastInfo = {
          id: id,
          type: type,
          podcastName: name,
          podcastImage: images[0].url,
          podcastDescription: description,
          podcastPublisher: publisher,
          podcastTotalEpisodes: total_episodes,
        };

        const podcastEpisodes = podcastsInfoResponse.episodes.items.map(
          (podcastsEpidsodes) => {
            console.log(podcastsEpidsodes);
            // Show episodes informations
            const {
              id,
              type,
              name,
              description,
              images,
              duration_ms,
            } = podcastsEpidsodes;
            return {
              id: id,
              type: type,
              podcastName: name,
              podcastDescription: description,
              podcastImages: images[0].url,
              podcastDuration: duration_ms,
              podcastPublisher: publisher,
              from: "show",
            };
          }
        );

        dispatch({
          type: "SET_FEATURED-ITEM",
          featuredItem: podcastInfo,
        });

        dispatch({
          type: "SET_ITEMS-LIST-SELECTED",
          itemsListSelected: podcastEpisodes,
        });
      }
      getPodcasts(itemId);
    }
  };

  // Set the bottom margin of the last row
  const setLastRowMargin = () => {
    return mobileFooterVisible ? "homeRow homeRow--updated" : "homeRow";
  };

  // Rendering every items of each row
  const renderingRowItems = () => {
    const rowItems = rowData.map((item) => {
      return (
        <RowItem
          key={item.id}
          id={item.id}
          itemObject={item}
          category={rowTitle}
          onItemClick={handleItemClick}
        />
      );
    });
    return rowItems;
  };

  return (
    <div className={setLastRowMargin()}>
      <h1 className="homeRow__title">{rowTitle}</h1>
      <div className="homeRow__covers">{renderingRowItems()}</div>
    </div>
  );
}

export default HomeRow;
