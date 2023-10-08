import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";

const Search = ({ onSearch, onFilterChange, onSortChange }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("title");
  const [selectedSort, setSelectedSort] = useState("relevance");

  const filters = ["title", "author", "subject", "published"];
  const sortOptions = ["relevance", "newest", "oldest"];

  useEffect(() => {
    const getSuggestions = async (inputValue) => {
      try {
        if (inputValue.trim() === "") {
          // If inputValue is empty, clear suggestions and return
          setSuggestions([]);
          return;
        }

        setLoading(true);

        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            inputValue
          )}`
        );

        if (response.data.items) {
          const books = response.data.items.map((book) => ({
            id: book.id,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors
              ? book.volumeInfo.authors.join(", ")
              : "Unknown",
            subject: book.volumeInfo.categories
              ? book.volumeInfo.categories.join(", ")
              : "Unknown",
            published: book.volumeInfo.publishedDate || "Unknown",
          }));
          setSuggestions(books);
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      } finally {
        setLoading(false);
      }
    };

    getSuggestions(value);
  }, [value]);

  const onSuggestionsFetchRequested = ({ value }) => {
    // No need to fetch suggestions here, it's now handled in the useEffect
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => suggestion.title;

  const renderSuggestion = (suggestion) => <div>{suggestion.title}</div>;

  const onChange = (event, { newValue }) => {
    setValue(newValue);
    onSearch(newValue);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    onSortChange(event.target.value);
  };

  const inputProps = {
    placeholder: "Search for books",
    value,
    onChange,
    className:
      "w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500",
  };
  return (
    <div className="container mx-auto p-4">
      <div className="lg:flex justify-between items-center mb-4">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        <div className="ml-4 mt-4 gap-4 grid lg:flex lg:gap-8 lg:m-0">
          {" "}
          {/* Added ml-4 here */}
          <div className="relative flex items-center justify-between gap-2">
            <label htmlFor="filter" className="text-gray-600">
              Filter By :{" "}
            </label>
            <select
              id="filter"
              value={selectedFilter}
              onChange={handleFilterChange}
              className="border rounded-lg px-1 py-1 pr-4 focus:outline-none focus:border-blue-500 shadow-sm "
            >
              {filters.map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 12.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-2.293-2.293a1 1 0 00-1.414 0L5.293 16.707a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="relative flex items-center justify-between gap-2">
            <label htmlFor="sort" className="text-gray-600">
              Sort By :{" "}
            </label>
            <select
              id="sort"
              value={selectedSort}
              onChange={handleSortChange}
              className="border rounded-lg px-2 py-1 pr-4 focus:outline-none focus:border-blue-500 shadow-sm"
            >
              {sortOptions.map((sortOption) => (
                <option key={sortOption} value={sortOption}>
                  {sortOption}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 12.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-2.293-2.293a1 1 0 00-1.414 0L5.293 16.707a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {loading && <p>Loading suggestions...</p>}
    </div>
  );
};

export default Search;
