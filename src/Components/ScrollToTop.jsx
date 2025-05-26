import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  // Define routes that require scroll-to-top
  const scrollRoutes = [
    "/login",
    "/signup",
    "/profile",
    "/cart",
  ];

  // Dynamic path match (for products/:id and payment/:id)
  const dynamicMatch = (pathname) =>
    pathname.startsWith("/products/") || pathname.startsWith("/payment/");

  useEffect(() => {
    if (scrollRoutes.includes(location.pathname) || dynamicMatch(location.pathname)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.key]);

  return null;
};

export default ScrollToTop;
