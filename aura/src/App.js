
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Shop from "./pages/shop";
import Main from "./pages/main";
import Cart from "./pages/cart";
import CheckOut from "./pages/checkout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Verification from "./pages/Verification";
import ForgotPassword from "./pages/ForgotPassword";
import Profile2 from "./pages/profile2";
import Profile from "./pages/profile";
import Upload from "./pages/upload";
import DefaultShopItems from "./data/shop-items-data.json"
import Community from "./pages/community"
import Wishlist from "./pages/wishlist"
function App() {
  const [isSignedIn, setIsSignedIn] = useState(() => {
    const storedStatus = localStorage.getItem('isSignedIn');
    return storedStatus ? JSON.parse(storedStatus) : false;  // Default to false if not set
  });
  localStorage.setItem('shopItems', JSON.stringify(DefaultShopItems));
  // Update localStorage whenever isSignedIn changes
  useEffect(() => {
    localStorage.setItem('isSignedIn', JSON.stringify(isSignedIn));
  }, [isSignedIn]);  // Only update localStorage when isSignedIn changes
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/community" element={<Community />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-pass" element={<ResetPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/forgot-pass" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile2" element={<Profile2 />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/wishlist" element ={<Wishlist/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;