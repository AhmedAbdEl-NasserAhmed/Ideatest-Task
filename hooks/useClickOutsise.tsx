"use client";

import { useEffect, useRef } from "react";

function useClickOutside({ close, value, StopBubbling = true }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close(value);
      }
    }

    window.addEventListener("click", handleClick, StopBubbling);

    return () => window.removeEventListener("click", handleClick, StopBubbling);
  }, [close, StopBubbling, value]);

  return ref;
}

export default useClickOutside;
