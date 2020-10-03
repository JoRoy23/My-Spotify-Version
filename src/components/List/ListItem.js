import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
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
    ""
  );
}

export default ListItem;
