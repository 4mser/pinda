import Image from 'next/image'
import React from 'react'

const Corfo = () => {
  return (
    <div className='w-full flex items-center flex-col'>
        <Image 
            src="/svg/corfo.svg"
            width={200}
            height={80}
        />
    </div>
  )
}

export default Corfo