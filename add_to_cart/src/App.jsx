// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Phone", price: 699 },
    { id: 2, name: "Keyboard", price: 49 },
    { id: 3, name: "Headphone", price: 129 },
  ];

  // Add to cart function
  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCartItems, { ...product, quantity: 1 }];
    });
  };

  // Remove from cart function
  const handleRemoveFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate total cart items and cost
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalCost = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div>
      <Navbar cartCount={totalItems} />
      <div className="p-4">
        <h2 className="text-xl font-bold">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">Cart</h2>
        {cartItems.length > 0 ? (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <span>
                    {item.name} - ${item.price} x {item.quantity}
                  </span>
                  <div>
                    <button
                      className="bg-red-600 rounded-full text-white font-semibold px-4 py-2 mr-2 mb-4"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-bold">Total Cost: ${totalCost}</p>
          </div>
        ) : (
          <p className="text-lg font-medium">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default App;
