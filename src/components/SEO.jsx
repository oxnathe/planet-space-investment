import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  path = "/",
}) {
  const siteName = "Planet Space Investment";
  const baseUrl = "https://planet-space-investment.vercel.app";

  const canonicalUrl =
    path === "/"
      ? baseUrl
      : `${baseUrl}${path}`;

  const socialImageUrl =
    `${baseUrl}/images/social-preview.png`;

  const logoUrl =
    `${baseUrl}/images/logo.png`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteName,
    url: baseUrl,
    logo: logoUrl,
    image: socialImageUrl,
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
      {/* ================= PAGE TITLE ================= */}

      <title>{title}</title>

      {/* ================= META DESCRIPTION ================= */}

      <meta
        name="description"
        content={description}
      />

      {/* ================= ROBOTS ================= */}

      <meta
        name="robots"
        content="index, follow"
      />

      {/* ================= CANONICAL ================= */}

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* ================= OPEN GRAPH ================= */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
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
        property="og:locale"
        content="en_NG"
      />

      <meta
        property="og:image"
        content={socialImageUrl}
      />

      <meta
        property="og:image:secure_url"
        content={socialImageUrl}
      />

      <meta
        property="og:image:type"
        content="image/png"
      />

      <meta
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
      />

      <meta
        property="og:image:alt"
        content="Planet Space Investment - Premium Real Estate and Investment Opportunities in Nigeria"
      />

      {/* ================= TWITTER / X ================= */}

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
        content={socialImageUrl}
      />

      <meta
        name="twitter:image:alt"
        content="Planet Space Investment - Premium Real Estate and Investment Opportunities in Nigeria"
      />

      {/* ================= STRUCTURED DATA ================= */}

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}