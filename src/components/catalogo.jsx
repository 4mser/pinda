// import React from 'react'

// const Catalogo = () => {
//   return (
//     <section className="fixed bottom-5 bg-black/20  right-5 w-20 h-20 rounded-full flex justify-center items overflow-hidden">
//             <a href="/banners/catalogo/pinda_catalogo.pdf" className='overflow-hidden flex justify-center items-center' download>
//               Catalogo
//             </a>
//     </section>
//   )
// }

// export default Catalogo

import React from 'react'
import SpinningText from './SpinningText'

const Catalogo = () => {
  return (
    <section className="fixed bottom-5 left-5 background border border-black/20  rounded-full flex justify-center items-center z-50 hover:scale-110 transition cursor-pointer">
                <a href="/banners/catalogo/pinda_catalogo.pdf" className='overflow-hidden flex justify-center items-center bg-slate-500/50 w-full h-full rounded-full text-white/80' download>
                 
                  <SpinningText text=" - CATÁLOGO - CATÁLOGO - CATÁLOGO">
                    <p className='text-[16px]'>2024</p>
                  </SpinningText>
                </a>
    </section>
  )
}

export default Catalogo