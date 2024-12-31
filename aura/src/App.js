
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Shop from "./pages/shop";
import Main from "./pages/main";
import Cart from "./pages/cart";
import Community from "./pages/community";


function App() {
  // Function to load cart items from localStorage
  const loadCartItems = () => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  };

  // State to manage cart items
  const [cartItems, setCartItems] = useState(loadCartItems());

  // UseEffect to persist cart items in localStorage
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/community" element={<Community />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/about" element={<Shop />} />
          <Route path="/upload" element={<Shop />} />
          <Route path="/profile" element={<Shop />} />
          <Route path="/checkout" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;