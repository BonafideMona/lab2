import React from 'react';


function Checkout({ totalPrice }) {
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <p>Total Price: ₱{totalPrice.toLocaleString()}</p>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
}

export default Checkout;