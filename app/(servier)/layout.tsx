import LayoutNavbar from "@/components/layout/LayoutNavbar";
import React from "react";

export default function NestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LayoutNavbar />
      {children}
    </>
  );
}
