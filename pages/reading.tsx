import { useState } from "react";
import Image from "next/image";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

type BookCategory =
  | "Business"
  | "Tech"
  | "Philosophy"
  | "Health"
  | "Writing"
  | "Games";
type BookStatus = "Reading now" | "Returning to" | "Reference" | "Read";

interface Book {
  title: string;
  author: string;
  url: string;
  category: BookCategory;
  status: BookStatus;
  note: string;
  isbn?: string;
  coverId?: string;
  hasCover?: boolean;
}

const books: Book[] = [
  {
    title: "Antifragile: Things That Gain from Disorder",
    author: "Nassim Taleb",
    url: "https://www.amazon.com/Antifragile-Things-That-Disorder-Incerto/dp/0812979680",
    category: "Philosophy",
    status: "Returning to",
    isbn: "0812979680",
    note: "Keeps reminding me to design work and life so volatility teaches instead of only hurts.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    url: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
    category: "Business",
    status: "Read",
    isbn: "0735211299",
    note: "The habit book I recommend when someone wants fewer speeches and more knobs to turn.",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    url: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692",
    category: "Business",
    status: "Returning to",
    isbn: "1455586692",
    note: "Still the clearest argument for protecting long stretches of attention.",
  },
  {
    title: "Founders at Work",
    author: "Jessica Livingston",
    url: "https://www.amazon.com/Founders-Work-Stories-Startups-Early/dp/1430210788",
    category: "Tech",
    status: "Read",
    isbn: "1430210788",
    note: "I like the early-stage stories before the mythology hardens.",
  },
  {
    title: "Hackers & Painters: Big Ideas from the Computer Age",
    author: "Paul Graham",
    url: "https://www.amazon.com/Hackers-Painters-Big-Ideas-Computer/dp/1449389554",
    category: "Tech",
    status: "Read",
    isbn: "1449389554",
    note: "A taste-shaping book for software as craft, writing, and productive oddness.",
  },
  {
    title: "Accelerate",
    author: "Nicole Forsgren",
    url: "https://www.amazon.com/s?k=Accelerate+Nicole+Forsgren",
    category: "Tech",
    status: "Reference",
    isbn: "9781942788331",
    note: "Useful evidence for the boring truth: delivery improves when teams get healthier.",
  },
  {
    title: "How to Make a Few Billion Dollars",
    author: "Brad Jacobs",
    url: "https://www.amazon.com/s?k=How+to+Make+a+Few+Billion+Dollars+Brad+Jacobs",
    category: "Business",
    status: "Reading now",
    isbn: "9798886451740",
    hasCover: false,
    note: "A current read for thinking about operators, capital allocation, and scale without romance.",
  },
  {
    title: "Hell Yeah or No",
    author: "Derek Sivers",
    url: "https://www.amazon.com/Hell-Yeah-No-whats-worth/dp/1988575001",
    category: "Business",
    status: "Returning to",
    isbn: "1988575001",
    coverId: "13176855",
    note: "Short enough to revisit when I need to choose with less committee.",
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    url: "https://www.amazon.com/Meditations-Marcus-Aurelius/dp/0812968255",
    category: "Philosophy",
    status: "Returning to",
    isbn: "0812968255",
    note: "A pocket antidote for ego, urgency, and other recurring bugs in the human stack.",
  },
  {
    title: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: "Douglas R. Hofstadter",
    url: "https://www.amazon.com/s?k=Godel+Escher+Bach+An+Eternal+Golden+Braid",
    category: "Philosophy",
    status: "Read",
    isbn: "9780465026562",
    note: "A beautiful, strange book for remembering that computing sits near art and consciousness.",
  },
  {
    title: "The Lessons of History",
    author: "Will Durant and Ariel Durant",
    url: "https://www.amazon.com/s?k=The+Lessons+of+History+Will+Durant",
    category: "Philosophy",
    status: "Read",
    isbn: "9781439149959",
    note: "Small, blunt chapters that make current events feel less novel.",
  },
  {
    title: "Show Your Work",
    author: "Austin Kleon",
    url: "https://www.amazon.com/Show-Your-Work-Austin-Kleon/dp/076117897X",
    category: "Writing",
    status: "Reference",
    isbn: "076117897X",
    note: "A reminder that generosity and visibility are part of the work, not decorations.",
  },
  {
    title: "Skin in the Game",
    author: "Nassim Taleb",
    url: "https://www.amazon.com/Skin-Game-Hidden-Asymmetries-Daily/dp/0425284646",
    category: "Philosophy",
    status: "Returning to",
    isbn: "0425284646",
    note: "Keeps me allergic to advice detached from consequences.",
  },
  {
    title: "Starting Strength",
    author: "Mark Rippetoe",
    url: "https://www.amazon.com/Starting-Strength-Basic-Barbell-Training/dp/0982522738",
    category: "Health",
    status: "Reference",
    isbn: "0982522738",
    note: "Reference material for treating strength like a learnable skill.",
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    url: "https://www.amazon.com/s?k=The+7+Habits+of+Highly+Effective+People+Stephen+R.+Covey",
    category: "Business",
    status: "Read",
    isbn: "9781982137274",
    note: "A little corporate in places, but the personal responsibility core still lands.",
  },
  {
    title: "The 5 Types of Wealth",
    author: "Sahil Bloom",
    url: "https://www.amazon.com/5-Types-Wealth-Sahil-Bloom/dp/0593983521",
    category: "Business",
    status: "Reading now",
    isbn: "9780593723180",
    note: "Currently reading for a broader definition of success than just money or output.",
  },
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    url: "https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness/dp/1544514212",
    category: "Philosophy",
    status: "Returning to",
    isbn: "1544514212",
    note: "The book I reach for when I need clean thinking on leverage, judgment, and happiness.",
  },
  {
    title: "The Bed of Procrustes: Philosophical and Practical Aphorisms",
    author: "Nassim Taleb",
    url: "https://www.amazon.com/Bed-Procrustes-Philosophical-Practical-Aphorisms/dp/0812982401",
    category: "Philosophy",
    status: "Read",
    isbn: "0812982401",
    note: "Taleb at his sharpest: aphorisms that reward a slow second pass.",
  },
  {
    title: "The Coding Career Handbook",
    author: "Shawn 'Swyx' Wang",
    url: "https://www.amazon.com/Coding-Career-Handbook-Interviews-Promotions/dp/B08J4CPVK3",
    category: "Tech",
    status: "Reference",
    isbn: "B08J4CPVK3",
    hasCover: false,
    note: "A practical reference for career moves, interviews, and becoming easier to trust.",
  },
  {
    title: "The Great Mental Models: General Thinking Concepts",
    author: "Shane Parrish",
    url: "https://www.amazon.com/Great-Mental-Models-General-Concepts/dp/1999449002",
    category: "Business",
    status: "Reference",
    isbn: "1999449002",
    note: "Useful when I need names for thinking tools I already half-use.",
  },
  {
    title: "The Millionaire Fastlane",
    author: "MJ DeMarco",
    url: "https://www.amazon.com/s?k=The+Millionaire+Fastlane+MJ+DeMarco",
    category: "Business",
    status: "Read",
    isbn: "9780984358106",
    note: "Not subtle, but it pushes hard on ownership, speed, and agency.",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    url: "https://www.amazon.com/Psychology-Money-hardback-Timeless-happiness/dp/0857199099",
    category: "Business",
    status: "Read",
    isbn: "0857199099",
    coverId: "10389354",
    note: "A calm reminder that money behavior is mostly human behavior.",
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferriss",
    url: "https://www.amazon.com/Tools-Titans-Billionaires-World-Class-Performers/dp/1328683788",
    category: "Business",
    status: "Reference",
    isbn: "1328683788",
    note: "A messy cabinet of tactics; I skim it when I want prompts, not doctrine.",
  },
  {
    title: "You Can Just Do Things",
    author: "Jay Yang",
    url: "https://www.amazon.com/s?k=You+Can+Just+Do+Things+Jay+Yang",
    category: "Business",
    status: "Reading now",
    isbn: "9798992459203",
    hasCover: false,
    note: "A current reminder to keep agency close to the surface.",
  },
  {
    title: "How to Win at Chess: The Ultimate Guide for Beginners and Beyond",
    author: "Levy Rozman",
    url: "https://www.amazon.com/s?k=How+to+Win+at+Chess+Levy+Rozman",
    category: "Games",
    status: "Reference",
    isbn: "9781984862075",
    note: "A friendly reference for making chess less mysterious.",
  },
  {
    title: "Working in Public",
    author: "Nadia Eghbal",
    url: "https://www.amazon.com/Working-Public-Making-Maintenance-Software/dp/0578675862",
    category: "Tech",
    status: "Read",
    isbn: "0578675862",
    note: "Important for understanding why open source maintainers burn out and what healthier stewardship asks for.",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
    category: "Business",
    status: "Read",
    isbn: "0804139296",
    note: "I keep it around for the monopoly, secrets, and contrarian thinking chapters.",
  },
];

