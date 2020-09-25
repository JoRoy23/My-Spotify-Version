import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "../../css/AddPlaylist.css";

function AddPlaylist() {
  return (
    <div className="addPlaylist">
      <AddIcon className="addPlaylist__icon" />
      <p className="addPlaylist__title">New Playlist</p>
    </div>
  );
}

export default AddPlaylist;
