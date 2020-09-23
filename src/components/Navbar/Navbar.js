import React from "react";
import NavbarOptions from "./NavbarOptions";
import NavbarPlaylists from "./NavbarPlaylists";
import "../../css/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <NavbarOptions />
      <NavbarPlaylists />
    </header>
  );
};

export default Navbar;
