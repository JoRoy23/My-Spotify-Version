// Function to truncate a text to a certain number of words
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// Get artists from a song
const getArtists = (artists) => {
  const artistsList = artists?.map((artist) => {
    return artist.name;
  });
  return artistsList?.join(", ");
};

// Customizing a playlist url with the genre and the name as string argument
const customizePlaylistUrl = (genre, name) => {
  const url = name.split(" ").join("-");
  return `/playlist/${genre}/${url}`;
};

export { truncate, getArtists, customizePlaylistUrl };
