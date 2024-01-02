import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  return pathName !== "/" ? (
    <header className="h-37.5px flex items-center justify-between mb-10">
      <Link
        className="flex items-center underline underline-offset-4 decoration-gray-500 text-slate-900 dark:text-white"
        href="/"
      >
        <span className="flex items-center">
          <p className="mr-2">← back</p>
        </span>
      </Link>
    </header>
  ) : null;
}
