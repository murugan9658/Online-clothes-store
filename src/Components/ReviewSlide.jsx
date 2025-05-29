import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    role: "Software Engineer",
    review:
      "This platform has completely transformed the way I shop. The UI is clean, and everything just works!",
  },
  {
    name: "Emily Smith",
    role: "Product Manager",
    review:
      "Great selection of items and fast delivery. Highly recommended for anyone looking for quality!",
  },
  {
    name: "Michael Johnson",
    role: "UX Designer",
    review:
      "One of the smoothest online shopping experiences I've had. Kudos to the team behind this!",
  },
  {
    name: "Sara Lee",
    role: "Freelancer",
    review:
      "User-friendly layout and amazing product variety. It’s my go-to shopping site now.",
  },
  {
    name: "David Kim",
    role: "Marketing Specialist",
    review:
      "Easy checkout process and great customer support. I’m impressed by the service quality!",
  },
];

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto  rounded-2xl  bg-white">
      
      <div className="relative sm:flex sm:justify-center sm:items-center sm:h-64 sm:px-4 sm:py-6">
        {/* Left Review */}
        <AnimatePresence >
          <motion.div
            key={reviews[currentIndex === 0 ? reviews.length - 1 : currentIndex - 1].name}
            className="absolute left-0 hidden lg:flex sm:transform lg:translate-x-[-50px] sm:opacity-60 sm:max-w-xs max-w-[50%] "
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
              <p className="text-sm italic text-gray-700 mb-4">
                {reviews[currentIndex === 0 ? reviews.length - 1 : currentIndex - 1].review}
              </p>
              <h4 className="font-semibold text-gray-900">
                {reviews[currentIndex === 0 ? reviews.length - 1 : currentIndex - 1].name}
              </h4>
              <p className="text-sm text-gray-500">
                {reviews[currentIndex === 0 ? reviews.length - 1 : currentIndex - 1].role}
              </p>
            </div>
          </motion.div>

          {/* Center Review */}
          <motion.div
            key={reviews[currentIndex].name}
            className="relative  sm:w-[80%]  lg:w-[40%] sm:z-10 w-[80%]  max-w-[70%] mx-auto"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-4 sm:p-6 rounded-lg  shadow-md">
              <p className="text-lg italic text-gray-700 mb-4">
                "{reviews[currentIndex].review}"
              </p>
              <h4 className="font-semibold font-playfair text-gray-900">{reviews[currentIndex].name}</h4>
              <p className="text-sm font-playfair text-gray-500">{reviews[currentIndex].role}</p>
            </div>
          </motion.div>

          {/* Right Review */}
          <motion.div
            key={reviews[currentIndex === reviews.length - 1 ? 0 : currentIndex + 1].name}
            className="absolute right-0 hidden lg:flex sm:transform lg:translate-x-[50px] sm:opacity-60 sm:max-w-xs max-w-[50%]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
              <p className="text-sm italic text-gray-700 mb-4">
                {reviews[currentIndex === reviews.length - 1 ? 0 : currentIndex + 1].review}
              </p>
              <h4 className="font-semibold text-gray-900">
                {reviews[currentIndex === reviews.length - 1 ? 0 : currentIndex + 1].name}
              </h4>
              <p className="text-sm text-gray-500">
                {reviews[currentIndex === reviews.length - 1 ? 0 : currentIndex + 1].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows for navigation */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/30 p-3 rounded-full text-white hover:bg-black/50 transform hover:scale-110 transition duration-300"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/30 p-3 rounded-full text-white hover:bg-black/50 transform hover:scale-110 transition duration-300"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 pb-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-black" : "bg-gray-300"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
