"use client";
import React from "react";
import CardDisplayer from "../compose/CardDisplayer";
import { useBenefits } from "@/context/api.context";
import Loading from "../atoms/Loading";

const ClientBenefits = () => {
  const benefits = useBenefits("Turismo en Buenos Aires", 4);

  if (benefits.length === 0) return <Loading />;

  return <CardDisplayer cardData={benefits} cardType="benefits" />;
};

export default ClientBenefits;
