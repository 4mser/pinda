'use client'
import React from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import Image from 'next/image';

const Footer = () => {
  const links = [
    {
      src: "/svg/instagram.svg",
      width: 31,
      height: 31,
      alt: "Instagram",
      href: "https://www.instagram.com/pinda_kombucha",
      mobileHref: "instagram://user?username=pinda_kombucha"
    },
    {
      src: "/svg/wsp.svg",
      width: 32,
      height: 32,
      alt: "WhatsApp",
      href: "https://wa.me/974525079"
    },
    {
      src: "/svg/mail.svg",
      width: 33,
      height: 33,
      alt: "Email",
      href: "mailto:contacto@pindakombucha.cl"
    },
  ];

  const handleLinkClick = (href, mobileHref) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile && mobileHref) {
      window.location.href = mobileHref;
    } else {
      window.open(href, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className='relative'>
      <Image 
        src="/svg/colibri.svg"
        width={40}
        height={40}
        alt='colibrí'
        className='absolute z-10 left-1/2 -translate-x-1/2 top-10'
      />
      <p className='absolute text-white z-10 left-1/2 -translate-x-1/2 top-24'>DESTAPA TU BIENESTAR</p>
      <div className='flex justify-between gap-3 absolute left-1/2 -translate-x-1/2 top-32 z-10 items-center'>
        {links.map((link, index) => (
          <div
            key={index}
            onClick={() => handleLinkClick(link.href, link.mobileHref)}
            className='hover:scale-110 hover:cursor-pointer'
          >
            <Image 
              src={link.src}
              width={link.width}
              height={link.height}
              alt={link.alt}
            />
          </div>
        ))}
      </div>
      <BackgroundGradientAnimation />
    </div>
  );
};

export default Footer;
