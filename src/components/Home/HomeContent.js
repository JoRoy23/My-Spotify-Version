import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import Header from "./Header";
import PlaylistRow from "./PlaylistRow";
import HomeRecentlyPlayed from "./HomeRecentlyPlayed";
import HomeNewReleases from "./HomeNewReleases";
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
      <PlaylistRow
        playlistData={state.featuredPlaylists}
        playlistRowTitle={"Popular playlists"}
      />
      <PlaylistRow playlistData={state.popPlaylists} playlistRowTitle={"Pop"} />
      <PlaylistRow
        playlistData={state.dancePlaylists}
        playlistRowTitle={"Dance/Electronic"}
      />
      <PlaylistRow
        playlistData={state.hiphopPlaylists}
        playlistRowTitle={"Hip-hop"}
      />
      <PlaylistRow
        playlistData={state.rockPlaylists}
        playlistRowTitle={"Rock"}
      />
      <PlaylistRow
        playlistData={state.countryPlaylists}
        playlistRowTitle={"Country"}
      />
    </div>
  );
}

export default HomeContent;
