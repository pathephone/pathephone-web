// @flow strict

import type { TServices } from 'types/contextTypes'

import * as React from 'react';

import { ServicesContext } from 'contexts/ServicesContext';
import { useContextStrict } from 'hooks/useContextStrict';
import { usePromiseEffect } from 'hooks/usePromiseEffect';

type TProps = {|
|}

export const LatestAlbumsPageContainer = (props: TProps) => {

  const { getLatestAlbums } = useContextStrict<TServices>(ServicesContext)

  const { isPending, data, error } = usePromiseEffect<void, []>(getLatestAlbums, []);

  return (
    <main>
      {
        isPending && (
          <h1>loading...</h1>
        )
      }
      {
        (error !== null) && (
          <h1>
            {error.message} 
          </h1>
        )
      }
      {
        data !== null && (
          <h1>success</h1>
        )
      }
    </main>
  )
}
