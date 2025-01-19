import React from "react";
import SectionTitle from "../SectionTitle";
import { articles } from "./data";
import ArticleCard from "./ArticleCard";
import Link from "next/link";
import Image from "next/image";
import SectionContainer from "../Layout/Containers/SectionContainer";
import { ReadmoreButton } from "./ReadmoreButton";
import { prepareData } from "./prepareData";
import { IArticle } from "@/Types";

const Articles = () => {
  const [articles, setArticles] = React.useState<IArticle[]>([]);
  React.useEffect(() => {
    prepareData().then((data) => {
      setArticles(data);
    });
  }, []);
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
