import ProductsContext from "./store/ProductsContext";
import CartContext from "./store/CartContext";

import React, { useState, useContext, useReducer , useEffect } from "react";
import ReactDom from "react-dom";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Card from "./components/Card/Card";
import Item from "./components/Item/Item";
import Cart from "./components/UI/Cart";
import ProductForm from "./components/UI/ProductForm";

import CartImg from "./images/cart.png";
import Wallpaper from "./images/wallpaper.png";


function App() {
  const productsContext = useContext(ProductsContext);
  const cartContext = useContext(CartContext);
  const [BackdropContent, setBackdropContent] = useState(null);
  const onCancelDrop = () => {
    setBackdropContent(null);
  };


  const productForm = () => {
    setBackdropContent(
      ReactDom.createPortal(
        <ProductForm
          onCancel={onCancelDrop}
        />,
        document.getElementById("backdrop-root")
      )
    );
  };

  const showCartDrop = () => {
    setBackdropContent(
      ReactDom.createPortal(
        <Cart
          onCancel={onCancelDrop}
        />,
        document.getElementById("backdrop-root")
      )
    );
  };

  return (
    <React.Fragment>
      {BackdropContent}
      <Header>
        <h1>Apple Store</h1>
        <span onClick={productForm}>
          <p>+ Add New Product</p>
        </span>
        <span onClick={showCartDrop}>
          <img src={CartImg} />
          <p>Your Cart</p>
          <span>
            {cartContext.cart.length === 0
              ? 0
              : cartContext.cart
                  .map((item) => item.quantity)
                  .reduce((ac, quantity) => ac + quantity)}
          </span>
        </span>
      </Header>
      <Content wallpaper={Wallpaper}>
        <Card background-color="#000000" text-color="#FFFFFF">
          <h1>2022 News</h1>
          <h2>Its time for the brand new products for Apple in 22 </h2>
        </Card>
        <Card background-color="#FFFFFF" text-color="#000000">
          {productsContext.productsData.map((item) => (
            <Item
              key={item.id + ""}
              id={item.id + ""}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </Card>
      </Content>
    </React.Fragment>
  );
}

export default App;
