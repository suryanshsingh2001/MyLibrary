import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../utils/CartContext"; // Import useCart hook
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 for user authentication

// Helper function to generate random integers
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const BookList = ({ searchQuery }) => {
  const [books, setBooks] = useState([]); // Initialize books as an empty array
  const [loading, setLoading] = useState(true);
  const { addToCart, cartItems } = useCart(); // Access addToCart function and cartItems from CartContext
  const { isAuthenticated } = useAuth0(); // Access isAuthenticated from Auth0

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual Google Books API key
    const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY;
    const query = searchQuery ? `intitle:${searchQuery}` : "programming"; // Filter by title if searchQuery is provided, else use a default query

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=5`
      )
      .then((response) => {
        if (response.data.items) {
          const booksData = response.data.items.map((book) => {
            // Determine availability information (more available than unavailable)
            const isAvailable = Math.random() < 0.7; // 70% chance of being available
            const availableCopies = isAvailable ? getRandomInt(15, 35) : 0;

            return {
              id: book.id,
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "Unknown",
              subject: book.volumeInfo.categories
                ? book.volumeInfo.categories.join(", ")
                : "Unknown",
              published: book.volumeInfo.publishedDate || "Unknown",
              isAvailable, // Store availability status
              availableCopies, // Store available copies
              image: book.volumeInfo.imageLinks?.thumbnail || "", // Image URL
            };
          });
          setBooks(booksData);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
        setLoading(false);
      });
  }, [searchQuery]);

  // Function to add a book to the cart and decrease available copies
  const handleAddToCart = (bookId) => {
    if (!isAuthenticated) {
      // Check if the user is not logged in
      toast.error("Please log in to use this feature.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
      });
      return;
    }

    const updatedBooks = books.map((book) => {
      if (book.id === bookId && book.isAvailable) {
        addToCart(book); // Add the book to the cart
        const updatedCopies = book.availableCopies - 1;
        const updatedBook = {
          ...book,
          addedToCart: true,
          availableCopies: updatedCopies,
        };
        toast.success(`"${updatedBook.title}" has been added to your cart.`, {
          position: toast.POSITION.BOTTOM_RIGHT, // Set the toast position
          autoClose: 3000, // Close the toast after 3 seconds (adjust as needed)
          hideProgressBar: true, // Hide the progress bar
          closeButton: false, // Do not show a close button
        });
        return updatedBook;
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-[#222222] mb-4">
        Explore Our Collection
      </h1>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white border rounded-lg shadow-md p-4 transition transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {book.title}
              </h2>
              {book.isAvailable ? (
                <p className="text-green-600 font-semibold mb-2">
                  Available -{" "}
                  <span className="font-semibold">
                    {book.availableCopies}{" "}
                    {book.availableCopies === 1 ? "copy" : "copies"}
                  </span>
                </p>
              ) : (
                <p className="text-red-600 font-semibold mb-2">Not Available</p>
              )}
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-auto mb-2"
              />
              <div className="text-sm text-gray-600">
                <p className="mb-1">Author: {book.author || "Unknown"}</p>
                <p className="mb-1">Genre: {book.subject || "Unknown"}</p>
                <p className="mb-1">Published: {book.published || "Unknown"}</p>
              </div>
              <div className="flex justify-end">
                {book.addedToCart ? (
                  <button
                    className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full cursor-not-allowed"
                    disabled
                  >
                    Added to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(book.id)}
                    className={`mt-2 ${
                      book.isAvailable
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-300 cursor-not-allowed"
                    } text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out`}
                    disabled={!book.isAvailable}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
