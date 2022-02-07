import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";

export default function NotFound() {
  return (
    <Container title="404 – Dennis Kigen">
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Whoa there, Cowboy!
        </h1>
        <div className="m-auto my-8">
          <Image
            src="/dance-off-cowboy.gif"
            alt="dancing cowboy"
            width="400"
            height="400"
          />
        </div>
        <p className="mb-8 text-slate-600 dark:text-slate-400">
          You seem to have lost your way there. How's about you click that
          darned big ol button down there and skeddadle on home.
        </p>
        <Link href="/">
          <a className="mx-auto w-64 rounded-md bg-gray-200 p-1 text-center font-bold text-black dark:bg-gray-800 dark:text-white sm:p-4">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
