// Reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_HOME-DATA-STATUS":
      return { ...state, isHomeDataLoaded: action.isHomeDataLoaded };
    case "SET_DESKTOP-STATUS":
      return { ...state, isDesktop: action.isDesktop };
    case "SET_FOOTER-STATUS":
      return { ...state, mobileFooterVisible: action.mobileFooterVisible };
    case "SET_USER":
      return { ...state, user: action.user };
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
    case "SET_PODCASTS-SHOW":
      return { ...state, podcastsShow: action.podcastsShow };
    // case "SET_FEATURED-PLAYLISTS-ARTISTS":
    //   return {
    //     ...state,
    //     featuredPlaylistsArtists: action.featuredPlaylistsArtists,
    //   };
    // case "SET_POP-PLAYLISTS-ARTISTS":
    //   return { ...state, popPlaylistsArtists: action.popPlaylistsArtists };
    // case "SET_DANCE-PLAYLISTS-ARTISTS":
    //   return { ...state, dancePlaylistsArtists: action.dancePlaylistsArtists };
    // case "SET_ROCK-PLAYLISTS-ARTISTS":
    //   return { ...state, rockPlaylistsArtists: action.rockPlaylistsArtists };
    // case "SET_HIPHOP-PLAYLISTS-ARTISTS":
    //   return {
    //     ...state,
    //     hiphopPlaylistsArtists: action.hiphopPlaylistsArtists,
    //   };
    // case "SET_COUNTRY-PLAYLISTS-ARTISTS":
    //   return {
    //     ...state,
    //     countryPlaylistsArtists: action.countryPlaylistsArtists,
    //   };
    case "SET_ITEMS-LIST-SELECTED":
      return {
        ...state,
        itemsListSelected: action.itemsListSelected,
      };
    case "SET_FEATURED-ITEM":
      return {
        ...state,
        featuredItem: action.featuredItem,
      };
    case "SET_ITEM-SELECTED":
      return { ...state, itemSelected: action.itemSelected };
    case "SET_PLAY-BUTTON":
      return { ...state, isPlaying: action.isPlaying };
    default:
      return state;
  }
};
