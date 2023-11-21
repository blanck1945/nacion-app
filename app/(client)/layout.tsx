import LayoutNavbar from "@/components/layout/LayoutNavbar";
import React from "react";

export default function ClientLayout({
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
