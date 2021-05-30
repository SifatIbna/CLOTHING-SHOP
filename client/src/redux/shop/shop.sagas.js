import { takeLatest, call, put, all } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollectionAsync() {
  try {
    const collectionsRef = firestore.collection("collections");
    const snapShot = yield collectionsRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (e) {
    yield put(fetchCollectionsFailure(e.message));
  }

  /*
  collectionsRef.get().then(
    (snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    },
    (error) => dispatch(fetchCollectionsFailure(error.message))
  );
  */
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
