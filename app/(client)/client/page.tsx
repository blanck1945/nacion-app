"use client";
import ClientBenefits from "@/components/client/ClientBenefits";
import ClientCodes from "@/components/client/ClientCodes";
import ClientSection from "@/components/client/ClientSection";
import Banner from "@/components/compose/Banner";
import SectionHeader from "@/components/compose/SectionHeader";
import ApiProvider from "@/context/api.context";
import React from "react";

const Page = () => {
  return (
    <ApiProvider>
      <main>
        <Banner />
        <ClientSection bgColor="bg-white">
          <SectionHeader
            title="Turismo en Buenos Aires"
            btnText="TODOS LOS BENEFICIOS"
            description="¿Sos socio de Club La Nación? Descarga tu código y disfruta beneficios exclusivos en tus marcas favoritas"
          />
          <ClientBenefits />
        </ClientSection>
        <ClientSection bgColor="bg-gray-100">
          <SectionHeader
            title="Códigos de descuento"
            btnText="TODOS LOS CÓDIGOS"
            description="¿Sos socio de Club La Nación? Descarga tu código y disfruta beneficios exclusivos en tus marcas favoritas"
          />
          <ClientCodes />
        </ClientSection>
      </main>
    </ApiProvider>
  );
};

export default Page;
