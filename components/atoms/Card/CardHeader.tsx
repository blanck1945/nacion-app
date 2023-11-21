import React, { FC } from "react";

interface CardHeaderProps {
  children: string;
  className: string;
}

const CardHeader: FC<CardHeaderProps> = ({ children, className }) => {
  return <p className={`text-left ${className}`}>{children}</p>;
};

export default CardHeader;
