import React, { FC, useContext } from "react";
import SectionHeader from "./SectionHeader";
import CardDisplayer from "./CardDisplayer";
import { CardData, CardTypes } from "@/types/types";

interface CardSectionProps {
  title: string;
  description?: string;
  btnText: string;
  cardType: CardTypes;
  cardData: CardData[];
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
      </div>
    </div>
  );
};

export default CardSection;
