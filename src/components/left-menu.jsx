import { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
  { href: "/", icon: "/icons/home-diamond.svg", text: "Inicio", color: "bg-slate-200" },
  { href: "/mapa", icon: "/icons/pushpin.svg", text: "Puntos de venta", color: "bg-red-200" },
  { href: "#", icon: "/icons/dizzy.svg", text: "Historia y Beneficios", color: "bg-yellow-200" },
  { href: "#", icon: "/icons/cocktail-glass.svg", text: "Coctelería", color: "bg-sky-200" },
  { href: "#", icon: "/icons/recycling.svg", text: "Reutilización y Sostenibilidad", color: "bg-green-200" },
  { href: "#", icon: "/icons/events.svg", text: "Eventos", color: "bg-purple-200" },
  { href: "#", icon: "/icons/contact.svg", text: "Nosotros", color: "bg-blue-200" },
];

const backdropVariants = {
  open: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    transition: { duration: 0.3 },
  },
  closed: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    transition: { duration: 0.3 }
  },
};

const listItemVariants = {
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: i * 0.04,
      duration: 0.5
    }
  }),
  closed: (i) => ({
    opacity: 0,
    x: "-100%",
    transition: {
      type: "spring",
      delay: i * 0.01,
      duration: 1
    }
  }),
};

const LeftMenu = ({ openMenu, handleMenu }) => {
  const [hoverEnabled, setHoverEnabled] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setHoverEnabled(window.innerWidth > 1280);
    };

    checkSize();
    window.addEventListener('resize', checkSize);

    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          className="fixed z-[100] left-0 top-0 w-full h-[100vh]"
          variants={backdropVariants}
          initial="closed"
          animate="open"
          exit="closed"
          onClick={handleMenu}
        >
          <ul className="w-[80%] h-[100vh] grid grid-rows-7 xl:grid-rows-5 gap-0 xl:grid-cols-3 xl:w-full xl:gap-5 xl:p-20">
            {menuItems.map((item, index) => (
              <Link href={item.href} key={index} onClick={handleMenu}>
                <motion.li
                  className={`flex items-center gap-3 h-full p-4 xl:p-6 xl:rounded-3xl cursor-pointer ${item.color} ${hoverEnabled ? 'xl:hover:shadow-2xl' : ''}`}
                  variants={listItemVariants}
                  custom={index}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  whileHover={hoverEnabled ? { scale: 1.05, z: 10 } : {}}
                >
                  <img src={item.icon} alt={item.text} className="w-[6vw] xl:w-[3vw]" />
                  <p className="text-slate-700 text-[5vw] xl:text-[2.3vw]">{item.text}</p>
                </motion.li>
              </Link>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(LeftMenu);
