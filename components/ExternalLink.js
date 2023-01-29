export default function ExternalLink({ href, children, styles }) {
  return (
    <a
      className={`underline underline-offset-4 font-medium  decoration-sky-400 text-slate-900 dark:text-white ${
        styles ?? ""
      }`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
