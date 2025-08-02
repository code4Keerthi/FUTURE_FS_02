import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import toast from "react-hot-toast";
import "./index.css";

function App() {

  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });
 
  const [showCart, setShowCart] = useState(false);
 const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    let message = "";
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
        message = `Quantity increased for ${product.name}`;
        return updatedCart;
      } else {
        message = `${product.name} added to cart`;
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    toast.success(message);
  };

  const handleRemoveFromCart = (index, action) => {
    const updatedCart = [...cart];
    if (action === "increase") {
      updatedCart[index].quantity += 1;
      toast.success(`Increased quantity of ${updatedCart[index].name}`);
    } else if (action === "decrease") {
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
        toast.success(`Reduced quantity of ${updatedCart[index].name}`);
      } else {
        toast.success(`${updatedCart[index].name} removed from cart`);
        updatedCart.splice(index, 1);
      }
    } else if (action === "delete") {
      toast.success(`${updatedCart[index].name} removed from cart`);
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };

  return (
    <BrowserRouter>
      {/* ✅ Navbar (sticky with search and cart count) */}
      <header className="navbar">
        <div className="logo">🛍️ ShopKart</div>
        <input
          type="text"
          placeholder="Search for products, brands..."
          className="search-box"

          
        />
        <div className="nav-buttons">
          <button>Login</button>
          <button>Become a Seller</button>
          <button onClick={() => setShowCart(!showCart)}>
            Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
          </button>
        </div>
      </header>

      {/* ✅ Routing */}
      <Routes>
        <Route
          path="/"
          element={
            showCart ? (
              <Cart cartItems={cart} onRemove={handleRemoveFromCart} />
            ) : (
              <Home onAddToCart={handleAddToCart} />
            )
          }
        />
        <Route
          path="/category/:categoryName"
          element={<CategoryPage onAddToCart={handleAddToCart} />}
        />
      </Routes>n
      
    </BrowserRouter>
    
  );
}

export default App;
