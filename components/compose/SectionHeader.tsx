import Button from "@/components/atoms/Button";
import React, { FC } from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  btnText: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  description,
  btnText,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col gap-1 lg:gap-2 mb-2 md:mb-0 text-center md:text-left px-8 md:px-0">
        <h2 className="text-2xl lg:text-4xl font-semibold">{title}</h2>
        {description && <p className="text-sm lg:text-base">{description}</p>}
      </div>
      <Button btnText={btnText} btnType="roundedBorderBlue" />
    </div>
  );
};

export default SectionHeader;
