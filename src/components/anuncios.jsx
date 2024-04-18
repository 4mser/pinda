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
    <main className="mt-[70px] left-0 w-full overflow-hidden ">
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
                className="absolute  left-1/3 -translate-x-1/3 z-30"
              />
              <div className="h-48 overflow-hidden rounded-md w-full bottom-0 mt-12">
                <Image 
                  src="/banners/mente_lucida/flor_mentelucida.png"
                  alt="botella pinda mente lucida"
                  width={120}
                  height={120}
                  className="absolute left-0 -bottom-10 z-20"
                />
                <Image
                  src="/banners/mente_lucida/fondo_banner_mentelucida.png"
                  alt="fondo banner mente lucida"
                  height={44}
                  width={800}
                />
                
              </div>
              <div className="absolute right-10 top-[66px] flex flex-col gap-14">
              <Image 
                  src="/banners/mente_lucida/txt_banner_1.svg"
                  alt=""
                  width={130}
                  height={130}
                  className=""
                />
                <Image 
                  src="/banners/mente_lucida/txt_banner_2.svg"
                  alt=""
                  width={130}
                  height={130}
                  className=""
                />
              </div>
            </div>
            
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className="h-fit flex items-center justify-center">
            <Image 
              src="/banners/mente_lucida/fondo_banner_mentelucida.png"
              alt="fondo mente lucida"
              width={900}
              height={300}
              className="absolute top-0 left-0"
            />
            <div className="left-0 top-0 z-30 flex flex-row justify-end w-full">
              <Image 
                  src="/banners/mente_lucida/flor_mentelucida.png"
                  alt="botella pinda mente lucida"
                  width={200}
                  height={150}
                  className="absolute -left-10 -bottom-16"
                />
              <Image 
                  src="/banners/mente_lucida/mentelucida_ladeada.png"
                  alt="botella pinda mente lucida"
                  width={130}
                  height={130}
                  className="-translate-x-10"
                />
              <div className="flex flex-col justify-between p-5">
                <Image 
                  src="/banners/mente_lucida/txt_banner_1.svg"
                  alt=""
                  width={130}
                  height={130}
                  className=""
                />
                <Image 
                  src="/banners/mente_lucida/txt_banner_2.svg"
                  alt=""
                  width={130}
                  height={130}
                  className=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide> */}

        
      </Swiper>
    </main>
  );
}
