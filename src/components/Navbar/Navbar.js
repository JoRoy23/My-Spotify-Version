import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import NavbarOptions from "./NavbarOptions";
import PersonalPlaylists from "./PersonalPlaylists";
import AddPlaylist from "./AddPlaylist";
import SpotifyLogo from "../../images/spotifyLogo.png";
import "../../css/Navbar.css";

function Navbar() {
  const [{ mobileFooterVisible }] = useContext(SpotifyContext);

  // Set the border radius of the top of the navigation bar
  const navbarBorder = () => {
    return mobileFooterVisible ? "navbar navbar--squareBorder" : "navbar";
  };

  return (
    <header className={navbarBorder()}>
      <img className="navbar__logo" src={SpotifyLogo} alt="Spotify logo" />
      <NavbarOptions />
      <PersonalPlaylists />
      <AddPlaylist />
    </header>
  );
}

export default Navbar;
