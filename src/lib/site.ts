export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://muovento.it").replace(/\/$/, "");

export const siteConfig = {
  name: "Muovento",
  title: "Muovento | Palestre e attivita sportive a Torino",
  description:
    "Prenota lezioni e attivita sportive nei migliori centri fitness di Torino con un solo abbonamento.",
  url: siteUrl,
  locale: "it_IT",
  ogImage: "/og-muovento.png",
};
