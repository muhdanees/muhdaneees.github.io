import Head from "next/head";
import { useRouter } from "next/router";

export default function SEO({
  title = "Mohd Anees | Full Stack Developer & Front-End Expert",
  description = "Experienced Front-End Developer with 10+ years in UI/UX design and web development. Specializing in React, HTML5, CSS3, and modern web technologies.",
  canonical = null,
  ogImage = "https://www.codeplayer.me/og-image.jpg",
  ogType = "website",
  noindex = false,
  children = null,
}) {
  const router = useRouter();
  const baseUrl = "https://www.codeplayer.me";
  const canonicalUrl = canonical || `${baseUrl}${router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Mohd Anees - Code Player" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content={noindex ? "noindex" : "index, follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Mohd Anees" />
      <meta name="keywords" content="Front-End Developer, React Developer, UI Developer, HTML5, CSS3, JavaScript, Web Developer, Full Stack Developer" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mohd Anees",
          url: baseUrl,
          image: "https://www.codeplayer.me/about-me.jpg",
          jobTitle: "Front-End Developer",
          worksFor: {
            "@type": "Organization",
            name: "Code Player",
          },
          sameAs: [
            "https://www.linkedin.com/in/your-profile",
            "https://github.com/muhdaneees",
            "https://twitter.com/your-handle",
          ],
          description: description,
        })}
      </script>

      {children}
    </Head>
  );
}
