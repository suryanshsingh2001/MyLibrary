import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import debounce from "lodash.debounce";
import { CartProvider } from "./utils/CartContext";
import { BookList, Header, Search, Cart, Footer } from "./Components";
import Rent from "./Pages/Rent";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("title");
  const [selectedSort, setSelectedSort] = useState("relevance");

  const handleSearch = debounce((query) => {
    setSearchQuery(query);
  }, 300);

  const handleFilterChange = (selectedFilter) => {
    setSelectedFilter(selectedFilter);
  };

  const handleSortChange = (selectedSort) => {
    setSelectedSort(selectedSort);
  };

  return (
    <CartProvider>
      <ToastContainer />
      <Router>
        
          <main className="bg-[#f5f5f5]">
            <Header />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Search
                      onSearch={handleSearch}
                      onFilterChange={handleFilterChange}
                      onSortChange={handleSortChange}
                    />
                    <BookList
                      searchQuery={searchQuery}
                      selectedFilter={selectedFilter}
                      selectedSort={selectedSort}
                    />
                  </>
                }
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/rent" element={<Rent />} />
            </Routes>

            <Footer />
          </main>
      </Router>
    </CartProvider>
  );
};

export default App;
