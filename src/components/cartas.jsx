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
      <p className="py-2 font-medium text-slate-700">Sabores</p>
      <Swiper
        spaceBetween={12}
        slidesPerView={5}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href={"/tragos"}>
            <div className="overflow-hidden  rounded-full shadow-md border border-white/30  from-cyan-300 to-cyan-600">
              <img
                src="/images/sabores/arandano.png"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="text-[9px] font-normal text-slate-700 py-1 text-center">
              Arándano <br /> Lavanda
            </p>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/sushi"}>
            <div className="overflow-hidden  rounded-full shadow-md border border-white/30  from-red-600 to-red-800">
              <img
                src="/images/sabores/durazno.png"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="text-[9px] font-normal text-slate-700 py-1 text-center">
              Durazno <br /> Poleo
            </p>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/carta"}>
            <div className="overflow-hidden rounded-full  shadow-md  border border-white/30  from-yellow-300 to-green-200">
              <img
                src="/images/sabores/mango.png"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="text-[9px] font-normal text-slate-700 py-1 text-center">
              Mango <br /> Jengibre
            </p>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/carta"}>
            <div className="overflow-hidden rounded-full  shadow-md  border border-white/30  from-yellow-300 to-green-200">
              <img
                src="/images/sabores/frambuesa.png"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="text-[9px] font-normal text-slate-700 py-1 text-center">
              Frambuesa <br /> Limón Menta
            </p>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={"/carta"}>
            <div className="overflow-hidden rounded-full  shadow-md  border border-white/30  from-yellow-300 to-green-200">
              <img
                src="/images/sabores/piña.png"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="text-[9px] font-normal text-slate-700 py-1 text-center">
              Piña <br /> Albahaca
            </p>
          </Link>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
