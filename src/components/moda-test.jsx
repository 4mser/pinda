import { motion, AnimatePresence } from "framer-motion";

const ModalTest = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  const dragConstraints = { top: 0, bottom: 0 }; // Restringe el arrastre verticalmente

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed top-0 left-0 z-[60] w-full h-screen ">
          <motion.div
            drag="y"
            dragConstraints={dragConstraints}
            onDragEnd={(event, info) => {
              if (info.point.y > 400) {
                // Cambiar '300' por el umbral deseado
                onClose();
              }
            }}
            className="menu fixed z-[61] bottom-0 left-0  w-full h-fit backdrop-blur-xl select-none border-t border-white/10 rounded-t-[40px] overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ ease: "anticipate", duration: 0.5 }}
          >
            <div className="w-full pt-2 h-full flex justify-center hover:cursor-grab">
              <div className="w-10 h-1 rounded-full bg-slate-800/30 text-center"></div>
            </div>
            <p className="text-slate-800 text-center pt-2 text-[14px] font-medium">
              {data.location}
            </p>
            <div className="flex items-center flex-col mb-16 px-7">
              <p className="font-normal text-xs pt-1">
                {data.street} - {data.neighborhood}
              </p>
              <img src={data.image} alt="" className="mt-3 rounded-xl" />
            </div>
          </motion.div>
          <motion.div
            className="w-full h-screen fixed z-[48] left-0 top-0 select-none"
            onClick={onClose}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalTest;
