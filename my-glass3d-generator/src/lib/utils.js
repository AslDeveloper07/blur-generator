// src/lib/utils.js

import { useState } from "react";

export function useCopyToClipboard(timeout = 1500) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), timeout);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };

  return [isCopied, copy];
}
// src/lib/utils.js
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

