// Function to truncate a text to a certain number of words
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// Get artists from a playlist, album,...
const getArtists = (data, n) => {
  const artistsList = data.artists?.map((artist) => {
    return artist.name;
  });
  return truncate(artistsList.join(", "), n);
};

export { truncate, getArtists };
