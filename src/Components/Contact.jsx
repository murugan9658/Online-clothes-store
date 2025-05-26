import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import{Element} from 'react-scroll';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.4,
    },
  }),
};

const LevisFooter = () => {
  return (
    <Element name="contact"  className="bg-gray-200 shadow-md text-black/90 pt-10 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 pb-4 md:px-20 ">
        {/* About Section */}
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeIn}>
          <h3 className="text-lg font-semibold mb-4">MORE ABOUT GV FASHION STORE</h3>
          <p className="text-sm text-black/55">
            Discover authentic Gv’s denim & clothing. Shop now for timeless style, comfort, and quality.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div custom={1} initial="hidden" animate="visible" variants={fadeIn}>
          <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-1 text-sm text-black/55">
            {["Men's Jeans", "Women’s Jeans", "Men’s T-shirts", "Women’s Tops", "Footwear", "Men’s Jackets", "Red Tab Member Program", "Store Locator"].map((item, index) => (
              <li key={index} ><a className="hover:text-black transition duration-300" >{item}</a></li>
            ))}
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div custom={2} initial="hidden" animate="visible" variants={fadeIn}>
          <h3 className="text-lg font-semibold  mb-4">SUPPORT</h3>
          <ul className="space-y-1 text-sm text-black/55 ">
            <li className="hover:text-black transition duration-300">Help</li>
            <li className="hover:text-black transition duration-300">Returns & Exchanges</li>
            <li className="hover:text-black transition duration-300">Shipping</li>
            <li className="hover:text-black transition duration-300">About Us</li>
          </ul>

          <h4 className="text-md font-semibold mt-4">CONTACT</h4>
          <ul className="text-sm mt-1 space-y-1 text-black/55">
            <li className="hover:text-black transition duration-300">📧 <span className="font-medium">Customer Care:</span> customercare@GV fashion.in</li>
            <li className="hover:text-black transition duration-300">📧 <span className="font-medium">Escalation:</span> feedback@GV fashion.in</li>
            <li className="hover:text-black transition duration-300">📞 <span className="font-medium">Online Orders:</span> 1800-123-5384</li>
            <li className="hover:text-black transition duration-300">📞 <span className="font-medium">Store Queries:</span> 1800-1020-501</li>
            <li className="hover:text-black transition duration-300">🕙 <span className="font-medium">Mon–Sat:</span> 10AM – 6PM</li>
          </ul>
        </motion.div>

        {/* Subscribe */}
        <motion.div custom={3} initial="hidden" animate="visible" variants={fadeIn}>
          <h3 className="text-lg font-semibold text-green-500 mb-4">Subscribe GV FASHION STORE</h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded"
            >
              Subscribe
            </button>
            <p className="text-xs text-gray-400">
              *See Details for Terms and Conditions and See Privacy Policy for our privacy practices.
            </p>
          </form>
        </motion.div>
      </div>
     <footer className='flex md:flex-row flex-col  items-center  justify-center gap-4 bg-gray-400  p-4'>
                   <div>
                   <p className='md:text-lg  font-semibold'>&copy; {new Date().getFullYear()} GV fashion store    ||</p>
                   </div>
                   <div className='pb-2 md:pb-0'>
                      <ul className='flex flex-row gap-4 text-2xl'>
                       <li className='text-blue-700'><FaFacebook /></li>
                       <li className='text-red-500'><FaYoutube /></li>
                      <li className='text-green-700'> <FaWhatsappSquare/></li>
                       <li className='text-gray-600'><FaTwitter /></li>
                       <li className='text-blue-500'><FaLinkedin /></li>
                      <li className='text-pink-600/80'><FaInstagramSquare/></li>
       
                      </ul>
                   </div>
       </footer>
       
    </Element>

    
  );
};

export default LevisFooter;
