import ExternalLink from "./ExternalLink";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <>
      <div className="mt-24" />
      <hr />
      <footer className="flex justify-between my-6">
        <span className="">Dennis Kigen</span>
        <div className="flex items-center gap-4">
          <ExternalLink href="mailto:kigen.work@gmail.com">
            <div title="Email">
              <EnvelopeClosedIcon />
            </div>
          </ExternalLink>
          <ExternalLink href="https://github.com/denniskigen">
            <div title="GitHub">
              <GitHubLogoIcon />
            </div>
          </ExternalLink>
          <ExternalLink href="https://linkedin.com/in/denniskigen">
            <div title="LinkedIn">
              <LinkedInLogoIcon />
            </div>
          </ExternalLink>
          <ExternalLink href="https://x.com/dennisforthewin">
            <div title="X (formerly known as Twitter">
              <TwitterLogoIcon />
            </div>
          </ExternalLink>
        </div>
      </footer>
    </>
  );
}