/**
 * Contains three of my articles and a read more button below them redirect to my hashnode blog
 */
import React from "react";
import SectionTitle from "../SectionTitle";
import { articles } from "./data";
import ArticleCard from "./ArticleCard";
import Link from "next/link";
import Image from "next/image";

const Articles = () => {
  return (
    <div
      id="articles"
      className="
    p-4 lg:p-8 w-full
    "
      style={{
        minHeight: "calc(100vh - 5rem)",
        background:
          "linear-gradient(0deg, rgba(0,0,0,0) 0%, #0A1625 15%,#0A1625 85%, rgba(0,0,0,0) 100%)",
      }}
    >
      <SectionTitle title="Articles" />
      <p
        className="
        text-textLight/75
      mb-4
        "
      >
        I write articles about web development, programming, and tech in
        general. Here are some of my favorites:
      </p>
      <div className="grid w-full justify-center grid-cols-1 sml:grid-cols-2 mdl:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      <Link href="https://eslam-7ot.hashnode.dev/">
        <button className="w-full p-2 flex items-center justify-center gap-2 bg-black/20 mt-4 border-b-2 border-textLight hover:border-main">
          Read More on My
          <Image
            src="/icons/hashnode.svg"
            alt="arrow right"
            width={20}
            height={20}
            className="inline-block "
          />{" "}
          <span className="text-main">hashnode</span> blog
        </button>
      </Link>
    </div>
  );
};

export default Articles;
