import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

function App() {
  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      {/* Header */}
      <Header cart={cart} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
