import React from "react";

function Cart({ cart, removeFromCart, total }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty 🛍️</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <strong>{item.name}</strong> x {item.quantity}
              </div>
              <div>₹{item.price * item.quantity}</div>
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
