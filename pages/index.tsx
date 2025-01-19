"use client";
import About from "@/components/About/About";
import Articles from "@/components/Articles/Articles";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navbar/navbar";
import OtherProjects from "@/components/OtherProjects/OtherProjects";
import Projects from "@/components/Projects/Projects";
import { ThemeProvider, useTheme } from "@/context/themeContext";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eslam Ahmed - Software Engineer</title>
        <meta
          name="description"
          content="Frontend Engineer specializing in React, Vue, GraphQL, and more."
        />
      </Head>
      <main
        id="main"
        className="w-full h-screen  overflow-x-hidden overflow-y-scroll font-monteserrat bg-bgDark text-textLight "
      >
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>

        <HeroSection />

        <About />
        <Experience />
        <Projects />
        <OtherProjects />
        <Articles />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
