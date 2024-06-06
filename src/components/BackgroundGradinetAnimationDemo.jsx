import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Image from "next/image";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-end justify-end text-white font-bold px-6 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <Image 
            src={'/svg/corfo.svg'}
            alt="Corfo"
            width={150}
            height={150}
          />
      </div>
    </BackgroundGradientAnimation>
  );
}
