import React, { useReducer, useContext } from "react";
import ProductsContext from "./ProductsContext";

const cartReducer = (state, action) => {
  if (action.type === "USER_ACTION") {
    let foundInProducts = false;

    let ret = state.map((item) => {
      if (item.id == action.id) {
        foundInProducts = true;
      }
      return {
        id: item.id,
        quantity: Math.max(
          item.quantity + (item.id == action.id ? action.val : 0),
          0
        ),
      };
    });

    if (!foundInProducts)
      ret.push({
        id: action.id,
        quantity: Math.max(action.val, 0),
      });

    return [...ret];
  }
  return state;
};

const CartContext = React.createContext({
  cart: null,
  cartAction: null,
});

export const CartContextProvider = (props) => {
  const productCTX = useContext(ProductsContext);

  console.log(productCTX);

  const [cartState, cartAction] = useReducer(cartReducer, [
    ...productCTX.productsData.map((item) => ({ id: item.id, quantity: 0 })),
  ]);

  return (
    <CartContext.Provider
      value={{ cart: [...cartState], cartAction: cartAction }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
