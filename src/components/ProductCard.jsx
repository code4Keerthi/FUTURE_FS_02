import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition-transform">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-blue-600 font-bold">
  ₹{product.price.toLocaleString("en-IN")}
</span>
<button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
