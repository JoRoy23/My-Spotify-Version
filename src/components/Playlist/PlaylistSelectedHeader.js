import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../../css/PlaylistSelectedHeader.css";

function PlaylistSelectedHeader({
  playlistName,
  playlistImage,
  playlistFollowers,
}) {
  return (
    <header className="playlistSelectedHeader">
      <div className="header__iconsContainer">
        <ArrowBackIosIcon className="header__icons" />
        <div className="header__right">
          <FavoriteIcon className="header__icons" />
          <MoreHorizIcon className="header__icons" />
        </div>
      </div>
      <div className="header__playlistCover">
        <img
          className="header__coverImage"
          src={playlistImage ? playlistImage[0]?.url : ""}
          alt={playlistName}
        />
        <h2 className="header__playlistName">{playlistName}</h2>
        <p className="header__playlistFollowers">
          BY SPOTIFY <span className="header__dot">•</span> {playlistFollowers}{" "}
          FOLLOWERS
        </p>
        <a className="header__playButton">PLAY</a>
      </div>
    </header>
  );
}

export default PlaylistSelectedHeader;
