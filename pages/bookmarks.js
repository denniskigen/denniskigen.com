import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function Bookmarks() {
  return (
    <Container
      title="
    Dennis Kigen - Bookmarks"
    >
      <article className="flex w-full flex-col items-start justify-center">
        <h1 className="font-medium text-neutral-600 dark:text-neutral-400">
          Bookmarks
        </h1>
        <p className="mt-8">
          A bunch of links I've collected on my journeys across the interwebs.
        </p>
        <div className="mt-6">
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
          </ul>
        </div>
      </article>
    </Container>
  );
}
