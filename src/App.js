import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/shopCategory";
import Product from "./pages/Product";
import Cart from "./pages/cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="./" element={<Shop />} />
          <Route path="./men" element={<ShopCategory category="men" />} />
          <Route path="./women" element={<ShopCategory category="women" />} />
          <Route path="./kids" element={<ShopCategory category="kids" />} />
          <Route path="./product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>{" "}
          <Route path="./cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
