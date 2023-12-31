import React, { FC } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "../atoms/Card/Card";
import CardImage from "../atoms/Card/CardImage";
import CardTypeHandler from "../atoms/Card/CardTypeHandler";
import { CardData, CardTypes } from "@/types/types";

interface CardDisplayerProps {
  cardData: CardData[];
  cardType: CardTypes;
}

const CardDisplayer: FC<CardDisplayerProps> = ({ cardData, cardType }) => {
  return (
    <div className="flex items-center w-full mt-8">
      <IoIosArrowBack className="text-4xl font-bold mr-4 lg:mr-10 cursor-pointer " />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5">
        {cardData.map((data: CardData) => {
          return (
            <Card key={data.name}>
              <CardImage
                src={data.image}
                alt="blue"
                cardType={cardType}
                withLink={`https://club.lanacion.com.ar/${data.crmid}`}
              />
              <CardTypeHandler cardType={cardType} cardInfo={data} />
            </Card>
          );
        })}
      </div>
      <IoIosArrowForward className="text-4xl font-bold ml-4 lg:ml-10 cursor-pointer" />
    </div>
  );
};

export default CardDisplayer;
