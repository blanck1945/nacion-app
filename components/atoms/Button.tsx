import React, { FC } from "react";

interface ButtonProps {
  btnText: string;
  btnType?: keyof typeof btnTypesConstants;
}

export const generalStyles = "border font-semibold";

export const btnTypesConstants = {
  default: `${generalStyles}`,
  roundedBorderWhite: `${generalStyles} border-white text-white rounded-md p-1 px-2 md:p-2 md:px-3 text-xs lg:text-sm transition-all hover:bg-white hover:text-[#1266f1]`,
  roundedBorderBlue: `${generalStyles} border-[#1266f1] text-[#1266f1] text-xs lg:text-sm px-4 lg:px-6 py-2 lg:py-3 rounded-full transition-all font-bold hover:bg-[#1266f1] hover:text-white`,
} as const;

const Button: FC<ButtonProps> = ({ btnText, btnType = "default" }) => {
  return <button className={`${btnTypesConstants[btnType]}`}>{btnText}</button>;
};

export default Button;
