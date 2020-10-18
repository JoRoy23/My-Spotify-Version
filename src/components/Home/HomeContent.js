import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import HomeHeader from "./HomeHeader";
import HomeRow from "./HomeRow";
import HomeNewReleases from "./HomeNewReleases";
import "../../css/HomeContent.css";

function HomeContent() {
  const [state] = useContext(SpotifyContext);

  return (
    <div className="homeContent">
      <HomeHeader />
      <HomeNewReleases
        rowTitle={"New releases"}
        newReleasesData={state.newReleases}
      />
      <HomeRow rowTitle={"Recently played"} rowData={state.recentlyPlayed} />
      <HomeRow
        rowTitle={"Popular playlists"}
        rowData={state.featuredPlaylists}
      />
      <HomeRow rowTitle={"Pop"} rowData={state.popPlaylists} />
      <HomeRow rowTitle={"Dance/Electronic"} rowData={state.dancePlaylists} />
      <HomeRow rowTitle={"Hip-hop"} rowData={state.hiphopPlaylists} />
      <HomeRow rowTitle={"Rock"} rowData={state.rockPlaylists} />
      <HomeRow rowTitle={"Country"} rowData={state.countryPlaylists} />
      <HomeRow rowTitle={"Podcasts"} rowData={state.podcastsShow} />
    </div>
  );
}

export default HomeContent;
