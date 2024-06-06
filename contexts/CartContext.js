'use client'
// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.nombre === producto.nombre);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].cantidad += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...producto, cantidad: 1 }];
      }
    });
  };

  const removeFromCart = (producto) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.nombre === producto.nombre);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        if (updatedCart[existingProductIndex].cantidad > 1) {
          updatedCart[existingProductIndex].cantidad -= 1;
        } else {
          updatedCart.splice(existingProductIndex, 1);
        }
        return updatedCart;
      }
      return prevCart;
    });
  };

  const cartCount = cart.reduce((count, product) => count + product.cantidad, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
