import CardSection from "@/components/compose/CardSection";
import { getBenefits, getCodes } from "./fetch";
import Banner from "@/components/compose/Banner";

export default async function Home() {
  const codes = await getCodes();
  const benefits = await getBenefits();

  return (
    <main>
      <Banner />
      <CardSection
        title="Turismo en Buenos Aires"
        btnText="TODOS LOS BENEFICIOS"
        bgColor="bg-white"
        cardType="benefits"
        cardData={benefits}
      />
      <CardSection
        title="Códigos de descuento"
        description="¿Sos socio de Club La Nación? Descarga tu código y disfruta beneficios exclusivos en tus marcas favoritas"
        btnText="TODOS LOS CÓDIGOS"
        bgColor="bg-gray-100"
        cardType="codes"
        cardData={codes}
      />
    </main>
  );
}
