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
    <main className=" mt-10 mb-6 md:mt-36 left-0 w-full overflow-hidden">
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


        <SwiperSlide className="px-4">
            <div className=" flex flex-col">
              
              <Image 
                src="/banners/mente_lucida/mentelucida_ladeada.png"
                alt="botella pinda mente lucida"
                width={130}
                height={130}
                className="absolute  left-1/3 -translate-x-1/3 z-30 md:w-[10vw] "
              />
              <div className="h-48 md:h-[20vw] overflow-hidden rounded-xl w-full bottom-0 mt-12">
                <Image 
                  src="/banners/mente_lucida/flor_mentelucida.png"
                  alt="flor pinda mente lucida"
                  width={140}
                  height={140}
                  className="absolute left-0 -bottom-10 z-20"
                />
                <Image
                  src="/banners/mente_lucida/fondo_banner_mentelucida.png"
                  alt="fondo banner mente lucida"
                  height={44}
                  width={800}
                  className="w-full h-[50vw]"
                />
                
              </div>
              <div className="absolute right-8 top-[66px] flex flex-col gap-14">
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

        
      </Swiper>
    </main>
  );
}
