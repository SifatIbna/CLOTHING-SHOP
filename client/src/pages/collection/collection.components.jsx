import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selector";

// import "./collection.styles.scss";

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ collections, match }) => {
  return (
    <CollectionPageContainer>
      <TitleContainer>{collections.title}</TitleContainer>
      <ItemsContainer>
        {collections.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
