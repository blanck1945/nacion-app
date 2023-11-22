import React, { FC } from "react";
import Codes from "../../compose/CardsBodies/Codes";
import Benefits from "../../compose/CardsBodies/Benefits";

export type CardInfo = any;

interface CardBodyProps {
  cardInfo: CardInfo;
  cardType: string;
}

const CardTypeHandler: FC<CardBodyProps> = ({ cardInfo, cardType }) => {
  switch (cardType) {
    case "codes":
      return <Codes cardInfo={cardInfo} />;
    default:
      return <Benefits cardInfo={cardInfo} cardType={cardType} />;
  }
};

export default CardTypeHandler;
