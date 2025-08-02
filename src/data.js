// src/data.js
const categories = ["Electronics", "Clothing", "Home", "Books", "Beauty"];

const generateProducts = (count = 1000) => {
  const products = [];
  for (let i = 1; i <= count; i++) {
    const category = categories[i % categories.length];
    products.push({
      id: i,
      name: `${category} Product ${i}`,
      price: (Math.random() * 1000 + 100).toFixed(0),
      category,
      image: `https://picsum.photos/200?random=${i}` // random images
    });
  }
  return products;
};

export const products = generateProducts(1000);
