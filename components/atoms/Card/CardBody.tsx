import React, { FC, ReactNode } from "react";

interface CardBodyProps {
  children: JSX.Element | JSX.Element[] | ReactNode;
  className?: string;
}

export const cardsBodyStyles = {
  blueBody: "",
};

const CardBody: FC<CardBodyProps> = ({ children, className }) => {
  return (
    <div className={`flex flex-col gap-2 p-3  sm:p-4 pl-3 ${className}`}>
      {children}
    </div>
  );
};

export default CardBody;
