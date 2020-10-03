import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "../../css/AddPlaylist.css";

function AddPlaylist() {
  return (
    <div className="addPlaylist">
      <div className="addPlaylist__container">
        <AddIcon className="addPlaylist__icon" />
        <p className="addPlaylist__title">New Playlist</p>
      </div>
    </div>
  );
}

export default AddPlaylist;
