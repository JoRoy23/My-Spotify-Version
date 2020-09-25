import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeContent from "./Home/HomeContent";
import SearchContent from "./SearchContent";
import LibraryContent from "./LibraryContent";
import SpotifyContent from "./SpotifyContent";
import PlaylistSelectedContent from "./Playlist/PlaylistSelectedContent";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomeContent />}></Route>
      <Route path="/search" render={() => <SearchContent />}></Route>
      <Route path="/library" render={() => <LibraryContent />}></Route>
      <Route path="/spotify" render={() => <SpotifyContent />}></Route>
      <Route
        path="/playlist"
        render={() => <PlaylistSelectedContent />}
      ></Route>
    </Switch>
  );
};

export default Content;
