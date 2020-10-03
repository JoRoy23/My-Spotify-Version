import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

// Initial state of our Spotify application
const initialState = {
  token: null, // User token
  isHomeDataLoaded: false, // Does the data of the home page is loaded
  isDesktop: null, // Boolean depending on the width of the window
  mobileFooterVisible: false, // Set the visibility of the mobile footer
  user: { userName: "", userAvatar: [] }, // User information
  userPlaylists: [], // User playlists for the navbar
  featuredPlaylists: [], // Popular playlists for the home menu
  newReleases: [], // New release for the home menu
  recentlyPlayed: [], // Recently played albums for the home menu
  popPlaylists: [], // Pop playlists for the home menu
  dancePlaylists: [], // Dance/Electronic playlists for the home menu
  hiphopPlaylists: [], // Hip-hop playlists for the home menu
  rockPlaylists: [], // Rock playlists for the home menu
  countryPlaylists: [], // Country playlists for the home menu
  // featuredPlaylistsArtists: [], // Artists of every featured playlists
  // popPlaylistsArtists: [], // Artists of every pop playlists
  // dancePlaylistsArtists: [], // Artists of every dance playlists
  // countryPlaylistsArtists: [], // Artists of every country playlists
  // rockPlaylistsArtists: [], // Artists of every rock playlists
  // hiphopPlaylistsArtists: [], // Artists of every hip-hop playlists
  itemsListSelected: [], // List of items selected (playlist, albums, podcasts, ...)
  featuredItem: [], // Informations of the featured items of the list selected
  podcastsShow: [], // Informations of the podcasts show
  itemSelected: [], // Item selected (track, episode, ...)
  isPlaying: false,
  item: null,
};

// Create context object
export const SpotifyContext = createContext(initialState);

// Provider component of our context
export const SpotifyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SpotifyContext.Provider value={[state, dispatch]}>
      {children}
    </SpotifyContext.Provider>
  );
};
