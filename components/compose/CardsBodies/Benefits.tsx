import React, { FC } from "react";
import CardBody from "../../atoms/Card/CardBody";
import CardHeader from "../../atoms/Card/CardHeader";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

interface BenfitsProps<T> {
  cardInfo: T;
  cardType: string;
}

const benefitsStyles: { [T: number]: string } = {
  0: "text-violet-900",
  1: "text-blue-700",
  2: "text-[#1266f1]",
};

const Benefits: FC<
  BenfitsProps<{
    name: string;
    crmid: string;
    benefits: any[];
    nearLocation: number;
  }>
> = ({ cardInfo, cardType }) => {
  const convertToKm = (distanceInMtr: number) => {
    const distance = distanceInMtr / 1000.0;

    return distance >= 1000
      ? distance.toString().replace(".", ",") + " km"
      : distance * 1000 + " m";
  };

  return (
    <CardBody className="h-24 sm:h-auto">
      {cardType === "benefits" ? (
        <Link
          target="_blank"
          href={`https://club.lanacion.com.ar/${cardInfo?.crmid}`}
        >
          <CardHeader className="text-left md:h-6 md:mt-2 text-black text-opacity-70 font-semibold text-sm md:text-xl overflow-hidden text-ellipsis ">
            {cardInfo?.name}
          </CardHeader>
        </Link>
      ) : (
        <CardHeader className="text-left md:h-6 md:mt-2 text-black text-opacity-70 font-semibold text-sm md:text-xl overflow-hidden text-ellipsis ">
          {cardInfo?.name}
        </CardHeader>
      )}
      <div className="flex">
        {cardInfo?.benefits?.map((el, index) => {
          return (
            <div key={el.id} className="flex items-center mt-0 md:mt-1">
              <p
                className={`${benefitsStyles[index]} text-sm font-semibold md:text-base md:font-bold`}
              >
                {el.type}
              </p>
              {index + 1 !== cardInfo.benefits.length && (
                <div className="border-r h-3 mt-1 bg-gray-400 mx-2"></div>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex items-center text-slate-600 gap-1">
        <IoLocationOutline />
        <p className="font-semibold text-xs">
          {convertToKm(cardInfo?.nearLocation)}
        </p>
      </div>
    </CardBody>
  );
};

export default Benefits;
