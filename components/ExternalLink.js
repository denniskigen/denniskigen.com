export default function ExternalLink({ href, children, styles }) {
  return (
    <a
      className={`underline underline-offset-4 decoration-zinc-200 dark:decoration-zinc-500 hover:decoration-zinc-400 dark:hover:decoration-zinc-200 ${styles}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
