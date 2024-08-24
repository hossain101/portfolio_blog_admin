"use client";
import PostFormContextProvider from "@/lib/context/PostFormContext";
import React from "react";
import InputForm from "./InputForm";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <PostFormContextProvider>
      <section className="flex ">
        <div className="p-20">
          <Link
            href="/add"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg rounded-full p-3"
          >
            Add
          </Link>
        </div>
      </section>
    </PostFormContextProvider>
  );
};

export default Dashboard;
