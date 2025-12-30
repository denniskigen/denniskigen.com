import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

interface Bookmark {
  title: string;
  url: string;
}

const bookmarks: Bookmark[] = [
  {
    title: "103 Bits of Advice I Wish I Had Known",
    url: "https://kk.org/thetechnium/103-bits-of-advice-i-wish-i-had-known/",
  },
  { title: "Being Productive", url: "https://www.arcana.computer/industry/being-productive" },
  {
    title: "Don't End The Week With Nothing",
    url: "https://training.kalzumeus.com/newsletters/archive/do-not-end-the-week-with-nothing",
  },
  {
    title: "Don't follow Your Passion, Follow Your Effort",
    url: "https://blogmaverick.com/2012/03/18/dont-follow-your-passion-follow-your-effort/",
  },
  {
    title: "Embrace Asynchronous Communication For Remote Work",
    url: "https://about.gitlab.com/company/culture/all-remote/asynchronous/",
  },
  { title: "Energy is Passion", url: "https://wsparchive.substack.com/p/energy-is-passion-original" },
  { title: "Foundational Health Protocol", url: "https://www.bowtiedphys.io/p/foundational-health-protocol" },
  { title: "Health Value Tool Stack", url: "https://www.bowtiedphys.io/p/btps-health-value-tool-stack" },
  { title: "High Agency", url: "https://www.highagency.com/" },
  { title: "How to Do What You Love", url: "http://www.paulgraham.com/love.html" },
  { title: "How to Get Rich", url: "https://nav.al/rich" },
  { title: "Quality Software", url: "https://brianlovin.com/writing/quality-software" },
  { title: "Salary Negotiation", url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/" },
  { title: "What Makes a Great Developer Experience", url: "https://leerob.io/blog/developer-experience-examples" },
  { title: "Write Fewer, Longer Tests", url: "https://kentcdodds.com/blog/write-fewer-longer-tests" },
  { title: "Writing Resilient Components", url: "https://overreacted.io/writing-resilient-components/" },
];

const BookmarkLink = ({ bookmark }: { bookmark: Bookmark }) => (
  <ExternalLink
    href={bookmark.url}
    styles="!no-underline text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
  >
    <span className="flex items-center gap-1 py-1.5 font-semibold hover:underline underline-offset-4">
      {bookmark.title}
      <ExternalLinkIcon />
    </span>
  </ExternalLink>
);

export default function Bookmarks() {
  return (
    <Container
      title="Dennis Kigen - Bookmarks"
      description="A curated list of links on software, productivity, and thinking."
    >
      <article className="flex flex-col justify-center items-start w-full">
        <h1 className="text-2xl font-bold">Bookmarks</h1>
        <p className="mt-8">A curated list of links I{"'"}ve collected around the web.</p>
        <div className="mt-6 mb-16">
          <div className="mt-4 space-y-4">
            {bookmarks.map((bookmark) => (
              <div key={bookmark.title}>
                <BookmarkLink bookmark={bookmark} />
              </div>
            ))}
          </div>
        </div>
      </article>
    </Container>
  );
}
