import React from "react";

const products = [
  { id: 1, name: "Laptop", price: 70000, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Headphones", price: 3000, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartphone", price: 25000, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Keyboard", price: 1500, image: "https://via.placeholder.com/150" },
];

function ProductList({ addToCart }) {
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
