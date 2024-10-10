import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { toast } from "react-toastify";
import axios from "axios";
import { useI18nProContext } from "@marchintosh94/i18n-pro-react";

const Search = ({ onSearch, onFilterChange, onSortChange }) => {
  const { t } = useI18nProContext()
  const [selectedFilter, setSelectedFilter] = useState("title");
  const [selectedSort, setSelectedSort] = useState("relevance");

  const filters = [
    {label: 'filter_option_title', value: 'title'},
    {label: 'filter_option_author', value: 'author'},
    {label: 'filter_option_subject', value: 'subject'},
    {label: 'filter_option_published', value: 'published'},
  ];
  const sortOptions = [
    {label: 'sort_option_relevance', value: 'relevance'},
    {label: 'sort_option_newest', value: 'newest'},
  ];

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
        const opts = data.items?.map((d) => {
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
          placeholder={t("book_search_placeholder")}
          loadOptions={handleChange}
          onChange={handleSelect}
          defaultOptions={false} /* No loading icon on mount */
          className="w-full"
          loadingMessage={() => t("loading") }
          noOptionsMessage={() => t("search_no_results_found") }
        />
        <div className="mt-4 gap-4 grid lg:flex lg:m-0">
          {/* Added ml-4 here */}
          <div className="relative flex items-center justify-between gap-2 w-full">
            <label htmlFor="filter" className="text-gray-600 whitespace-nowrap">
              {t("filter_by")} :{" "}
            </label>
            <select
              id="filter"
              value={selectedFilter}
              onChange={handleFilterChange}
              className="px-4 py-2 capitalize border border-slate-300 bg-white rounded-lg focus:outline-none focus:border-blue-500 shadow-sm  max-md:w-full"
            >
              {filters.map((filter) => (
                <option key={filter} value={filter.value}>
                  {t(filter.label)}
                </option>
              ))}
            </select>
          </div>
          <div className="relative flex items-center justify-between gap-2 ">
            <label htmlFor="sort" className="text-gray-600 whitespace-nowrap">
              {t("sort_by")} :{" "}
            </label>
            <select
              id="sort"
              value={selectedSort}
              onChange={handleSortChange}
              className="px-4 py-2 capitalize border border-slate-300 bg-white rounded-lg focus:outline-none focus:border-blue-500 shadow-sm max-md:w-full"
            >
              {sortOptions.map((sortOption) => (
                <option key={sortOption} value={sortOption.value}>
                  {t(sortOption.label)}
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
