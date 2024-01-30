"use client";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Data for each SwiperSlide
const sabores = [
  {
    href: "/carta",
    image: "/images/sabores/natural.png",
    title: "Natural",
    subtitle: "",
  },
  {
    href: "/tragos",
    image: "/images/sabores/arandano.png",
    title: "Arándano",
    subtitle: "Lavanda",
  },
  {
    href: "/sushi",
    image: "/images/sabores/durazno.png",
    title: "Durazno",
    subtitle: "Poleo",
  },
  {
    href: "/carta",
    image: "/images/sabores/mango.png",
    title: "Mango",
    subtitle: "Jengibre",
  },
  {
    href: "/carta",
    image: "/images/sabores/frambuesa.png",
    title: "Frambuesa",
    subtitle: "Limón Menta",
  },
  {
    href: "/carta",
    image: "/images/sabores/piña.png",
    title: "Piña",
    subtitle: "Albahaca",
  },
  {
    href: "/carta",
    image: "/images/sabores/mandarina.png",
    title: "Mandarina",
    subtitle: "Maracuyá",
  },
  {
    href: "/carta",
    image: "/images/sabores/manzana.png",
    title: "Manzana",
    subtitle: "Chai",
  },
  {
    href: "/carta",
    image: "/images/sabores/maqui.png",
    title: "Maqui",
    subtitle: "Cacao",
  },
  {
    href: "/carta",
    image: "/images/sabores/murta.png",
    title: "Murta",
    subtitle: "Membrillo",
  },

  {
    href: "/carta",
    image: "/images/sabores/jazmin.png",
    title: "Jazmin Melena",
    subtitle: "de León",
  },
];

export default function Cartas() {
  return (
    <main className="pt-3 left-0 w-full overflow-hidden px-4">
      <p className="py-2 font-medium text-slate-700">Sabores</p>
      <Swiper
        spaceBetween={12}
        slidesPerView={5.3}
        centeredSlides={false}
        pagination={{ clickable: true }}
        navigation={false}
        className="mySwiper"
      >
        {sabores.map((sabor, index) => (
          <SwiperSlide key={index}>
            <Link href={sabor.href}>
              <div className="overflow-hidden rounded-full shadow-md border border-white/30">
                <img
                  src={sabor.image}
                  alt={sabor.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="text-[9px] font-normal text-slate-700 py-1 text-center">
                {sabor.title} <br /> {sabor.subtitle}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
