import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../contexts/CartContext";

const Cart = ({ openCart, handleCart }) => {
  const { cart, removeFromCart } = useCart();

  const cartVariants = {
    open: {
      opacity: 1,
      x: "0",
      backdropFilter: "blur(10px)",
      transition: {
        type: "tween",
        duration: 0.3,
        backdropFilter: { duration: 0.3 },
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      backdropFilter: "blur(0px)",
      transition: {
        type: "tween",
        duration: 0.3,
        backdropFilter: { duration: 0.3 },
      },
    },
  };

  const backdropCartVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {openCart && (
        <motion.div
          className="fixed z-50 left-0 top-0 w-full min-h-[100dvh] backdrop-blur-xl flex justify-end items-center"
          variants={backdropCartVariants}
          initial="closed"
          animate="open"
          exit="closed"
          onClick={handleCart}
        >
          <motion.div
            className="bg-white p-5 w-1/3 h-screen shadow-lg"
            variants={cartVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Carrito de Compras</h2>
            <ul>
              {cart.map((producto, index) => (
                <li key={index} className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg">{producto.nombre}</h3>
                    <p>${producto.precio}</p>
                  </div>
                  <button onClick={() => removeFromCart(producto)} className="bg-red-500 text-white px-2 py-1 rounded">
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
