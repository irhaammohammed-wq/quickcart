import ProductCard from "./ProductCard";

function ProductList({ products, cart, setCart }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
}

export default ProductList;