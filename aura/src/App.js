
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Shop from "./pages/shop";
import Main from "./pages/main";

import Cart from "./pages/cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Verification from "./pages/Verification";
import ForgotPassword from "./pages/ForgotPassword";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/community" element={<Shop />} />

          <Route path="/cart" element={<Cart/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/reset-pass" element={<ResetPassword/>} />
          <Route path="/verification" element={<Verification/>} />
          <Route path="/forgot-pass" element={<ForgotPassword/>} />

         
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