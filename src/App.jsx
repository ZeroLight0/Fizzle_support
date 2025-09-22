import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      {/* Route for Home */}
      <Route path="/" element={<HomePage />} />

      {/* Route for About */}
      <Route path="/about" element={<About />} />

      {/* Route for Shop */}
      <Route path="/shop" element={<ShopPage />} />

      {/* Route for Shop */}
      <Route path="/blog" element={<BlogPage />} />

      {/* Route for Shop */}
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
