// @flow strict
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { routes } from "data/routes";
import { testId } from "utils/testId";
import { TestingProvider } from "utils/TestingProvider";

import { PlayerNavigation } from "./PlayerNavigation";

const renderComponent = () => {
  const OUTSIDE_CONTAINER = "OUTSIDE_CONTAINER";

  const props = {
    onClose: jest.fn()
  };

  const mounted = render(
    <TestingProvider>
      <div data-testid={OUTSIDE_CONTAINER}>
        <PlayerNavigation {...props} />
      </div>
    </TestingProvider>
  );

  const getOutsideContainerNode = () => mounted.getByTestId(OUTSIDE_CONTAINER);

  const getLatestAlbumsLinkNode = () =>
    mounted.getByTestId(testId.PLAYER_NAVIGATION__LATEST_ALBUMS_LINK);

  const getSearchAlbumsLinkNode = () =>
    mounted.getByTestId(testId.PLAYER_NAVIGATION__SEARCH_ALBUMS_LINK);

  const getShareAlbumLinkNode = () =>
    mounted.getByTestId(testId.PLAYER_NAVIGATION__SHARE_ALBUM_LINK);

  const clickOutside = () => fireEvent.click(getOutsideContainerNode());

  const getOnCloseCallback = () => props.onClose;

  const clickLatestAlbumsLink = () =>
    fireEvent.click(getLatestAlbumsLinkNode());

  const clickSearchAlbumsLink = () =>
    fireEvent.click(getSearchAlbumsLinkNode());

  const clickShareAlbumLink = () => fireEvent.click(getShareAlbumLinkNode());

  return {
    clickOutside,
    clickLatestAlbumsLink,
    clickSearchAlbumsLink,
    clickShareAlbumLink,
    getOnCloseCallback
  };
};

afterEach(cleanup);

describe("on click outside", () => {
  test("should call onClose callback once", () => {
    const { clickOutside, getOnCloseCallback } = renderComponent();

    clickOutside();

    expect(getOnCloseCallback()).toBeCalledTimes(1);
  });
});

describe("on link get clicked", () => {
  test("should call onClose callback once", () => {
    const {
      clickLatestAlbumsLink,
      clickSearchAlbumsLink,
      clickShareAlbumLink,
      getOnCloseCallback
    } = renderComponent();

    clickLatestAlbumsLink();
    clickSearchAlbumsLink();
    clickShareAlbumLink();

    expect(getOnCloseCallback()).toBeCalledTimes(3);
  });
});

describe("should set correct location", () => {
  test("latest albums link get clicked", () => {
    const { clickLatestAlbumsLink } = renderComponent();

    clickLatestAlbumsLink();

    expect(window.location.pathname).toEqual(routes.latestAlbumsRoute());
  });
  test("search albums link get clicked", () => {
    const { clickSearchAlbumsLink } = renderComponent();

    clickSearchAlbumsLink();

    expect(window.location.pathname).toEqual(routes.searchQueriesRoute());
  });
  test("share album link get clicked", () => {
    const { clickShareAlbumLink } = renderComponent();

    clickShareAlbumLink();

    expect(window.location.pathname).toEqual(routes.shareAlbumRoute());
  });
});
