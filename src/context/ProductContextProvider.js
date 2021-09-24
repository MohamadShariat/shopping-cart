import React, { useState, useEffect, createContext } from "react";

//API
import { getProducts } from "../services/api";

const ProductsContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
    };

    fetchApi();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {props.chidren}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
