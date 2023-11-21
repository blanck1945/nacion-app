import React, { FC, useContext } from "react";
import SectionHeader from "./SectionHeader";
import Card from "../atoms/Card/Card";
import Image from "next/image";
import CardImage from "../atoms/Card/CardImage";
import CardTypeHandler from "../atoms/Card/CardTypeHandler";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import CardDisplayer from "./CardDisplayer";

interface CardSectionProps {
  title: string;
  description?: string;
  btnText: string;
  cardType: string;
  cardData: any;
  bgColor: string;
}

const CardSection: FC<CardSectionProps> = ({
  title,
  description,
  btnText,
  bgColor,
  cardType,
  cardData,
}) => {
  return (
    <div className={`${bgColor} w-full p-4 lg:p-24`}>
      <div>
        <SectionHeader
          title={title}
          btnText={btnText}
          description={description}
        />
        <CardDisplayer cardData={cardData} cardType={cardType} />
        {/* <div className="flex items-center w-full mt-8">
          <IoIosArrowBack className="text-4xl font-bold mr-4 lg:mr-10 cursor-pointer " />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5">
            {cardData.map((data: any) => {
              return (
                <Card key={data.name}>
                  <CardImage src={data.image} alt="blue" />
                  <CardTypeHandler cardType={cardType} cardInfo={data} />
                </Card>
              );
            })}
          </div>
          <IoIosArrowForward className="text-4xl font-bold ml-4 lg:ml-10 cursor-pointer" />
        </div> */}
      </div>
    </div>
  );
};

export default CardSection;
