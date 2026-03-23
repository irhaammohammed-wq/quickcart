import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./data/products";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      {/* Header */}
      <Header cart={cart} setShowCart={setShowCart} />

      {/* Product List */}
      <ProductList products={products} cart={cart} setCart={setCart} />

      {/* Cart Sidebar */}
      {showCart && (
        <Cart cart={cart} setCart={setCart} setShowCart={setShowCart} />
      )}
    </div>
  );
}

export default App;