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
    <main className="pt-[85px] left-0 w-full overflow-hidden ">
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
              <p className="rounded-xl px-2 py-1 bg-slate-900 absolute right-7 top-4 text-white text-[10px] font-medium">
                NUEVA LINEA FUNCIONAL
              </p>
              <p className="absolute right-8 top-14 text-right text-[14px] font-[500]">
                Potencia tu equilibrio <br />y activa tu claridad
              </p>
              <p className="absolute right-8 top-28 text-right text-[10px] font-normal">
                Fusionamos la fermentación ancestral con <br /> potentes
                extractos fúngicos y botánicos, creando <br />
                una súper bebida diseñada para maximizar tu bienestar.
              </p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
