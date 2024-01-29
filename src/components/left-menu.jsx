import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const LeftMenu = ({ openMenu, handleMenu }) => {
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      backdropFilter: "blur(10px)", // Ajusta el valor de blur según tus necesidades
      transition: {
        type: "tween",
        duration: 0.3,
        backdropFilter: { duration: 0.3 }, // Asegúrate de que la transición del blur sea suave
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      backdropFilter: "blur(0px)",
      transition: {
        type: "tween",
        duration: 0.3,
        backdropFilter: { duration: 0.3 },
      },
    },
  };

  const backdropVariants = {
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
      {openMenu && (
        <>
          {/* Div con backdrop-blur */}
          <motion.div
            className="fixed z-50 left-0 top-0 w-full min-h-screen backdrop-blur-sm"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={handleMenu}
          >
            <motion.ul
              className="w-fit min-h-screen bg-dark-1 border-r border-white/10   p-8 pt-20 pr-20 flex flex-col gap-6"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <Link href={"/"}>
                <li className="flex items-center gap-3 ">
                  <img src="/icons/home-diamond.svg" alt="" />
                  Inicio
                </li>
              </Link>

              <li className="flex items-center gap-3 ">
                <img src="/icons/hotel.svg" alt="" />
                Hotel
              </li>

              <li className="flex items-center gap-3 ">
                <img src="/icons/bow-and-arrow.svg" alt="" />
                Historia y Patrimonio
              </li>

              <li className="flex items-center gap-3 ">
                <img src="/icons/fox.svg" alt="" />
                Biodiversidad
              </li>

              <li className="flex items-center gap-3 ">
                <img src="/icons/recycling.svg" alt="" />
                Sostenibilidad
              </li>

              <li className="flex items-center gap-3 ">
                <img src="/icons/paint.svg" alt="" />
                Arte y Diseño
              </li>

              <li className="flex items-center gap-3 ">
                <img src="/icons/events.svg" alt="" />
                Eventos
              </li>

              <li className="flex items-center gap-3 ">
                <img src="/icons/contact.svg" alt="" />
                Nosotros
              </li>
              {/* <Image
                href={"https://app-valdi.s3.amazonaws.com/logos-08.png"}
                width={20}
                heigth={15}
            /> */}
              <div className="absolute bottom-20 space-y-3">
                <p className="text-xs w-full">Powered by:</p>
                <img
                  src="https://app-valdi.s3.amazonaws.com/logos-08.png"
                  alt=""
                  className="w-20"
                />
              </div>
            </motion.ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeftMenu;
