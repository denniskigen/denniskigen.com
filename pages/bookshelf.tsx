import { useState } from "react";
import Image from "next/image";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

interface Book {
  title: string;
  author: string;
  url: string;
  category: "Business" | "Tech" | "Philosophy" | "Health" | "Writing";
  isbn?: string;
  coverId?: string;
  description?: string;
}

const books: Book[] = [
  {
    title: "Antifragile: Things That Gain from Disorder",
    author: "Nassim Taleb",
    url: "https://www.amazon.com/Antifragile-Things-That-Disorder-Incerto/dp/0812979680",
    category: "Philosophy",
    isbn: "0812979680",
    description: "How to benefit from chaos, uncertainty, and volatility rather than just survive them.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    url: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
    category: "Business",
    isbn: "0735211299",
    description: "The surprising power of small changes and how tiny habits compound into remarkable results.",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    url: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692",
    category: "Business",
    isbn: "1455586692",
    description: "Rules for focused success in a distracted world and the cognitive advantages of deep focus.",
  },
  {
    title: "Founders at Work",
    author: "Jessica Livingston",
    url: "https://www.amazon.com/Founders-Work-Stories-Startups-Early/dp/1430210788",
    category: "Tech",
    isbn: "1430210788",
  },
  {
    title: "Hackers & Painters: Big Ideas from the Computer Age",
    author: "Paul Graham",
    url: "https://www.amazon.com/Hackers-Painters-Big-Ideas-Computer/dp/1449389554",
    category: "Tech",
    isbn: "1449389554",
  },
  {
    title: "Accelerate",
    author: "Nicole Forsgren",
    url: "https://www.amazon.com/s?k=Accelerate+Nicole+Forsgren",
    category: "Tech",
    isbn: "9781942788331",
  },
  {
    title: "How to Make a Few Billion Dollars",
    author: "Brad Jacobs",
    url: "https://www.amazon.com/s?k=How+to+Make+a+Few+Billion+Dollars+Brad+Jacobs",
    category: "Business",
    isbn: "9798886451740",
  },
  {
    title: "Hell Yeah or No",
    author: "Derek Sivers",
    url: "https://www.amazon.com/Hell-Yeah-No-whats-worth/dp/1988575001",
    category: "Business",
    isbn: "1988575001",
    coverId: "13176855",
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    url: "https://www.amazon.com/Meditations-Marcus-Aurelius/dp/0812968255",
    category: "Philosophy",
    isbn: "0812968255",
    description: "Personal reflections on Stoic philosophy and practical wisdom for living a virtuous life.",
  },
  {
    title: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: "Douglas R. Hofstadter",
    url: "https://www.amazon.com/s?k=Godel+Escher+Bach+An+Eternal+Golden+Braid",
    category: "Philosophy",
    isbn: "9780465026562",
  },
  {
    title: "The Lessons of History",
    author: "Will Durant and Ariel Durant",
    url: "https://www.amazon.com/s?k=The+Lessons+of+History+Will+Durant",
    category: "Philosophy",
    isbn: "9781439149959",
  },
  {
    title: "Show Your Work",
    author: "Austin Kleon",
    url: "https://www.amazon.com/Show-Your-Work-Austin-Kleon/dp/076117897X",
    category: "Writing",
    isbn: "076117897X",
    description: "How to share your creative process and build an audience by being generous with your work.",
  },
  {
    title: "Skin in the Game",
    author: "Nassim Taleb",
    url: "https://www.amazon.com/Skin-Game-Hidden-Asymmetries-Daily/dp/0425284646",
    category: "Philosophy",
    isbn: "0425284646",
    description:
      "The hidden asymmetries in daily life and why those who take risks should have a stake in the outcome.",
  },
  {
    title: "Starting Strength",
    author: "Mark Rippetoe",
    url: "https://www.amazon.com/Starting-Strength-Basic-Barbell-Training/dp/0982522738",
    category: "Health",
    isbn: "0982522738",
    description: "The definitive guide to basic barbell training and building foundational strength.",
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    url: "https://www.amazon.com/s?k=The+7+Habits+of+Highly+Effective+People+Stephen+R.+Covey",
    category: "Business",
    isbn: "9781982137274",
  },
  {
    title: "The 5 Types of Wealth",
    author: "Sahil Bloom",
    url: "https://www.amazon.com/5-Types-Wealth-Sahil-Bloom/dp/0593983521",
    category: "Business",
    isbn: "9780593723180",
    description: "A framework for building true wealth across money, time, social, physical, and mental dimensions.",
  },
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    url: "https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness/dp/1544514212",
    category: "Philosophy",
    isbn: "1544514212",
  },
  {
    title: "The Bed of Procrustes: Philosophical and Practical Aphorisms",
    author: "Nassim Taleb",
    url: "https://www.amazon.com/Bed-Procrustes-Philosophical-Practical-Aphorisms/dp/0812982401",
    category: "Philosophy",
    isbn: "0812982401",
  },
  {
    title: "The Coding Career Handbook",
    author: "Shawn 'Swyx' Wang",
    url: "https://www.amazon.com/Coding-Career-Handbook-Interviews-Promotions/dp/B08J4CPVK3",
    category: "Tech",
    isbn: "B08J4CPVK3",
  },
  {
    title: "The Great Mental Models: General Thinking Concepts",
    author: "Shane Parrish",
    url: "https://www.amazon.com/Great-Mental-Models-General-Concepts/dp/1999449002",
    category: "Business",
    isbn: "1999449002",
    description: "Essential thinking tools for better decision-making and understanding complex systems.",
  },
  {
    title: "The Millionaire Fastlane",
    author: "MJ DeMarco",
    url: "https://www.amazon.com/s?k=The+Millionaire+Fastlane+MJ+DeMarco",
    category: "Business",
    isbn: "9780984358106",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    url: "https://www.amazon.com/Psychology-Money-hardback-Timeless-happiness/dp/0857199099",
    category: "Business",
    isbn: "0857199099",
    coverId: "10389354",
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferriss",
    url: "https://www.amazon.com/Tools-Titans-Billionaires-World-Class-Performers/dp/1328683788",
    category: "Business",
    isbn: "1328683788",
  },
  {
    title: "You Can Just Do Things",
    author: "Jay Yang",
    url: "https://www.amazon.com/s?k=You+Can+Just+Do+Things+Jay+Yang",
    category: "Business",
    isbn: "9798992459203",
  },
  {
    title: "How to Win at Chess: The Ultimate Guide for Beginners and Beyond",
    author: "Levy Rozman",
    url: "https://www.amazon.com/s?k=How+to+Win+at+Chess+Levy+Rozman",
    category: "Philosophy",
    isbn: "9781984862075",
  },
  {
    title: "Working in Public",
    author: "Nadia Eghbal",
    url: "https://www.amazon.com/Working-Public-Making-Maintenance-Software/dp/0578675862",
    category: "Tech",
    isbn: "0578675862",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
    category: "Business",
    isbn: "0804139296",
    description: "How to build companies that create new things and go from 0 to 1, not 1 to n.",
  },
];

