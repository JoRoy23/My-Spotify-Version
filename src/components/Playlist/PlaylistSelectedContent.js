import React, { useContext } from "react";
import SongsRow from "./SongsRow";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../../css/PlaylistSelectedContent.css";

function PlaylistSelectedContent() {
  const [{ playlistSelected }] = useContext(SpotifyContext);

  // Rendering each song of the featured playlist selected
  const renderingTracksRow = () => {
    const songsList = playlistSelected.items?.map((song) => {
      return (
        <SongsRow
          key={song.track.id}
          id={song.track.id}
          songName={song.track.name}
          artist={song.track.artists[0].name}
          albumImage={song.track.album.images[0].url}
        />
      );
    });
    return songsList;
  };
  return (
    <div className="playlistSelectedContent">
      <header className="playlistSelectedContent__header">
        <ArrowBackIosIcon className="header__icons" />
        <div className="header__right">
          <FavoriteIcon className="header__icons" />
          <MoreHorizIcon className="header__icons" />
        </div>
      </header>
      {renderingTracksRow()}
      {/* <PlaylistSelectedCover /> */}
    </div>
  );
}

export default PlaylistSelectedContent;
