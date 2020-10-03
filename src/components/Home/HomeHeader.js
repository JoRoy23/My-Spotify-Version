import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import "../../css/HomeHeader.css";

function HomeHeader() {
  const [{ user }] = useContext(SpotifyContext);

  return (
    <header className="homeHeader">
      <div className="homeHeader__settingContainer">
        <SettingsIcon className="homeHeader__settingIcon" />
      </div>
      <div className="homeHeader__left">
        <SearchIcon className="homeHeader__inputIcon" />
        <input placeholder="Search for Artists, Songs or Albums" type="text" />
      </div>
      <div className="homeHeader__right">
        <img
          className="homeHeader__avatar"
          src={user.userAvatar[0]?.url}
          alt={user.userName}
        />
        <h4 className="homeHeader__username">{user.userName}</h4>
      </div>
    </header>
  );
}

export default HomeHeader;
