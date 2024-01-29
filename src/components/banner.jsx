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
    <main className="absolute top-[70px] left-0 w-full overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 45000,
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
          <Link href={"/sushi"}>
            <div className="h-12 w-full bg-gradient-to-tr from-sky-100 to-sky-50 flex justify-center gap-2 px-4 py-2 items-center border-b border-white/10 text-slate-700">
              <p>Explora la nueva línea funcional</p>
              <img src="/icons/sushi.svg" alt="" className="w-6" />
              <p>{`->`}</p>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/tragos"}>
            <div className="h-12 w-full bg-gradient-to-tr from-cyan-600 to-cyan-900 flex justify-center gap-2 px-4 py-2 items-center border-b border-white/10 text-white">
              <p>Conoce nuevas preparaciones</p>
              <img src="/icons/cocktail-glass.svg" alt="" className="w-6" />
              <p>{`->`}</p>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/carta"}>
            <div className="h-12 w-full bg-gradient-to-tr from-yellow-600 to-yellow-900 flex justify-center gap-2 px-4 py-2 items-center border-b border-white/10 text-white">
              <p>Descubre nuevos sabores</p>
              <img src="/icons/spaghetti.svg" alt="" className="w-6" />
              <p>{`->`}</p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
