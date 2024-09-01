"use client";
import PostFormContextProvider from "@/lib/context/PostFormContext";
import React from "react";
import InputForm from "./BlogInputForm";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <PostFormContextProvider>
      <section className="flex ">
        <div className="p-20">
          <Link
            href="/addBlog"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg rounded-full p-3"
          >
            Add Blog
          </Link>
        </div>
        <div className="p-20">
          <Link
            href="/addExperience"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg rounded-full p-3"
          >
            Add Experience
          </Link>
        </div>
      </section>
    </PostFormContextProvider>
  );
};

export default Dashboard;
