// src/components/SignupPopupWrapper.jsx
import  { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../hooks/useCart";
import { useNavigate, useLocation } from "react-router-dom";
import SignupPopup from "./SignupPopup";


const SignupPopupWrapper = ({ children }) => {
  const { user } = useAuth();
  const { addToCart, isAlreadyInCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
 

  // Show popup once after 10s if user not logged in on home page
  useEffect(() => {
    const popupShown = sessionStorage.getItem("signupPopupShown");
    if (!user && location.pathname === "/" && !popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("signupPopupShown", "true");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [user, location]);

   const handleAddToCart = (product) => {
  if (!user) {
    setShowPopup(true);  // Show the popup modal instead of alert
    return;
  }

  const message = addToCart(product);
  alert(message);
   };

  return (
    <>
      {children({ handleAddToCart })}
      <SignupPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onSignup={() => {
          setShowPopup(false);
          navigate("/signup");
        }}
      />
    </>
  );
};

export default SignupPopupWrapper;
