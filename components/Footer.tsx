import ExternalLink from "./ExternalLink";
import ExternalLinkIcon from "./ExternalLinkIcon";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <>
      <div className="mt-24" />
      <hr />
      <footer className="flex justify-between my-6">
        <span
          className="text-sm font-semibold tracking-widest uppercase text-slate-700 dark:text-slate-300"
          style={{ fontFamily: '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif' }}
        >
          Dennis Kigen
        </span>
        <div className="flex gap-4 items-center">
          <ExternalLink href="https://github.com/denniskigen/denniskigen.com">
            <span className="flex items-center gap-1 text-xs font-medium underline underline-offset-[6px] decoration-slate-500 text-slate-700 dark:text-slate-300">
              Source
              <ExternalLinkIcon className="w-3.5 h-3.5 opacity-70" />
            </span>
          </ExternalLink>
          <ExternalLink href="mailto:kigen.work@gmail.com">
            <span aria-label="Email">
              <EnvelopeClosedIcon width={20} height={20} />
            </span>
          </ExternalLink>
          <ExternalLink href="https://github.com/denniskigen">
            <span aria-label="GitHub">
              <GitHubLogoIcon width={20} height={20} />
            </span>
          </ExternalLink>
          <ExternalLink href="https://linkedin.com/in/denniskigen">
            <span aria-label="LinkedIn">
              <LinkedInLogoIcon width={20} height={20} />
            </span>
          </ExternalLink>
          <ExternalLink href="https://x.com/dennisforthewin">
            <span aria-label="X (formerly known as Twitter)">
              <TwitterLogoIcon width={20} height={20} />
            </span>
          </ExternalLink>
        </div>
      </footer>
    </>
  );
}
