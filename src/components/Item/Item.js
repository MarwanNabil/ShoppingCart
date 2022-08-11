import { useContext } from "react";

import CartContext from "../../store/CartContext";

import classes from "./Item.module.css";

const Item = (props) => {
  const cartContext = useContext(CartContext);

  const addItemToCart = () => {
    cartContext.cartAction({ type: "USER_ACTION", id: props.id, val: 1 });
  };
  const removeItemToCart = () => {
    cartContext.cartAction({ type: "USER_ACTION", id: props.id, val: -1 });
  };

  const counts = <div className={classes.counts}>{props.quantity}</div>;

  return (
    <div>
      
      <div className={classes.item}>
        <div className={classes.layout}>
          <h1>
            {" "}
            {props.name}
            {props.quantity != null ? counts : ""}{" "}
          </h1>
          <p>{props.description}</p>
        </div>
        <div className={classes.control}>
          <span className={classes.sp}>{props.price} $</span>
          <button className={classes["btn-left"]} onClick={removeItemToCart}>
            -
          </button>
          <button className={classes["btn-right"]} onClick={addItemToCart}>
            +
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Item;
