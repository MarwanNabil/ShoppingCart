import classes from "./Cart.module.css";

import ProductsContext from "../../store/ProductsContext";
import CartContext from "../../store/CartContext";

import Card from "../Card/Card";
import Backdrop from "../Backdrop/Backdrop";
import Item from "../Item/Item";
import { useState, useContext, useEffect } from "react";

const Cart = (props) => {
  const productContext = useContext(ProductsContext);
  const cartContext = useContext(CartContext);

  const [totalCost, setTotalCost] = useState(0);
  const productsDataMap = new Map();

  for (let i = 0; i < productContext.productsData.length; i++) {
    const item = productContext.productsData[i];
    productsDataMap.set(item.id + "", item);
  }

  useEffect(() => {
    let sum = 0;

    for (let i = 0; i < cartContext.cart.length; i++) {
      const item = cartContext.cart[i];
      const price = +productsDataMap.get(item.id).price * +item.quantity;
      sum += price;
    }
    setTotalCost(sum);
  }, [productContext.productsData, cartContext.cart]);
  
  return (
    <Backdrop>
      <Card
        classes={classes.card}
        background-color="#FFFFFF"
        text-color="#000000"
      >
        <div className={classes.items}>
          {cartContext.cart
            .filter((item) => item.quantity !== 0)
            .map((item) => (
              <Item
                key={item.id}
                id={item.id}
                quantity={item.quantity}
                name={productsDataMap.get(item.id).name}
                price={productsDataMap.get(item.id).price}
                cart={props.cart}
                cartAction={props.cartAction}
              />
            ))}
        </div>
        <div
          className={classes.money}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          Total Cost: {totalCost} $
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <button className={` ${classes.btn} `} onClick={props.onCancel}>
            Cancel
          </button>
          <button
            className={`${classes.btn} ${classes.yes}`}
            onClick={props.onCancel}
          >
            Order
          </button>
        </div>
      </Card>
    </Backdrop>
  );
};

export default Cart;
