import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion,AnimatePresence } from "framer-motion";

// 🔵 Step 1: Image Array
const images = [
  { src: "/images/wlogo.jpg", name: "Women's", link: "product" },
  { src: "/images/menlogo.jpg", name: "MEN's", link: "product" },
  { src: "/images/alllogo1.jpg", name: "All", link: "product" },
  { src: "/images/kidslogo.jpg", name: "Kid's", link: "product" },
];

// 🔵 Step 2: Slide Logic Function (Outside Component)
const getVisibleSlides = (images, currentIndex) => {
  const total = images.length;
  const left = (currentIndex - 1 + total) % total;
  const right = (currentIndex + 1) % total;

  return [
    {
      ...images[left],
      opacity: "opacity-50",
      width: "hidden sm:block sm:w-[400px]",
      height: "sm:h-[300px]",
    },
    {
      ...images[currentIndex],
      opacity: "opacity-100",
      width: "w-full sm:w-[600px]",
      height: "h-[400px]",
    },
    {
      ...images[right],
      opacity: "opacity-50",
      width: "hidden sm:block sm:w-[400px]",
      height: "sm:h-[300px]",
    },
  ];
};

// 🔵 Step 3: AutoSlider Component
const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Play: Every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full mx-auto py-20 shadow-lg bg-gray-100 flex items-center justify-center">
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2  ">
             <h3 className="text-orange-300 capitalize font-bold font-berkshire text-2xl md:text-3xl">fashion <span className="text-blue-500 italic"> Category</span></h3> {/* This is the header you wanted */}
        </div>
      
      {/* ← Arrow */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={goToPrev}
        className="hidden sm:flex absolute left-0 text-white z-10 text-xl bg-black/50 px-2 py-1 rounded-full"
      >
        ←
      </motion.button>

      {/* → Arrow */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={goToNext}
        className="hidden sm:flex absolute right-0 text-white z-10 text-xl bg-black/50 px-2 py-1 rounded-full"
      >
        →
      </motion.button>

      {/* Slides */}
      <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
        {/* AnimatePresence for exit animations */}
        <AnimatePresence>

        {getVisibleSlides(images, currentIndex).map((slide, i) => (
          <Link key={i} to={slide.link} smooth={true} duration={500}>
            <motion.div
              className={`relative rounded-lg overflow-hidden ${slide.width} ${slide.height} ${slide.opacity} transition-all duration-700`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }} 
              transition={{ 
                duration: 0.7,
          type: "spring",
          stiffness: 200,
          damping: 25,

              }}
            >
              <img
                src={slide.src}
                alt={slide.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-2 text-xs rounded-full">
                {slide.name}
              </div>
            </motion.div>
          </Link>
        ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AutoSlider;
