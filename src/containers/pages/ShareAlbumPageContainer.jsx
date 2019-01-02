// @flow strict

import type { TServices } from 'types/contextTypes';
import type { TFormAlbum } from "types/uiDataTypes";

import * as React from 'react';

import { ServicesContext } from 'contexts/ServicesContext';
import { useContextStrict } from 'hooks/useContextStrict';
import { PageWrapper } from 'components/Page/PageWrapper';
import { AppLoadingScreen } from 'components/App/AppLoadingScreen';

type TProps = {|
|}

export const ShareAlbumPageContainer = (props: TProps) => {

  const [ hasPreloader, setHasPreloader ] = React.useState<boolean>(false);
  const [ error, setError ] = React.useState<Error | null>(null);
  const [ albumFormData, setAlbumFormData ] = React.useState<TFormAlbum | null>(null);

  const { submitAlbum } = useContextStrict<TServices>(ServicesContext)

  const handleSubmit = () => {
    if (albumFormData) {
      submitAlbum(albumFormData)
    }
  }

  return (
    <PageWrapper>
      {
        hasPreloader && (
          <AppLoadingScreen />
        )
      }
      {
        (error !== null) && (
          <h1>
            {error.message} 
          </h1>
        )
      }
    </PageWrapper>
  )
}
