"https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#";

const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "2931c81ddb1b4d118391e0c7f7d649ba";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((accumulator, item) => {
      let parts = item.split("=");
      accumulator[parts[0]] = decodeURIComponent(parts[1]);

      return accumulator;
    }, {});
};

const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export { loginUrl, getTokenFromUrl };
