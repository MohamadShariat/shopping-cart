import React from "react";

//*functions
import { shorten } from "../helper/function";

const Product = ({ productData }) => {
  return (
    <div>
      <img src={productData.image} alt="product" style={{ width: "200px" }} />
      {/*//*with shorten function we just return the two words of title. */}
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <a href="##">Details</a>
      </div>
      <div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
