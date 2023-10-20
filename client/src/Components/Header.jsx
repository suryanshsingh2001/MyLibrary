import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useCart } from "../utils/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Logo from "./Logo";

import { FiLayers, FiShoppingCart } from "react-icons/fi";
const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const isTrue = true; // Variable to temporarily store true value

  // Function to navigate to the cart page if logged in, show prompt if not
  const handleCartClick = () => {
    if (isTrue) {
      //Change to isAuthenticated to enable authentication
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
    <header className=" p-4 box-border">
      <div className="w-full h-11 box-border flex justify-between items-center bg-gradient-to-l from-gray-50 to-white md:px-6 px-3 py-1 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
        {/* Brand Logo as a Link with Bounce Animation */}
        <Link to="/" className="tracking-tight pl-4">
          <div className="flex justify-center items-center relative">
            <div className="p-2 box-border rounded-full bg-[#E9DBD1] absolute z-10">
              <FiLayers className=" -rotate-[40deg] text-xl text-[#523F1B]"></FiLayers>
            </div>
            <div className="bg-[#E9DBD1]  rounded-full absolute left-0 w-28 flex justify-end items-center h-[1.65rem] box-border px-4">
              <p className=" font-semibold  text-[#523F1B] box-border ">
                My Library
              </p>
            </div>
          </div>
        </Link>
        <div className="content flex max-[500px]:flex-col-reverse flex-row items-center gap-4 ">
          {/* Display user name if authenticated */}
          {isAuthenticated && (
            <span className="text-white text-sm font-medium">
              Hello, {user.name}
            </span>
          )}

          {/* Navigation */}
          <nav className="space-x-6 flex items-center">
            {/* Login/Logout Button */}
            {isAuthenticated ? (
              <button
                className="text-[#222222]  border-2 border-[#523F1B] hover:bg-[#ead9c6] hover:text-[#523f1b]  font-semibold py-[.15rem] px-4 rounded-md transition duration-300 ease-in-out flex justify-center items-center"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            ) : (
              <button
                className="text-[#222222]  border-2 border-[#523F1B] hover:bg-[#ead9c6] hover:text-[#523f1b]  font-semibold py-[.15rem] px-4 rounded-md transition duration-300 ease-in-out flex justify-center items-center"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}

            {/* Cart Button with Hover Animation */}
            <button
              className="relative  text-[#523F1B] group   transform transition-transform duration-300 ease-in-out hover:scale-105 "
              onClick={handleCartClick}
            >
              {/* New Cart SVG */}
              <FiShoppingCart className="text-3xl font-semibold group-hover:text-[#ead9c6]"></FiShoppingCart>
              {isTrue && ( //Change to isAuthenticated to enable authentication
                <span className="absolute top-0 right-0 bg-gray-400 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs font-semibold group-hover:bg-gray-600">
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
