import React, { useContext } from "react";
import ListItem from "./ListItem";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import FeaturedItem from "./FeaturedItem";
import "../../css/ListSelected.css";

function ListSelected({ history }) {
  const [
    { itemSelected, itemsListSelected, featuredItem },
    dispatch,
  ] = useContext(SpotifyContext);

  // Dispatch an action when a list item is selected
  const handleListItemClick = (itemObject) => {
    dispatch({
      type: "SET_ITEM-SELECTED",
      itemSelected: itemObject,
    });

    dispatch({
      type: "SET_FOOTER-STATUS",
      mobileFooterVisible: true,
    });
  };

  // Define the bottom padding of the items container
  const setItemsContainerPadding = () => {
    return itemSelected.length !== 0
      ? "listSelected__tracksContainer listSelected__tracksContainer--bigPadding"
      : "listSelected__tracksContainer";
  };

  // Rendering each items of the list selected (playlists, albums, podcasts,...)
  const renderingListItems = () => {
    const listItems = itemsListSelected?.map((item) => {
      return (
        <ListItem
          key={item.id}
          id={item.id}
          itemObject={item}
          onListItemClick={handleListItemClick}
        />
      );
    });
    return listItems;
  };

  return (
    <div className="listSelected">
      <FeaturedItem
        id={featuredItem.id}
        featuredItemObject={featuredItem}
        historyObject={history}
      />
      <div
        className={`listSelected__tracksContainer ${setItemsContainerPadding()}`}
      >
        {renderingListItems()}
      </div>
    </div>
  );
}

export default ListSelected;
