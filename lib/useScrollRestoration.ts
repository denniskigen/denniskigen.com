import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

interface ScrollPosition {
  [key: string]: number;
}

const SCROLL_POSITION_KEY = "scroll-positions";
const MAX_SAVED_POSITIONS = 10; // Limit to prevent localStorage bloat

export function useScrollRestoration() {
  const router = useRouter();
  const scrollPositions = useRef<ScrollPosition>({});
  const isRestoring = useRef(false);

  // Load saved scroll positions on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(SCROLL_POSITION_KEY);
        if (saved) {
          scrollPositions.current = JSON.parse(saved);
        }
      } catch (error) {
        console.warn("Failed to load scroll positions:", error);
      }
    }
  }, []);

  // Save scroll position before navigation
  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      if (typeof window !== "undefined" && !isRestoring.current) {
        scrollPositions.current[router.asPath] = window.scrollY;
        saveScrollPositions();
      }
    };

    const handleRouteChangeComplete = (url: string) => {
      if (typeof window !== "undefined") {
        isRestoring.current = true;

        // Small delay to ensure the page has rendered
        setTimeout(() => {
          const savedPosition = scrollPositions.current[url];
          if (savedPosition !== undefined && savedPosition > 0) {
            window.scrollTo({
              top: savedPosition,
              behavior: "instant", // Instant scroll to avoid animation conflicts
            });
          }

          // Reset the restoring flag after a short delay
          setTimeout(() => {
            isRestoring.current = false;
          }, 200);
        }, 100);
      }
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  // Save scroll position on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (typeof window !== "undefined") {
        scrollPositions.current[router.asPath] = window.scrollY;
        saveScrollPositions();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [router.asPath]);

  // Save scroll position periodically while scrolling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (isRestoring.current) return; // Don't save while restoring

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (typeof window !== "undefined") {
          scrollPositions.current[router.asPath] = window.scrollY;
          saveScrollPositions();
        }
      }, 150); // Debounce scroll saving
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [router.asPath]);

  // Helper function to save scroll positions with cleanup
  const saveScrollPositions = () => {
    try {
      // Clean up old positions to prevent localStorage bloat
      const positions = scrollPositions.current;
      const keys = Object.keys(positions);

      if (keys.length > MAX_SAVED_POSITIONS) {
        // Keep only the most recent positions
        const sortedKeys = keys.sort((a, b) => positions[b] - positions[a]);
        const keysToKeep = sortedKeys.slice(0, MAX_SAVED_POSITIONS);
        const cleanedPositions: ScrollPosition = {};

        keysToKeep.forEach((key) => {
          cleanedPositions[key] = positions[key];
        });

        scrollPositions.current = cleanedPositions;
      }

      localStorage.setItem(SCROLL_POSITION_KEY, JSON.stringify(scrollPositions.current));
    } catch (error) {
      console.warn("Failed to save scroll positions:", error);
    }
  };
}
