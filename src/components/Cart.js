import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
function Cart() {
  return (
    <div>
      <button className="btn btn-primary" onClick={onClick}>
    <FaShoppingCart /> Add to Cart
  </button>
  </div>
  )
}
export default Cart;