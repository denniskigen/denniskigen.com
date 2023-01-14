import Link from "next/link";
import Container from "../components/Container";

export default function Blog() {
  return (
    <Container title="Dennis Kigen - Blog">
      <article className="flex w-full flex-col items-start justify-center">
        <h1 className="text-2xl font-semibold text-neutral-600 dark:text-neutral-400">
          Blog
        </h1>
        <p className="mt-8">A collection of my writings on the interwebs.</p>
      </article>
      <div className="flex items-center mt-12">
        <svg
          className="mx-1"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <Link
          className="underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-200"
          href="/"
        >
          Return home
        </Link>
      </div>
    </Container>
  );
}
