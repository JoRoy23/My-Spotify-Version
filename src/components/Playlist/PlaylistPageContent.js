import React, { useContext } from "react";
import SongsRow from "./SongsRow";
import { getArtists, truncate } from "../../helpers";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import PlaylistPageHeader from "./PlaylistPageHeader";
import musicNote from "../../images/musicNote.png";
import "../../css/PlaylistPageContent.css";

function PlaylistPageContent() {
  const [
    { songSelected, tracksOfPlaylistSelected, featuredOfPlaylistSelected },
    dispatch,
  ] = useContext(SpotifyContext);

  console.log(featuredOfPlaylistSelected);
  // Dispatch an action after a playlist track click
  const handlePlaylistSongClick = (trackObject) => {
    dispatch({
      type: "SET_SONG-SELECTED",
      songSelected: trackObject,
    });
  };

  // Define the bottom padding of the songs container when the song selected bar is visible
  const styleSongsContainer = () => {
    return songSelected.length !== 0
      ? "playlistPageContent__songsContainer--bigPadding"
      : "";
  };

  // Rendering each song of the featured playlist selected
  const renderingSongsRow = () => {
    const tracksList = tracksOfPlaylistSelected?.map((track) => {
      return (
        <SongsRow
          key={track.trackId}
          trackId={track.trackId}
          trackName={
            window.innerWidth < 600
              ? truncate(track.trackName, 27)
              : track.trackName
          }
          albumName={track.albumName}
          albumImage={track.albumImage}
          artistsName={
            window.innerWidth < 600
              ? truncate(getArtists(track.artistsName), 27)
              : getArtists(track.artistsName)
          }
          onPlaylistSongClick={handlePlaylistSongClick}
        />
      );
    });
    return tracksList;
  };

  return (
    <div className="playlistPageContent">
      <PlaylistPageHeader
        featuredCoverImage={
          featuredOfPlaylistSelected.featuredCoverImage
            ? featuredOfPlaylistSelected.featuredCoverImage[0]?.url
            : musicNote
        }
        featuredCoverName={featuredOfPlaylistSelected.featuredCoverName}
        featuredFollowers={
          featuredOfPlaylistSelected.featuredCoverFollowers?.total
        }
        featuredOwner={featuredOfPlaylistSelected.featuredCoverOwner?.display_name.toUpperCase()}
        featuredType={featuredOfPlaylistSelected.featuredType}
        featuredReleaseDate={featuredOfPlaylistSelected.featuredReleaseDate}
        featuredNbOfTracks={featuredOfPlaylistSelected.featuredNbOfTracks}
        featuredArtistName={featuredOfPlaylistSelected.featuredArtistName}
      />
      <div
        className={`playlistPageContent__songsContainer ${styleSongsContainer()}`}
      >
        {renderingSongsRow()}
      </div>
    </div>
  );
}

export default PlaylistPageContent;
