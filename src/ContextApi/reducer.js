// Reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_MY-PLAYLISTS":
      return { ...state, myPlaylists: action.myPlaylists };
    case "SET_FEATURED-PLAYLISTS":
      return { ...state, featuredPlaylists: action.featuredPlaylists };
    case "SET_RECENTLY-PLAYED":
      return { ...state, recentlyPlayed: action.recentlyPlayed };
    case "SET_NEW-RELEASES":
      return { ...state, newReleases: action.newReleases };
    case "SET_POP-PLAYLISTS":
      return { ...state, popPlaylists: action.popPlaylists };
    case "SET_DANCE-PLAYLISTS":
      return { ...state, dancePlaylists: action.dancePlaylists };
    case "SET_HIPHOP-PLAYLISTS":
      return { ...state, hiphopPlaylists: action.hiphopPlaylists };
    case "SET_ROCK-PLAYLISTS":
      return { ...state, rockPlaylists: action.rockPlaylists };
    case "SET_COUNTRY-PLAYLISTS":
      return { ...state, countryPlaylists: action.countryPlaylists };
    case "SET_PLAYLIST-SELECTED":
      return { ...state, playlistSelected: action.playlistSelected };
    case "SET_PLAY-BUTTON":
      return { ...state, isPlaying: !action.isPlaying };
    default:
      return state;
  }
};
