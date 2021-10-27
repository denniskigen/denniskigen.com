import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";

export default function NotFound() {
  return (
    <Container title="404 – Dennis Kigen">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
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
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          You seem to have lost your way there. How's about you click that
          darned big ol button down there and skeddadle on home.
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
