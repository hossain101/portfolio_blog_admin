'use client';
import PostFormContextProvider from "@/lib/context/PostFormContext";
import React, { Suspense } from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <PostFormContextProvider>
        <section className="flex">{children}</section>
      </PostFormContextProvider>
    </>
  );
};

export default Layout;
