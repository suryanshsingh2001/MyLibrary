import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import debounce from "lodash.debounce";
import { CartProvider } from "./utils/CartContext";
import { BookList, Header, Search, Cart, Footer, TopButton } from "./Components";
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
        <div className="bg-gradient-to-br from-white to-[#e2d1c3] min-h-screen">
          <main className="bg-gradient-to-br from-white to-[#e2d1c3] min-h-screen flex flex-col">
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
                    <Footer />
                    <TopButton />
                  </>
                }
              />
              <Route path="/cart" element={<Cart />} />
              
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
