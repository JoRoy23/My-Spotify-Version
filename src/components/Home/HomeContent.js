import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import Header from "./Header";
import HomeFeaturedPlaylists from "./HomeFeaturedPlaylists";
import HomeRecentlyPlayed from "./HomeRecentlyPlayed";
import HomeNewReleases from "./HomeNewReleases";
import HomePopPlaylists from "./HomePopPlaylists";
import HomeDancePlaylists from "./HomeDancePlaylists";
import HomeHiphopPlaylists from "./HomeHiphopPlaylists";
import HomeRockPlaylists from "./HomeRockPlaylists";
import HomeCountryPlaylists from "./HomeCountryPlaylists";
import SettingsIcon from "@material-ui/icons/Settings";
import "../../css/HomeContent.css";

function HomeContent() {
  const [state] = useContext(SpotifyContext);
  return (
    <div className="homeContent">
      <Header />
      <div className="setting__container">
        <SettingsIcon className="setting__icon" />
      </div>
      <HomeNewReleases newReleases={state.newReleases} />
      <HomeRecentlyPlayed recentlyPlayed={state.recentlyPlayed} />
      <HomeFeaturedPlaylists featuredPlaylists={state.featuredPlaylists} />
      <HomePopPlaylists popPlaylists={state.popPlaylists} />
      <HomeDancePlaylists dancePlaylists={state.dancePlaylists} />
      <HomeHiphopPlaylists hiphopPlaylists={state.hiphopPlaylists} />
      <HomeRockPlaylists rockPlaylists={state.rockPlaylists} />
      <HomeCountryPlaylists countryPlaylists={state.countryPlaylists} />
    </div>
  );
}

export default HomeContent;
