import React, { useContext } from "react";
import HomeFeaturedPlaylists from "./HomeFeaturedPlaylists";
import HomeRecentlyPlayed from "./HomeRecentlyPlayed";
import HomeNewReleases from "./HomeNewReleases";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import SettingsIcon from "@material-ui/icons/Settings";
import "../../css/HomeContent.css";

function HomeContent() {
  const [{ featuredPlaylists, recentlyPlayed, newReleases }] = useContext(
    SpotifyContext
  );
  return (
    <div className="homeContent">
      <div className="setting__container">
        <a className="setting">
          <SettingsIcon style={{ fontSize: "16px" }} />
        </a>
      </div>
      <HomeNewReleases newReleases={newReleases} />
      <HomeRecentlyPlayed recentlyPlayed={recentlyPlayed} />
      <HomeFeaturedPlaylists featuredPlaylists={featuredPlaylists} />
    </div>
  );
}

export default HomeContent;
