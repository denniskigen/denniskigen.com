import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Dennis Kigen",
    description: `Frontend Engineer, JavaScript enthusiast, nerd.`,
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
      <main className="mx-auto flex max-w-3xl flex-col justify-center px-8 py-16 xl:py-20 leading-7 text-slate-900 dark:text-slate-200">
        {children}
      </main>
    </div>
  );
}
