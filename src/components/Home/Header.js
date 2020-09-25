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
          src={user?.images[0].url}
          alt={user?.display_name}
        />
        <h4 className="header__username">{user?.display_name}</h4>
      </div>
    </header>
  );
}

export default Header;
