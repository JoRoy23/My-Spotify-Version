import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

// Initial state
const initialState = {
  token: null,
  // token:
  //   "BQBI6DtUm46AK4Ud78WbQdr-3ldZydamVp2Vi0IscIn8hmH9_BTiUki0SR_NYZy0dCtN7NAxfb0coMwSwtV9pVRnfRRf0K5UcqpRJTukdtSB9zNZJ7Lz4OhJwPjX2Cnu9U42jNIEflK2BknMGaLQ5cvYXwHmp96PJUJo",
  user: null,
  playlists: [],
  featuredPlaylists: [],
  newReleases: [],
  recentlyPlayed: [],
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
