//Create new experience

import { db, imgDB } from "@/lib/firebase";

import {
  deleteDoc,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";

export const createNewExperience = async (
  data: Record<string, string>,
  image: File
) => {
  if (!data?.title) {
    throw new Error("experience Name is required");
  }

  if (!image) {
    throw new Error("experience Image is required");
  }

  const imageRef = storageRef(imgDB, `experience/${data.title}`);
  await uploadBytes(imageRef, image!);

  const imageURL = await getDownloadURL(imageRef);

  const experienceRef = doc(db, `experiences/${data.title}`);

  await setDoc(experienceRef, {
    ...data,
    id: data?.title,
    Timestamp: Timestamp.now(),
    experienceImageUrl: imageURL,
  });
};

export const updateExperience = async (
  data: Record<string, string>,
  image?: File // Made optional since it's not strictly necessary for the operation
) => {
  if (!data?.title) {
    throw new Error("experience Name is required");
  }
  if (!data?.slug) {
    throw new Error("experience Slug is required");
  }

  let imageURL = data?.experienceImageUrl;

  if (image) {
    try {
      const imageRef = storageRef(imgDB, `experiences/${data.slug}`);
      await uploadBytes(imageRef, image);
      imageURL = await getDownloadURL(imageRef); // Renamed variable to avoid shadowing
    } catch (error) {
      console.error("Failed to upload image:", error);
      // Handle error appropriately, possibly rethrow or return early
    }
  }

  const experienceRef = doc(db, `experiences/${data.id}`);

  await updateDoc(experienceRef, {
    ...data,
    Timestamp: Timestamp.now(), // Assuming Timestamp is imported correctly
    experienceImageUrl: imageURL,
  });
};

export const deleteExperience = async (id: string) => {
  if (!id) {
    throw new Error("experience ID is required");
  }
  const experienceRef = doc(db, `experiences/${id}`);
  await deleteDoc(experienceRef);
};
