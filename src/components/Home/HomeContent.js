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
        // playlistsArtists={state.featuredPlaylistsArtists}
      />
      <HomeRow
        rowTitle={"Pop"}
        rowData={state.popPlaylists}
        // playlistsArtists={state.popPlaylistsArtists}
      />
      <HomeRow
        rowTitle={"Dance/Electronic"}
        rowData={state.dancePlaylists}
        // playlistsArtists={state.dancePlaylistsArtists}
      />
      <HomeRow
        rowTitle={"Hip-hop"}
        rowData={state.hiphopPlaylists}
        // playlistsArtists={state.hiphopPlaylistsArtists}
      />
      <HomeRow
        rowTitle={"Rock"}
        rowData={state.rockPlaylists}
        // playlistsArtists={state.rockPlaylistsArtists}
      />
      <HomeRow
        rowTitle={"Country"}
        rowData={state.countryPlaylists}
        // playlistsArtists={state.countryPlaylistsArtists}
      />
      <HomeRow rowTitle={"Podcasts"} rowData={state.podcastsShow} />
    </div>
  );
}

export default HomeContent;
