import Link from "next/link";
import Container from "../components/Container";

export default function Blog() {
  return (
    <Container title="Dennis Kigen - Blog">
      <article className="flex flex-col items-start justify-center w-full">
        <h1 className="text-lg font-bold text-slate-900 dark:text-slate-200">Blog</h1>
        <p className="mt-8">A collection of my writings on the interwebs.</p>
      </article>
    </Container>
  );
}
