// pages/blog.tsx
import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer";
import { prepareData } from "@/components/Articles/prepareData";
import ArticleCard from "@/components/Articles/ArticleCard";
import { IArticle } from "@/Types";

const Blog = ({ articles }: { articles: IArticle[] }) => {
  return (
    <>
      <Head>
        <title>Blog - Eslam Ahmed</title>
        <meta name="description" content="Blog posts by Eslam Ahmed" />
      </Head>
      <Navbar />
      <main className="w-full h-screen overflow-x-hidden overflow-y-scroll font-monteserrat bg-bgDark text-textLight">
        <div className="max-w-containerSmall m-auto p-4">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <div className="grid w-full justify-center grid-cols-1 sml:grid-cols-2 mdl:grid-cols-3 lg:grid-cols-4 gap-4">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const articles = await prepareData();
  return {
    props: {
      articles,
    },
  };
}

export default Blog;