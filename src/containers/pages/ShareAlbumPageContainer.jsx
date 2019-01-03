// @flow strict

import type { TServices } from 'types/contextTypes';
import type { TFormAlbum } from "types/uiDataTypes";

import * as React from 'react';

import { ServicesContext } from 'contexts/ServicesContext';
import { useContextStrict } from 'hooks/useContextStrict';
import { PageWrapper } from 'components/Page/PageWrapper';
import { AppLoadingScreen } from 'components/App/AppLoadingScreen';
import { ShareAlbumPageWrapper } from 'components/ShareAlbumPage/ShareAlbumPageComponents';
import { ShareAlbumPageFooter } from 'components/ShareAlbumPage/ShareAlbumPageComponents';
import { ShareAlbumPageContent } from 'components/ShareAlbumPage/ShareAlbumPageComponents';
import { AlbumFormContainer } from 'containers/AlbumFormContainer';
import { getRawAlbumFormData } from 'data/models';

type TProps = {|
|}

export const ShareAlbumPageContainer = (props: TProps) => {

  const [ hasPreloader, setHasPreloader ] = React.useState<boolean>(false);
  const [ hasSuccessScreeen, setHasSuccessScreen ] = React.useState<boolean>(false);
  const [ error, setError ] = React.useState<Error | null>(null);
  const [ albumFormData, setAlbumFormData ] = React.useState<TFormAlbum>(getRawAlbumFormData());

  const { submitAlbum } = useContextStrict<TServices>(ServicesContext)

  const handleSubmit = () => {
    console.log(albumFormData)
    setHasPreloader(true)
    submitAlbum(albumFormData)
      .then(() => setHasSuccessScreen(true))
      .catch(setError)
      .then(() => setHasPreloader(false))
  }

  return (
    <PageWrapper>
      {
        hasPreloader ? (
          <AppLoadingScreen />
        ) : hasSuccessScreeen ? (
          <h1>succeed</h1>
        ) : error !== null ? (
          <h1>
            {error.message} 
          </h1>
        ) : (
          <ShareAlbumPageWrapper>
            <ShareAlbumPageContent>
              <AlbumFormContainer
                data={albumFormData}
                onDataChange={setAlbumFormData}
              />
              <ShareAlbumPageFooter>
                <button onClick={handleSubmit}>
                  share
                </button>
              </ShareAlbumPageFooter>
            </ShareAlbumPageContent>
          </ShareAlbumPageWrapper>
        )
      }
    </PageWrapper>
  )
}
