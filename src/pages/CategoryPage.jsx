import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const CategoryPage = ({ onAddToCart }) => {
  const { categoryName } = useParams();
  const filtered = products.filter(
    (item) => item.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-2xl font-bold mb-4">Showing: {categoryName}</h1>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No products found in {categoryName}</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
