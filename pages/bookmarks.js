import Link from "next/link";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function Bookmarks() {
  return (
    <Container
      title="Dennis Kigen - Bookmarks"
    >
      <article className="flex flex-col items-start justify-center w-full">
        <h1 className="text-2xl font-bold">Bookmarks</h1>
        <p className="mt-8">A bunch of curated links I've collected on my journeys across the interwebs.</p>
        <div className="mt-6 mb-16">
          <ul className="mt-4 space-y-6 list-none">
            <li className="space-y-2">
              <ExternalLink href="https://nav.al/rich">How to Get Rich</ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="http://www.paulgraham.com/love.html">How to Do What You Love</ExternalLink>
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
              <ExternalLink href="https://brianlovin.com/writing/quality-software">Quality Software</ExternalLink>
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
              <ExternalLink href="https://www.arcana.computer/industry/being-productive">Being Productive</ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://kentcdodds.com/blog/write-fewer-longer-tests">
                Write Fewer, Longer Tests
              </ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://www.bowtiedphys.io/p/foundational-health-protocol">Foundational Health Protocol</ExternalLink>
            </li>
             <li className="space-y-2">
              <ExternalLink href="https://www.bowtiedphys.io/p/btps-health-value-tool-stack">Health Value Tool Stack</ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://blogmaverick.com/2012/03/18/dont-follow-your-passion-follow-your-effort/">Don't follow Your Passion, Follow Your Effort</ExternalLink>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://wsparchive.substack.com/p/energy-is-passion-original">Energy is Passion</ExternalLink>
            </li>
          </ul>
        </div>
      </article>
    </Container>
  );
}
