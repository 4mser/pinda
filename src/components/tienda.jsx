import Link from 'next/link'
import React from 'react'

const Tienda = () => {
  return (
    <main className="px-4">
      <div className="w-full flex justify-between py-2 items-center">
        <h2 className=" font-medium text-slate-700">Tienda</h2>
        <Link href={"/mapa"}>
          <p className="text-slate-500 text-xs font-medium pt-1">
            Ver todo
          </p>
        </Link>
      </div>

    </main>
  )
}

export default Tienda