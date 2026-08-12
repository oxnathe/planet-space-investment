import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  path = "/",
}) {
  const siteName = "Planet Space Investment";
  const baseUrl = "https://planet-space-investment.vercel.app";
  const canonicalUrl = `${baseUrl}${path}`;
  const logoUrl = `${baseUrl}/images/logo.png`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteName,
    url: baseUrl,
    logo: logoUrl,
    image: logoUrl,
    description:
      "Planet Space Investment provides real estate investment, property development, and residential property solutions in Lagos, Nigeria.",
    areaServed: {
      "@type": "City",
      name: "Lagos",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [],
  };

  return (
    <Helmet>
      {/* Page Title */}
      <title>{title}</title>

      {/* Meta Description */}
      <meta
        name="description"
        content={description}
      />

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:site_name"
        content={siteName}
      />

      <meta
        property="og:image"
        content={logoUrl}
      />

      <meta
        property="og:image:alt"
        content={siteName}
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={logoUrl}
      />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}