import React, { useContext } from "react";
import SongsRow from "./SongsRow";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import PlaylistSelectedHeader from "./PlaylistSelectedHeader";
import "../../css/PlaylistSelectedContent.css";

function PlaylistSelectedContent() {
  const [
    { songSelected, songsOfPlaylistSelected, infoOfPlaylistSelected },
    dispatch,
  ] = useContext(SpotifyContext);

  // Dispatch an action after a playlist track click
  const handlePlaylistSongClick = (song) => {
    dispatch({
      type: "SET_SONG-SELECTED",
      songSelected: song,
    });
  };

  // Define the bottom padding of the songs container when the song selected bar is visible
  const styleSongsContainer = () => {
    return songSelected.length !== 0 ? "songsRow__container--bigPadding" : "";
  };

  // Rendering each song of the featured playlist selected
  const renderingSongsRow = () => {
    const songsList = songsOfPlaylistSelected.items?.map((song) => {
      return (
        <SongsRow
          key={song.track.id}
          id={song.track.id}
          song={song}
          album={song.track.album.name}
          onPlaylistSongClick={handlePlaylistSongClick}
        />
      );
    });
    return songsList;
  };

  return (
    <div className="playlistSelectedContent">
      <PlaylistSelectedHeader
        playlistImage={infoOfPlaylistSelected?.images}
        playlistName={infoOfPlaylistSelected?.name}
        playlistFollowers={infoOfPlaylistSelected.followers?.total}
      />
      <div className={`songsRow__container ${styleSongsContainer()}`}>
        {renderingSongsRow()}
      </div>
    </div>
  );
}

export default PlaylistSelectedContent;
