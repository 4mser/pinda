"use client";

const CategoriasData = [
  {
    id: 0,
    icono: "prop_1.svg",
  },
  {
    id: 1,
    icono: "prop_2.svg",
  },
  {
    id: 2,
    icono: "prop_3.svg",
  },
  {
    id: 3,
    icono: "prop_4.svg",
  },
  {
    id: 4,
    icono: "prop_5.svg",
  },
  {
    id: 5,
    icono: "prop_6.svg",
  },
];

const generateCategoriaElements = (categorias) => {
  return categorias.map((categoria, index) => (
    <div
      key={index}
      className={` flex items-center`}
    >
        <img src={`/banners/propiedades/${categoria.icono}`} alt=""  className={`${categoria.id === 3 ? '"w-12 h-12 "' : 'w-20 h-20'}`} />
    </div>
  ));
};

const AutoScroll = () => {
  return (
    <section className="relative w-full overflow-hidden bg-yellow-200 my-8 ">
      <div 
        className="hidden md:block absolute  h-28 w-48 bg-gradient-to-r from-white to-transparent"
      />
      <div 
        className="hidden md:block absolute  right-0 h-28 w-48 bg-gradient-to-l from-white to-transparent"
      />
      <div className="logos">
        <div className="logos-slide">
          {generateCategoriaElements(CategoriasData)}
        </div>

        
          <div className="logos-slide">
            {generateCategoriaElements(CategoriasData)}
          </div>
        
      </div>

      
    </section>
  );
};

export default AutoScroll;
