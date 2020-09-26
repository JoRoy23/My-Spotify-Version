import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import NavbarOptions from "./NavbarOptions";
import NavbarPlaylists from "./NavbarPlaylists";
import AddPlaylist from "./AddPlaylist";
import SpotifyLogo from "../../images/spotifyLogo.png";
import "../../css/Navbar.css";

function Navbar() {
  const [{ myPlaylists, songSelected }] = useContext(SpotifyContext);

  // Style the border of the navigation bar
  const styleNavbar = () => {
    const navbarStyle =
      songSelected.length !== 0 ? "navbar--withoutRoundBorder" : "";

    return navbarStyle;
  };

  return (
    <header className={`navbar ${styleNavbar()}`}>
      <img className="navbar__logo" src={SpotifyLogo} alt="Spotify logo" />
      <NavbarOptions />
      <NavbarPlaylists myPlaylists={myPlaylists} />
      <AddPlaylist />
    </header>
  );
}

export default Navbar;
