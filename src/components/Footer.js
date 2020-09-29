import React, { useContext } from "react";
import { truncate, getArtists } from "../helpers";
import { SpotifyContext } from "../ContextApi/SpotifyState";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import LoopIcon from "@material-ui/icons/Loop";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PauseIcon from "@material-ui/icons/Pause";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import musicNote from "../images/musicNote.png";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import Slider from "@material-ui/core/Slider";
import "../css/Footer.css";

const Footer = () => {
  const [{ isPlaying, songSelected }, dispatch] = useContext(SpotifyContext);

  const handlePlayClick = () => {
    dispatch({
      type: "SET_PLAY-BUTTON",
      isPlaying: isPlaying,
    });
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__image"
          src={songSelected.albumImage ? songSelected.albumImage : musicNote}
          alt={songSelected.albumName}
        />
        <div className="footer__songInfo">
          <h4 className="footer__song">
            {window.innerWidth < 1150
              ? truncate(songSelected.trackName, 22)
              : songSelected.trackName}
          </h4>
          <p className="footer__artists">
            {window.innerWidth < 1150
              ? truncate(songSelected.artistsName, 22)
              : songSelected.artistsName}
          </p>
        </div>
      </div>
      <div className="footer__center">
        <FavoriteIcon className="footer__button footer__button--small" />
        <SkipPreviousIcon className="footer__button footer__button--medium" />
        {isPlaying ? (
          <PauseIcon
            className="footer__button footer__button--pause"
            onClick={handlePlayClick}
          />
        ) : (
          <PlayArrowIcon
            className="footer__button footer__button--play"
            onClick={handlePlayClick}
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
    </div>
  );
};

export default Footer;
