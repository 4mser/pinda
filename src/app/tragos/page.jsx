import React from 'react';

const Page = () => {
  return (
    <div className='pt-14'>
      {/* CLÁSICOS Section */}
      <div>
        <h2 className='text-lg font-semibold bg-gradient-to-tr from-cyan-600 to-blue-950 flex items-center px-4 py-3'>CLÁSICOS</h2>
        <ul className='text-xs p-4'>
          <li>
            <div className='flex items-center justify-between'>
              <strong>Piscola</strong><span className='font-bold text-cyan-500'>$8</span>
            </div>
            <p className='font-normal opacity-80'>Pisco, Coca Cola.</p>
          </li>
          <br />
          <li>
            <div className='flex items-center justify-between'>
              <strong>Pisco Sour</strong><span className='font-bold text-cyan-500'>$9</span>
            </div>
            <p className='font-normal opacity-80'>Limón, pisco, goma, albumina, amargo de Angostura.</p>
          </li>
        </ul>
      </div>

      {/* MOJITOS Section */}
      <div>
        <h2 className='text-lg font-semibold bg-gradient-to-tr from-green-600 to-blue-300 flex items-center px-4 py-3'>MOJITOS</h2>
        <ul className='text-xs p-4'>
          <li>
            <div className='flex items-center justify-between'>
              <strong>Mojito Tradicional</strong><span className='font-bold text-green-300'>$10</span>
            </div>
            <p className='font-normal opacity-80'>Menta, limones, ron blanco, limón, goma, agua mineral.</p>
          </li>
          <br />
          <li>
            <div className='flex items-center justify-between'>
              <strong>Mojito Ramazzotti</strong><span className='font-bold text-green-300'>$11</span>
            </div>
            <p className='font-normal opacity-80'>Menta, naranja, limón, ron blanco, jugo de naranja, Ramazzotti, agua mineral.</p>
          </li>
        </ul>
      </div>

      {/* AUTOR Section */}
      <div>
        <h2 className='text-lg font-semibold bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center px-4 py-3'>AUTOR</h2>
        <ul className='text-xs p-4'>
          <li>
            <div className='flex items-center justify-between'>
              <strong>Cazador Furtivo</strong><span className='font-bold text-violet-300'>$12</span>
            </div>
            <p className='font-normal opacity-80'>Jägermeister, triple sec, limón, jugo de naranja.</p>
          </li>
          <br />
          <li>
            <div className='flex items-center justify-between'>
              <strong>Amore Milano</strong><span className='font-bold text-violet-300'>$13</span>
            </div>
            <p className='font-normal opacity-80'>Whisky, Campari, jugo de pomelo, jugo de limón, goma.</p>
          </li>
        </ul>
      </div>

      {/* BAR SIN ALCOHOL Section */}
      <div>
        <h2 className='text-lg font-semibold bg-gradient-to-tr from-slate-500 to-slate-800 flex items-center px-4 py-3'>BAR SIN ALCOHOL</h2>
        <ul className='text-xs p-4'>
          <li>
            <div className='flex items-center justify-between'>
              <strong>Jugos del Día</strong><span className='font-bold text-slate-400'>$6</span>
            </div>
            <p className='font-normal opacity-80'>Variedad de jugos frescos disponibles diariamente.</p>
          </li>
          <br />
          <li>
            <div className='flex items-center justify-between'>
              <strong>Cordillerano Autor</strong><span className='font-bold text-slate-400'>$7</span>
            </div>
            <p className='font-normal opacity-80'>Amargo de Angostura, Sprite, azahar, soda, limón.</p>
          </li>
        </ul>
      </div>

      {/* MICHELADAS Section */}
      <div>
        <h2 className='text-lg font-semibold bg-gradient-to-tr from-yellow-400 to-orange-400 flex items-center px-4 py-3'>MICHELADAS</h2>
        <ul className='text-xs p-4'>
          <li>
            <div className='flex items-center justify-between'>
              <strong>Chelada Sal de Autor</strong><span className='font-bold text-yellow-300'>$5</span>
            </div>
            <p className='font-normal opacity-80'>Sal de autor.</p>
          </li>
          <br />
          <li>
            <div className='flex items-center justify-between'>
              <strong>Michelada</strong><span className='font-bold text-yellow-300'>$5</span>
            </div>
            <p className='font-normal opacity-80'>Tabasco, merken, sal de autor, salsa inglesa.</p>
          </li>
          <br />
          <li>
            <div className='flex items-center justify-between'>
              <strong>Michelada Bloody</strong><span className='font-bold text-yellow-300'>$6</span>
            </div>
            <p className='font-normal opacity-80'>Todo lo anterior más bloody de tomate.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
