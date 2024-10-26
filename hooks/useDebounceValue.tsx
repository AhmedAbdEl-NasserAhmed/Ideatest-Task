"use client";

import { useEffect, useState } from "react";

export const useDebounceValue = (value: string, duration = 500) => {
  const [debounceValue, setDebounceValue] = useState<string>("");

  useEffect(() => {
    const debounceCall = setTimeout(() => {
      setDebounceValue(value);
    }, duration);

    return () => clearTimeout(debounceCall);
  }, [value, duration]);

  return debounceValue;
};
