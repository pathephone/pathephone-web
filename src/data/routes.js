// @flow strict

export const latestAlbumsPattern = '/latest'
export const latestAlbumsRoute = () => '/latest'

export const searchAlbumsPattern = '/search/:query'
export const searchAlbumsRoute = (query?: string) => {
  if (query !== undefined) {
    return `/search${query}`;
  }
  return '/search'
}

export const shareAlbumPattern = '/share'
export const shareAlbumRoute = () => '/share'