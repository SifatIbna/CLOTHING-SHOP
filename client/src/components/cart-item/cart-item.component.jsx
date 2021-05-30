import React from "react";

// import "./cart-item.styles.scss";

import {
  CartItemContainer,
  ImageContainer,
  ItemsDetailsContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="item" />
    <ItemsDetailsContainer>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemsDetailsContainer>
  </CartItemContainer>
);
export default CartItem;
