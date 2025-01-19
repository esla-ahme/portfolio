interface Article {
  title: string;
  teaser: string;
  date: string;
  image: string;
  link: string;
  views: number;
  tags: string[];
}

export const articles: Article[] = [
  {
    title: "TypeScript: A Start",
    teaser:
      "Dive into the world of TypeScript, exploring its typical workflows, compilation, configuration, and code examples.",
    date: "Aug 15, 2021",
    image: "img1", // You can add the image link here
    link: "https://eslam-7ot.hashnode.dev/typescript-a-start",
    views: 161,
    tags: ["TypeScript", "JavaScript"],
  },
  {
    title: "TypeScript Basics: Types",
    teaser:
      "Dive into TypeScript's core feature, exploring basic types, never and void types, literal types, object types, and more.",
    date: "Aug 21, 2021",
    image: "img2", // You can add the image link here
    link: "https://eslam-7ot.hashnode.dev/typescript-basics-types",
    views: 1125, // You mentioned "1.0K views" which I interpreted as 1000 views
    tags: ["TypeScript", "JavaScript", "algorithms", "search"],
  },
  {
    title: "TypeScript Basics: Custom Types",
    date: "Aug 30, 2021",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    image: "img3",
    link: "https://eslam-7ot.hashnode.dev/typescript-basics-custom-types",
    teaser:
      "Dive into the fascinating world of custom types in TypeScript! Unlock the power of 'type,' 'class,' and 'interface' definitions. Learn when to wield each, master unions of custom types, and unravel the unknown.",
    views: +853,
  },
  {
    title: "ChatGPT: A Comprehensive Guide for Front-End Developers",
    teaser:
      "Explore the power of ChatGPT in front-end development and its comparison with Stack Overflow and Github Copilot.",
    date: "Feb 6, 2023",
    image: "img4", // You can add the image link here
    link: "https://eslam-7ot.hashnode.dev/chatgpt-a-comprehensive-guide-for-front-end-developers",
    views: 95,
    tags: ["Frontend", "AI", "chatgpt", "Productivity"],
  },
];
