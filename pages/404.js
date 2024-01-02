import Image from "next/image";
import Container from "../components/Container";

export default function NotFound() {
  return (
    <Container title="404 – Dennis Kigen">
      <div className="flex flex-col items-start justify-center mx-auto">
        <h1 className="my-1 text-lg font-medium">404</h1>
        <h2 className="my-1 text-lg font-medium">Whoa there, Cowboy!</h2>
        <div className="my-8">
          <Image src="/dance-off-cowboy.gif" alt="dancing cowboy" width="400" height="400" />
        </div>
        <p>
          You seem to have lost your way. How's about you click that darned big ol button below and skeddadle on home.
        </p>
      </div>
    </Container>
  );
}
