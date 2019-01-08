// @flow strict

import type { TServices } from 'types/contextTypes';
import type { TFormAlbum } from "types/uiDataTypes";

import * as React from 'react';

import { ServicesContext } from 'contexts/ServicesContext';
import { useContextStrict } from 'hooks/useContextStrict';
import { PageWrapper } from 'components/Page/PageWrapper';
import { AppLoadingScreen } from 'components/App/AppLoadingScreen';
import { AlbumFormContainer } from 'containers/AlbumFormContainer';
import { ShareAlbumPageDropZone } from 'components/ShareAlbumPage/ShareAlbumPageDropZone';

type TProps = {|
|}

export const ShareAlbumPageContainer = (props: TProps) => {

  const [ hasPreloader, setHasPreloader ] = React.useState<boolean>(false);
  const [ hasSuccessScreeen, setHasSuccessScreen ] = React.useState<boolean>(false);
  const [ error, setError ] = React.useState<Error | null>(null);
  const [ albumFormData, setAlbumFormData ] = React.useState<TFormAlbum | null>(null);

  const { submitAlbum } = useContextStrict<TServices>(ServicesContext)

  const handleSubmit = () => {
    setHasPreloader(true)
    if (albumFormData) {
      submitAlbum(albumFormData)
        .then(() => setHasSuccessScreen(true))
        .catch(setError)
        .then(() => setHasPreloader(false))
    }
  }

  const handleCancel = () => {
    setAlbumFormData(null)
  }

  return (
    <PageWrapper centered>
      {
        hasPreloader ? (
          <AppLoadingScreen />
        ) : hasSuccessScreeen ? (
          <h1>succeed</h1>
        ) : error !== null ? (
          <h1>
            {error.message} 
          </h1>
        ) : albumFormData !== null ? (
          <AlbumFormContainer
            data={albumFormData}
            onDataChange={setAlbumFormData}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        ) : (
          <ShareAlbumPageDropZone
            onDataChange={setAlbumFormData}
          />
        )
      }
    </PageWrapper>
  )
}
