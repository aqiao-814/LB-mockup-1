import { useEffect, useState, useCallback } from "react";

const useMedia = (queries, values, defaultValue) => {
  const match = useCallback(
    () =>
      values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue,
    [queries, values, defaultValue]
  );
  const [value, setValue] = useState(match);

  useEffect(() => {
    const handler = () => setValue(match);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [match]);

  return value;
};

export default useMedia;
