import React from "react";
import { getArtists, truncate, getDateYear } from "../../helpers";
import musicNote from "../../images/musicNote.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../../css/PlaylistPageHeader.css";

function PlaylistPageHeader({
  featuredCoverName,
  featuredCoverImage,
  featuredFollowers,
  featuredArtistName,
  featuredOwner,
  featuredType,
  featuredReleaseDate,
  featuredNbOfTracks,
}) {
  // Render the subtitle under the cover for an album selected
  const renderingSubtitleForPlaylist = () => {
    return featuredType === "album" ? (
      ""
    ) : (
      <p className="header__playlistFollowers">
        BY {featuredOwner} <span className="header__dot">•</span>{" "}
        {featuredFollowers} FOLLOWERS
      </p>
    );
  };

  // Render the subtitle under the cover for a playlist selected
  const renderingSubtitleForAlbum = () => {
    return featuredType === "album" ? (
      <p className="header__playlistNbTracks">
        {getDateYear(featuredReleaseDate)}{" "}
        <span className="header__dot">•</span> {getArtists(featuredArtistName)}{" "}
        <span className="header__dot">•</span> {featuredNbOfTracks} tracks
      </p>
    ) : (
      ""
    );
  };
  return (
    <header className="playlistPageHeader">
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
          src={
            featuredCoverImage === undefined || featuredCoverImage.length === 0
              ? musicNote
              : featuredCoverImage
          }
          alt={featuredCoverName}
        />
        <h2 className="header__playlistName">
          {window.innerWidth < 1100
            ? truncate(featuredCoverName, 20)
            : featuredCoverName}
        </h2>
        {renderingSubtitleForPlaylist()}
        {renderingSubtitleForAlbum()}
        <a className="header__playButton">PLAY</a>
      </div>
    </header>
  );
}

export default PlaylistPageHeader;
