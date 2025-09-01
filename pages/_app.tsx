import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { cn } from "../lib/utils";
import { useScrollRestoration } from "../lib/useScrollRestoration";
import "../globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  // Initialize scroll restoration
  useScrollRestoration();

  return (
    <div lang="en" className={cn("font-sans", GeistSans.className)}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
