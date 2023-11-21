import { btnTypesConstants } from "@/components/atoms/Button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center w-full mt-4 flex-col">
      <p>Seleccione como quiere servir la aplicacion</p>
      <div className="flex items-center justify-evenly w-full mt-4">
        <Link className={btnTypesConstants.roundedBorderBlue} href="/client">
          Cliente
        </Link>
        <Link className={btnTypesConstants.roundedBorderBlue} href="/server">
          Servidor
        </Link>
      </div>
    </div>
  );
};

export default page;
