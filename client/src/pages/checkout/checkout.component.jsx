import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

// import "../checkout/checkout.styles.scss";

import {
  CheckOutContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <CheckOutContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>PRODUCT</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>DESCRIPTION</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>QUANTITY</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>PRICE</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>REMOVE</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
    ))}
    <TotalContainer>
      <span>TOTAL: ${totalPrice}</span>
    </TotalContainer>
    <TestWarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </TestWarningContainer>
    <StripeCheckoutButton price={totalPrice} />
  </CheckOutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
