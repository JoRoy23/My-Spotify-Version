// Reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_USER-PLAYLISTS":
      return { ...state, userPlaylists: action.userPlaylists };
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
    case "SET_TRACKS-OF-PLAYLIST/ALBUM-SELECTED":
      return {
        ...state,
        tracksOfPlaylistSelected: action.tracksOfPlaylistSelected,
      };
    case "SET_FEATUREDCOVER-OF-PLAYLIST/ALBUM-SELECTED":
      return {
        ...state,
        featuredOfPlaylistSelected: action.featuredOfPlaylistSelected,
      };
    case "SET_SONG-SELECTED":
      return { ...state, songSelected: action.songSelected };
    case "SET_PLAY-BUTTON":
      return { ...state, isPlaying: !action.isPlaying };
    default:
      return state;
  }
};
