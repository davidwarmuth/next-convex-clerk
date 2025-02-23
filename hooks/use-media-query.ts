// hooks/use-media-query.ts

import { useState, useEffect } from "react";

/**
 * useMediaQuery is a custom hook that returns a boolean value
 * based on the media query provided.
 *
 * @param query - The media query string (e.g., "(min-width: 768px)")
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatches = () => setMatches(mediaQueryList.matches);

    // Add the event listener for changes
    mediaQueryList.addEventListener("change", updateMatches);

    // Set initial value
    setMatches(mediaQueryList.matches);

    // Cleanup the listener when the component unmounts
    return () => {
      mediaQueryList.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
}
