import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/themeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
