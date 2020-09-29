import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import SearchIcon from "@material-ui/icons/Search";
import "../../css/Header.css";

function Header() {
  const [{ user }] = useContext(SpotifyContext);
  return (
    <header className="header">
      <div className="header__left">
        <SearchIcon className="header__icon" />
        <input placeholder="Search for Artists, Songs or Albums" type="text" />
      </div>
      <div className="header__right">
        <img
          className="header__avatar"
          src={user.userAvatar[0]?.url}
          alt={user.userName}
        />
        <h4 className="header__username">{user.userName}</h4>
      </div>
    </header>
  );
}

export default Header;
