import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionContainer from "../collection/collection.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  /***
  componentDidMount() {

    fetchCollectionsStart();

    // const { updateCollections } = this.props;

    // const collectionsRef = firestore.collection("collections");

    //* onSnapshot is a observable, and we are using obeserver pattern here.

    /*this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(
      async (snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );

    //* But if we want to use Promise instead of Observable/Observer we can do this..

    /* collectionsRef.get().then((snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });

    //? the only drawback in this pattern is , we are getting live data as it's firing one time

    //TODO: Using Fetch to get the data from firebase

    /*fetch(
      "https://firestore.googleapis.com/v1/projects/clothing-store-e572e/databases/(default)/documents/collections"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));

    //? Though this method gives us the value we need but it's extremely nested!
  }
  */

  return (
    <div className="shop-page">
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
