import React, { useContext } from "react";
import { Link } from "react-router-dom";

//* Functions
import { shorten, isInCart, quantityCount } from "../../helper/functions";

//* Context
import { CartContext } from "../../context/CartContextProvider";

//* Icons
import trashIcon from "../../assets/icons/trash.png";

const Product = ({ productData }) => {
  //* here we take state and dispatch from CartContextProvider
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <img src={productData.image} alt="product" style={{ width: "200px" }} />
      {/*//* with shorten function we just return the two words of title. */}
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
          {quantityCount(state, productData.id) > 1 && (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img src={trashIcon} alt="trash" style={{ width: "10px" }} />
            </button>
          )}
          {isInCart(state, productData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
