import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import products from "../Data/products";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SignupPopupWrapper from "../Components/SignupPopupWrapper";

const ProductList = () => {
  const [filter, setFilter] = useState("All");
  const [typedQuery, setTypedQuery] = useState(""); // Input value only
  const [searchQuery, setSearchQuery] = useState(""); // Triggers search
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showAll, setShowAll] = useState(false);

  const fuse = new Fuse(products, {
    keys: ["name", "description", "category"],
    includeScore: true,
    threshold: 0.4,
  });

  useEffect(() => {
    let updatedProducts = products;

    if (filter !== "All") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category.toLowerCase() === filter.toLowerCase()
      );
    }

    if (searchQuery.trim() !== "") {
      const searchResults = fuse.search(searchQuery.trim());
      const searchIds = searchResults.map((result) => result.item.id);
      updatedProducts = updatedProducts.filter((product) =>
        searchIds.includes(product.id)
      );
    }

    setFilteredProducts(updatedProducts);
    setShowAll(false);
  }, [filter, searchQuery]);

  return (
    <SignupPopupWrapper>
      {({ handleAddToCart }) => (
        <div className="product-list-container bg-gray-100 pt-4 shadow-lg">
          <div className="flex flex-col text-center items-center justify-center">
            <h1>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05, color: "#6b7280" }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl font-bold font-berkshire text-orange-400 inline-block"
              >
                Discover Our Products
              </motion.span>
            </h1>
            <h2>
              <motion.span
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05, color: "#3B82F6" }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold font-cookie text-blue-500 inline-block"
              >
                Filter by category
              </motion.span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center font-playfair gap-4 p-4">
            {["All", "Men", "Women", "Kids"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="cursor-pointer py-0.5 px-3.5 font-bold hover:bg-green-500 hover:text-black transition duration-500 rounded-md bg-green-300 text-fuchsia-500"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="search-container flex justify-center items-center gap-2 p-4">
            <motion.input
              type="text"
              placeholder="Search products..."
              value={typedQuery}
              onChange={(e) => setTypedQuery(e.target.value)}
              initial={{ width: "160px" }}
              whileFocus={{ width: "256px" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <motion.button
              onClick={() => setSearchQuery(typedQuery)}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#2563EB",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-2 bg-blue-400 text-white rounded-md"
            >
              <FaSearch />
            </motion.button>
            {searchQuery && (
                <motion.button
                  onClick={() => {
                    setTypedQuery("");
                    setSearchQuery("");
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "#DC2626" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="py-1 px-3 bg-red-500  text-white rounded-md"
                >
                  Clear
                </motion.button>
              )}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center text-center items-center p-8">
            {filteredProducts.length > 0 ? (
              (showAll
                ? filteredProducts
                : filteredProducts.slice(0, 12)
              ).map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="border p-4 rounded-lg shadow-lg transition overflow-hidden group space-y-3 hover:shadow-2xl cursor-pointer no-underline text-black"
                >
                  <Link to={`/products/${product.id}`}>
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 rounded-md group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h2 className="text-lg font-bold font-playfair">{product.name}</h2>
                    <div className="flex justify-center font-cookie gap-2 items-center">
                      <p className="text-blue-500">
                        {product.price}
                        <span className="line-through text-black/50 ml-2">$100</span>
                      </p>
                      <h2 className="text-green-600 text-lg font-light">{product.offer}</h2>
                    </div>
                    <p className="italic font-playfair pb-2">{product.description}</p>
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-500 text-white font-berkshire px-4 py-2 rounded-md hover:bg-blue-600 hover:scale-105 capitalize transition duration-300"
                  >
                    add to cart
                  </button>
                </motion.div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>

          {/* Show More / Show Less */}
          {filteredProducts.length > 12 && (
            <div className="text-center mb-8">
              <button
                onClick={() => {
                  if (showAll) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  setShowAll(!showAll);
                }}
                className="px-6 py-2 mb-5 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      )}
    </SignupPopupWrapper>
  );
};

export default ProductList;
