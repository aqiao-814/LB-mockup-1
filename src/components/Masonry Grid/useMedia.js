import { useEffect, useState } from "react";

const useMedia = (queries, values, defaultValue) => {
  const match = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue;
  const [value, setValue] = useState(match);

  useEffect(() => {
    const handler = () => setValue(match);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return value;
};

export default useMedia;
