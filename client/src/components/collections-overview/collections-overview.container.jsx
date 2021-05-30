import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

/*
const CollectionsOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionsOverview)
);
*/

//* Another way to write above lines of code using Compose ...

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

//* compose method is executing from right to left
//* It means it's passing: CollectionsOverview to WithSpinner and then passing the result to the connect

export default CollectionsOverviewContainer;
