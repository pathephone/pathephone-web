type LoadMore = {
  type: "LATEST_ALBUMS_PAGE__LOAD_MORE";
};

type DidMount = {
  type: "LATEST_ALBUMS_PAGE__DID_MOUNT";
};

type WillUnmount = {
  type: "LATEST_ALBUMS_PAGE__WILL_UNMOUNT";
};

export type LatestAlbumsPageEvent = LoadMore | DidMount | WillUnmount;
