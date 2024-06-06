import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../contexts/CartContext";
import Image from "next/image";

const Cart = ({ openCart, handleCart }) => {
  const { cart, removeFromCart, addToCart } = useCart();

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

  const totalPrice = cart.reduce((total, product) => total + product.cantidad * parseFloat(product.precio.replace('.', '')), 0) / 1000;

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
            className="bg-white p-5 w-[80%] md:w-1/3 h-screen shadow-lg overflow-y-auto"
            variants={cartVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Carrito de Compras en Construcción</h2>
            <ul>
              {cart.map((producto, index) => (
                <li key={index} className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-4">
                    <Image src={producto.imagen} alt={producto.nombre} width={50} height={50} className="rounded" />
                    <div>
                      <h3 className="text-lg">{producto.nombre}</h3>
                      <p>${producto.precio} x {producto.cantidad}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button onClick={() => removeFromCart(producto)} className="bg-red-500 text-white px-2 py-1 rounded mr-2">
                      <Image src="/svg/remove.svg" alt="remove" width={20} height={20} />
                    </button>
                    <button onClick={() => addToCart(producto)} className="bg-green-500 text-white px-2 py-1 rounded">
                      <Image src="/svg/add.svg" alt="add" width={20} height={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-bold">Total: ${totalPrice.toFixed(3)}</h3>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full">
                Proceder al Pago
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
