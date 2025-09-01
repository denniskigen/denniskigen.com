import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";

export default function Header() {
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleScroll = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    }, 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll]);

  return pathName !== "/" ? (
    <header
      className={`h-37.5px flex items-center justify-between mb-10 transition-all duration-200 ${
        isScrolled
          ? "sticky top-0 z-50 bg-white dark:bg-stone-900 border-b border-gray-200 dark:border-gray-700 px-2 py-4"
          : ""
      }`}
    >
      <Link
        className="flex items-center no-underline text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        href="/"
      >
        <span className="flex items-center gap-1">
          <p>← back</p>
        </span>
      </Link>
    </header>
  ) : null;
}