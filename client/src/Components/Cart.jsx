import React from "react";
import { useCart } from "../utils/CartContext";
import { toast } from "react-toastify"; // Import the toast module

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const goToRentConfirmation = () => {
    if (cartItems.length === 0) {
      // Check if the cart is empty
      toast.error("Your cart is empty. Please add items to rent.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
      });
    } else {
      // Cart is not empty
      clearCart(); // Clear the cart
      toast.success("Hurrah! 🎉 You've Successfully Rented the Selected Items. Enjoy Your Reading Adventure!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">
        Oops! Your Cart is Empty{" "}
        <span role="img" aria-label="Smiley face">
          😊
        </span>
        . It's a bit lonely in here! Why not start
        adding some amazing books to your cart? Happy shopping!
      </p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 bg-white shadow-md mb-4"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-700">Author: {item.author}</p>
              <p className="text-gray-700">Genre: {item.genre}</p>
              <p className="text-gray-700">Publish Date: {item.published}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-gray-700">Quantity: {item.quantity}</div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <button
              onClick={clearCart}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out w-1/3"
            >
              Clear Cart
            </button>
            <button
              onClick={goToRentConfirmation}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out w-1/3 ml-2"
            >
              Rent
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
