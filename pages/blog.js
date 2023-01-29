import Link from "next/link";
import Container from "../components/Container";

export default function Blog() {
  return (
    <Container title="Dennis Kigen - Blog">
      <article className="flex w-full flex-col items-start justify-center">
        <h1 className="text-lg text-slate-900 dark:text-slate-200 font-bold">
          Blog
        </h1>
        <p className="mt-8">A collection of my writings on the interwebs.</p>
      </article>
      <div className="flex items-center mt-12">
        <svg
          viewBox="0 0 3 6"
          class="mr-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
        >
          <path
            d="M3 0L0 3L3 6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <Link
          className="text-slate-700 font-semibold flex items-center dark:text-slate-200"
          href="/"
        >
          Return home
        </Link>
      </div>
    </Container>
  );
}
