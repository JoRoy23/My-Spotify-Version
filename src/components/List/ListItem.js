import React from "react";
import { convertMilliseconds } from "../../helpers";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import GetAppIcon from "@material-ui/icons/GetApp";
import CheckIcon from "@material-ui/icons/Check";
import "../../css/ListItem.css";

function ListItem({ itemObject, onListItemClick }) {
  return itemObject.type === "track" ? (
    <div
      className="listItem"
      onClick={() => {
        onListItemClick(itemObject);
      }}
    >
      <div className="listItem__left">
        {itemObject.from === "playlist" ? (
          <img
            className="listItem__image"
            src={itemObject.albumImage}
            alt={itemObject.albumName}
          />
        ) : (
          ""
        )}
        <div className="listItem__informations">
          <h4 className="listItem__song">{itemObject.trackName}</h4>
          <p className="listItem__artist">{itemObject.artistsName}</p>
        </div>
      </div>
      <MoreHorizIcon className="listItem__icon" />
    </div>
  ) : (
    <div
      className="listItem"
      onClick={() => {
        onListItemClick(itemObject);
      }}
    >
      <div className="listItem__mainContainer">
        <div className="listItem__topContainer">
          <div className="topContainer__left">
            <img
              className="listItem__image"
              src={itemObject.podcastImages}
              alt={itemObject.podcastName}
            />
            <div className="topContainer__infos">
              <h2 className="listItem__name">{itemObject.podcastName}</h2>
              <p className="listItem__publisher">
                {itemObject.podcastPublisher}
              </p>
            </div>
          </div>
          <MoreHorizIcon className="listItem__icon" />
        </div>
        <p className="listItem__description">{itemObject.podcastDescription}</p>
        <div className="listItem__bottomContainer">
          <div className="bottomContainer__left">
            <PlayArrowIcon className="listItem__icon" />
            <p className="listItem__duration">
              {convertMilliseconds(itemObject.podcastDuration)} MINS
            </p>
          </div>
          <div className="bottomContainer__right">
            <CheckIcon className="listItem__icon" />
            <GetAppIcon className="listItem__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