const statusOrder: BookStatus[] = [
  "Reading now",
  "Returning to",
  "Reference",
  "Read",
];

const statusDescriptions: Record<BookStatus, string> = {
  "Reading now": "Open loops and active obsessions.",
  "Returning to": "Books I reread because they keep paying rent.",
  Reference: "Manuals, field guides, and books I dip into as needed.",
  Read: "Finished shelves that still left a mark.",
};

const statusIds: Record<BookStatus, string> = {
  "Reading now": "reading-now",
  "Returning to": "returning-to",
  Reference: "reference",
  Read: "read",
};

const getBookInitials = (title: string) =>
  title
    .replace(/^(the|a|an)\s+/i, "")
    .split(/\s+/)
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const BookCoverFallback = ({ book }: { book: Book }) => (
  <div
    aria-hidden="true"
    className="flex h-full flex-col justify-between bg-slate-100 p-3 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
  >
    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
      {book.category}
    </span>
    <span className="text-2xl font-bold leading-none">
      {getBookInitials(book.title)}
    </span>
    <span className="h-1 w-8 bg-blue-700 dark:bg-blue-300" />
  </div>
);

const BookCard = ({ book }: { book: Book }) => {
  const [imageError, setImageError] = useState(false);
  const coverUrl =
    book.hasCover === false
      ? null
      : book.coverId
        ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
        : book.isbn
          ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`
          : null;

  return (
    <ExternalLink href={book.url} styles="!no-underline">
      <div className="group border-b border-gray-200 py-5 transition-colors last:border-0 hover:bg-gray-50 dark:border-slate-700 dark:hover:bg-slate-800/70 sm:px-4">
        <div className="flex gap-5">
          <div className="flex-shrink-0">
            <div className="relative h-28 w-20 overflow-hidden rounded border border-gray-200 bg-gray-100 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              {coverUrl && !imageError ? (
                <Image
                  src={coverUrl}
                  alt={`${book.title} cover`}
                  fill
                  className="object-cover"
                  sizes="80px"
                  onLoad={(event) => {
                    const image = event.currentTarget;
                    if (image.naturalWidth <= 1 || image.naturalHeight <= 1) {
                      setImageError(true);
                    }
                  }}
                  onError={() => setImageError(true)}
                />
              ) : (
                <BookCoverFallback book={book} />
              )}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start gap-x-3 gap-y-2">
              <h3 className="text-base font-semibold leading-tight text-slate-900 transition-colors group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">
                {book.title}
              </h3>
              <span className="rounded-full border border-gray-200 px-2 py-0.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-400">
                {book.category}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              by {book.author}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {book.note}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 dark:text-blue-300">
              View book
              <ExternalLinkIcon className="h-3.5 w-3.5 opacity-70 transition-opacity group-hover:opacity-100" />
            </span>
          </div>
        </div>
      </div>
    </ExternalLink>
  );
};

const StatusSection = ({
  status,
  books,
}: {
  status: BookStatus;
  books: Book[];
}) => (
  <section id={statusIds[status]} className="w-full scroll-mt-24">
    <div className="border-b border-gray-200 pb-3 dark:border-slate-700">
      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-200">
        {status} ({books.length})
      </h2>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        {statusDescriptions[status]}
      </p>
    </div>
    <div className="w-full">
      {books.map((book) => (
        <BookCard key={book.isbn || book.title} book={book} />
      ))}
    </div>
  </section>
);

export default function Reading() {
  const booksByStatus = statusOrder.map((status) => ({
    status,
    books: books.filter((book) => book.status === status),
  }));

  return (
    <Container
      title="Dennis Kigen - Reading"
      description="Books I am reading, rereading, referencing, and keeping nearby."
    >
      <article className="flex w-full flex-col items-start justify-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-200">
          Reading
        </h1>
        <p className="mt-8">
          A living reading page rather than a trophy shelf. These are books I am
          reading, rereading, referencing, or keeping nearby because they shape
          how I think about software, work, health, money, and agency.
        </p>

        <div className="mt-8 grid w-full grid-cols-2 gap-3 text-sm sm:grid-cols-4">
          {booksByStatus.map(({ status, books }) => (
            <a
              href={`#${statusIds[status]}`}
              key={status}
              aria-label={`Jump to ${status}`}
              className="border border-gray-200 p-3 no-underline transition-colors hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800/70 dark:focus-visible:ring-offset-slate-900"
            >
              <p className="font-semibold text-slate-900 dark:text-slate-200">
                {books.length}
              </p>
              <p className="mt-1 text-slate-600 dark:text-slate-400">
                {status}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 w-full space-y-12">
          {booksByStatus.map(({ status, books }) => (
            <StatusSection key={status} status={status} books={books} />
          ))}
        </div>
      </article>
    </Container>
  );
}
