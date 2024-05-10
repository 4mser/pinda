'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, delay } from 'framer-motion'

const productos = {
    kombuchas: [
        {
            nombre: "Natural",
            precio: "1.990",
            imagen: "/images/pindas/pinda_natural.png",
            bg:"bg-orange-100"
        },
        {
            nombre: "Arándano Lavanda",
            precio: "1.990",
            imagen: "/images/pindas/pinda_arandano_lavanda.png",
            bg:"bg-blue-100"
        },
        {
            nombre: "Mango Jengibre",
            precio: "1.990",
            imagen: "/images/pindas/pinda_mango_jengibre.png",
            bg:"bg-yellow-100"
        },
        {
            nombre: "Maqui Cacao",
            precio: "1.990",
            imagen: "/images/pindas/pinda_maqui_cacao.png",
            bg:"bg-purple-100"
        },
        {
            nombre: "Piña Albahaca",
            precio: "1.990",
            imagen: "/images/pindas/pinda_pina_albahaca.png",
            bg:"bg-green-100"
        },
        {
            nombre: "Frambuesa Limón Menta",
            precio: "1.990",
            imagen: "/images/pindas/pinda_frambuesa_limon_menta.png",
            bg:"bg-pink-100"
        }
    ],
    packs: [
        {
            nombre: "Natural",
            precio: "1.990",
            imagen: "/images/pindas/pinda_natural.png",
            bg:"bg-orange-100"
        },
        {
            nombre: "Arándano Lavanda",
            precio: "1.990",
            imagen: "/images/pindas/pinda_arandano_lavanda.png",
            bg:"bg-blue-100"
        },
    ]
}

const modalVariants = {
    hidden: {
        opacity: 0,
        y:20
    },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            duration: 0.3,
            delay: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3
        },
        y:20
    }
};

const backdropVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3
        }
    }
};

const ProductoModal = ({ producto, isOpen, onClose }) => {
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
                        className="fixed inset-0 flex w-auto h-auto justify-center items-center z-50"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}

                    >
                        <motion.div
                            className="bg-white p-5 rounded-lg max-w-md"
                            variants={modalVariants}
                            onClick={(e) => e.stopPropagation()} // Previene el cierre del modal al hacer clic en el contenido
                        >
                            <h2 className="text-xl font-bold">{producto.nombre}</h2>
                            <p className="text-lg">${producto.precio}</p>
                            <Image src={producto.imagen} alt={`Pinda ${producto.nombre}`} width={200} height={200} priority />
                            
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const Tienda = () => {
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <main className="px-4 pb-20">
            <div className="w-full flex gap-4 py-6 items-center">
                <h2 className={`font-medium text-slate-700 cursor-pointer transition-all md:hover:scale-110  rounded-full px-3 py-1 ${productoSeleccionado === 'kombuchas' ? 'bg-cyan-200 shadow-sm md:hover:shadow-md' : ''}`} onClick={() => setProductoSeleccionado('kombuchas')}>
                    Kombuchas
                </h2>
                <h2 className={`font-medium text-slate-700 cursor-pointer transition-all hover:scale-110  rounded-full px-3 py-1 ${productoSeleccionado === 'packs' ? 'bg-purple-200 hover:shadow-md' : ''}`} onClick={() => setProductoSeleccionado('packs')}>
                    Packs
                </h2>
            </div>
            <motion.section
                key={productoSeleccionado}
                className='grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                ref={containerRef}
                style={{ minHeight: `${minHeight}px` }} // Aplica el estilo directamente para mantener la altura
            >
                {productos[productoSeleccionado].map((producto, index) => (
                    <motion.div
                        key={index}
                        className={`${producto.bg} relative rounded-xl p-4 flex justify-between items-center flex-col shadow-sm md:hover:shadow-lg hover:cursor-pointer hover:transition-all max-h-[270px] gap-2`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05}}
                        onClick={() => handleCardClick(producto)}
                    >
                        <Image 
                            src={producto.imagen}
                            alt={`Pinda ${producto.nombre}`}
                            width={100}
                            height={100}
                            className='translate-y-2'
                            priority
                        />
                        <Image 
                            src="/svg/heart.svg"
                            alt='heart'
                            width={25}
                            height={25}
                            className='absolute right-4 top-4 hover:scale-110 '
                        />
                        <div className='w-full flex items-center justify-between'>
                            <div>
                                <h2 className='text-[13px] text-slate-700'>
                                    {producto.nombre}
                                </h2>
                                <p className='font-bold text-xl text-slate-800'>
                                    ${producto.precio}
                                </p>
                            </div>
                            <Image 
                                src="/svg/add.svg"
                                alt='add'
                                width={25}
                                height={25}
                                className='translate-y-1.5 hover:scale-110 '
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.section>
            <ProductoModal producto={modalProducto} isOpen={!!modalProducto} onClose={handleCloseModal} />
        </main>
    )
}

export default Tienda;
