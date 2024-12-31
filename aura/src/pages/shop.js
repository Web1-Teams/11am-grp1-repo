import "./styles/shop-page-style.css";
import Footer from "../components/shop-footer";
import ShopItem from "../components/shop-item";
import Navbar from "../components/shop-navbar";
import ShopSidebar from "../components/shop-sidebar";
import shopItems from "../data/shop-items-data.json";
import { useState, useEffect, useMemo } from "react";


const ITEMS_PER_PAGE = 12;

const Shop = ({ cartItems, setCartItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [isFilterActive, setIsFilterActive] = useState(false);

  const getFilteredItems = () => {
    let filteredItems = shopItems;

    if (categoryFilter !== "All") {
      filteredItems = filteredItems.filter(item => item.category === categoryFilter);
    }
    if (priceFilter !== "All") {
      const priceRanges = {
        "$0 - $100": [0, 100],
        "$100 - $500": [100, 500],
        "$500 - $1,000": [500, 1000],
        "$1,000 - $5,000": [1000, 5000]
      };
      const [minPrice, maxPrice] = priceRanges[priceFilter];
      filteredItems = filteredItems.filter(item => item.price >= minPrice && item.price <= maxPrice);
    }

    return filteredItems;
  };

  const filteredItems = useMemo(() => getFilteredItems(), [categoryFilter, priceFilter]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handleAllTabClick = () => {
    setCategoryFilter("All");
    setPriceFilter("All");
    setIsFilterActive(false);
  };

  const handleFilterTabClick = () => {
    setIsFilterActive(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, categoryFilter, priceFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, priceFilter]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const updatedCart = [...prevCartItems, item];
      return updatedCart;
    });
  };

  return (
    <div className="shop-styling">
      <div className={isFilterActive ? "layout active" : 'layout'}>
        <Navbar />
        <ShopSidebar
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          isFilterActive={isFilterActive}
          handleAllTabClick={handleAllTabClick}
          handleFilterTabClick={handleFilterTabClick}
        />
        <main className={isFilterActive ? "shop-items active" : "shop-items"}>
          {currentItems.map(item => (
            <ShopItem
              key={item.id}
              data={item}
              addToCart={addToCart}
              cartItems={cartItems}
              isFilterActive={isFilterActive}
            />
          ))}
        </main>
        <Footer
          isFilterActive={isFilterActive}
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
        />
      </div>
    </div>
  );
};

export default Shop;
