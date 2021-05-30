import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

export const selectCollectionsForPreview = createSelector(
  [selectShopData],
  (shopData) =>
    shopData ? Object.keys(shopData).map((key) => shopData[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopData], (shopData) =>
    shopData ? shopData[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShopData],
  (shopData) => shopData === null
);
