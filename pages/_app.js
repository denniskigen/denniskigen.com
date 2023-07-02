import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({
  display: "optional",
  subsets: ["latin"],
  variable: "--font-inter",
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component className={inter.variable} {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
