import { Html, Head, Main, NextScript } from "next/document";
import { use, useEffect } from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Eslam Ahmed - Software Engineer" />
        <meta
          name="description"
          content="Eslam Ahmed - Web Developer Portfolio. Over a year of web development experience specializing in creating web platforms, optimizing UI/UX, and ensuring top-notch SEO. Explore my work and experience in React, Next.js, TypeScript, Tailwind CSS, and Framer Motion."
        />
        <meta name="theme-color" content="#0A1625" />
        <meta name="author" content="Eslam Ahmed" />
        <meta
          name="keywords"
          content="
          Eslam, Eslam Ahmed, Software Engineer, javascript developer, frontend developer, web developer, web designer, web developer
          MERN stack developer"
        />
        <meta itemProp="name" content="Eslam Ahmed - Software Engineer" />
        <meta
          itemProp="description"
          content="Eslam Ahmed - Web Developer Portfolio. Over a year of web development experience specializing in creating web platforms, optimizing UI/UX, and ensuring top-notch SEO. Explore my work and experience in React, Next.js, TypeScript, Tailwind CSS, and Framer Motion."
        />
        <meta
          itemProp="image"
          content="https://eslam-ahmed.vercel.app/images/cover.png"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eslam-ahmed.vercel.app/" />
        <meta property="og:title" content="Eslam Ahmed - Software Engineer" />
        <meta
          property="og:image"
          content="https://eslam-ahmed.vercel.app/images/cover.png"
        />{" "}
        <meta
          property="og:description"
          content="An experienced web developer passionate about creating accessible and inclusive web applications. With over a year of expertise in React, Vue, and their ecosystem, Eslam specializes in optimizing websites for a top-notch UI/UX and solid SEO. Dive into the details of a developer dedicated to user satisfaction and engagement."
        />
        {/* Reference to the image in the public folder */}
        {/* Twitter */}
        <meta
          property="twitter:card"
          content="https://eslam-ahmed.vercel.app/images/cover.png"
        />
        <meta
          property="twitter:url"
          content="https://eslam-ahmed.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Eslam Ahmed - Frontend Engineer"
        />
        <meta
          property="twitter:description"
          content="An experienced web developer passionate about creating accessible and inclusive web applications. With over a year of expertise in React, Vue, and their ecosystem, Eslam specializes in optimizing websites for a top-notch UI/UX and solid SEO. Dive into the details of a developer dedicated to user satisfaction and engagement."
        />
        <meta
          property="twitter:image"
          content="https://eslam-ahmed.vercel.app/images/cover.png"
        />
        <link rel="preload" as="image" href="/images/eslam.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
