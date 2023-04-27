import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
const dispatch = useDispatch();

// Subscribe or get the item from redux
  const products = useSelector((state) => state.cart);

  const handleRemover = (productId) => {
    dispatch(remove(productId));
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div 
         key={product.id} className="cartCard">
            <img src={product.image} alt="product" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button onClick={() => handleRemover(product.id)} className="btn">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
