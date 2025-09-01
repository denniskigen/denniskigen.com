import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

interface ContainerProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
}

export default function Container({
  children,
  title,
  description,
  image,
  type,
  date,
  ...customMeta
}: ContainerProps) {
  const router = useRouter();
  const meta = {
    title: title || "Dennis Kigen",
    description: description || `Software Craftsman. Frontend Engineer.`,
    type: type || "website",
    image,
    date,
    ...customMeta,
  };

  return (
    <div className="mx-auto min-h-screen antialiased bg-white dark:bg-stone-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://denniskigen.com${router.asPath}`} />
        <link rel="canonical" href={`https://denniskigen.com${router.asPath}`} />
        <link rel="icon" type="image/png" href="favicon.ico?v=1" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg?v=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Dennis Kigen" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <Navbar />
      <main className="flex flex-col justify-center px-8 py-16 mx-auto max-w-3xl leading-7 xl:py-20 text-slate-900 dark:text-slate-200">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}