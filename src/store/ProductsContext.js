import React, { useState } from "react";

const ProductsContext = React.createContext({
  productsData: null,
  setProductsData: null,
});

export const ProductsContextProvider = (props) => {
  const data = [
    {
      id: "0",
      name: "Ipad Air",
      description: "the 2022 new ipad air with A15 bionic chip.",
      price: 1249,
    },
    {
      id: "1",
      name: "Iphone 13Pro",
      description: "need to keep up with your work? it's time for iphone.",
      price: 139,
    },
    {
      id: "2",
      name: "Macbook Air",
      description: "the fastest laptop on earth.",
      price: 3012,
    },
    {
      id: "3",
      name: "Itunes",
      description: "all your media in one place.",
      price: 51,
    },
    {
      id: "4",
      name: "Ipod",
      description: "songs are waiting you.",
      price: 199,
    },
  ];
  const [productsData, setProductsData] = useState(data);

  return (
    <ProductsContext.Provider
      value={{
        productsData: [...productsData],
        setProductsData: setProductsData,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
