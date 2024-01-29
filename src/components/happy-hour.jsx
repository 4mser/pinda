import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatDuration, intervalToDuration } from "date-fns";
import { es } from "date-fns/locale";

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

  /* TIME */

  const [timeUntilHappyHour, setTimeUntilHappyHour] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const sixPM = new Date(now);
      sixPM.setHours(18, 0, 0, 0); // Establece la hora a las 6 PM

      // Si ya pasaron las 6 PM, ajusta para el próximo día
      if (now > sixPM) {
        sixPM.setDate(sixPM.getDate() + 1);
      }

      const duration = intervalToDuration({ start: now, end: sixPM });
      setTimeUntilHappyHour(formatDuration(duration, { locale: es })); // Formato en español
    };

    const timerId = setInterval(updateTimer, 1000); // Actualiza cada segundo

    // Limpieza del intervalo cuando el componente se desmonte
    return () => clearInterval(timerId);
  }, []);

  return (
    <AnimatePresence>
      {openHappy && (
        <motion.div
          className="fixed z-50 left-0 top-0 w-full min-h-screen backdrop-blur-xl flex justify-center items-center"
          variants={backdropHappyVariants}
          initial="closed"
          animate="open"
          exit="closed"
          onClick={handleHappy}
        >
          <motion.div
            className="w-fit  ounded-2xl items-center   p-10 flex flex-col gap-4"
            variants={happyVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <img
              src="https://app-valdi.s3.amazonaws.com/yagan/anuncios/happyHour.png"
              alt="hH"
              className="w-full object-contain px-5 animate-neon"
            />
            <p className="text-center">
              Quedan: {timeUntilHappyHour} para el happy hour
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HappyHour;
