import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";

export default function NotFound() {
  return (
    <Container title="404 – Dennis Kigen" description="Page not found.">
      <div className="flex flex-col justify-center items-start mx-auto">
        <h1 className="my-1 text-2xl font-bold">404</h1>
        <h2 className="my-1 text-lg font-medium">Whoa there, Cowboy!</h2>
        <div className="my-8">
          <Image
            src="/dance-off-cowboy.webp"
            alt="dancing cowboy"
            width={400}
            height={400}
            sizes="400px"
            priority={false}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRnoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKhAACAAFAFwlOF0AAP4AAA=="
          />
        </div>
        <p>
          You seem to have lost your way. How{"'"}s about you click that darned big ol{"'"} button below and skeddadle
          on home.
        </p>
        <Link
          className="inline-flex items-center px-4 py-2 mt-6 text-sm font-medium rounded-md border border-slate-300 text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          href="/"
        >
          Back to home
        </Link>
      </div>
    </Container>
  );
}
