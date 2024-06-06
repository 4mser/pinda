'use client'
// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (producto) => {
        setCart(prevCart => [...prevCart, producto]);
    };

    const removeFromCart = (producto) => {
        setCart(prevCart => prevCart.filter(item => item.nombre !== producto.nombre));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
