'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productos } from '@/data/Productos';
import { useCart } from '../../contexts/CartContext';
import ProductoModal from './productoModal';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Tienda = () => {
    const { addToCart } = useCart();
    const [productoSeleccionado, setProductoSeleccionado] = useState('kombuchas');
    const [modalProducto, setModalProducto] = useState(null);
    const [minHeight, setMinHeight] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            setMinHeight(containerRef.current.offsetHeight);
        }
    }, [productoSeleccionado]);

    const handleCardClick = (producto) => {
        setModalProducto(producto);
    };

    const handleCloseModal = () => {
        setModalProducto(null);
    };

    const handleAddProduct = (producto) => {
        addToCart(producto);
    };

    return (
        <main className="px-4 pb-10">
            <div className="w-full flex gap-4 py-6 items-center">
                <h2
                    className={`font-medium text-lg xl:text-xl text-black/60 cursor-pointer transition-all md:hover:scale-110 rounded-full px-3 py-1 ${productoSeleccionado === 'kombuchas' ? 'bg-yellow-200' : ''}`}
                    onClick={() => setProductoSeleccionado('kombuchas')}
                >
                    Kombuchas
                </h2>
                <h2
                    className={`font-medium text-lg xl:text-xl text-black/60 cursor-pointer transition-all md:hover:scale-110 rounded-full px-3 py-1 ${productoSeleccionado === 'packs' ? 'bg-purple-200' : ''}`}
                    onClick={() => setProductoSeleccionado('packs')}
                >
                    Packs
                </h2>
            </div>
            <motion.section
                key={productoSeleccionado}
                className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                ref={containerRef}
                style={{ minHeight: `${minHeight}px` }}
            >
                {productos[productoSeleccionado].map((producto, index) => (
                    <motion.div
                        key={index}
                        className={`${producto.bg} relative rounded-xl p-4 flex items-center flex-col shadow-sm md:hover:shadow-lg hover:cursor-pointer hover:transition-all max-h-[270px] gap-2  `}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleCardClick(producto)}
                    >
                        <Image 
                            src={producto.imagen}
                            alt={`Pinda ${producto.nombre}`}
                            width={100}
                            height={100}
                            className="translate-y-2"
                            priority
                        />
                        <Image 
                            src="/svg/heart.svg"
                            alt="heart"
                            width={25}
                            height={25}
                            className="absolute right-4 top-4 hover:scale-110 opacity-60"
                        />
                        <div className="w-full flex items-center justify-between">
                            <div>
                                <h2 className="text-[13px] text-black/60">{producto.nombre}</h2>
                                <p className="font-bold text-xl text-black/60">${producto.precio}</p>
                            </div>
                            <Image 
                                src="/svg/add.svg"
                                alt="add"
                                width={25}
                                height={25}
                                className="translate-y-1.5 hover:scale-110 opacity-60"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddProduct(producto);
                                }}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.section>
            <ProductoModal producto={modalProducto} isOpen={!!modalProducto} onClose={handleCloseModal} />
        </main>
    );
};

export default Tienda;
