import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Set initial value
    setMatches(media.matches);

    // Define callback for media query changes
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener for changes
    media.addEventListener("change", listener);

    // Clean up
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}
