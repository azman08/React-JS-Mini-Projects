const Navbar = ({ query, setQuery, selectedCategory, setSelectedCategory }) => {
  return (
    <nav className="flex items-center justify-between p-4 w-full h-[80px]">
      <div className="flex items-center gap-8">
        <h1 className="font-semibold text-lg">Product Search</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for Products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="px-2 py-1 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="">All Categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Accessories">Accessories</option>
        <option value="Footwear">Footwear</option>
      </select>

      <div>
        <ul className="flex gap-6 items-center text-sm font-medium cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
