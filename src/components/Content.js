import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeContent from "./Home/HomeContent";
import SearchContent from "../components/Search/SearchContent";
import LibraryContent from "../components/Library/LibraryContent";
import ListSelected from "./List/ListSelected";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomeContent />}></Route>
      <Route path="/search" render={() => <SearchContent />}></Route>
      <Route path="/library" render={() => <LibraryContent />}></Route>
      <Route
        exact
        path="/:type/:category/:name"
        render={(routeProps) => <ListSelected {...routeProps} />}
      ></Route>
    </Switch>
  );
};

export default Content;
