import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import { cn } from "../lib/utils";
import "../globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div lang="en" className={cn("font-sans", GeistSans.className)}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
