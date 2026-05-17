import Link from "next/link";
import Container from "../components/Container";

interface Note {
  title: string;
  label: string;
  body: string;
}

const notes: Note[] = [
  {
    title: "Health software should feel calm",
    label: "Health software",
    body: "Clinical tools carry pressure from the room into the interface. The best work is often quiet: fewer surprises, clearer states, and paths that let someone recover when the day is not going perfectly.",
  },
  {
    title: "Docs are part of the product",
    label: "Developer experience",
    body: "Documentation is not just a support artifact. Good docs lower the cost of curiosity, help contributors make their first useful change, and quietly encode how a team thinks.",
  },
  {
    title: "Personal sites should leave fingerprints",
    label: "Portfolio",
    body: "A portfolio does not need to become a pitch deck. I like personal sites that show taste through choices: what someone reads, what they return to, what they build, and what they refuse to over-explain.",
  },
];

export default function Notes() {
  return (
    <Container
      title="Dennis Kigen - Notes"
      description="Short notes on health software, developer experience, craft, and personal work."
    >
      <article className="flex w-full flex-col items-start justify-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-200">
          Notes
        </h1>
        <p className="mt-8">
          Short, unfinished-enough thoughts on software, craft, health systems,
          and making personal work feel like it came from a person.
        </p>

        <div className="mt-10 w-full space-y-10">
          {notes.map((note) => (
            <section
              key={note.title}
              className="border-b border-gray-200 pb-8 last:border-0 dark:border-slate-700"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                {note.label}
              </p>
              <h2 className="mt-3 text-lg font-bold text-slate-900 dark:text-slate-100">
                {note.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                {note.body}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-6 text-base text-slate-700 dark:text-slate-300">
          Longer writing can wait. For now, the useful trail is in{" "}
          <Link
            className="font-medium underline decoration-slate-500 underline-offset-[6px] text-slate-900 dark:text-white"
            href="/reading"
          >
            reading
          </Link>{" "}
          and{" "}
          <Link
            className="font-medium underline decoration-slate-500 underline-offset-[6px] text-slate-900 dark:text-white"
            href="/bookmarks"
          >
            bookmarks
          </Link>
          .
        </p>
      </article>
    </Container>
  );
}
