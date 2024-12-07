import { useState } from "react";
import Navbar from "./components/Navbar.jsx"; // Adjust the import based on your file structure
import ProductCard from "./components/Card.jsx"; // Assuming you have a ProductCard component

const App = () => {
  const products = [
    {
      id: 1,
      name: "T-shirt",
      category: "Clothing",
      price: 120,
      image: "./assets/tshirt.jpg",
    },
    {
      id: 2,
      name: "Watch",
      category: "Accessories",
      price: 399,
      image: "./assets/watch.avif",
    },
    {
      id: 3,
      name: "Pants",
      category: "Clothing",
      price: 799,
      image: "./assets/pant.avif",
    },
    {
      id: 4,
      name: "Shoes",
      category: "Footwear",
      price: 900,
      image: "./assets/shoes.jpg",
    },
    {
      id: 5,
      name: "Bag",
      category: "Accessories",
      price: 500,
      image: "./assets/bag.avif",
    },
  ];

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.name
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <div>
      <Navbar
        query={query}
        setQuery={setQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="max-w-7xl mx-auto p-6 grid gap-6 grid-cols-1 md:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">
            No products match your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
