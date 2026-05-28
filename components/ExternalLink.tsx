import React from "react";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  styles?: string;
  ariaLabel?: string;
}

export default function ExternalLink({
  href,
  children,
  styles,
  ariaLabel,
}: ExternalLinkProps) {
  const isMailto = href.startsWith("mailto:");

  return (
    <a
      className={`underline underline-offset-[6px] font-medium decoration-slate-500 text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-stone-900 ${styles ?? ""}`}
      target={isMailto ? undefined : "_blank"}
      rel={isMailto ? undefined : "noopener noreferrer"}
      href={href}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
