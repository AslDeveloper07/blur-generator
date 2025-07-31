import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useState } from "react"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState(null);

  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000); // 2 sekunddan keyin "Copied!" yozuvi yo'qolsin
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy];
};