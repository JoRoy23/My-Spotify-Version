import React, { useEffect, useContext } from "react";
import { getTokenFromUrl } from "./spotify";
import { SpotifyContext } from "./ContextApi/SpotifyState";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login";
import Player from "./components/Player";
import "./App.css";

// Creating a spotify api object
export const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ token, popPlaylists }, dispatch] = useContext(SpotifyContext);

  useEffect(() => {
    // Get my token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // Set my token
      spotifyApi.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // Fetch user information
      spotifyApi.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      // Fetch my playlists
      spotifyApi.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_MY-PLAYLISTS",
          myPlaylists: playlists,
        });
      });

      // Fetch the popular playlists
      spotifyApi.getFeaturedPlaylists().then((featuredPlaylists) => {
        dispatch({
          type: "SET_FEATURED-PLAYLISTS",
          featuredPlaylists: featuredPlaylists,
        });
      });

      // Fetch the recently played albums
      spotifyApi.getMyRecentlyPlayedTracks().then((recentlyPlayed) => {
        dispatch({
          type: "SET_RECENTLY-PLAYED",
          recentlyPlayed: recentlyPlayed,
        });
      });

      // Fetch the new releases albums
      spotifyApi.getNewReleases({ limit: 6 }).then((newReleases) => {
        dispatch({
          type: "SET_NEW-RELEASES",
          newReleases: newReleases,
        });
      });

      // spotifyApi.getCategories().then((categories) => {
      //   console.log(categories);
      // });

      // Fetch the pop category
      spotifyApi.getCategoryPlaylists("pop").then((popPlaylists) => {
        dispatch({
          type: "SET_POP-PLAYLISTS",
          popPlaylists: popPlaylists,
        });
      });

      // Fetch the dance/electronic category
      spotifyApi.getCategoryPlaylists("edm_dance").then((dancePlaylists) => {
        dispatch({
          type: "SET_DANCE-PLAYLISTS",
          dancePlaylists: dancePlaylists,
        });
      });

      // Fetch the hip-hop category
      spotifyApi.getCategoryPlaylists("hiphop").then((hiphopPlaylists) => {
        dispatch({
          type: "SET_HIPHOP-PLAYLISTS",
          hiphopPlaylists: hiphopPlaylists,
        });
      });

      // Fetch the rock category
      spotifyApi.getCategoryPlaylists("rock").then((rockPlaylists) => {
        dispatch({
          type: "SET_ROCK-PLAYLISTS",
          rockPlaylists: rockPlaylists,
        });
      });

      // Fetch the country category
      spotifyApi.getCategoryPlaylists("country").then((countryPlaylists) => {
        // console.log(countryPlaylists);
        dispatch({
          type: "SET_COUNTRY-PLAYLISTS",
          countryPlaylists: countryPlaylists,
        });
      });
    }
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
