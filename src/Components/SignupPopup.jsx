import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from 'react-icons/fi';

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const SignupPopup = ({ show, onClose, onSignup }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center px-3  justify-center z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-white shadow-md max-w-sm w-full relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
           <button
              className="absolute top-2 right-2 text-black hover:text-red-500 transition duration-300"
              onClick={onClose}
              aria-label="Close signup popup"
            >
              <FiX size={24} />
            </button>
            <h2 className="text-xl font-semibold mb-4 italic">Please Signup First</h2>
            <div className="flex justify-between gap-4">
              <button
                onClick={onSignup}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Signup
              </button>
              <button
                onClick={onClose}
                className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignupPopup;
