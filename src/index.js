import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { CartContextProvider } from "./store/CartContext";
import { ProductsContextProvider } from "./store/ProductsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </ProductsContextProvider>
);
