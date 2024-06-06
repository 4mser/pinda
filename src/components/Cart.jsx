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
            className="relative bg-white p-5 w-[80%] md:w-1/3 h-screen shadow-lg"
            variants={cartVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-emerald-500">CARRITO EN CONSTRUCCIÓN</h2>
            <ul className="overflow-y-auto h-full pb-[140px]">
              {cart.map((producto, index) => (
                <li key={index} className="flex justify-between gap-3 items-center border-b py-4">
                  <div className="flex items-center gap-4">
                    <Image src={producto.imagen} alt={producto.nombre} width={50} height={50} className="rounded" />
                    <div>
                      <h3 className="text-lg text-black/80">Pinda {producto.nombre}</h3>
                      <p className="text-black/60">${producto.precio} x {producto.cantidad}</p>
                    </div>
                  </div>
                  <div className="flex items-center w-fit">
                    <button onClick={() => removeFromCart(producto)} className="bg-gradient-to-br from-orange-300 to-red-400 p-1 rounded-full h-5 w-5 mr-2">
                      <Image src="/svg/minus.svg" className="opacity-50" alt="remove" width={20} height={20} />
                    </button>
                    <p className="pr-2 text-black/70 text-base text-nowrap">{producto.cantidad} Un </p>
                    <button onClick={() => addToCart(producto)} className="bg-gradient-to-br from-yellow-300 to-green-400 p-1 rounded-full h-5 w-5">
                      <Image src="/svg/add2.svg" className="opacity-50" alt="add" width={20} height={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t p-4 absolute bottom-0 bg-white left-0 w-full">
              <div className="w-full flex justify-between items-center">
                <h3 className="text-xl font-bold text-black/70">Total: </h3>
                <h3 className="text-xl font-bold text-black/70">${totalPrice.toFixed(3)}</h3>
              </div>
              <button className="mt-4 bg-gradient-to-br from-emerald-300 to-cyan-600 text-white px-4 py-2 rounded w-full">
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
