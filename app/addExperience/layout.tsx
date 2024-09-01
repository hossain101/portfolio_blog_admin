"use client";
import ExperienceFormContextProvider from "@/lib/context/ExperienceFormContext";

import React, { Suspense } from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <ExperienceFormContextProvider>
        <section className="">{children}</section>
      </ExperienceFormContextProvider>
    </>
  );
};

export default Layout;
