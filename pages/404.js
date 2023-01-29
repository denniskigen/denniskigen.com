import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";

export default function NotFound() {
  return (
    <Container title="404 – Dennis Kigen">
      <div className="mx-auto flex max-w-2xl flex-col items-start justify-center">
        <h1 className="my-1 font-medium text-lg">404</h1>
        <h2 className="my-1 font-medium text-lg">Whoa there, Cowboy!</h2>
        <div className="my-8">
          <Image
            src="/dance-off-cowboy.gif"
            alt="dancing cowboy"
            width="400"
            height="400"
          />
        </div>
        <p>
          You seem to have lost your way. How's about you click that darned big
          ol button below and skeddadle on home.
        </p>
      </div>
      <div className="flex items-center mt-12">
        <svg
          viewBox="0 0 3 6"
          className="mr-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
        >
          <path
            d="M3 0L0 3L3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
