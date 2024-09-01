"use client";

import { useExperienceForm } from "@/lib/context/ExperienceFormContext";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { RTEField } from "./RTEField";

export default function ExperienceInputForm() {
  const postForm = useExperienceForm();
  const handelCreate = postForm?.handleCreate;
  const handleData = postForm?.handleData;
  const data = postForm?.data;
  const isLoading = postForm?.isLoading;
  const error = postForm?.error;
  const image = postForm?.image;
  const setImage = postForm?.setImage;
  const isDone = postForm?.isDone;
  const updatePostId = postForm?.updatePostId;
  const fetchData = postForm?.fetchData;
  const handleUpdate = postForm?.handleUpdate;
  const handleDelete = postForm?.handleDelete;
  return (
    <section className="">
      <div className=" p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Add New Experience 
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handelCreate!();
          }}
          className="space-y-6  items-center"
        >
          <div className="flex ">
            <div className="grid grid-cols-2  gap-3">
              {/* Title Input */}
              <Input
                isClearable
                description="E.g Portfolio Website"
                type="title"
                label="Title"
                variant="bordered"
                placeholder="Experience Title"
                onChange={(e) => {
                  handleData!("title", e.target.value);
                }}
                value={data?.title}
                onClear={() => console.log("input cleared")}
                className="max-w-lg"
              />
              {/* Category Input */}
              <Input
                isClearable
                description="E.g Hilti"
                type="company"
                label="Company"
                variant="bordered"
                placeholder="Company Name"
                onChange={(e) => {
                  handleData!("company", e.target.value);
                }}
                value={data?.category}
                onClear={() => console.log("input cleared")}
                className="max-w-lg"
              />
              {/* TechStack */}
              <Input
                isClearable
                description="E.g. 2022 - 2023"
                type="year"
                label="Year"
                variant="bordered"
                placeholder="Timeline"
                onChange={(e) => {
                  handleData!("year", e.target.value);
                }}
                value={data?.TechStack}
                onClear={() => console.log("input cleared")}
                className="max-w-lg"
              />
              
             
              {/* Image Input */}
              <Input
                isClearable
                description="Experience Image"
                type="file"
                label="Image"
                variant="bordered"
                onChange={(e) => {
                  setImage!(e.target.files![0]);
                }}
                onClear={() => console.log("input cleared")}
                className="max-w-lg"
              />
            </div>
          </div>
          <div className="max-w-5xl flex flex-col gap-y-3">
            <h1 className="text-gray-500">Content</h1>
            <RTEField />
          </div>
          <button
            type="submit"
            className="bg-blue-500 rounded-full py-2 px-4 gap-2 flex"
          >
            {isLoading ? "Loading..." : updatePostId ? "update" : "Add Post"}
          </button>
        </form>
      </div>
    </section>
  );
}
