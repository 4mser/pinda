'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Tienda = () => {
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

    const [productoSeleccionado, setProductoSeleccionado] = useState('kombuchas');

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
            <div className="w-full flex gap-4 py-2 items-center">
                <h2 className={`font-medium text-slate-700 cursor-pointer transition-colors  rounded-full px-3 py-1 ${productoSeleccionado === 'kombuchas' ? 'bg-cyan-200' : ''}`} onClick={() => setProductoSeleccionado('kombuchas')}>
                    Kombuchas
                </h2>
                <h2 className={`font-medium text-slate-700 cursor-pointer transition-colors  rounded-full px-3 py-1 ${productoSeleccionado === 'packs' ? 'bg-purple-200' : ''}`} onClick={() => setProductoSeleccionado('packs')}>
                    Packs
                </h2>
            </div>
            <motion.section
                key={productoSeleccionado}  // Clave que cambia con cada selección
                className='grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {productos[productoSeleccionado].map((producto, index) => (
                    <motion.div
                        key={index}
                        className={`${producto.bg} relative rounded-xl p-2 flex justify-between items-center flex-col`}
                        variants={itemVariants}
                    >
                        <Image 
                            src={producto.imagen}
                            alt={`Pinda ${producto.nombre}`}
                            width={100}
                            height={100}
                        />
                        <Image 
                            src="/svg/heart.svg"
                            alt='heart'
                            width={25}
                            height={25}
                            className='absolute right-4 top-4'
                        />
                        <div className='w-full p-2 flex items-center justify-between'>
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
                                className='translate-y-1.5'
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.section>
        </main>
    )
}

export default Tienda;
