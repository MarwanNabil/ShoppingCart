import classes from "./ProductForm.module.css";

import Card from "../Card/Card";
import Backdrop from "./../Backdrop/Backdrop";
import { useState, useContext, useRef } from "react";
import ProductsContext from './../../store/ProductsContext';

const ProductForm = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const productName = useRef();
  const productPrice = useRef();
  const productDesc = useRef();
  const productsContext = useContext(ProductsContext);

  const onAddProduct = (event) => {
    event.preventDefault();
    if (productName.current.value.trim().length < 4) {
      productName.current.focus();
      setErrorMessage("make sure the product name is more than 3 characters..");
      return;
    } else if (+productPrice.current.value < 10) {
      productPrice.current.focus();
      setErrorMessage("make sure the product price is more than 10$ ..");
      return;
    } else if (productDesc.current.value.trim().length < 9) {
      productDesc.current.focus();
      setErrorMessage(
        "make sure the product description is more than 10 characters.."
      );
      return;
    }

    const newProductsData = [
      ...productsContext.productsData,
      {
        key: productsContext.productsData.length + "",
        name: productName.current.value,
        price: +productPrice.current.value,
        description: productDesc.current.value,
      },
    ];

    productsContext.setProductsData(newProductsData);
    props.onCancel();
  };

  return (
    <Backdrop className={classes} onClick={props.onCancel}>
      <Card
        background-color="#FFFFFF"
        text-color="#000000"
      >
        <form>
          <label>Name:</label>
          <input type="text" ref={productName} />
          <label>Price:</label>
          <input type="text" ref={productPrice} />
          <label>Description:</label>
          <textarea ref={productDesc} />
          <br />
          <p className={classes.error}>{errorMessage}</p>
          <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection:"row-reverse" }}>
            <button onClick={onAddProduct}>Add</button>
            <button onClick={props.onCancel} style={{backgroundColor:"grey"}}>Cancel</button>
          </div>
        </form>
      </Card>
    </Backdrop>
  );
};

export default ProductForm;
