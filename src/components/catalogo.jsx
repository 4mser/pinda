import React from 'react'

const Catalogo = () => {
  return (
    <section className="pt-5">
            <a href="/banners/catalogo/pinda_catalogo.pdf" className='overflow-hidden flex justify-center items-center' download>
                <img src="/banners/catalogo/fondo_banner_catalogo.png" alt="" className="w-full h-full" />
                <img src="/banners/catalogo/txt_banner_catalogo.svg" alt="" className="absolute p-20" />
            </a>
    </section>
  )
}

export default Catalogo