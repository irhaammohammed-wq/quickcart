import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductList from "../components/ProductList";

function Category() {
  const { name } = useParams();

  const filtered = products.filter(
    (item) => item.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div>
      <h2>{name}</h2>

      {filtered.length === 0 ? (
        <p>No products in this category</p>
      ) : (
        <ProductList products={filtered} />
      )}
    </div>
  );
}

export default Category;