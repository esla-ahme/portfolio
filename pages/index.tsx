import Navbar from "@/components/Navbar/navbar";
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
      <main className="w-full h-screen overflow-x-hidden overflow-y-scroll font-monteserrat bg-bgDark text-textLight ">
        <Navbar />
      </main>
    </>
  );
}
