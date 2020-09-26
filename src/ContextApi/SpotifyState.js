import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

// Initial state of our Spotify application
const initialState = {
  token: null, // User token
  user: null, // User information
  myPlaylists: [], // My playlists for the navbar
  featuredPlaylists: [], // Popular playlists for the home menu
  newReleases: [], // New release for the home menu
  recentlyPlayed: [], // Recently played albums for the home menu
  popPlaylists: [], // Pop playlists for the home menu
  dancePlaylists: [], // Dance/Electronic playlists for the home menu
  hiphopPlaylists: [], // Hip-hop playlists for the home menu
  rockPlaylists: [], // Rock playlists for the home menu
  countryPlaylists: [], // Country playlists for the home menu
  songsOfPlaylistSelected: [], // Songs of a selected playlist
  infoOfPlaylistSelected: [], // Info of a selected playlist
  songSelected: [], // Song selected
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
