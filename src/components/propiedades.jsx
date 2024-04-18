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
        <img src={`/banners/propiedades/${categoria.icono}`} alt=""  />
    </div>
  ));
};

const AutoScroll = () => {
  return (
    <section className=" w-full overflow-hidden bg-yellow-200 mt-8">
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
