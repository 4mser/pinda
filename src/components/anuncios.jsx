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
            <div className="h-32 overflow-hidden rounded-lg    bg-gradient-to-br flex items-center from-zinc-800 to-transparent ">
              <img
                src="/images/funcional.png"
                alt=""
                className="w-full h-full object-cover"
              />
              <p className="absolute right-6 top-2 text-right font-medium text-xs text-slate-700">
                NUEVA LÍNEA FUNCIONAL
                <br />
                <span className="opacity-80">
                  Llevamos la Kombucha al siguiente nivel
                </span>
              </p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
