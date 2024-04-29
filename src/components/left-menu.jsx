import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const LeftMenu = ({ openMenu, handleMenu }) => {
  // Variantes para el menú y el fondo
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        type: "tween",
        duration: 0.3,
        
      },
    },
  };


  // Datos de los elementos del menú
  const menuItems = [
    { href: "/", icon: "/icons/home-diamond.svg", text: "Inicio", color:"bg-slate-200" },
    { href: "/mapa", icon: "/icons/pushpin.svg", text: "Puntos de venta", color:"bg-red-200" },
    { icon: "/icons/dizzy.svg", text: "Historia y Beneficios", color:"bg-yellow-200" },
    { icon: "/icons/cocktail-glass.svg", text: "Coctelería", color:"bg-sky-200" },
    { icon: "/icons/recycling.svg", text: "Reutilización y Sostenibilidad", color:"bg-green-200" },
    { icon: "/icons/events.svg", text: "Eventos", color:"bg-purple-200" },
    { icon: "/icons/contact.svg", text: "Nosotros", color:"bg-blue-200" },
  ];

  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          className="fixed z-50 left-0 top-0 w-full min-h-[100dvh] bg-black/70"
          initial="closed"
          animate="open"
          exit="closed"
          onClick={handleMenu}
        >
          <motion.ul
            className="w-[80%]  h-[100dvh] grid grid-rows-7 gap-0 shadow-2xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {menuItems.map((item, index) => (
              <Link href={item.href || "#"} key={index}>
                <li className={`flex items-center overflow-scroll gap-3 cursor-pointer h-full p-4  ${item.color}`}>
                  <img src={item.icon} alt={item.text} className="w-[5vw]" />
                  <p className="text-slate-700 text-[5vw]">{item.text}</p>
                </li>
              </Link>
            ))}
            {/* <div className="absolute bottom-20 space-y-3">
              <p className="text-xs w-full">Powered by:</p>
              <img src="/images/entropia.png" alt="" className="w-28" />
            </div> */}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeftMenu;
