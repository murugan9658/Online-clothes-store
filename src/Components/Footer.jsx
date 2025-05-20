import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



function Footer() {
    return (
        <footer className='flex md:flex-row flex-col  items-center  justify-center gap-4 bg-gray-300  p-4'>
            <div>
            <p className='md:text-lg  font-semibold'>&copy; {new Date().getFullYear()} E-commerce clothes store    ||</p>
            </div>
            <div className='pb-6 md:pb-0'>
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
    );
}

export default Footer;