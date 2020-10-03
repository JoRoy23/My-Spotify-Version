import React from "react";
import { NavLink } from "react-router-dom";
import { customizeUrl } from "../../helpers";
import "../../css/RowItem.css";

function RowItem({ id, itemObject, category, onItemClick }) {
  // Rendering the items on each row
  const renderingRowItem = () => {
    if (itemObject.type === "playlist") {
      return (
        <div className="rowItem">
          <NavLink
            to={customizeUrl(
              itemObject.type,
              category,
              itemObject.playlistName
            )}
          >
            <img
              className="rowItem__cover"
              src={itemObject.playlistImage}
              alt={itemObject.playlistName}
              onClick={() => {
                onItemClick(id, itemObject.type);
              }}
            />
          </NavLink>
          <p className="rowItem__description">
            {itemObject.playlistDescription}
          </p>
        </div>
      );
    } else if (itemObject.type === "show") {
      return (
        <div className="rowItem">
          <NavLink
            to={customizeUrl(itemObject.type, category, itemObject.podcastName)}
          >
            <img
              className="rowItem__cover"
              src={itemObject.podcastImage}
              alt={itemObject.podcastName}
              onClick={() => {
                onItemClick(id, itemObject.type);
              }}
            />
          </NavLink>
          <h4 className="rowItem__name">{itemObject.podcastName}</h4>
          <h4 className="rowItem__publisher">{itemObject.podcastPublisher}</h4>
        </div>
      );
    } else if (itemObject.type === "album") {
      return (
        <div className="rowItem">
          <NavLink
            to={customizeUrl(itemObject.type, category, itemObject.albumName)}
          >
            <img
              className="rowItem__cover rowItem__cover--round"
              src={itemObject.albumImage}
              alt={itemObject.albumName}
              onClick={() => {
                onItemClick(id, itemObject.type);
              }}
            />
          </NavLink>
          <h4 className="rowItem__artists">{itemObject.albumArtists}</h4>
        </div>
      );
    }
  };

  return renderingRowItem();
}

export default RowItem;
