import Link from "next/link";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function Bookmarks() {
  return (
    <Container
      title="
    Dennis Kigen - Bookmarks"
    >
      <article className="flex w-full flex-col items-start justify-center">
        <h1 className="text-2xl font-semibold text-neutral-600 dark:text-neutral-400">
          Bookmarks
        </h1>
        <p className="mt-8">
          A bunch of curated links I've collected on my journeys across the
          interwebs.
        </p>
        <div className="mt-6 mb-16">
          <ul className="mt-4 list-none space-y-6">
            <li className="space-y-2">
              <ExternalLink href="https://nav.al/rich">
                How to Get Rich
              </ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="http://www.paulgraham.com/love.html">
                How to Do What You Love
              </ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://kk.org/thetechnium/103-bits-of-advice-i-wish-i-had-known/">
                103 Bits of Advice I Wish I Had Known
              </ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://leerob.io/blog/developer-experience-examples">
                What Makes a Great Developer Experience
              </ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://training.kalzumeus.com/newsletters/archive/do-not-end-the-week-with-nothing">
                Don't End The Week With Nothing
              </ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://www.kalzumeus.com/2012/01/23/salary-negotiation/">
                Salary Negotiation
              </ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://brianlovin.com/writing/quality-software">
                Quality Software
              </ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://overreacted.io/writing-resilient-components/">
                Writing Resilient Components
              </ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://about.gitlab.com/company/culture/all-remote/asynchronous/">
                Embrace Asynchronous Communication For Remote Work
              </ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://www.arcana.computer/industry/being-productive">
                Being Productive
              </ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://kentcdodds.com/blog/write-fewer-longer-tests">
                Write Fewer, Longer Tests
              </ExternalLink>
            </li>
          </ul>
        </div>
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
          <Link href="/">
            <a className="underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-200">
              Return home
            </a>
          </Link>
        </div>
      </article>
    </Container>
  );
}
