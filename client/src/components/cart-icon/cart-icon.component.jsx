import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// import "../cart-icon/cart-icon.styles.scss";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

//! What we are doing the below code is called selecting a portion of Big State. But
//! the downside is it's being called every time even though the cartItems is not changing.Becuase
//! our state is a new object every time the state is changing. Even the value the identical ,
//! the state is brand new

// const mapStateToProps = ({ cart: { cartItems } }) => {
//   console.log("I'm being called");
//   return {
//     itemCount: cartItems.reduce((acc, item) => acc + item.quantity, 0),
//   };
// };

//TODO: We can use memomization/ caching  instead of selectors

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
