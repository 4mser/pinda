"use client";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function App() {
  return (
    <main className="fixed top-0 left-0 z-20 w-full overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide>
          <Link href={"/tragos"}>
            <div className="h-12 w-full bg-gradient-to-r from-cyan-500 to-purple-500 flex justify-center gap-2 px-4 py-2 items-center border-b text-white font-sans font-light text-[12px]">
              <p>DESPACHOS DESDE LA RM HASTA LA X REGIÓN</p>
              {/* <img src="/icons/cocktail-glass.svg" alt="" className="w-6" /> */}
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/tragos"}>
            <div className="h-12 w-full bg-gradient-to-r from-cyan-400 to-green-400 flex justify-center gap-2 px-4 py-2 items-center border-b text-white font-sans font-light text-[12px]">
              <p>REUTILIZA TUS BOTELLAS Y GANA RECOMPENSAS!</p>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/tragos"}>
            <div className="h-12 w-full bg-gradient-to-r from-pink-400 to-purple-700 flex justify-center gap-2 px-4 py-2 items-center border-b text-white font-sans font-light text-[12px]">
              <p>DESCUBRE RECETAS Y PREPARACIONES</p>
            </div>
          </Link>
        </SwiperSlide>

      </Swiper>
    </main>
  );
}
