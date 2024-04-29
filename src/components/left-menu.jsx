import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
  { href: "/", icon: "/icons/home-diamond.svg", text: "Inicio", color: "bg-slate-200" },
  { href: "/mapa", icon: "/icons/pushpin.svg", text: "Puntos de venta", color: "bg-red-200" },
  { icon: "/icons/dizzy.svg", text: "Historia y Beneficios", color: "bg-yellow-200" },
  { icon: "/icons/cocktail-glass.svg", text: "Coctelería", color: "bg-sky-200" },
  { icon: "/icons/recycling.svg", text: "Reutilización y Sostenibilidad", color: "bg-green-200" },
  { icon: "/icons/events.svg", text: "Eventos", color: "bg-purple-200" },
  { icon: "/icons/contact.svg", text: "Nosotros", color: "bg-blue-200" },
];

const backdropVariants = {
  open: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    transition: { duration: 0.3 }
  },
  closed: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    transition: { duration: 0.3 }
  },
};



const listItemVariants = {
  open: (i) => ({
    opacity: 1,
    x:0,
    transition: {
      type:"spring",
      delay: i * 0.05,
      duration: 0.7
    }
  }),
  closed:  (i) => ({
    opacity: 0,
    x:"100%",
    transition: {
      type:"spring",
      delay: i * 0.03,
      duration: 1.5
    }
  }),
};

const LeftMenu = ({ openMenu, handleMenu }) => {
  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          className="fixed z-50 left-0 top-0 w-full min-h-[100dvh]"
          variants={backdropVariants}
          initial="closed"
          animate="open"
          exit="closed"
          onClick={handleMenu}
        >
          <motion.ul
            className="w-[80%] h-[100dvh] grid grid-rows-7 gap-0 "
          >
            {menuItems.map((item, index) => (
              <Link href={item.href || "#"} key={index}>
                <motion.li 
                  className={`flex items-center overflow-scroll gap-3 cursor-pointer h-full p-4 ${item.color}`}
                  variants={listItemVariants}
                  custom={index}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <img src={item.icon} alt={item.text} className="w-[6vw]" />
                  <p className="text-slate-700 text-[5vw]">{item.text}</p>
                </motion.li>
              </Link>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(LeftMenu);
