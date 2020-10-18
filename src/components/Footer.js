import React, { useContext } from "react";
import { truncate } from "../helpers";
import { SpotifyContext } from "../ContextApi/SpotifyState";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import LoopIcon from "@material-ui/icons/Loop";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PauseIcon from "@material-ui/icons/Pause";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import Slider from "@material-ui/core/Slider";
import "../css/Footer.css";

const Footer = ({ onPlayButtonClick, footerVisibility }) => {
  const [{ isPlaying, itemSelected }] = useContext(SpotifyContext);

  return (
    <footer className={footerVisibility}>
      <div className="footer__left">
        {itemSelected.type === "track" ? (
          <React.Fragment>
            <img
              className="footer__image"
              src={
                itemSelected.albumImage
                  ? itemSelected.albumImage
                  : itemSelected.featureImage
              }
              alt={itemSelected.albumName}
            />
            <div className="footer__songInfo">
              <h4 className="footer__song">{itemSelected.trackName}</h4>
              <p className="footer__artists">{itemSelected.artistsName}</p>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <img
              className="podcast__image"
              src={
                itemSelected.podcastImages
                  ? itemSelected.podcastImages
                  : itemSelected.featureImage
              }
              alt={itemSelected.podcastName}
            />
            <div className="podcast__info">
              <h4 className="podcast__name">{itemSelected.podcastsName}</h4>
              <p className="podcast__publisher">
                {itemSelected.podcastsPublisher}
              </p>
            </div>
          </React.Fragment>
        )}
      </div>
      <div className="footer__center">
        <FavoriteIcon className="footer__button footer__button--small" />
        <SkipPreviousIcon className="footer__button footer__button--medium" />
        {isPlaying ? (
          <PauseIcon
            className="footer__button footer__button--pause"
            onClick={onPlayButtonClick}
          />
        ) : (
          <PlayArrowIcon
            className="footer__button footer__button--play"
            onClick={onPlayButtonClick}
          />
        )}

        <SkipNextIcon className="footer__button footer__button--medium" />
        <LoopIcon className="footer__button footer__button--small" />
      </div>
      <div className="footer__right">
        <PlaylistPlayIcon className="footer__icon" />
        <VolumeUpIcon className="footer__icon" />
        <Slider className="footer__slider" />
      </div>
    </footer>
  );
};

export default Footer;
