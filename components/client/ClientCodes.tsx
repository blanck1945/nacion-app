"use client";
import React from "react";
import { useCodes } from "@/context/api.context";
import CardDisplayer from "../compose/CardDisplayer";
import Loading from "../atoms/Loading";

const ClientCodes = () => {
  const codes = useCodes();

  if (codes.length === 0) return <Loading />;

  return <CardDisplayer cardData={codes} cardType="codes" />;
};

export default ClientCodes;
