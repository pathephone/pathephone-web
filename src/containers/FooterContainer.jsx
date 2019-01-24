// @flow strict

import * as React from 'react';

import { FooterWrapper } from 'components/Footer/FooterWrapper';

type TProps = {|
|}

export const FooterContainer = (props: TProps) => {

  const { playlist, currentTrackId } = React.useContext(playerContext)

  if (currentTrackId) {
    const playingTrack = playlist.find(
      ({ id }) => id === currentTrackId
    )
    return (
      <FooterWrapper>
        <AudioContainer
          src={playingTrack.id}
        />
      </FooterWrapper>
    )
  }

  return null

}
