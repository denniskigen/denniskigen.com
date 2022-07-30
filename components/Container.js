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
    <div className="min-h-screen mx-auto dark:bg-subtle-dark">
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
      <main className="mx-auto flex max-w-3xl flex-col justify-center px-8 py-16 antialiased leading-7 text-very-grey dark:text-very-light">
        {children}
      </main>
    </div>
  );
}
