import { useState } from "react";
import ProductList from "../components/ProductList";
import products from "../data/products";

function Home({ cart, setCart }) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px"
        }}
      />

      {/* Empty Search State */}
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ProductList
          products={filteredProducts}
          cart={cart}
          setCart={setCart}
        />
      )}
    </div>
  );
}

export default Home;