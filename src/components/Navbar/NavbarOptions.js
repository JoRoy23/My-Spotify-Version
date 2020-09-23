import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import "../../css/NavbarOptions.css";

const NavbarOptions = () => {
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
            <i>
              <HomeIcon style={{ fontSize: "20px" }} />
            </i>
            <span>Home</span>
          </NavLink>
        </li>
        <li className="navbarOptions__list">
          <NavLink
            className="navbarOptions__item"
            activeClassName="navbarOptions__item--selected"
            to="/search"
          >
            <i>
              <SearchIcon style={{ fontSize: "20px" }} />
            </i>
            <span>Search</span>
          </NavLink>
        </li>
        <li className="navbarOptions__list">
          <NavLink
            className="navbarOptions__item"
            activeClassName="navbarOptions__item--selected"
            to="/library"
          >
            <i>
              <LibraryMusicIcon style={{ fontSize: "20px" }} />
            </i>
            <span>Library</span>
          </NavLink>
        </li>
        <li className="navbarOptions__list">
          <NavLink
            className="navbarOptions__item"
            activeClassName="navbarOptions__item--selected"
            to="/spotify"
          >
            <i>
              <LibraryMusicIcon style={{ fontSize: "20px" }} />
            </i>
            <span>Spotify</span>
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavbarOptions;
