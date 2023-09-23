import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context
const CartContext = createContext();

// Create a provider component that will wrap your entire application
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to load cart data from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Function to save cart data to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    // Include additional details in the item
    const newItem = {
      id: item.id,
      title: item.title,
      author: item.author,
      genre: item.subject, // Include genre
      published: item.published,
      quantity: 1,
    };

    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to access the cart context
const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
