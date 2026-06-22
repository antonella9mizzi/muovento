import App from "./App";
import { siteConfig, siteUrl } from "@/lib/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: "it-IT",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteUrl,
      logo: `${siteUrl}${siteConfig.ogImage}`,
    },
    potentialAction: {
      "@type": "ViewAction",
      target: `${siteUrl}/#download`,
      name: "Scarica l'app Muovento",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <App />
    </>
  );
}
