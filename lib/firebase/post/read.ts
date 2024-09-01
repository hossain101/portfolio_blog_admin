
import { db } from "@/lib/firebase";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import useSWRSubscription from "swr/subscription";

export function usePosts() {
  const { data, error } = useSWRSubscription(
    ["posts"],
    ([path], { next }) => {
      const ref = collection(db, path);

      const unSub = onSnapshot(
        ref,
        (snaps) => {
          next(
            null,
            snaps.docs.map((doc) => doc.data())
          );
        },
        (error) => {
          next(error.message);
        }
      );

      return () => unSub();
    }
  );

  return {
    data,
    error,
    isLoading: data === undefined && error === undefined,
  };
}

export const getPost = async (id: string) => {
  return await getDoc(doc(db,`posts/${id}`));
};