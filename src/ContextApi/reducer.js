// Reducer that take the current state and an action as arguments and return a new state
// Action is an object with a type property
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };
    case "SET_FEATURED-PLAYLISTS":
      return { ...state, featuredPlaylists: action.featuredPlaylists };
    case "SET_RECENTLY-PLAYED":
      return { ...state, recentlyPlayed: action.recentlyPlayed };
    case "SET_NEW-RELEASES":
      return { ...state, newReleases: action.newReleases };
    default:
      return state;
  }
};
