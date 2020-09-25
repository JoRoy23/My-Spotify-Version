import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import NavbarOptions from "./NavbarOptions";
import NavbarPlaylists from "./NavbarPlaylists";
import AddPlaylist from "./AddPlaylist";
import SpotifyLogo from "../../images/spotifyLogo.png";
import "../../css/Navbar.css";

function Navbar() {
  const [{ myPlaylists }] = useContext(SpotifyContext);
  return (
    <header className="navbar">
      <img className="navbar__logo" src={SpotifyLogo} alt="Spotify logo" />
      <NavbarOptions />
      <NavbarPlaylists myPlaylists={myPlaylists} />
      <AddPlaylist />
    </header>
  );
}

export default Navbar;
