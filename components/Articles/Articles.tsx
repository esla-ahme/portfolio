import React from "react";
import SectionTitle from "../SectionTitle";
import { articles } from "./data";
import ArticleCard from "./ArticleCard";
import Link from "next/link";
import Image from "next/image";
import SectionContainer from "../Layout/Containers/SectionContainer";

function ReadmoreButton() {
  return (
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
  );
}

const Articles = () => {
  return (
    <SectionContainer id="articles" title="Articles" background="Middle">
      <p className="text-textLight/75 mb-4">
        I write articles about web development, programming, and tech in
        general. Here are some of my favorites:
      </p>
      <div className="grid w-full justify-center grid-cols-1 sml:grid-cols-2 mdl:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      <Link href="https://eslam-7ot.hashnode.dev/">
        <ReadmoreButton></ReadmoreButton>{" "}
      </Link>
    </SectionContainer>
  );
};

export default Articles;
