import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";

export default function NotFound() {
  return (
    <Container title="404 – Dennis Kigen">
      <div className="mx-auto flex max-w-2xl flex-col items-start justify-center">
        <h1 className="my-1 font-medium text-lg">404</h1>
        <h1 className="my-1 font-medium text-lg">Whoa there, Cowboy!</h1>
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
          className="mx-2"
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
        <Link href="/">
          <a className="underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-200">
            Return home
          </a>
        </Link>
      </div>
    </Container>
  );
}
