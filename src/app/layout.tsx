import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/index.css";

const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG ?? process.env.GOOGLE_TAG;

export const metadata: Metadata = {
  title: "Landing page for Muovento",
  description:
    "Showcases Muovento's services with an engaging, user-friendly landing page featuring improved UI, animations, and optimized content to attract and convert visitors.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        {googleTagId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleTagId)}`}
              strategy="afterInteractive"
            />
            <Script id="google-tag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', ${JSON.stringify(googleTagId)});
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
