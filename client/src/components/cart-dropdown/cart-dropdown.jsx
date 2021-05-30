import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

// import CustomButton from "../custom-button/custom-button.component";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// import "../cart-dropdown/cart-dropdown.styles.scss";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyContainer,
  ButtonContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  // console.log(otherProps);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyContainer>Your Cart is Empty</EmptyContainer>
        )}
      </CartItemsContainer>
      <ButtonContainer
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </ButtonContainer>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
