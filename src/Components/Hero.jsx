import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const slides = [
  {
    id: 1,
    title: "Welcome to Our Store",
    desc: "Explore our exclusive men's collection now! ",
    image: "/images/landing1.png",
    button: "Shop Now",
  },
  {
    id: 2,
    title: "Summer Sale is Live!",
    desc: "Up to 20% off on selected items.",
    image: "/images/landing2.png",
    button: "Grab Deal",
  },
  {
    id: 3,
    title: "New Arrivals 20% dis.",
    desc: "Check out the latest fashion trends.",
    image: "/images/landing3.png",
    button: "View Collection",
  },
];

const LandingSlider = () => {
  const [index, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setImageLoaded(false); // Reset when slide changes
  }, [index]);

  return (
    <div className="relative w-full h-screen   bg-gray-500 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute w-full h-full flex items-center justify-start"
        >
          {/* Background Image */}
          <img
            src={slides[index].image}
            alt="slide"
            className="absolute md:w-full h-full  "
            onLoad={() => setImageLoaded(true)}
          />

          {/* Content on the left */}
          {imageLoaded && (
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 flex-col space-y-14  px-6 text-center   md:ml-32    text-white max-w-xl "
              >
                <h2 className="text-3xl md:text-5xl font-bold hover:scale-105 duration-300">{slides[index].title}</h2>
                <p className=" text-base italic md:text-lg">{slides[index].desc}</p>
                <ScrollLink 
                to="product" smooth={true} duration={700} offset={-70}
                >
                <button className=" text-white font-semibold bg-blue-400 px-6 py-2 rounded hover:scale-105 duration-500 hover:bg-blue-600 transition">
                  {slides[index].button}
                </button>
                </ScrollLink>
              </motion.div>
)}
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute hidden md:flex left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 z-20"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute hidden md:flex right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 z-20"
      >
        ▶
      </button>
    </div>
  );
};

export default LandingSlider;
