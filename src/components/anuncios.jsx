"use client";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

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
        {/* <SwiperSlide className="px-4 ">
          <Link href={"/carta"}>
            <div className="h-44 rounded-lg    bg-gradient-to-br flex items-center from-zinc-800 to-transparent ">
              <img
                src="/banners/mente_lucida/fondo_banner_mentelucida.png"
                alt=""
                className="w-full h-full object-cover"
              />
              <img src="/banners/mente_lucida/flor_mentelucida.png" alt="flor_mentelucida" className="absolute left-0 max-w-25 opacity-50" />
              <img src="/banners/mente_lucida/mentelucida_ladeada.png" alt="" className="absolute h-56" />

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
        </SwiperSlide> */}
        <SwiperSlide className="px-4 ">
            <div className="h-fit flex flex-col">
              
              <Image 
                src="/banners/mente_lucida/mentelucida_ladeada.png"
                alt="botella pinda mente lucida"
                width={130}
                height={130}
                className="absolute  left-1/3 -translate-x-1/3"
              />
              <div className="h-48 overflow-hidden rounded-md w-full bottom-0 mt-12">
                <Image 
                  src="/banners/mente_lucida/flor_mentelucida.png"
                  alt="botella pinda mente lucida"
                  width={120}
                  height={120}
                  className="absolute left-0 -bottom-10"
                />
                <Image
                  src="/banners/mente_lucida/fondo_banner_mentelucida.png"
                  alt="fondo banner mente lucida"
                  height={44}
                  width={800}
                />
                
              </div>
              <div className="absolute right-8 top-20">
                  <p className="rounded-xl hover:scale-110 transition-all flex items-center gap-2 px-2 py-1 bg-slate-900  right-7 top-4 text-white text-[10px] font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />   NUEVA LINEA FUNCIONAL
                  </p>
                  <p className=" right-8 top-[50px] text-right text-[14px] font-[500]">
                    Potencia tu equilibrio <br />y activa tu claridad
                  </p>
                  <p className=" right-8 top-[100px] text-right text-[10px] font-normal">
                    Fusionamos la fermentación ancestral <br /> con potentes
                    extractos fúngicos y <br /> botánicos, creando una súper bebida
                    <br /> diseñada para maximizar tu bienestar.
                  </p>
                </div>
            </div>
            
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
