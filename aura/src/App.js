
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Shop from "./pages/shop";
import Main from "./pages/main";

import Upload from "./pages/upload";

import Cart from "./pages/cart";
import Community from "./pages/community";

import CheckOut from "./pages/checkout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Verification from "./pages/Verification";
import ForgotPassword from "./pages/ForgotPassword";

import Profile2 from "./pages/profile2";
import Profile from "./pages/profile";



function App() {
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
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/community" element={<Community />} />


     
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/reset-pass" element={<ResetPassword/>} />
          <Route path="/verification" element={<Verification/>} />
          <Route path="/forgot-pass" element={<ForgotPassword/>} />

         

          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />

          <Route path="/about" element={<Shop />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Shop />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile2" element={<Profile2 />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;