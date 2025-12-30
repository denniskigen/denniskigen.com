import { Bricolage_Grotesque } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { cn } from "../lib/utils";
import { useScrollRestoration } from "../lib/useScrollRestoration";
import "../globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  // Initialize scroll restoration
  useScrollRestoration();

  return (
    <div lang="en" className={cn("font-sans", GeistSans.className, bricolage.variable)}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
