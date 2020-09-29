import React from "react";
import { NavLink } from "react-router-dom";
import { customizePlaylistUrl } from "../../helpers";
import "../../css/PersonalPlaylistName.css";

function PersonalPlaylistName({
  userPlaylistId,
  userPlaylistName,
  onPersonalPlaylistClick,
}) {
  return (
    <NavLink
      className="personalPlaylistName"
      to={customizePlaylistUrl("", userPlaylistName)}
      onClick={() => {
        onPersonalPlaylistClick(userPlaylistId);
      }}
    >
      {userPlaylistName}
    </NavLink>
  );
}

export default PersonalPlaylistName;
