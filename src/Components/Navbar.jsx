// File: src/Components/Navbar.jsx
import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {AnimatePresence, motion} from "framer-motion";
import { useCart } from '../hooks/useCart'; // Importing the custom hook to access cart context




const Navbar = () => {
  const { cartItems } = useCart(); // Accessing cart items from CartContext

  const [query, setQuery] = React.useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };



  return (
    <nav className='flex sticky top-0 z-50 justify-between space-x-4 bg-gray-800 text-white p-4'>
        <div className='flex items-center space-x-2'>
          {/* Logo */} 
        <FaShoppingBag  className='text-3xl text-orange-400'/>
          <h1 className='md:text-2xl'>GV fashion store</h1>
        </div>

      <ul className=" hidden md:flex space-x-4 text-lg font-semibold items-center">
        <li className='cursor-pointer hover:text-orange-400 hover:scale-105 transition duration-400'>
          <ScrollLink to="hero" smooth={true} duration={500} offset={-70}>Home</ScrollLink>
        </li>
        <li className='cursor-pointer hover:text-orange-400 hover:scale-105 transition duration-400'>
        <ScrollLink to="product" smooth={true} duration={500}  offset={-70}>Products</ScrollLink>
        </li>
        <li className='cursor-pointer hover:text-orange-400 hover:scale-105 transition duration-400'>
        <ScrollLink to="ReviewSlider" smooth={true} duration={500} offset={-70} >Review</ScrollLink>
        </li>
        <li className='cursor-pointer hover:text-orange-400 hover:scale-105 transition duration-400'>
        <ScrollLink to="contact" smooth={true} duration={700} offset={-70}  >Contact</ScrollLink>
        </li>
      </ul>

      <form onSubmit={handleSubmit} className="relative hidden md:flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border rounded-full w-full hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-400 transition duration-100" />
      </form>

      <div className='flex items-center space-x-6'>
      <RouterLink
        to="/login"
        className=" flex cursor-pointer px-4 py-1 rounded-lg bg-orange-400 hover:text-blue-500 hover:scale-105 transition-transform duration-300 text-xl
        text-white font-serif"
      >
        Login
      </RouterLink>

       
       <RouterLink to="/cart" className="relative">
        <FaShoppingCart  className='text-2xl'/>
        <AnimatePresence>
          {cartItems.length > 0 &&(
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-4 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
            >
              {cartItems.length}
            </motion.div>
          )}
        </AnimatePresence>
        </RouterLink>


        <RouterLink to="/profile"  >
        <FaRegUserCircle  className='text-3xl text-yellow-400 hover:text-yellow-100 transition-transform duration-300'/>
        
        </RouterLink>

      {/* Mobile Menu Icon */}

          <button className="md:hidden   text-2xl text-blue-400 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >

              {isMobileMenuOpen? <AiOutlineCloseCircle className='text-red-500' />: <GiHamburgerMenu />}
          </button>
      </div>

      

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration:0.5 }}
           className="md:hidden absolute top-24 left-0 w-full h-64 bg-gray-800 opacity-90 text-white p-4 shadow-lg rounded-lg z-50">
          <ul className="flex flex-col items-center space-y-4 text-lg font-semibold">
            <li className='cursor-pointer hover:text-orange-400 hover:scale-105 transition duration-400'>
              <ScrollLink to="hero" smooth={true} duration={700} offset={-70}  onClick={()=>setIsMobileMenuOpen(false)}>Home</ScrollLink>
            </li>
            <li className='cursor-pointer hover:text-orange-400 hover:scale-105 transition duration-400'>
              <ScrollLink to="product" smooth={true} duration={700} offset={-70}  onClick={()=>setIsMobileMenuOpen(false)}>Products</ScrollLink>
            </li>
            <li className='cursor-pointer hover:text-orange-400 hover:scale-105 transition duration-400'>
              <ScrollLink to="ReviewSlider" smooth={true} duration={700} offset={-70}  onClick={()=>setIsMobileMenuOpen(false)} >Review</ScrollLink>
            </li>
            <li className='cursor-pointer hover:text-orange-400 hover:scale-105 transition duration-400'>
              <ScrollLink to="contact" smooth={true} duration={700} offset={-70}  onClick={()=>setIsMobileMenuOpen(false)} >Contact</ScrollLink>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar