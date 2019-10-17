import { AlbumCandidate, ArtistCandidate, TrackCandidate } from "type/model";

import { getRawArtistCandidate } from "util/getRawArtistCandidate";

type TRemoveArtistParams = {
  trackId: string;
  artistId: string;
};

type TSetArtistNameParams = {
  trackId: string;
  artistId: string;
  value: string;
};

type TSetTrackTitleParams = {
  trackId: string;
  value: string;
};

type TMoveTrackParams = {
  trackId: string;
  direction: "UP" | "DOWN";
};

export const patchAlbumCandidate = (albumFormData: AlbumCandidate) => {
  return {
    // Return form data.

    done() {
      return albumFormData;
    },

    // Add new tracks.

    addTracks(tracks: TrackCandidate[]) {
      const nextFormData = {
        ...albumFormData,
        tracklist: [...albumFormData.tracklist, ...tracks]
      };

      return patchAlbumCandidate(nextFormData);
    },

    // Remove track.

    removeTrack(trackId: string) {
      const nextTracklist: TrackCandidate[] = albumFormData.tracklist.filter(
        ({ id }) => id !== trackId
      );

      const nextFormData = {
        ...albumFormData,
        tracklist: nextTracklist
      };

      return patchAlbumCandidate(nextFormData);
    },

    // Set track title name

    setTrackTitle({ trackId, value }: TSetTrackTitleParams) {
      const nextTracklist: TrackCandidate[] = albumFormData.tracklist.reduce(
        (acc: TrackCandidate[], track) => {
          if (track.id === trackId) {
            const nextTrack = {
              ...track,
              title: value
            };

            return [...acc, nextTrack];
          }
          return [...acc, track];
        },
        []
      );

      const nextFormData = {
        ...albumFormData,
        tracklist: nextTracklist
      };

      return patchAlbumCandidate(nextFormData);
    },

    // Add empty artist objects to each track.

    addRawArtists() {
      const nextTracklist = albumFormData.tracklist.map(track => {
        const { artists } = track;

        const lastAsrtist = artists[artists.length - 1];

        if (!lastAsrtist || !!lastAsrtist.name) {
          return {
            ...track,
            artists: [...artists, getRawArtistCandidate()]
          };
        }

        return track;
      });

      const nextFormData = {
        ...albumFormData,
        tracklist: nextTracklist
      };

      return patchAlbumCandidate(nextFormData);
    },

    // Remove artist

    removeArtist({ trackId, artistId }: TRemoveArtistParams) {
      const nextTracklist: TrackCandidate[] = albumFormData.tracklist.reduce(
        (acc: TrackCandidate[], track) => {
          if (track.id === trackId) {
            const nextArtists: ArtistCandidate[] = track.artists.filter(
              artist => artist.id !== artistId
            );

            const nextTrack = {
              ...track,
              artists: nextArtists
            };

            return [...acc, nextTrack];
          }

          return [...acc, track];
        },
        []
      );

      const nextFormData = {
        ...albumFormData,
        tracklist: nextTracklist
      };

      return patchAlbumCandidate(nextFormData);
    },

    // Change artist name

    setArtistName({ trackId, artistId, value }: TSetArtistNameParams) {
      const nextTracklist: TrackCandidate[] = albumFormData.tracklist.reduce(
        (acc: TrackCandidate[], track) => {
          if (track.id === trackId) {
            const nextArtists: ArtistCandidate[] = track.artists.reduce(
              (acc: ArtistCandidate[], artist) => {
                if (artist.id === artistId) {
                  const nextArtist = {
                    ...artist,
                    name: value
                  };
                  return [...acc, nextArtist];
                }
                return [...acc, artist];
              },
              []
            );

            const nextTrack = {
              ...track,
              artists: nextArtists
            };

            return [...acc, nextTrack];
          }

          return [...acc, track];
        },
        []
      );

      const nextFormData = {
        ...albumFormData,
        tracklist: nextTracklist
      };

      return patchAlbumCandidate(nextFormData);
    },

    moveTrack({ trackId, direction }: TMoveTrackParams) {
      const { tracklist: prevTracklist } = albumFormData;

      const trackIndex = prevTracklist.findIndex(({ id }) => id === trackId);

      const nextTracklist = [...prevTracklist];

      const swapTargetIndex =
        direction === "DOWN" ? trackIndex + 1 : trackIndex - 1;

      [nextTracklist[trackIndex], nextTracklist[swapTargetIndex]] = [
        nextTracklist[swapTargetIndex],
        nextTracklist[trackIndex]
      ];

      const nextFormData = {
        ...albumFormData,
        tracklist: nextTracklist
      };

      return patchAlbumCandidate(nextFormData);
    }
  };
};
