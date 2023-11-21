"use client";
import React, { FC, ReactNode } from "react";

interface CardSectionProps {
  bgColor: string;
  children: ReactNode;
}

const ClientSection: FC<CardSectionProps> = ({ bgColor, children }) => {
  return <div className={`${bgColor} w-full p-4 lg:p-24`}>{children}</div>;
};

export default ClientSection;
