import React, { useEffect, useContext } from "react";
import { getTokenFromUrl } from "./spotify";
import { SpotifyContext } from "./ContextApi/SpotifyState";
import { getArtists } from "./helpers";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login";
import MainLoadingScreen from "./components/MainLoadingScreen";
import "./App.css";

// Creating a spotify api object
export const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useContext(SpotifyContext);

  useEffect(() => {
    // Get user token from the url
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      // Set user token
      spotifyApi.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // Determine if the window width is bigger/smaller then 1100px
      dispatch({
        type: "SET_DESKTOP-STATUS",
        isDesktop: window.innerWidth > 1100 ? true : false,
      });

      window.addEventListener("resize", () => {
        dispatch({
          type: "SET_DESKTOP-STATUS",
          isDesktop: window.innerWidth > 1100 ? true : false,
        });
      });

      // Fetch informations from the user
      async function getMe() {
        const userResponse = await spotifyApi.getMe();

        const { display_name, images } = userResponse;
        const user = { userName: display_name, userAvatar: images };

        dispatch({
          type: "SET_USER",
          user: user,
        });
      }
      getMe();

      // Fetch informations from the user playlists
      async function getUserPlaylists() {
        const userPlaylistsResponse = await spotifyApi.getUserPlaylists();

        const userPlaylists = userPlaylistsResponse.items.map(
          (userPlaylist) => {
            const { id, name, type } = userPlaylist;
            return {
              id: id,
              type: type,
              userPlaylistName: name,
            };
          }
        );

        dispatch({
          type: "SET_USER-PLAYLISTS",
          userPlaylists: userPlaylists,
        });
      }
      getUserPlaylists();

      // Fetch informations from the last track played
      async function getLastPlayedTrack() {
        const recentlyPlayedTracksResponse = await spotifyApi.getMyRecentlyPlayedTracks();

        const lastplayedTrackResponse = recentlyPlayedTracksResponse.items[0];
        const track = lastplayedTrackResponse.track;
        const album = lastplayedTrackResponse.track.album;

        const lastPlayedTrack = {
          id: track.id,
          type: track.type,
          trackName: track.name,
          artistsName: getArtists(track.artists),
          albumName: album.name,
          albumImage: album.images[0].url,
        };

        dispatch({
          type: "SET_ITEM-SELECTED",
          itemSelected: lastPlayedTrack,
        });
      }
      getLastPlayedTrack();

      // Fetch informations from the new releases albums
      async function getNewReleasesAlbums() {
        const newReleasesAlbumsResponse = await spotifyApi.getNewReleases({
          limit: 6,
        });

        const newReleasesAlbums = newReleasesAlbumsResponse.albums.items.map(
          (newReleaseAlbum) => {
            const { id, type, name, artists, images } = newReleaseAlbum;
            return {
              id: id,
              type: type,
              albumName: name,
              albumArtists: getArtists(artists),
              albumImage: images,
            };
          }
        );

        dispatch({
          type: "SET_NEW-RELEASES",
          newReleases: newReleasesAlbums,
        });
      }
      getNewReleasesAlbums();

      // Fetch informations from the recently played albums
      async function getMyRecentlyPlayedAlbums() {
        const recentlyPlayedAlbumsResponse = await spotifyApi.getMyRecentlyPlayedTracks();

        const recentlyPlayedAlbums = recentlyPlayedAlbumsResponse.items.map(
          (track) => {
            const { id, type, name, artists, images } = track.track.album;
            return {
              id: id,
              type: type,
              albumName: name,
              albumArtists: getArtists(artists),
              albumImage: images[0].url,
            };
          }
        );

        // Remove the duplicate albums from the recently played list
        const uniqueRecentlyPlayedAlbums = recentlyPlayedAlbums.reduce(
          (uniqueArray, albumObj) => {
            if (!uniqueArray.some((obj) => obj.id === albumObj.id)) {
              uniqueArray.push(albumObj);
            }
            return uniqueArray;
          },
          []
        );

        dispatch({
          type: "SET_RECENTLY-PLAYED",
          recentlyPlayed: uniqueRecentlyPlayedAlbums,
        });
      }
      getMyRecentlyPlayedAlbums();

      // Fetch informations from different playlists (featured, pop, country, ...)
      async function getFeaturedPlaylists() {
        const featuredPlaylistsResponse = await spotifyApi.getFeaturedPlaylists();

        const featuredPlaylists = featuredPlaylistsResponse.playlists.items.map(
          (featuredPlaylist) => {
            const {
              id,
              images,
              name,
              description,
              owner,
              type,
            } = featuredPlaylist;
            return {
              id: id,
              type: type,
              playlistImage: images[0].url,
              playlistName: name,
              playlistOwner: owner,
              playlistDescription: description,
            };
          }
        );

        dispatch({
          type: "SET_FEATURED-PLAYLISTS",
          featuredPlaylists: featuredPlaylists,
        });
      }
      getFeaturedPlaylists();

      async function getPopCategoryPlaylist() {
        const popPlaylistsResponse = await spotifyApi.getCategoryPlaylists(
          "pop"
        );

        const popPlaylists = popPlaylistsResponse.playlists.items.map(
          (popPlaylist) => {
            const { id, images, name, description, owner, type } = popPlaylist;
            return {
              id: id,
              type: type,
              playlistImage: images[0].url,
              playlistName: name,
              playlistOwner: owner,
              playlistDescription: description,
            };
          }
        );

        dispatch({
          type: "SET_POP-PLAYLISTS",
          popPlaylists: popPlaylists,
        });
      }
      getPopCategoryPlaylist();

      async function getDanceCategoryPlaylist() {
        const dancePlaylistsResponse = await spotifyApi.getCategoryPlaylists(
          "edm_dance"
        );

        const dancePlaylists = dancePlaylistsResponse.playlists.items.map(
          (dancePlaylist) => {
            const {
              id,
              images,
              name,
              description,
              owner,
              type,
            } = dancePlaylist;
            return {
              id: id,
              type: type,
              playlistImage: images[0].url,
              playlistName: name,
              playlistOwner: owner,
              playlistDescription: description,
            };
          }
        );

        dispatch({
          type: "SET_DANCE-PLAYLISTS",
          dancePlaylists: dancePlaylists,
        });
      }
      getDanceCategoryPlaylist();

      async function getHiphopCategoryPlaylist() {
        const hiphopPlaylistsResponse = await spotifyApi.getCategoryPlaylists(
          "hiphop"
        );

        const hiphopPlaylists = hiphopPlaylistsResponse.playlists.items.map(
          (hiphopPlaylist) => {
            const {
              id,
              images,
              name,
              description,
              owner,
              type,
            } = hiphopPlaylist;
            return {
              id: id,
              type: type,
              playlistImage: images[0].url,
              playlistName: name,
              playlistOwner: owner,
              playlistDescription: description,
            };
          }
        );

        dispatch({
          type: "SET_HIPHOP-PLAYLISTS",
          hiphopPlaylists: hiphopPlaylists,
        });
      }
      getHiphopCategoryPlaylist();

      async function getRockCategoryPlaylist() {
        const rockPlaylistsResponse = await spotifyApi.getCategoryPlaylists(
          "rock"
        );

        const rockPlaylists = rockPlaylistsResponse.playlists.items.map(
          (rockPlaylist) => {
            const { id, images, name, description, owner, type } = rockPlaylist;
            return {
              id: id,
              type: type,
              playlistImage: images[0].url,
              playlistName: name,
              playlistOwner: owner,
              playlistDescription: description,
            };
          }
        );

        dispatch({
          type: "SET_ROCK-PLAYLISTS",
          rockPlaylists: rockPlaylists,
        });
      }
      getRockCategoryPlaylist();

      async function getCountryCategoryPlaylist() {
        const countryPlaylistsResponse = await spotifyApi.getCategoryPlaylists(
          "country"
        );

        const countryPlaylists = countryPlaylistsResponse.playlists.items.map(
          (countryPlaylist) => {
            const {
              id,
              images,
              name,
              description,
              owner,
              type,
            } = countryPlaylist;
            return {
              id: id,
              type: type,
              playlistImage: images[0].url,
              playlistName: name,
              playlistOwner: owner,
              playlistDescription: description,
            };
          }
        );

        dispatch({
          type: "SET_COUNTRY-PLAYLISTS",
          countryPlaylists: countryPlaylists,
        });
      }
      getCountryCategoryPlaylist();

      // Fetch the information for the podcasts show
      async function getPodcastsShow() {
        const podcastsShowResponse = await spotifyApi.getShows([
          "4rOoJ6Egrf8K2IrywzwOMk",
          "71mvGXupfKcmO6jlmOJQTP",
          "7bnjJ7Va1nM07Um4Od55dW",
          "3IM0lmZxpFAY7CwMuv9H4g",
          "3DgfoleqaW61T2amZQKINx",
          "6kAsbP8pxwaU2kPibKTuHE",
          "7IWzayPhHif6GhgtTQdB84",
          "0ofXAdFIQQRsCYj9754UFx",
          "0U9S5J2ltMaKdxIfLuEjzE",
          "1VXcH8QHkjRcTCEd88U3ti",
          "3yZg2MCkf31pPXiG4nznrg",
          "0z5fDUE0hsRqnQx6CfGg0I",
          "5YNYcVmxKGsd8Q73mssWT9",
          "1vPkGMyrKXdbYWHxSw9kd1",
          "3MGn724Y6BOSQzfmk3TyuY",
          "3OHCFs84lqizjkL4C9bNTA",
          "5lY4b5PGOvMuOYOjOVEcb9",
          "4P86ZzHf7EOlRG7do9LkKZ",
          "4ruq7mH0jg1sFi8KQhnGb8",
          "0nMF1JL5tNJW7B0teIFWxV",
        ]);

        const podcastsShow = podcastsShowResponse.shows.map((podcastShow) => {
          const {
            id,
            name,
            publisher,
            description,
            images,
            type,
            total_episodes,
          } = podcastShow;

          return {
            id: id,
            type: type,
            podcastName: name,
            podcastPublisher: publisher,
            podcastDescription: description,
            podcastImage: images[0].url,
            podcastTotalEpisodes: total_episodes,
          };
        });

        dispatch({
          type: "SET_PODCASTS-SHOW",
          podcastsShow: podcastsShow,
        });

        setTimeout(() => {
          dispatch({
            type: "SET_HOME-DATA-STATUS",
            isHomeDataLoaded: true,
          });
        }, 2000);
      }
      getPodcastsShow();

      // Fetch the data for the artists in every playlist of each category
      // const featuredArtists = [];
      // async function getFeaturedPlaylistsArtists() {
      //   const featuredPlaylistsResponse = await spotifyApi.getFeaturedPlaylists();

      //   featuredPlaylistsResponse.playlists.items.forEach(
      //     (featuredPlaylist) => {
      //       async function getFeaturedPlaylists(id) {
      //         const featuredPlaylistResponse = await spotifyApi.getPlaylist(id);

      //         const featuredPlaylistArtists = featuredPlaylistResponse.tracks.items.map(
      //           (track) => {
      //             return getArtists(track.track?.artists);
      //           }
      //         );
      //         featuredArtists.push({
      //           playlistId: featuredPlaylist.id,
      //           playlistArtists: featuredPlaylistArtists.slice(0, 6),
      //         });

      //         dispatch({
      //           type: "SET_FEATURED-PLAYLISTS-ARTISTS",
      //           featuredPlaylistsArtists: featuredArtists,
      //         });
      //       }
      //       getFeaturedPlaylists(featuredPlaylist.id);
      //     }
      //   );
      // }
      // getFeaturedPlaylistsArtists();

      // const popArtists = [];
      // async function getPopPlaylistsArtists() {
      //   const popPlaylistsResponse = await spotifyApi.getCategoryPlaylists("pop");

      //   popPlaylistsResponse.playlists.items.forEach((popPlaylist) => {
      //     async function getPopPlaylists(id) {
      //       const popPlaylistResponse = await spotifyApi.getPlaylist(id);

      //       const popPlaylistArtists = popPlaylistResponse.tracks.items.map(
      //         (track) => {
      //           return getArtists(track.track?.artists);
      //         }
      //       );
      //       popArtists.push({
      //         playlistId: id,
      //         playlistArtists: popPlaylistArtists.slice(0, 6),
      //       });

      //       dispatch({
      //         type: "SET_POP-PLAYLISTS-ARTISTS",
      //         popPlaylistsArtists: popArtists,
      //       });
      //     }
      //     getPopPlaylists(popPlaylist.id);
      //   });
      // }
      // getPopPlaylistsArtists();

      // const danceArtists = [];
      // async function getDancePlaylistsArtists() {
      //   const dancePlaylistsResponse = await spotifyApi.getCategoryPlaylists(
      //     "edm_dance"
      //   );

      //   dancePlaylistsResponse.playlists.items.forEach((dancePlaylist) => {
      //     async function getDancePlaylists(id) {
      //       const dancePlaylistResponse = await spotifyApi.getPlaylist(id);

      //       const dancePlaylistArtists = dancePlaylistResponse.tracks.items.map(
      //         (track) => {
      //           return getArtists(track.track?.artists);
      //         }
      //       );
      //       danceArtists.push({
      //         playlistId: dancePlaylist.id,
      //         playlistArtists: dancePlaylistArtists.slice(0, 6),
      //       });
      //     }
      //     getDancePlaylists(dancePlaylist.id);
      //   });

      //   dispatch({
      //     type: "SET_DANCE-PLAYLISTS-ARTISTS",
      //     dancePlaylistsArtists: danceArtists,
      //   });
      // }
      // getDancePlaylistsArtists();

      // const rockArtists = [];
      // async function getRockPlaylistsArtists() {
      //   const rockPlaylistsResponse = await spotifyApi.getCategoryPlaylists(
      //     "rock"
      //   );

      //   rockPlaylistsResponse.playlists.items.forEach((rockPlaylist) => {
      //     async function getRockPlaylists(id) {
      //       const rockPlaylistResponse = await spotifyApi.getPlaylist(id);

      //       const rockPlaylistArtists = rockPlaylistResponse.tracks.items.map(
      //         (track) => {
      //           return getArtists(track.track?.artists);
      //         }
      //       );
      //       rockArtists.push({
      //         playlistId: rockPlaylist.id,
      //         playlistArtists: rockPlaylistArtists.slice(0, 6),
      //       });

      //       dispatch({
      //         type: "SET_ROCK-PLAYLISTS-ARTISTS",
      //         rockPlaylistsArtists: rockArtists,
      //       });
      //     }
      //     getRockPlaylists(rockPlaylist.id);
      //   });
      // }
      // getRockPlaylistsArtists();

      // const countryArtists = [];
      // async function getCountryPlaylistsArtists() {
      //   const countryPlaylistsResponse = await spotifyApi.getCategoryPlaylists(
      //     "country"
      //   );

      //   countryPlaylistsResponse.playlists.items.forEach((countryPlaylist) => {
      //     async function getCountryPlaylists(id) {
      //       const countryPlaylistResponse = await spotifyApi.getPlaylist(id);

      //       const countryPlaylistArtists = countryPlaylistResponse.tracks.items.map(
      //         (track) => {
      //           return getArtists(track.track?.artists);
      //         }
      //       );
      //       countryArtists.push({
      //         playlistId: countryPlaylist.id,
      //         playlistArtists: countryPlaylistArtists.slice(0, 6),
      //       });

      //       dispatch({
      //         type: "SET_COUNTRY-PLAYLISTS-ARTISTS",
      //         countryPlaylistsArtists: countryArtists,
      //       });
      //     }
      //     getCountryPlaylists(countryPlaylist.id);
      //   });
      // }
      // getCountryPlaylistsArtists();

      // const hiphopArtists = [];
      // async function getHiphopPlaylistsArtists() {
      //   const hiphopPlaylistsResponse = await spotifyApi.getCategoryPlaylists(
      //     "hiphop"
      //   );

      //   hiphopPlaylistsResponse.playlists.items.forEach((hiphopPlaylist) => {
      //     async function getHiphopPlaylists(id) {
      //       const hiphopPlaylistResponse = await spotifyApi.getPlaylist(id);

      //       const hiphopPlaylistArtists = hiphopPlaylistResponse.tracks.items.map(
      //         (track) => {
      //           return getArtists(track.track?.artists);
      //         }
      //       );
      //       hiphopArtists.push({
      //         playlistId: hiphopPlaylist.id,
      //         playlistArtists: hiphopPlaylistArtists.slice(0, 6),
      //       });

      //       dispatch({
      //         type: "SET_HIPHOP-PLAYLISTS-ARTISTS",
      //         hiphopPlaylistsArtists: hiphopArtists,
      //       });
      //     }
      //     getHiphopPlaylists(hiphopPlaylist.id);
      //   });

      //   setTimeout(() => {
      //     dispatch({
      //       type: "SET_HOME-DATA-STATUS",
      //       isHomeDataLoaded: true,
      //     });
      //   }, 2000);
      // }
      // getHiphopPlaylistsArtists();
    }
  }, []);

  // If token -> direction main loading screen if not back on the login page
  return <div className="app">{token ? <MainLoadingScreen /> : <Login />}</div>;
}

export default App;
