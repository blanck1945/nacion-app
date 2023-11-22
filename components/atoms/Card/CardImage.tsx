import { CardTypes } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface CardImageProps {
  src: string;
  alt: string;
  cardType: CardTypes;
  withLink?: string;
}

const CardImage: FC<CardImageProps> = ({
  src,
  alt,
  cardType,
  withLink = "",
}) => {
  return (
    <div className="relative w-full h-32 sm:h-48">
      {cardType === "benefits" ? (
        <Link target="_blank" href={withLink}>
          <Image src={src} alt={alt} fill className="rounded-t-lg" />
        </Link>
      ) : (
        <Image src={src} alt={alt} fill className="rounded-t-lg" />
      )}
    </div>
  );
};

export default CardImage;
