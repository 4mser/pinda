import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HappyHour = ({ openHappy, handleHappy }) => {
  const happyVariants = {
    open: {
      opacity: 1,
      y: "-20%",
      backdropFilter: "blur(10px)", // Ajusta el valor de blur según tus necesidades
      transition: {
        type: "tween",
        duration: 0.3,
        backdropFilter: { duration: 0.3 }, // Asegúrate de que la transición del blur sea suave
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      backdropFilter: "blur(0px)",
      transition: {
        type: "tween",
        duration: 0.3,
        backdropFilter: { duration: 0.3 },
      },
    },
  };

  const backdropHappyVariants = {
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
      {openHappy && (
        <motion.div
          className="fixed z-50 left-0 top-0 w-full min-h-[100dvh] backdrop-blur-xl flex justify-center items-center"
          variants={backdropHappyVariants}
          initial="closed"
          animate="open"
          exit="closed"
          onClick={handleHappy}
        >
          <motion.div
            className="h-fit  ounded-2xl items-center   p-10 flex flex-col gap-4"
            variants={happyVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <img
              src="/images/frambuesa.png"
              alt="hH"
              className="w-full object-contain rounded-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HappyHour;
