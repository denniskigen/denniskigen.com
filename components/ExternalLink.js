export default function ExternalLink({ href, children, styles }) {
  return (
    <a
      className={`underline underline-offset-4 decoration-gray-200 hover:decoration-gray-500 ${styles}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
