import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../Data/products";
import {motion} from 'framer-motion'

function PaymentPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [method, setMethod] = useState(""); // 'card' or 'upi'
  const [alert, setAlert] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!method) {
      alert("Please select a payment method.");
      return;
    }

    setAlert(`Payment successful for ${product.name} using ${method.toUpperCase()}!`);
  };

  if (!product) return <p>Product not found.</p>;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    className="p-6 max-w-md mx-auto mt-3.5 bg-gray-200 rounded shadow-lg">
        {/* image show*/}
        <div className="flex flex-col items-center space-y-4">
            <motion.img
            variants={itemVariants}
            src={product.image} alt={product.name} 
            className="w-50 h-60 rounded-md "/>
           <motion.h2 
           variants={itemVariants}
           className="text-xl font-bold text-yellow-500 mb-4"> {product.name}</motion.h2>
            <motion.p
            variants={itemVariants}
            className="mb-2 text-green-600 font-semibold">Price: {product.price}</motion.p>
        </div>

      {/* Payment Method Selection */}
      <div className="mb-4">
        <motion.label 
        variants={itemVariants}
        className="block font-semibold text-2xl hover:scale-105 duration-500 mb-2">Select Payment Method:</motion.label>
        <div className="space-x-4">
          <motion.label
          variants={itemVariants}
          className="text-blue-700 font-semibold">
            <input
              type="radio"
              name="method"
              value="card"
              onChange={(e) => setMethod(e.target.value)}
              
            />{" "}
            Card
          </motion.label>
          <motion.label
          variants={itemVariants}
          className="text-blue-700 font-semibold">
            <input
              type="radio"
              name="method"
              value="upi"
              onChange={(e) => setMethod(e.target.value)}
            />{" "}
            UPI
          </motion.label >
        </div>
      </div>

      {/* Dynamic Form Based on Method */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {method === "card" && (
          <>
            <input type="text" placeholder="Card Number" required className="w-full p-2 border rounded  hover:outline-1 hover:scale-105 duration-500" />
            <input type="text" placeholder="Expiry Date" required className="w-full p-2 border rounded hover:outline-1 hover:scale-105 duration-500" />
            <input type="text" placeholder="CVV" required className="w-full p-2 border rounded hover:outline-1 hover:scale-105 duration-500" />
          </>
        )}

        {method === "upi" && (
          <input type="text" placeholder="Enter UPI ID" required className="w-full p-2 border rounded" />
        )}

        <motion.button 
        variants={itemVariants}
        type="submit" className="w-full bg-blue-600 hover:font-semibold hover:bg-blue-800 hover:scale-105 duration-300 text-white py-2 rounded">
          Pay Now
        </motion.button>
      </form>

      {/* Alert Message */}
      {alert && (
        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {alert}
        </div>
      )}
    </motion.div>
  );
}

export default PaymentPage;
