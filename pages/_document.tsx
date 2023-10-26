import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      lang="en"
      className="scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thin scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Eslam Ahmed - Software Engineer" />
        <meta
          name="description"
          content="Frontend Engineer specializing in React, Vue, GraphQL, and more."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:title" content="Eslam Ahmed - Software Engineer" />
        <meta
          property="og:description"
          content="Frontend Engineer specializing in React, Vue, GraphQL, and more."
        />
        <meta property="og:image" content="/images/eslam.jpg" />{" "}
        {/* Reference to the image in the public folder */}
        {/* Twitter */}
        <meta property="twitter:card" content="/images/eslam.jpg" />
        <meta property="twitter:url" content="https://your-portfolio-url.com" />
        <meta
          property="twitter:title"
          content="Eslam Ahmed - Frontend Engineer"
        />
        <meta
          property="twitter:description"
          content="Frontend Engineer specializing in React, Vue, GraphQL, and more."
        />
        <meta property="twitter:image" content="/images/eslam.jpg" />
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
