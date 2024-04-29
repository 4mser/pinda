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
    color: "bg-orange-200"
  },
  {
    image: "/images/pindas/pinda_arandano_lavanda.png",
    title: "Arándano",
    subtitle: "Lavanda",
    color: "bg-blue-200"
  },
  {
    image: "/images/pindas/pinda_mango_jengibre.png",
    title: "Mango",
    subtitle: "Jengibre",
    color: "bg-yellow-200",
  },
  {
    image: "/images/pindas/pinda_maqui_cacao.png",
    title: "Maqui",
    subtitle: "Cacao",
    color: "bg-purple-200",
  },
  {
    image: "/images/pindas/pinda_pina_albahaca.png",
    title: "Piña",
    subtitle: "Albahaca",
    color: "bg-green-200"
  },
  {
    image: "/images/pindas/pinda_frambuesa_limon_menta.png",
    title: "Frambuesa",
    subtitle: "Limón Menta",
    color: "bg-pink-200",
  },
];

export default function Sabores() {
  return (
    <main className="pt-3 left-0 w-full ">
      <p className="py-3 font-medium text-slate-700 px-4">Sabores de siempre</p>
      <Swiper
        spaceBetween={0}
        slidesPerView={4.5}
        centeredSlides={false}
        pagination={{ clickable: true }}
        navigation={false}
      >
        {sabores.map((sabor, index) => (
          <SwiperSlide key={index} className="pl-3">
            <div className={`overflow-hidden rounded-xl p-3 ${sabor.color}`}>
              <img
                src={sabor.image}
                alt={sabor.title}
                className="w-full h-full object-cover rounded-md filter drop-shadow-sm"
              />
            </div>
            <p className="text-[12px] font-normal text-slate-700 py-1 text-center">
              {sabor.title} <br /> {sabor.subtitle}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
