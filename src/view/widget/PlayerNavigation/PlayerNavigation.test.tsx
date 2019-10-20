import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { routes } from "util/route";
import { testId } from "util/testId";
import { TestingProvider } from "util/react/TestingProvider";

import { PlayerNavigation } from "./PlayerNavigation";

const renderComponent = () => {
  const OUTSIDE_CONTAINER = "OUTSIDE_CONTAINER";

  const props = {
    onClose: jest.fn()
  };

  const history = createMemoryHistory();

  const mounted = render(
    <TestingProvider history={history}>
      <div data-testid={OUTSIDE_CONTAINER}>
        <PlayerNavigation {...props} />
      </div>
    </TestingProvider>
  );

  const getOutsideContainerNode = () => mounted.getByTestId(OUTSIDE_CONTAINER);

  const getAlbumPreviewsFeedLinkNode = () =>
    mounted.getByTestId(testId.PLAYER_NAVIGATION__LATEST_ALBUMS_LINK);

  const getShareAlbumLinkNode = () =>
    mounted.getByTestId(testId.PLAYER_NAVIGATION__SHARE_ALBUM_LINK);

  const clickOutside = () => fireEvent.click(getOutsideContainerNode());

  const getOnCloseCallback = () => props.onClose;

  const clickLatestAlbumsLink = () =>
    fireEvent.click(getAlbumPreviewsFeedLinkNode());

  const clickShareAlbumLink = () => fireEvent.click(getShareAlbumLinkNode());

  const getActualRoute = () => history.location.pathname;

  return {
    clickOutside,
    clickLatestAlbumsLink,
    clickShareAlbumLink,
    getOnCloseCallback,
    getActualRoute
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
      clickShareAlbumLink,
      getOnCloseCallback
    } = renderComponent();

    clickLatestAlbumsLink();
    clickShareAlbumLink();

    expect(getOnCloseCallback()).toBeCalledTimes(2);
  });
});

describe("should set correct location", () => {
  test("latest albums link get clicked", () => {
    const { clickLatestAlbumsLink, getActualRoute } = renderComponent();

    clickLatestAlbumsLink();

    expect(getActualRoute()).toEqual(routes.latestAlbumsRoute());
  });
  test("share album link get clicked", () => {
    const { clickShareAlbumLink, getActualRoute } = renderComponent();

    clickShareAlbumLink();

    expect(getActualRoute()).toEqual(routes.shareAlbumRoute());
  });
});
