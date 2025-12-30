import Container from "../components/Container";

export default function Blog() {
  return (
    <Container
      title="Dennis Kigen - Blog"
      description="Short essays and notes on software, craft, and building."
    >
      <article className="flex flex-col justify-center items-start w-full">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-200">Blog</h1>
        <p className="mt-8">Short essays and notes on craft, software, and life.</p>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Writing in progress.</p>
      </article>
    </Container>
  );
}
