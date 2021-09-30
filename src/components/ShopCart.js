import React, { useContext } from "react";
import { Link } from "react-router-dom";

//* Component
import Cart from "./shared/Cart";

//* Context
import { CartContext } from "../context/CartContextProvider";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div>
          <p>
            <span>Total Items: {state.itemsCounter}</span>
            <span>Total Payments: {state.total}</span>
            <div>
              <button onClick={() => dispatch({ type: "CHECKOUT" })}>
                Check Out
              </button>
              <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
            </div>
          </p>
        </div>
      )}
      {state.checkout && (
        <div>
          <h3>Checked Out Succssfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div>
          <h3>Want to Buy?</h3>
          <Link to="/products">Go to Shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;