import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

// Initial state
const initialState = {
  token: null,
  user: null,
  myPlaylists: [],
  featuredPlaylists: [],
  newReleases: [],
  recentlyPlayed: [],
  popPlaylists: [],
  dancePlaylists: [],
  hiphopPlaylists: [],
  rockPlaylists: [],
  countryPlaylists: [],
  playlistSelected: [],
  isPlaying: false,
  item: null,
};

// Create context
export const SpotifyContext = createContext(initialState);

// Provider component
export const SpotifyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SpotifyContext.Provider value={[state, dispatch]}>
      {children}
    </SpotifyContext.Provider>
  );
};
