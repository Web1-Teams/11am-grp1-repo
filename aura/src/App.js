
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
import Wishlist from "./pages/wishlist";


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

  const loadWishlistItems = ()=> {
    const savedWishlist= localStorage.getItem("cartItems");
    return savedWishlist? JSON.parse(savedWishlist) : [];
  }
  const[wishlistItems,setWishlistItems] = useState(loadWishlistItems());
  useEffect(()=>{
    if(wishlistItems.length > 0){
      localStorage.setItem("wishlistItems" , JSON.stringify(wishlistItems));
    } 
  } , [wishlistItems]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems} wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="wishlist" element={<Wishlist wishlistItems={wishlistItems} setWishlistItems={setWishlistItems }/>}/>
          <Route path="/community" element={<Community />} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/reset-pass" element={<ResetPassword/>} />
          <Route path="/verification" element={<Verification/>} />
          <Route path="/forgot-pass" element={<ForgotPassword/>} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile2" element={<Profile2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;