import React, { useContext } from "react";
import { SpotifyContext } from "../../ContextApi/SpotifyState";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../../css/SongsRow.css";

function SongsRow({
  trackName,
  trackId,
  albumName,
  albumImage,
  artistsName,
  onPlaylistSongClick,
}) {
  const [{ featuredOfPlaylistSelected }] = useContext(SpotifyContext);

  // Styling the album image in each song row
  const stylingAlbumImage = () => {
    return albumImage ? { display: "block" } : { display: "none" };
  };

  return (
    <div
      className="songsRow"
      onClick={() => {
        onPlaylistSongClick({
          trackName: trackName,
          albumName: albumName,
          albumImage: albumImage
            ? albumImage
            : featuredOfPlaylistSelected.featuredCoverImage[0].url,
          artistsName: artistsName,
          trackId: trackId,
        });
      }}
    >
      <div className="songsRow__left">
        <img
          className="songsRow__image"
          src={albumImage}
          alt={albumName}
          style={stylingAlbumImage()}
        />
        <div className="songsRow__informations">
          <h4 className="songsRow__song">{trackName}</h4>
          <p className="songsRow__artist">{artistsName}</p>
        </div>
      </div>
      <MoreHorizIcon className="songsRow__icon" />
    </div>
  );
}

export default SongsRow;
