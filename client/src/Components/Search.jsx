import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { toast } from "react-toastify";
import axios from "axios";

const Search = ({ onSearch, onFilterChange, onSortChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("title");
  const [selectedSort, setSelectedSort] = useState("relevance");

  const filters = ["title", "author", "subject", "published"];
  const sortOptions = ["relevance", "newest", "oldest"];

  // used to check if one toast is already displaying and prevent multiple toasts
  const toastId = React.useRef(null);

  const notifyerror = (msg) => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.error(msg);
    }
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    onSortChange(event.target.value);
  };

  function handleSelect(input) {
    onSearch(input.label);
  }

  function handleChange(input) {
    if (!input) return [];
    onSearch(input);
    return axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          input
        )}`
      )
      .then((res) => {
        const data = res.data;
        const opts = data.items.map((d) => {
          return {
            value: d.id,
            label: `${d.volumeInfo.title}${
              d.volumeInfo.publisher ? `, ${d.volumeInfo.publisher}` : ""
            }`,
          };
        });
        return opts;
      })
      .catch((err) => {
        notifyerror(err.message);
        return [];
      });
  }

  return (
    <div className="container mx-auto p-4">
      <div className="lg:flex justify-between items-center gap-5 mb-4">
        <AsyncSelect
          placeholder="Search for Books Suggestions"
          loadOptions={handleChange}
          onChange={handleSelect}
          defaultOptions
          className="w-full"
        />
        <div className="mt-4 gap-4 grid lg:flex lg:m-0">
          {/* Added ml-4 here */}
          <div className="relative flex items-center justify-between gap-2 w-full">
            <label htmlFor="filter" className="text-gray-600 whitespace-nowrap">
              Filter By :{" "}
            </label>
            <select
              id="filter"
              value={selectedFilter}
              onChange={handleFilterChange}
              className="px-4 py-2 capitalize border border-slate-300 bg-white rounded-lg focus:outline-none focus:border-blue-500 shadow-sm  max-md:w-full"
            >
              {filters.map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
          </div>
          <div className="relative flex items-center justify-between gap-2 ">
            <label htmlFor="sort" className="text-gray-600 whitespace-nowrap">
              Sort By :{" "}
            </label>
            <select
              id="sort"
              value={selectedSort}
              onChange={handleSortChange}
              className="px-4 py-2 capitalize border border-slate-300 bg-white rounded-lg focus:outline-none focus:border-blue-500 shadow-sm max-md:w-full"
            >
              {sortOptions.map((sortOption) => (
                <option key={sortOption} value={sortOption}>
                  {sortOption}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
