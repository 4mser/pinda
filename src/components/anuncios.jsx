"use client";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Anuncios() {
  return (
    <main className="pt-[70px] left-0 w-full overflow-hidden ">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        /* autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }} */

        autoplay={false}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="px-4 ">
          <Link href={"/carta"}>
            <div className="h-44 overflow-hidden rounded-lg    bg-gradient-to-br flex items-center from-zinc-800 to-transparent ">
              <img
                src="/images/funcional.png"
                alt=""
                className="w-full h-full object-cover"
              />
              <p className="rounded-xl hover:scale-110 transition-all flex items-center gap-2 px-2 py-1 bg-slate-900 absolute right-7 top-4 text-white text-[10px] font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />   NUEVA LINEA FUNCIONAL
              </p>
              <p className="absolute right-8 top-[50px] text-right text-[14px] font-[500]">
                Potencia tu equilibrio <br />y activa tu claridad
              </p>
              <p className="absolute right-8 top-[100px] text-right text-[10px] font-normal">
                Fusionamos la fermentación ancestral <br /> con potentes
                extractos fúngicos y <br /> botánicos, creando una súper bebida
                <br /> diseñada para maximizar tu bienestar.
              </p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
