// @flow strict

import { mockServices } from "services/mock/index";

// TODO: make a stand alone type
export type TServices = typeof mockServices;

// import type { TFeedAlbum } from "types/state";

// export type TGetSearchQueryPageDataParams = {
//   queryText: string,
//   pageNumber: number
// };

// export type TGetSearchQueryPageDataValue = {
//   lastPageFlag: boolean,
//   savedQueryFlag: boolean,
//   matchedAlbums: TFeedAlbum[]
// };

// export type TServices = {
//   getSearchQueryPageData(
//     params: TGetSearchQueryPageDataParams
//   ): Promise<TGetSearchQueryPageDataValue>
// };
