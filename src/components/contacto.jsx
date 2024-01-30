"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contacto = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToInstagram = () => {
    window.location.href = "https://www.instagram.com/pinda_kombucha";
  };

  // Variantes para los íconos del menú
  const menuVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    closed: { opacity: 0, scale: 0 },
  };

  // Variantes para el botón principal
  const buttonVariants = {
    open: { rotate: 315, scale: 1.1 },
    closed: { rotate: 0, scale: 1 },
  };

  // Datos de los botones
  const buttons = [
    {
      onClick: toggleMenu,
      imgSrc: "/icons/pushpin.svg",
      btnClass:
        "rounded-full bg-gradient-to-tr from-indigo-100 to-sky-100 w-14 h-14 flex justify-center items-center",
      variants: buttonVariants,
    },
    {
      onClick: goToInstagram,
      imgSrc: "/icons/instagram.svg",
      btnClass:
        "absolute bottom-0 right-16 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 w-10 h-10 flex justify-center items-center",
      variants: menuVariants,
    },
    {
      onClick: () => {},
      imgSrc: "/icons/mail.svg",
      btnClass:
        "absolute bottom-16 right-0 rounded-full bg-gradient-to-tr from-blue-500 to-blue-900 w-10 h-10 flex justify-center items-center",
      variants: menuVariants,
    },
    {
      onClick: () => {},
      imgSrc: "/icons/wsp.svg",
      btnClass:
        "absolute bottom-12 right-12 rounded-full bg-gradient-to-tr from-green-600 to-yellow-500 w-10 h-10 flex justify-center items-center",
      variants: menuVariants,
    },
  ];

  return (
    <section className="fixed bottom-4 right-4 z-40">
      {buttons.map((button, index) => (
        <motion.button
          key={index}
          className={button.btnClass}
          onClick={button.onClick}
          variants={button.variants}
          animate={menuOpen ? "open" : "closed"}
        >
          <img src={button.imgSrc} alt="" className="w-6 opacity-85" />
        </motion.button>
      ))}
    </section>
  );
};

export default Contacto;
