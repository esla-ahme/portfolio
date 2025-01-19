import React from "react";
import Link from "next/link";
import Image from "next/image";
import {BlogArticle} from "./data";
interface FullWidthArticleProps {
  article: Article;
}

const FullWidthArticle: React.FC<FullWidthArticleProps> = ({ article }) => {
  return (
    <div className="w-full bg-bgAccent/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Article Type Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-textLight/75 bg-bgAccent/20 px-3 py-1 rounded-full">
          {article.type}
        </span>
        <span className="text-sm text-textLight/50">{article.date}</span>
      </div>

      {/* Article Title */}
      <h2 className="text-2xl font-bold text-textLight mb-2 hover:text-primary transition-colors duration-300">
        {article.title}
      </h2>

      {/* Article Teaser */}
      <p className="text-textLight/75 mb-4">{article.teaser}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {article.tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm text-textLight/75 bg-bgAccent/20 px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Read More Button */}
      <Link
        href={`/blog/${article.id}`}
        className="inline-block text-primary font-semibold hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
};

export default FullWidthArticle;