export default function ExternalLink({ href, children, styles }) {
  return (
    <a
      className={`hover:text-indigo-500 dark:hover:text-indigo-500 ${styles}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
