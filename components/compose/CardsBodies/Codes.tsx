import React, { FC } from "react";
import Button, { btnTypesConstants } from "../../atoms/Button";
import CardBody from "../../atoms/Card/CardBody";
import CardHeader from "../../atoms/Card/CardHeader";

interface CodesProps<T> {
  cardInfo: T;
}

const Codes: FC<CodesProps<{ name: string; crmid: string }>> = ({
  cardInfo,
}) => {
  return (
    <CardBody className="bg-[#1a73e8] rounded-b-lg h-20 sm:h-auto">
      <CardHeader className="text-left h-5 md:h-6 md:mt-2 text-white font-semibold text-sm md:text-xl overflow-hidden text-ellipsis">
        {cardInfo?.name}
      </CardHeader>
      <div className="flex items-end">
        <a
          className={`${btnTypesConstants.roundedBorderWhite} mt-0 md:mt-2 sm:uppercase`}
          target="_blank"
          href={`https://club.lanacion.com.ar/${cardInfo?.crmid}`}
        >
          Quiero mi codigo
        </a>
      </div>
    </CardBody>
  );
};

export default Codes;
