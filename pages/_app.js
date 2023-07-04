import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

function MyApp({ Component, pageProps }) {
  return (
    <div lang="en" className={`${inter.variable} font-sans`}>
      <ThemeProvider attribute="class">
        <Component className={inter.variable} {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
