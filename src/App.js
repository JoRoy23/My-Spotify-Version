import React, { useEffect, useContext } from "react";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./spotify";
import { SpotifyContext } from "./ContextApi/SpotifyState";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useContext(SpotifyContext);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotifyApi.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotifyApi.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotifyApi.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotifyApi.getFeaturedPlaylists().then((featuredPlaylists) => {
        dispatch({
          type: "SET_FEATURED-PLAYLISTS",
          featuredPlaylists: featuredPlaylists,
        });
      });

      spotifyApi.getMyRecentlyPlayedTracks().then((recentlyPlayed) => {
        dispatch({
          type: "SET_RECENTLY-PLAYED",
          recentlyPlayed: recentlyPlayed,
        });
      });

      spotifyApi.getNewReleases({ limit: 6 }).then((newReleases) => {
        console.log(newReleases);
        dispatch({
          type: "SET_NEW-RELEASES",
          newReleases: newReleases,
        });
      });
    }
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
