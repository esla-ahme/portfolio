import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Eslam Ahmed - Software Engineer with Frontend Speciality" />
        <meta
          name="description"
          content="Eslam Ahmed - Software Engineer Portfolio. 3+ years of experience building responsive, scalable web applications using React, Vue, and modern JavaScript frameworks. Currently a Solutions Developer at Zoho Corp."
        />
        <meta name="theme-color" content="#0A1625" />
        <meta name="author" content="Eslam Ahmed" />
        <meta
          name="keywords"
          content="Eslam Ahmed, Software Engineer, Frontend Engineer, React Developer, Vue Developer, TypeScript, JavaScript, Next.js, Redux, GraphQL, Tailwind CSS, Web Developer, MERN stack developer"
        />
        <meta itemProp="name" content="Eslam Ahmed - Software Engineer with Frontend Speciality" />
        <meta
          itemProp="description"
          content="Eslam Ahmed - Software Engineer Portfolio. 3+ years of experience building responsive, scalable web applications using React, Vue, and modern JavaScript frameworks. Currently a Solutions Developer at Zoho Corp."
        />
        <meta
          itemProp="image"
          content="https://eslam-ahmed.vercel.app/images/cover.png"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eslam-ahmed.vercel.app/" />
        <meta property="og:title" content="Eslam Ahmed - Software Engineer with Frontend Speciality" />
        <meta
          property="og:image"
          content="https://eslam-ahmed.vercel.app/images/cover.png"
        />
        <meta
          property="og:description"
          content="Results-driven Software Engineer with 3+ years of experience in React, Vue, TypeScript, and modern JavaScript frameworks. Proven track record of delivering high-performance user interfaces, complex state management solutions, and seamless API integrations."
        />
        {/* Twitter */}
        <meta
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="twitter:url"
          content="https://eslam-ahmed.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Eslam Ahmed - Software Engineer with Frontend Speciality"
        />
        <meta
          property="twitter:description"
          content="Results-driven Software Engineer with 3+ years of experience in React, Vue, TypeScript, and modern JavaScript frameworks. Proven track record of delivering high-performance user interfaces, complex state management solutions, and seamless API integrations."
        />
        <meta
          property="twitter:image"
          content="https://eslam-ahmed.vercel.app/images/cover.png"
        />
        {/* Fonts loaded via next/font in _app.tsx */}
        <link rel="preconnect" href="https://gql.hashnode.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
