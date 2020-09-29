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
  const [{ token }, dispatch] = useContext(SpotifyContext);

  useEffect(() => {
    // Get user token from the url
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // Set user token
      spotifyApi.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // Fetch user info
      async function getMe() {
        const userResponse = await spotifyApi.getMe();

        const { display_name, images } = userResponse;
        const userObject = { userName: display_name, userAvatar: images };

        dispatch({
          type: "SET_USER",
          user: userObject,
        });
      }
      getMe();

      // Fetch user playlists info
      async function getUserPlaylists() {
        const userPlaylistsResponse = await spotifyApi.getUserPlaylists();

        const userPlaylists = userPlaylistsResponse.items.map(
          (userPlaylist) => {
            const { id, name } = userPlaylist;
            return { userPlaylistId: id, userPlaylistName: name };
          }
        );

        dispatch({
          type: "SET_USER-PLAYLISTS",
          userPlaylists: userPlaylists,
        });
      }
      getUserPlaylists();

      // Fetch recently played albums
      async function getMyRecentlyPlayedTracks() {
        const recentlyPlayedAlbumsResponse = await spotifyApi.getMyRecentlyPlayedTracks();

        const recentlyPlayedAlbums = recentlyPlayedAlbumsResponse.items.map(
          (recentlyPlayedAlbum) => {
            const {
              id,
              name,
              artists,
              images,
            } = recentlyPlayedAlbum.track.album;
            return {
              albumId: id,
              albumName: name,
              albumArtists: artists,
              albumImage: images,
            };
          }
        );
        dispatch({
          type: "SET_RECENTLY-PLAYED",
          recentlyPlayed: recentlyPlayedAlbums,
        });
      }
      getMyRecentlyPlayedTracks();

      // Fetch the new releases albums
      async function getNewReleasesAlbums() {
        const newReleasesAlbumsResponse = await spotifyApi.getNewReleases({
          limit: 6,
        });

        const newReleasesAlbums = newReleasesAlbumsResponse.albums.items.map(
          (newReleaseAlbum) => {
            const { id, name, artists, images } = newReleaseAlbum;
            return {
              albumId: id,
              albumName: name,
              albumArtists: artists,
              albumImage: images,
            };
          }
        );

        dispatch({
          type: "SET_NEW-RELEASES",
          newReleases: newReleasesAlbums,
        });
      }
      getNewReleasesAlbums();

      // Fetch the data for the playlist rendered in the home content
      async function getFeaturedPlaylists() {
        const featuredPlaylistsResponse = await spotifyApi.getFeaturedPlaylists();

        const featuredPlaylists = featuredPlaylistsResponse.playlists.items?.map(
          (featuredPlaylist) => {
            const { id, images, name, owner } = featuredPlaylist;
            return {
              playlistId: id,
              playlistImages: images,
              playlistName: name,
              playlistOwner: owner,
            };
          }
        );

        dispatch({
          type: "SET_FEATURED-PLAYLISTS",
          featuredPlaylists: featuredPlaylists,
        });
      }
      getFeaturedPlaylists();

      async function getPopCategoryPlaylist() {
        const popPlaylistsResponse = await spotifyApi.getCategoryPlaylists(
          "pop"
        );

        const popPlaylists = popPlaylistsResponse.playlists.items?.map(
          (popPlaylist) => {
            const { id, images, name, owner } = popPlaylist;
            return {
              playlistId: id,
              playlistImages: images,
              playlistName: name,
              playlistOwner: owner,
            };
          }
        );

        dispatch({
          type: "SET_POP-PLAYLISTS",
          popPlaylists: popPlaylists,
        });
      }
      getPopCategoryPlaylist();

      async function getDanceCategoryPlaylist() {
        const dancePlaylistsResponse = await spotifyApi.getCategoryPlaylists(
          "edm_dance"
        );

        const dancePlaylists = dancePlaylistsResponse.playlists.items?.map(
          (dancePlaylist) => {
            const { id, images, name, owner } = dancePlaylist;
            return {
              playlistId: id,
              playlistImages: images,
              playlistName: name,
              playlistOwner: owner,
            };
          }
        );

        dispatch({
          type: "SET_DANCE-PLAYLISTS",
          dancePlaylists: dancePlaylists,
        });
      }
      getDanceCategoryPlaylist();

      async function getHiphopCategoryPlaylist() {
        const hiphopPlaylistsResponse = await spotifyApi.getCategoryPlaylists(
          "hiphop"
        );

        const hiphopPlaylists = hiphopPlaylistsResponse.playlists.items?.map(
          (hiphopPlaylist) => {
            const { id, images, name, owner } = hiphopPlaylist;
            return {
              playlistId: id,
              playlistImages: images,
              playlistName: name,
              playlistOwner: owner,
            };
          }
        );

        dispatch({
          type: "SET_HIPHOP-PLAYLISTS",
          hiphopPlaylists: hiphopPlaylists,
        });
      }
      getHiphopCategoryPlaylist();

      async function getRockCategoryPlaylist() {
        const rockPlaylistsResponse = await spotifyApi.getCategoryPlaylists(
          "rock"
        );

        const rockPlaylists = rockPlaylistsResponse.playlists.items?.map(
          (rockPlaylist) => {
            const { id, images, name, owner } = rockPlaylist;
            return {
              playlistId: id,
              playlistImages: images,
              playlistName: name,
              playlistOwner: owner,
            };
          }
        );

        dispatch({
          type: "SET_ROCK-PLAYLISTS",
          rockPlaylists: rockPlaylists,
        });
      }
      getRockCategoryPlaylist();

      async function getCountryCategoryPlaylist() {
        const countryPlaylistsResponse = await spotifyApi.getCategoryPlaylists(
          "country"
        );

        const countryPlaylists = countryPlaylistsResponse.playlists.items?.map(
          (countryPlaylist) => {
            const { id, images, name, owner } = countryPlaylist;
            return {
              playlistId: id,
              playlistImages: images,
              playlistName: name,
              playlistOwner: owner,
            };
          }
        );

        dispatch({
          type: "SET_COUNTRY-PLAYLISTS",
          countryPlaylists: countryPlaylists,
        });
      }
      getCountryCategoryPlaylist();
    }
  }, []);

  // If token -> direction player if not back on the login page
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
