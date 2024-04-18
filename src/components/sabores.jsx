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
    image: "/images/pindas/pinda_natural.png",
    title: "Natural",
    subtitle: "",
  },
  {
    image: "/images/pindas/pinda_arandano_lavanda.png",
    title: "Arándano",
    subtitle: "Lavanda",
  },
  {
    image: "/images/pindas/pinda_mango_jengibre.png",
    title: "Mango",
    subtitle: "Jengibre",
  },
  {
    image: "/images/pindas/pinda_maqui_cacao.png",
    title: "Maqui",
    subtitle: "Cacao",
  },
  {
    image: "/images/pindas/pinda_pina_albahaca.png",
    title: "Piña",
    subtitle: "Albahaca",
  }
];

export default function Sabores() {
  return (
    <main className="pt-3 left-0 w-full px-4">
      <p className="py-2 font-medium text-slate-700">Sabores de siempre</p>
      <Swiper
        spaceBetween={12}
        slidesPerView={5}
        centeredSlides={false}
        pagination={{ clickable: true }}
        navigation={false}
      >
        {sabores.map((sabor, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden">
              <img
                src={sabor.image}
                alt={sabor.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="text-[9px] font-normal text-slate-700 py-1 text-center">
              {sabor.title} <br /> {sabor.subtitle}
            </p>
          </SwiperSlide>
        ))}
        <div clas></div>
      </Swiper>
    </main>
  );
}
