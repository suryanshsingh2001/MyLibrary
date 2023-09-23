import React from "react";
import { useLocation } from "react-router-dom";

const Rent = () => {
  // Use the location hook to access the book information passed from the previous page
  const location = useLocation();
  const { bookTitle, author, genre, published } = location.state || {};

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-semibold mb-4">Rent Confirmation</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{bookTitle}</h2>
          <p className="text-gray-700">Author: {author}</p>
          <p className="text-gray-700">Genre: {genre}</p>
          <p className="text-gray-700">Publish Date: {published}</p>
        </div>
        <p className="text-green-500 font-semibold mb-4">
          Congratulations! You have successfully rented this book.
        </p>
        <p className="text-gray-700">
          You will receive an email confirmation shortly with more details.
        </p>
        <button
          onClick={() => {
            // You can add navigation logic here to go back to the main page or perform any other action
          }}
          className="mt-8 bg-blue-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out w-full"
        >
          Continue Browsing
        </button>
      </div>
    </div>
  );
};

export default Rent;
