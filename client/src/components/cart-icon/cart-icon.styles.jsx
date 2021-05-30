import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  width: 35px;
  height: 35px;
`;

export const ItemCountContainer = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  bottom: 5px;
`;
