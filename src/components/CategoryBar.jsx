import React from "react";
import "./CategoryBar.css"; // 👈 We'll style it separately
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

<button onClick={() => navigate(`/category/${category.toLowerCase()}`)}>
  {category}
</button>

const categories = [
  { label: "Mobiles", icon: "📱" },
  { label: "Fashion", icon: "👗" },
  { label: "Electronics", icon: "💻" },
  { label: "Appliances", icon: "🧺" },
  { label: "Grocery", icon: "🛒" },
  { label: "Books", icon: "📚" },
  { label: "Toys", icon: "🧸" },
  { label: "Beauty", icon: "💄" },
];

const CategoryBar = () => {
  return (
    <div className="category-bar">
      {categories.map((cat, index) => (
        <div key={index} className="category-item">
          <div className="cat-icon">{cat.icon}</div>
          <div className="cat-label">{cat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
