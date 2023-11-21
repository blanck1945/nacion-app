import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative top-0 w-full h-screen">
      <Image
        src="https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="discount"
        height={500}
        loading="lazy"
        width={500}
        className="absolute top-16 lg:top-36 rounded-full left-0 lg:left-14 z-10 p-16 lg:p-0"
      />
      <Image
        src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero"
        layout="fill"
        objectFit="cover"
        priority
        blurDataURL="https://pixabay.com/static/frontend/3c346409d336d5f09a7f.svg"
        placeholder="blur"
        fill
      />
    </div>
  );
};

export default Banner;
