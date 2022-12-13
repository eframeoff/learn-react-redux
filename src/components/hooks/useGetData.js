import { useState } from "react";

export const useGetData = (callback) => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const getPosts = async () => {
    try {
      setLoader(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setLoader(false);
    }
  };

  return [loader, getPosts, error];
};