const BookCard = ({ book, isFirst, isLast }: { book: Book; isFirst: boolean; isLast: boolean }) => {
  const coverUrl = book.coverId
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
    : book.isbn
      ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`
      : null;
  const [imageError, setImageError] = useState(false);

  // Determine border classes based on position
  const borderClasses = isLast ? "border-0" : "border-b border-gray-200 dark:border-slate-700";

  return (
    <ExternalLink href={book.url} styles="!no-underline">
      <div
        className={`p-6 bg-white transition-all cursor-pointer group dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 ${borderClasses}`}
      >
        <div className="flex gap-6">
          {/* Book Cover */}
          <div className="flex-shrink-0">
            <div className="overflow-hidden relative w-20 h-28 bg-gray-100 rounded-lg shadow-md dark:bg-slate-700">
              {coverUrl && !imageError ? (
                <Image
                  src={coverUrl}
                  alt={`${book.title} cover`}
                  fill
                  className="object-cover rounded-none"
                  sizes="80px"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex justify-center items-center h-full text-gray-400 dark:text-slate-500">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Book Info */}
          <div className="flex-1 min-w-0">
            <h3 className="mb-2 text-base font-semibold leading-tight transition-colors text-slate-900 dark:text-slate-100">
              {book.title}
            </h3>
            <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">by {book.author}</p>
            {book.description && (
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{book.description}</p>
            )}
          </div>
        </div>
      </div>
    </ExternalLink>
  );
};

const CategorySection = ({ category, books }: { category: string; books: Book[] }) => (
  <div className="mb-10">
    <h2 className="pb-2 mb-6 text-lg font-bold border-b border-gray-200 text-slate-900 dark:text-slate-200 dark:border-slate-700">
      {category} ({books.length})
    </h2>
    <div className="overflow-hidden border border-gray-200 dark:border-slate-700">
      {books.map((book, index) => (
        <BookCard key={book.isbn || book.title} book={book} isFirst={index === 0} isLast={index === books.length - 1} />
      ))}
    </div>
  </div>
);

export default function BookShelf() {
  // Group books by category
  const booksByCategory = books.reduce(
    (acc, book) => {
      if (!acc[book.category]) {
        acc[book.category] = [];
      }
      acc[book.category].push(book);
      return acc;
    },
    {} as Record<string, Book[]>
  );

  // Sort categories by number of books (descending)
  const sortedCategories = Object.entries(booksByCategory).sort(([, a], [, b]) => b.length - a.length);

  return (
    <Container
      title="Dennis Kigen - Bookshelf"
      description="Books I'm reading or revisiting, grouped by category."
    >
      <article className="flex flex-col justify-center items-start w-full">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-200">Bookshelf</h1>
        <p className="mt-8">Books I{"'"}m reading or revisiting right now.</p>

        <div className="mt-8 w-full">
          <div>
            {sortedCategories.map(([category, categoryBooks]) => (
              <CategorySection key={category} category={category} books={categoryBooks} />
            ))}
          </div>
        </div>
      </article>
    </Container>
  );
}
