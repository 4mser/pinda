

import React from 'react'
import SpinningText from './SpinningText'

const Catalogo = () => {
  return (
    <section className="fixed bottom-5 left-5 background border border-black/20  rounded-full flex justify-center items-center z-50 hover:scale-110 transition cursor-pointer xl:bottom-10 xl:left-9">
                <a href="/banners/catalogo/pinda_catalogo.pdf" className='overflow-hidden flex justify-center items-center bg-slate-500/50 xl:bg-slate-800 w-full h-full rounded-full text-white/80' download>
                 
                  <SpinningText text=" - CATÁLOGO - CATÁLOGO - CATÁLOGO">
                    <p className='text-[16px]'>2024</p>
                  </SpinningText>
                </a>
    </section>
  )
}

export default Catalogo