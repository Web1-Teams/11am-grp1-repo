import "./styles/shop-page-style.css";
import Footer from "../components/shop-footer";
import ShopItem from "../components/shop-item";
import Navbar from "../components/navbar";
import ShopSidebar from "../components/shop-sidebar";
import { useState, useEffect, useMemo } from "react";
import SettingsModal from "../components/SettingsModal";


const ITEMS_PER_PAGE = 12;

<<<<<<< HEAD
const Shop = ({ cartItems , addToCart  }) => {
=======
const Shop = ({ wishlistItems, setWishlistItems }) => {
>>>>>>> 34055f7432f5c36cf8a8aafc8d7b220761f072b1
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [Factive, setFactive] = useState(false);

<<<<<<< HEAD

  const loadWishlistItems = () => {
    const savedWishlist = localStorage.getItem("wishlistItems");
    console.log("save to wishlist",savedWishlist)
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  };

  const [wishlistItems, setWishlistItems] = useState(loadWishlistItems());
  


  useEffect(()=>{
    if(wishlistItems.length > 0){
      localStorage.setItem("wishlistItems" , JSON.stringify(wishlistItems));
    } 
  } , [wishlistItems]);
=======
  const shopItems = JSON.parse(localStorage.getItem('shopItems'));

  const loadCartItems = () => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  };
  const [cartItems, setCartItems] = useState(loadCartItems());

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);
>>>>>>> 34055f7432f5c36cf8a8aafc8d7b220761f072b1

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

    if (searchTerm) {
      filteredItems = filteredItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredItems;
  };

  const filteredItems = useMemo(() => getFilteredItems(), [categoryFilter, priceFilter, searchTerm]);

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
    setFactive(false);
  };

  const handleFilterTabClick = () => {
    setIsFilterActive(true);
    setFactive(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, categoryFilter, priceFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, priceFilter]);

  

<<<<<<< HEAD
=======
  const addToWishlist = (item) => {
    setWishlistItems((prevWishlistItems) => {
      const updatedWishlist = [...prevWishlistItems, item];
      return updatedWishlist;
    });
  };
>>>>>>> 34055f7432f5c36cf8a8aafc8d7b220761f072b1

  const toggleWishlistItem = (item) => {
    setWishlistItems((prevWishlistItems) => {
      const isItemInWishlist = prevWishlistItems.some((wishlistItem) => wishlistItem.id === item.id);

<<<<<<< HEAD
      // If the item is already in the wishlist, remove it
      if (isItemInWishlist) {
        return prevWishlistItems.filter((wishlistItem) => wishlistItem.id !== item.id);
      } else {
        // Otherwise, add the item to the wishlist
=======
      if (isItemInWishlist) {

        return prevWishlistItems.filter((wishlistItem) => wishlistItem.id !== item.id);
      } else {

>>>>>>> 34055f7432f5c36cf8a8aafc8d7b220761f072b1
        return [...prevWishlistItems, item];
      }
    });
  };

  return (
<<<<<<< HEAD
    <div className="shop-styling">
      <div className={isFilterActive ? "layout active" : 'layout'}>
        <Navbar IsWithSearch={true} setSearchTerm={setSearchTerm} />
        <ShopSidebar
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          isFilterActive={isFilterActive}
          handleAllTabClick={handleAllTabClick}
          handleFilterTabClick={handleFilterTabClick}
          setIsFilterActive={setIsFilterActive}
          isSidebarActive={isSidebarActive}
          setIsSidebarActive={setIsSidebarActive}
          Factive={Factive}
          setFactive={setFactive}
        />
        <main className={isFilterActive ? "shop-items active" : "shop-items"}>
          {currentItems.map(item => (
            <ShopItem
              key={item.id}
              data={item}
              addToCart={addToCart}
              toggleWishlistItem={toggleWishlistItem}
              cartItems={cartItems}
              wishlistItems={wishlistItems}
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
=======
    <div>
      <div className="shop-styling">
        <div className={isFilterActive ? "layout active" : 'layout'}>
          <Navbar IsWithSearch={true} extended={true} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
          <ShopSidebar
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
            isFilterActive={isFilterActive}
            handleAllTabClick={handleAllTabClick}
            handleFilterTabClick={handleFilterTabClick}
            setIsFilterActive={setIsFilterActive}
            isSidebarActive={isSidebarActive}
            setIsSidebarActive={setIsSidebarActive}
            Factive={Factive}
            setFactive={setFactive}
          />
          <main className={isFilterActive ? "shop-items active" : "shop-items"}>
            {currentItems.map(item => (
              <ShopItem
                key={item.id}
                data={item}
                addToCart={addToCart}
                addToWishlist={addToWishlist}
                cartItems={cartItems}
                wishlistItems={wishlistItems}
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
>>>>>>> 34055f7432f5c36cf8a8aafc8d7b220761f072b1
      </div>
      <SettingsModal IsForProfile={false} />
    </div>

  );
};

export default Shop;
