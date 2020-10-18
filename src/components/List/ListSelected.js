import React, { useContext } from "react";
import ListItem from "./ListItem";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import FeaturedItem from "./FeaturedItem";
import "../../css/ListSelected.css";

function ListSelected({ history }) {
  const [
    { mobileFooterVisible, itemsListSelected, featuredItem },
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
    return mobileFooterVisible
      ? "listSelected__itemsContainer listSelected__itemsContainer--bigPadding"
      : "listSelected__itemsContainer";
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
      <div className={setItemsContainerPadding()}>{renderingListItems()}</div>
    </div>
  );
}

export default ListSelected;
