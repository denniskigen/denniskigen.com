export default function ExternalLink({ href, children, styles }) {
  return (
    <a
      className={`underline underline-offset-[6px] font-medium  decoration-gray-500 text-slate-900 dark:text-white ${
        styles ?? ""}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
