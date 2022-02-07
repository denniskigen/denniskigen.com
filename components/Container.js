import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={`${
          isActive
            ? "bg-gray-200 font-semibold text-slate-800 dark:bg-gray-900 dark:text-slate-200 dark:hover:bg-gray-900 dark:hover:text-slate-400"
            : "font-normal text-slate-600 dark:text-slate-400"
        } inline-block rounded-lg p-1 transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2`}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Dennis Kigen - Programmer. Nerd",
    description: `Programmer, JavaScript enthusiast, nerd.`,
    type: "website",
    ...customMeta,
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://denniskigen.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://denniskigen.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Dennis Kigen" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="mx-auto flex max-w-3xl flex-col justify-center px-8">
        <nav className="relative mx-auto flex w-full items-center justify-between border-gray-200 bg-opacity-60 pt-8 pb-8 text-slate-900 dark:border-gray-700 dark:text-slate-100 sm:pb-16">
          <span className="hidden font-bold uppercase tracking-wider sm:inline-block">
            <NextLink href="/">
              <a>Dennis Kigen</a>
            </NextLink>
          </span>
          <div className="ml-[-0.60rem] space-x-2">
            <NavItem href="/" text="Home" />
            <NavItem href="/uses" text="Uses" />
            <NavItem href="/bookshelf" text="Bookshelf" />
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="flex h-10 w-10 flex-row items-center justify-center rounded bg-gray-200 p-3 dark:bg-gray-800"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-4 w-4 text-slate-800 dark:text-slate-200"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main className="mx-auto flex max-w-3xl flex-col justify-center bg-white px-8 dark:bg-black">
        {children}
      </main>
    </div>
  );
}
