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
    <main className="left-0 w-full overflow-hidden">
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
          <Link href={"/tragos"}>
            <div className="h-12 w-full bg-black flex justify-center gap-2 px-4 py-2 items-center border-b text-white font-sans font-light text-[12px]">
              <p>DESPACHOS DESDE LA RM HASTA LA X REGIÓN</p>
              {/* <img src="/icons/cocktail-glass.svg" alt="" className="w-6" /> */}
            </div>
          </Link>
        </SwiperSlide>

      </Swiper>
    </main>
  );
}
