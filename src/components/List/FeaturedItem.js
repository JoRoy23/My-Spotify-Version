import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import { truncate, getDateYear } from "../../helpers";
import musicNote from "../../images/musicNote.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../../css/FeaturedItem.css";

function FeaturedItem({ featuredItemObject, historyObject }) {
  // Rendering the featured item
  const renderingFeaturedItem = () => {
    if (featuredItemObject.type === "playlist") {
      return (
        <div className="featuredItem">
          <div className="featuredItem__header">
            <ArrowBackIosIcon
              className="featuredItem__icons"
              onClick={historyObject.goBack}
            />
            <div className="featuredItem__right">
              <FavoriteIcon className="featuredItem__icons" />
              <MoreHorizIcon className="featuredItem__icons" />
            </div>
          </div>
          <div className="featuredItem__info">
            <img
              className="featuredItem__cover"
              src={
                featuredItemObject.playlistImage === undefined ||
                featuredItemObject.playlistImage.length === 0
                  ? musicNote
                  : featuredItemObject.playlistImage
              }
              alt={featuredItemObject.playlistName}
            />
            <h2 className="featuredItem__name">
              {featuredItemObject.playlistName}
            </h2>
            <p className="featuredItem__nbFollowers">
              BY {featuredItemObject.playlistOwner.toUpperCase()}{" "}
              <span className="featuredItem__dot">•</span>{" "}
              {featuredItemObject.playlistFollowers} FOLLOWERS
            </p>
            <button className="featuredItem__playButton">PLAY</button>
          </div>
        </div>
      );
    } else if (featuredItemObject.type === "album") {
      return (
        <div className="featuredItem">
          <div className="featuredItem__header">
            <ArrowBackIosIcon
              className="featuredItem__icons"
              onClick={historyObject.goBack}
            />
            <div className="featuredItem__right">
              <FavoriteIcon className="featuredItem__icons" />
              <MoreHorizIcon className="featuredItem__icons" />
            </div>
          </div>
          <div className="featuredItem__info">
            <img
              className="featuredItem__cover"
              src={
                featuredItemObject.albumImage === undefined ||
                featuredItemObject.albumImage.length === 0
                  ? musicNote
                  : featuredItemObject.albumImage
              }
              alt={featuredItemObject.albumName}
            />
            <h2 className="featuredItem__name">
              {featuredItemObject.albumName}
            </h2>
            <p className="featuredItem__nbTracks">
              {getDateYear(featuredItemObject.albumReleaseDate)}{" "}
              <span className="featuredItem__dot">•</span>{" "}
              {featuredItemObject.albumArtists}{" "}
              <span className="featuredItem__dot">•</span>{" "}
              {featuredItemObject.albumNbOfTracks} tracks
            </p>
            <button className="featuredItem__playButton">PLAY</button>
          </div>
        </div>
      );
    } else if (featuredItemObject.type === "show") {
      return (
        <div className="featuredItem">
          <div className="featuredItem__header">
            <ArrowBackIosIcon
              className="featuredItem__icons"
              onClick={historyObject.goBack}
            />
            <div className="featuredItem__right">
              <FavoriteIcon className="featuredItem__icons" />
              <MoreHorizIcon className="featuredItem__icons" />
            </div>
          </div>
          <div className="featuredItem__info">
            <img
              className="featuredItem__cover"
              src={
                featuredItemObject.podcastImage === undefined ||
                featuredItemObject.podcastImage.length === 0
                  ? musicNote
                  : featuredItemObject.podcastImage
              }
              alt={featuredItemObject.podcastName}
            />
            <h2 className="featuredItem__name">
              {featuredItemObject.podcastName}
            </h2>
            <p className="featuredItem__description">
              {featuredItemObject.podcastDescription}
            </p>
            <p className="featuredItem__nbEpisodes">
              {featuredItemObject.podcastPublisher}{" "}
              <span className="featuredItem__dot">•</span>{" "}
              {featuredItemObject.podcastTotalEpisodes} episodes
            </p>
            <button className="featuredItem__playButton">PLAY</button>
          </div>
        </div>
      );
    }
  };
  return <React.Fragment>{renderingFeaturedItem()}</React.Fragment>;
}

export default FeaturedItem;
