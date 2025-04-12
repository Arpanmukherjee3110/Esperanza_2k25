import Header from "@/components/Shared/Header";
import { metaDescription } from "@/utils/static/metaData";
import {type Metadata } from "next";
import { ReactNode } from "react";

export const metadata : Metadata = {
  title: "Esperanza2k25 | Team",
  description: metaDescription,
}

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header/>
      {children}
    </>
  );
};

export default layout;
