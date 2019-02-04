// @flow strict

import type { TServicesContext } from "types/contextTypes";
import type { TFormAlbum } from "types/stateTypes";

import * as React from "react";

import { ServicesContext } from "contexts/ServicesContext";
import { useContextStrict } from "hooks/useContextStrict";
import { PageWrapper } from "components/Page/PageWrapper";
import { AlbumDropZone } from "components/ShareAlbumPage/AlbumDropZone";

import { AlbumFormContainer } from "./ShareAlbumPage/AlbumFormContainer";

type TProps = {||};

export const ShareAlbumPageContainer = (props: TProps) => {
  const [hasPreloader, setHasPreloader] = React.useState<boolean>(false);
  const [hasSuccessScreeen, setHasSuccessScreen] = React.useState<boolean>(
    false
  );
  const [error, setError] = React.useState<Error | null>(null);
  const [albumFormData, setAlbumFormData] = React.useState<TFormAlbum | null>(
    null
  );

  const { submitAlbum } = useContextStrict<TServicesContext>(ServicesContext);

  const handleSubmit = () => {
    if (albumFormData) {
      setHasPreloader(true);
      submitAlbum(albumFormData)
        .then(() => setHasSuccessScreen(true))
        .catch(setError)
        .then(() => setHasPreloader(false));
    }
  };

  const handleCancel = () => {
    setAlbumFormData(null);
  };

  return (
    <>
      {hasPreloader ? (
        <PageWrapper centered>
          <h1>succeed</h1>
        </PageWrapper>
      ) : hasSuccessScreeen ? (
        <PageWrapper centered>
          <h1>succeed</h1>
        </PageWrapper>
      ) : error !== null ? (
        <PageWrapper centered>
          <h1>{error.message}</h1>
        </PageWrapper>
      ) : albumFormData !== null ? (
        <PageWrapper>
          <AlbumFormContainer
            data={albumFormData}
            onDataChange={setAlbumFormData}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </PageWrapper>
      ) : (
        <PageWrapper centered>
          <AlbumDropZone onDataChange={setAlbumFormData} />
        </PageWrapper>
      )}
    </>
  );
};
