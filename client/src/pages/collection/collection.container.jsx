import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionPage from "./collection.components";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsLoaded,
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionContainer;
