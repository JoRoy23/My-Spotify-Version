import React from "react";
import { NavLink } from "react-router-dom";
import { customizePlaylistUrl } from "../../helpers";
import "../../css/MyPlaylistName.css";

function MyPlaylistName({ id, name, onPersonalPlaylistClick }) {
  return (
    <NavLink
      className="myPlaylistName"
      to={customizePlaylistUrl("personal-playlist", name)}
      onClick={() => {
        onPersonalPlaylistClick(id);
      }}
    >
      {name}
    </NavLink>
  );
}

export default MyPlaylistName;
