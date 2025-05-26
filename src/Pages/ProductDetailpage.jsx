// src/pages/ProductDetailPage.js
import { useState } from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';  // Importing the custom hook to access cart context
import products from '../Data/products';  // Importing products data
import {motion} from 'framer-motion'


function ProductDetailPage() {
 
  const { id } = useParams();  // Get product ID from the URL
  const navigate = useNavigate();
  const { addToCart } = useCart();  // Access cart functions from CartContext
  const product = products.find((p) => p.id === parseInt(id));  // Find the product by ID

  const [selectedSize, setSelectedSize] = useState('');  // Store selected size
  const [quantity, setQuantity] = useState(1);  // Default quantity is 1


  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0},
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Handle Add to Cart button
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    const productWithSize = { ...product, selectedSize, quantity };  // Add size and quantity to product
    addToCart(productWithSize);
  };

  if (!product) return <div>Product not found</div>;  // Handle if product is not found

  const handleBuyNow = () => {
    navigate(`/payment/${product.id}`); // ✅ Just pass the ID
  };


  return (
    <div className="flex justify-center items-center bg-gray-100">
      <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white my-5 pt-4 pl-3 rounded-lg shadow-2xl flex flex-col md:flex-row items-center  justify-center w-full h-full md:h-[500px] gap-8">
        <div className='flex flex-col items-center justify-center'>
        {/* Product Image */}
        <motion.img
        variants={itemVariants}
        src={product.image} alt={product.name} className="w-70 md:w-80 rounded-md h-80 md:h-96 hover:scale-105 transition duration-500 my-3.5 " />
           <motion.button 
            onClick={handleBuyNow}
             variants={itemVariants}
           className='py-0.5 px-3 bg-blue-600 hover:bg-blue-700 rounded-md cursor-pointer text-amber-200 hover:scale-105 transition duration-500'>
               Buy Now
           </motion.button>
        </div>

        <div className='flex flex-col items-start mb-4 justify-center'>

        {/* Product Details */}
        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
        <p className="text-xl font-bold text-gray-800">{product.price}</p>
        <p className="text-sm text-gray-600 mb-4 ">{product.description}</p>

        {/* Size Selection */}
        <motion.div 
        variants={itemVariants}
        className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Size</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="border rounded-md p-2 w-32 mt-2 hover:scale-105 transition duration-500"
          >
            <option value="">Select Size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </select>
        </motion.div>

        {/* Quantity Selection */}
        <motion.div
        variants={itemVariants}
        className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            className="border rounded-md p-2 w-32 mt-2 hover:scale-105 transition duration-500"
          />
        </motion.div>
       

        {/* Add to Cart Button */}
        <motion.button
        variants={itemVariants}
          onClick={handleAddToCart}
          className="bg-green-500 text-white p-2 rounded-lg cursor-pointer w-32 hover:scale-105 transition duration-500"
        >
          Add to Cart
        </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default ProductDetailPage;
