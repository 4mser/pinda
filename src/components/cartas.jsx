"use client";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";

export default function Cartas() {
  return (
    <main className="pt-3 left-0 w-full overflow-hidden px-4">
      <p className="py-2 font-semibold">Sabores</p>
      <Swiper
        spaceBetween={12}
        slidesPerView={2.5}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href={"/tragos"}>
            <div className="overflow-hidden  rounded-lg shadow-md border border-white/30  from-cyan-300 to-cyan-600">
              <img
                src="/images/sabores/arandano.png"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="text-xs font-extralight py-1 ">Arándano Lavanda</p>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/sushi"}>
            <div className="overflow-hidden  rounded-lg shadow-md border border-white/30  from-red-600 to-red-800">
              <img
                src="/images/sabores/durazno.png"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="text-xs font-extralight py-1 ">Durazno Poleo</p>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/carta"}>
            <div className="overflow-hidden rounded-lg  shadow-md  border border-white/30  from-yellow-300 to-green-200">
              <img
                src="/images/sabores/mango.png"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="text-xs font-extralight py-1 ">Mango Jengibre</p>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/carta"}>
            <div className="overflow-hidden rounded-lg  shadow-md  border border-white/30  from-yellow-300 to-green-200">
              <img
                src="/images/sabores/frambuesa.png"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="text-xs font-extralight py-1 ">
              Frambuesa Limón Menta
            </p>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/carta"}>
            <div className="overflow-hidden rounded-lg  shadow-md  border border-white/30  from-yellow-300 to-green-200">
              <img
                src="/images/sabores/piña.png"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="text-xs font-extralight py-1 ">Piña Albahaca</p>
          </Link>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
