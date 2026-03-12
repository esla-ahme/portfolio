import About from "@/components/About/About";
import Articles from "@/components/Articles/Articles";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navbar/navbar";
import OtherProjects from "@/components/OtherProjects/OtherProjects";
import Projects from "@/components/Projects/Projects";
import { ThemeProvider } from "@/context/themeContext";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";
import Head from "next/head";

export default function Home() {
  useLocomotiveScroll();
  return (
    <>
      <Head>
        <title>Eslam Ahmed - Software Engineer with Frontend Speciality</title>
        <meta
          name="description"
          content="Results-driven Software Engineer with 3+ years of experience in React, Vue, TypeScript, and modern JavaScript frameworks."
        />
      </Head>
      <main
        id="main"
        className="w-full overflow-x-hidden font-monteserrat bg-bgDark text-textLight"
      >
        <ThemeProvider>
          <Navbar />

        <HeroSection />

        <About />
        <Experience />
        <Projects />
        <OtherProjects />
        <Articles />
        <Contact />
        <Footer />        </ThemeProvider>

      </main>
    </>
  );
}
