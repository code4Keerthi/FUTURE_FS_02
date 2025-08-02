import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = ({ onAddToCart }) => {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const categories = ["All", ...new Set(products.map((p) => p.category))];
const [searchQuery, setSearchQuery] = useState("");
//const [filteredProducts, setFilteredProducts] = useState(products);

const handleSearch = (query) => {
  setSearchQuery(query);
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredProducts(filtered);
};

  // Filter by category and search query
  
let filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Sort products by price
  if (sortOption === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container mx-auto px-4">

     
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border-gray-300"
            } hover:shadow-md`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 text-center">No products found.</p>
      ) : (
        <div className="product-list">
  {products.map((product) => (
    <div className="product-card" key={product.id}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p className="category">{product.category}</p>
    </div>
  ))}
</div>

      )}
    </div>
  );
};

export default Home;
