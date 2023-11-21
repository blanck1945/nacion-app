import Image from "next/image";
import React, { FC } from "react";

interface CardImageProps {
  src: string;
  alt: string;
}

const CardImage: FC<CardImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-32 sm:h-48">
      <Image src={src} alt={alt} fill className="rounded-t-lg" />
    </div>
  );
};

export default CardImage;
