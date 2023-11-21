import React, { FC } from "react";

interface CardProps {
  children: JSX.Element | JSX.Element[];
}

const Card: FC<CardProps> = ({ children }) => {
  return <div className="border rounded-lg">{children}</div>;
};

export default Card;
