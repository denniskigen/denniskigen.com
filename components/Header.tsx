import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function Header() {
  const { pathname } = useRouter();
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

  return pathname !== "/" ? (
    <header
      className={`h-[37.5px] flex items-center justify-between mb-10 transition-all duration-200 ${
        isScrolled
          ? "sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 px-2 py-4"
          : ""
      }`}
    >
      <Link
        className="inline-flex gap-2 items-center font-medium text-blue-700 transition-colors hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
        href="/"
      >
        <ArrowLeftIcon width={18} height={18} />
        <span>Back</span>
      </Link>
    </header>
  ) : null;
}
