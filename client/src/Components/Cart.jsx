import React from "react";
import { useCart } from "../utils/CartContext"; // Import useCart from CartContext
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart(); // Use useCart to access the cart context
  const navigate = useNavigate(); // Get the navigate function from React Router

  // Function to navigate to the rent confirmation page
  const goToRentConfirmation = () => {
    // Here, you can pass the selected book information to the rent confirmation page using the state object
    navigate("/rent", { state: { bookInfo: cartItems } });
  };

  // Function to navigate to the previous page
  const goBack = () => {
    navigate(-1); // Navigate back one step in the history
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 bg-white shadow-md mb-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-700">Author: {item.author}</p> {/* Display author */}
              <p className="text-gray-700">Genre: {item.genre}</p> {/* Display genre */}
              <p className="text-gray-700">Publish Date: {item.published}</p> {/* Display publish date */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-gray-700">Quantity: {item.quantity}</div>
                <button
                  onClick={() => removeFromCart(item.id)} // Call removeFromCart to remove the item
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <button
              onClick={goBack} // Call goBack to navigate to the previous page
              className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out w-1/3"
            >
              Go Back
            </button>
            <button
              onClick={clearCart} // Call clearCart to clear the cart
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out w-1/3 ml-2"
            >
              Clear Cart
            </button>
            <button
              onClick={goToRentConfirmation} // Call goToRentConfirmation to navigate to the rent confirmation page
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
