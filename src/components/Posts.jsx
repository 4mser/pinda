"use client";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Data for each SwiperSlide
const sabores = [
  {
    image: "/posts/1.jpg",
  },
  {
    image: "/posts/2.jpg",
  },
  {
    image: "/posts/3.jpeg",
  },
  {
    image: "/posts/4.jpeg",
  },
  {
    image: "/posts/5.jpeg",
  },
  {
    image: "/posts/6.jpeg",
  },
  {
    image: "/posts/7.jpeg",
  },

  {
    image: "/posts/8.jpeg",
  },
];

export default function Posts() {
  return (
    <main className="pt-10  left-0 w-full ">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={false}
        pagination={{ clickable: true}}
        navigation={false}

        className="hover:cursor-grab "
      >
        {sabores.map((sabor, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden xl:p-40">
              <img
                src={sabor.image}
                alt={sabor.title}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
