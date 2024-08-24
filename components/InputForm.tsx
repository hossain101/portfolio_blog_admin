"use client";

import { usePostForm } from "@/lib/context/PostFormContext";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

export default function InputForm() {
  const postForm = usePostForm();
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
    <section>
      <div className="w-full max-w-4xl mx-auto p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-6">Add New Blog Post</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handelCreate!();
          }}
          className="space-y-6"
        >
          <div className="flex">
            <div className="grid grid-cols-2  gap-3">
              {/* Title Input */}
              <Input
                isClearable
                description="E.g Portfolio Website"
                type="title"
                label="Title"
                variant="bordered"
                placeholder="Post Title"
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
                description="E.g Web Dev, Mobile App"
                type="category"
                label="Category"
                variant="bordered"
                placeholder="Post Category"
                onChange={(e) => {
                  handleData!("category", e.target.value);
                }}
                value={data?.category}
                onClear={() => console.log("input cleared")}
                className="max-w-lg"
              />
              {/* Technology */}
              <Input
                isClearable
                description="E.g Next.js, Flutter"
                type="technology"
                label="Technology"
                variant="bordered"
                placeholder="Technology Used"
                onChange={(e) => {
                  handleData!("technology", e.target.value);
                }}
                value={data?.technology}
                onClear={() => console.log("input cleared")}
                className="max-w-lg"
              />
              {/* Footer Text */}
              <Input
                isClearable
                description="Footer Description"
                type="footerText"
                label="Footer Text"
                variant="bordered"
                placeholder="Footer"
                onChange={(e) => {
                  handleData!("footerText", e.target.value);
                }}
                value={data?.footerText}
                onClear={() => console.log("input cleared")}
                className="max-w-lg"
              />
              {/* Footer URL */}
              <Input
                isClearable
                description="Footer URL"
                type="footerUrl"
                label="Footer URL"
                variant="bordered"
                placeholder="Technology Used"
                onChange={(e) => {
                  handleData!("footerURL", e.target.value);
                }}
                value={data?.footerURL}
                onClear={() => console.log("input cleared")}
                className="max-w-lg"
              />
              {/* Image Input */}
              <Input
                isClearable
                description="Blog Image"
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
