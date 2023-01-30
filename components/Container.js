import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Dennis Kigen",
    description: `Software Craftsman. Frontend Engineer.`,
    type: "website",
    ...customMeta,
  };

  return (
    <div className="min-h-screen mx-auto antialiased bg-white dark:bg-slate-900">
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
        <link rel="icon" type="image/png" href="favicon.ico?v=1" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg?v=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Dennis Kigen" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      <main className="mx-auto flex max-w-3xl flex-col justify-center px-8 py-16 xl:py-20 text-slate-900 dark:text-slate-200 leading-7">
        {children}
      </main>
    </div>
  );
}
