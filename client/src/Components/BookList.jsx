import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../utils/CartContext'; // Import useCart hook

// Helper function to generate random integers
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const BookList = ({ searchQuery }) => {
  const [books, setBooks] = useState([]); // Initialize books as an empty array
  const [loading, setLoading] = useState(true);
  const { addToCart, cartItems } = useCart(); // Access addToCart function and cartItems from CartContext

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual Google Books API key
    const apiKey = 'AIzaSyAHgg14D26wJRBnIE4X1uNX_rfGJ5fP4vI';
    const query = searchQuery ? `intitle:${searchQuery}` : 'programming'; // Filter by title if searchQuery is provided, else use a default query

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
              author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown',
              subject: book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'Unknown',
              published: book.volumeInfo.publishedDate || 'Unknown',
              isAvailable, // Store availability status
              availableCopies, // Store available copies
              image: book.volumeInfo.imageLinks?.thumbnail || '', // Image URL
            };
          });
          setBooks(booksData);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching book data:', error);
        setLoading(false);
      });
  }, [searchQuery]);

  // Function to add a book to the cart and decrease available copies
  const handleAddToCart = (bookId) => {
    const updatedBooks = books.map((book) => {
      if (book.id === bookId && book.isAvailable) {
        addToCart(book); // Add the book to the cart
        const updatedCopies = book.availableCopies - 1;
        return { ...book, addedToCart: true, availableCopies: updatedCopies };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Book List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="border rounded-lg p-2 bg-white shadow-md"
            >
              <h2 className="text-xl font-semibold">{book.title}</h2>
              {book.isAvailable ? (
                <p className="text-green-600 font-semibold">
                  Available -{' '}
                  <span className="font-semibold">
                    {book.availableCopies} {book.availableCopies === 1 ? 'unit' : 'units'}
                  </span>
                </p>
              ) : (
                <p className="text-red-600 font-semibold">Not Available</p>
              )}
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-auto mb-2"
              />
              <div>
                <p className="text-gray-700">
                  Author: {book.author || 'Unknown'}
                </p>
                <p className="text-gray-700">
                  Genre: {book.subject || 'Unknown'}
                </p>
                <p className="text-gray-700">
                  Year of Publishing: {book.published || 'Unknown'}
                </p>
                {book.addedToCart ? (
                  <button
                    className="mt-2 bg-green-500 text-white font-semibold py-2 px-4 rounded-full cursor-not-allowed"
                    disabled
                  >
                    Added to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(book.id)}
                    className={`mt-2 ${
                      book.isAvailable
                        ? 'bg-blue-500 hover:bg-blue-600'
                        : 'bg-gray-300 cursor-not-allowed'
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
