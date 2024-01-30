import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const LeftMenu = ({ openMenu, handleMenu }) => {
  // Variantes para el menú y el fondo
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      backdropFilter: "blur(10px)",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      backdropFilter: "blur(0px)",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  const backdropVariants = {
    open: { opacity: 1, transition: { duration: 0.3 } },
    closed: { opacity: 0, transition: { duration: 0.3 } },
  };

  // Datos de los elementos del menú
  const menuItems = [
    { href: "/", icon: "/icons/home-diamond.svg", text: "Inicio" },
    { icon: "/icons/hotel.svg", text: "Puntos de venta" },
    { icon: "/icons/bow-and-arrow.svg", text: "Historia y Patrimonio" },
    { icon: "/icons/events.svg", text: "Eventos" },
    { icon: "/icons/contact.svg", text: "Nosotros" },
  ];

  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          className="fixed z-50 left-0 top-0 w-full min-h-[100dvh] backdrop-blur-sm"
          variants={backdropVariants}
          initial="closed"
          animate="open"
          exit="closed"
          onClick={handleMenu}
        >
          <motion.ul
            className="w-fit min-h-[100dvh] bg-gradient-to-tr from-indigo-50 to-sky-50 border-r border-indigo-300/10 p-8 pt-20 pr-20 flex flex-col gap-6"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {menuItems.map((item, index) => (
              <Link href={item.href || "#"} key={index}>
                <li className="flex items-center gap-3 cursor-pointer">
                  <img src={item.icon} alt={item.text} />
                  {item.text}
                </li>
              </Link>
            ))}
            <div className="absolute bottom-20 space-y-3">
              <p className="text-xs w-full">Powered by:</p>
              <img src="/images/entropia.png" alt="" className="w-20" />
            </div>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeftMenu;
