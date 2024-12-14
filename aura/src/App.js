
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Shop from "./pages/shop";
import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/community" element={<Shop />} />
          <Route path="/cart" element={<Shop />} />
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