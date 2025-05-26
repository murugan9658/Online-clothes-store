// src/contexts/CartContext.js
import { createContext, useState, useEffect } from 'react';
import React from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

 const addToCart = (product) => {
  const existing = cartItems.find((item) => item.id === product.id);
  if (existing) {
    return "Product already added to cart!";
  } else {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
    return "Product added to cart!";
  }
};

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };
   const isAlreadyInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, isAlreadyInCart }}>
      {children}
    </CartContext.Provider>
  );
};


