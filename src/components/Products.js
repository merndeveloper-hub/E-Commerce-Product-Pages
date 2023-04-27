import React, { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

const Products = () => {
  // Using dispatch to call action
  const dispatch = useDispatch();
  
  // Using useSelector to get the data from redux
  const {data: products, status} = useSelector((state) => state.product);
    
  //const [products, setProducts] = useState([]);

  useEffect(() => {
dispatch(fetchProducts());
// First Method 

    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

const handleAdd = (product) => {
    dispatch(add(product));
}

if(status === STATUSES.LOADING) {
  return <h2>Loading...</h2>
}

if(status === STATUSES.ERROR) {
  return <h2>Something went wrong</h2>
}

  return (
    <div className="productsWrapper">
        <h1 className="heading">Welcome to the Redux toolkit store</h1>
        <h3 className="heading">Products</h3>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img className="image" src={product.image} alt="products" />
          <h4>{product.title}</h4>
          <h3>{product.price}</h3>
          <button onClick={() => handleAdd(product)} className="btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
