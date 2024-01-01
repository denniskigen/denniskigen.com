import "tailwindcss/tailwind.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import { cn } from "../lib/utils";

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
