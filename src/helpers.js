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

// Customizing a url with the category and the name as string argument for a playlist, album, podcast,...
const customizeUrl = (type, category, name) => {
  category = category.split(" ").join("-").replace(/\//g, "-");
  name = name.split(" ").join("-");
  return `/${type}/${category}/${name}`;
};

// Get the year of a date
const getDateYear = (str) => {
  const date = new Date(str);
  return date.getFullYear();
};

// Convert miliseconds to minutes or hours
const convertMilliseconds = (milliseconds) => {
  const minutes = Math.round(milliseconds / 60000);
  return minutes;
};
export { truncate, getArtists, customizeUrl, getDateYear, convertMilliseconds };
