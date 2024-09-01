
import React, { createContext, ReactNode, useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createNewExperience, deleteExperience, updateExperience } from "../firebase/experience/write";
import { getPost } from "../firebase/experience/read";


export interface ExperienceFormContextType {
  data: Record<string, string>;
  isLoading: boolean;
  error: null | string;
  handleCreate: () => Promise<void>;
  handleData: (key: string, value: string) => void;
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  isDone: boolean;
  updatePostId: string | null;
  fetchData: (id: string) => Promise<void>;
  handleUpdate: () => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
}

const ExperienceFormContext = createContext<ExperienceFormContextType | undefined>(undefined);

const ExperienceFormContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const updatePostId = searchParams.get("id");

  const [data, setData] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [image, setImage] = useState<File | null>(null);

  const handleData = (key: string, value: string) => {
    setIsDone(false);
    setData({ ...data, [key]: value });
  };

  const handleCreate = async () => {
    setIsLoading(true);
    try {
      if (!data || !image) {
        throw new Error("Data or image is missing");
      }
      await createNewExperience(data, image);
      setIsDone(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      if (!data || !image) {
        throw new Error("Data or image is missing");
      }
      await updateExperience(data, image);
      setIsDone(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setIsLoading(true);
    try {
      await deleteExperience(id);
      setIsDone(true);
      router.push("/admin/posts");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await getPost(id);
      if (response.exists()) {
        setData(response.data());
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ExperienceFormContext.Provider
      value={{
        data,
        isLoading,
        error,
        handleCreate,
        handleData,
        image,
        setImage,
        isDone,
        updatePostId,
        fetchData,
        handleUpdate,
        handleDelete,
      }}
    >
      {children}
    </ExperienceFormContext.Provider>
  );
};

export const useExperienceForm = () => useContext(ExperienceFormContext);

export default ExperienceFormContextProvider;
