import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useCart } from "../utils/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "./Logo";

const Header = () => {
  const { loginWithRedirect, isAuthenticated,  logout, user } = useAuth0();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const isTrue = true; // Variable to temporarily store true value

  // Function to navigate to the cart page if logged in, show prompt if not
  const handleCartClick = () => {
    if (isTrue) { //Change to isAuthenticated to enable authentication
      navigate("/cart");
    } else {
      toast.error("Please log in to access the cart.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
      });
    }
  };

  return (
    <header className="bg-[#523f1b] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo as a Link with Bounce Animation */}
        <Link
          to="/"
          className="text-white text-3xl font-semibold tracking-tight flex items-center"
          
        >
          <Logo/>
        </Link>
<div className="content flex max-[500px]:flex-col-reverse flex-row items-center gap-4 ">
  {/* Display user name if authenticated */}
          {isAuthenticated && (
            <span className="text-white text-sm font-medium">
              Hello, {user.name}
            </span>
          )}
  
        {/* Navigation */}
        <nav className="space-x-4 flex items-center">
          

          {/* Login/Logout Button */}
          {isAuthenticated ? (
            <button
              className="text-white  border border-white hover:bg-[#ead9c6] hover:text-[#523f1b] font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          ) : (
            <button
              className="text-white  border border-white hover:bg-[#ead9c6] hover:text-[#523f1b] font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}

          {/* Cart Button with Hover Animation */}
          <button
            className="relative text-white hover:text-blue-500 transform transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={handleCartClick}
          >
            {/* New Cart SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="#ffffff" // Fill color set to white
                d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79-4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96a2 2 0 0 0-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79-4-4-1.79-4-4-4z"
              ></path>
            </svg>

            {isTrue && ( //Change to isAuthenticated to enable authentication
              <span className="absolute top-0 right-0 bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs font-semibold">
                {cartItems.length}
              </span>
            )}
          </button>
        </nav>
        
</div>
      </div>
    </header>
  );
};

export default Header;
