import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        data-active={scrolled}
        className="flex sticky top-0 right-0 left-0 z-10 justify-end items-center px-8 h-16 opacity-95 backdrop-blur-sm"
      >
        <button
          type="button"
          aria-label={
            mounted
              ? isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
              : "Toggle theme"
          }
          aria-pressed={mounted ? isDark : undefined}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:bg-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus-visible:ring-offset-slate-900"
          data-state={mounted ? (isDark ? "dark" : "light") : undefined}
          onClick={() => {
            if (!mounted) return;
            setTheme(isDark ? "light" : "dark");
          }}
        >
          {mounted ? (
            <span
              key={isDark ? "dark" : "light"}
              className="site-theme-icon inline-flex"
            >
              {isDark ? (
                <SunIcon width={20} height={20} />
              ) : (
                <MoonIcon width={20} height={20} />
              )}
            </span>
          ) : (
            <span className="text-[10px] font-medium">Theme</span>
          )}
        </button>
      </div>
    </>
  );
}
