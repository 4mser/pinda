import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../contexts/CartContext';

const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
};

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
};

const ProductoModal = ({ producto, isOpen, onClose }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(producto);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-70 z-50"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    />
                    <motion.div
                        className="fixed inset-0 flex justify-center items-center z-50"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    >
                        <motion.div
                            className="bg-white p-5 rounded-lg max-w-3xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image src={producto.imagenModal} alt={`Pinda ${producto.nombre}`} width={300} height={300} priority className='w-full' />
                            <p className="text-3xl p-2 mt-1 text-black/70">${producto.precio}</p>
                            <button 
                                className={`mt-2 bg-gradient-to-tr ${producto.colorBoton} text-black/50  px-4 py-2 rounded `} 
                                onClick={handleAddToCart}
                            >
                                Añadir al Carrito
                            </button>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProductoModal;
