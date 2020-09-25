import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import "../../css/NavbarOptions.css";

function NavbarOptions() {
  return (
    <React.Fragment>
      <ul className="navbarOptions">
        <li className="navbarOptions__list">
          <NavLink
            exact
            className="navbarOptions__item"
            activeClassName="navbarOptions__item--selected"
            to="/"
          >
            <HomeIcon className="navbarOptions__icon" />
            <h2 className="navbarOptions__text">Home</h2>
          </NavLink>
        </li>
        <li className="navbarOptions__list">
          <NavLink
            className="navbarOptions__item"
            activeClassName="navbarOptions__item--selected"
            to="/search"
          >
            <SearchIcon className="navbarOptions__icon" />
            <h2 className="navbarOptions__text">Search</h2>
          </NavLink>
        </li>
        <li className="navbarOptions__list">
          <NavLink
            className="navbarOptions__item"
            activeClassName="navbarOptions__item--selected"
            to="/library"
          >
            <LibraryMusicIcon className="navbarOptions__icon" />
            <h2 className="navbarOptions__text">Library</h2>
          </NavLink>
        </li>
        <li className="navbarOptions__list">
          <NavLink
            className="navbarOptions__item"
            activeClassName="navbarOptions__item--selected"
            to="/spotify"
          >
            <LibraryMusicIcon className="navbarOptions__icon" />
            <h2 className="navbarOptions__text">Spotify</h2>
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default NavbarOptions;
