import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} font-monteserrat`}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
