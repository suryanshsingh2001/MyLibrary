import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useCart } from "../utils/CartContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  // Function to navigate to the cart page if logged in, show prompt if not
  const handleCartClick = () => {
    if (isAuthenticated) {
      navigate("/cart");
    } else {
      alert("Please log in to access the cart.");
    }
  };

  return (
    <header className="bg-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-white text-3xl font-semibold tracking-tight">
          <span className="text-yellow-400">Library</span> Management
        </div>

        {/* Navigation */}
        <nav className="space-x-4">
          {/* Display user name if authenticated */}
          {isAuthenticated && (
            <span className="text-white text-sm font-medium">
              Hello, {user.name}
            </span>
          )}

          {/* Login/Logout Button */}
          {isAuthenticated ? (
            <button
              className="text-gray-500 hover:text-blue-700 font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out border border-transparent hover:border-blue-500"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          ) : (
            <button
              className="text-white bg-transparent border border-white hover:bg-white hover:text-blue-500 font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}

          {/* Cart Button */}
          <button
            className="relative text-white hover:text-blue-500"
            onClick={handleCartClick} // Use the handleCartClick function
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19l-4-4h-3a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-3l-4 4z"
              />
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="17" cy="10" r="2" fill="currentColor" />
            </svg>

            {isAuthenticated && (
              <span className="absolute top-0 right-0 bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs font-semibold">
                {cartItems.length}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
