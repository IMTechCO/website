import { Geist } from "next/font/google";
import "./globals.css";
import Loader from "@/components/loader/Loader";
import { Toaster } from "sonner";
import "sonner/dist/styles.css";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imtechco.vercel.app"),

  verification: {
    google: "uXp-svOT-nF3PmMAvRvPkKY1Irsrv7Dz9p9KIm6P3yM",
  },

  title: {
    default: "IM Tech | Soluciones Tecnológicas para Empresas",
    template: "%s | IM Tech",
  },

  description:
    "Impulsamos la transformación digital de las empresas mediante desarrollo de software, automatización de procesos, infraestructura tecnológica y soluciones a la medida.",

  keywords: [
    "soporte tecnológico",
    "soporte TI",
    "infraestructura TI",
    "desarrollo de software",
    "automatización de procesos",
    "inteligencia artificial",
    "desarrollo web",
    "software empresarial",
    "consultoría tecnológica",
    "transformación digital",
    "redes empresariales",
    "servidores",
    "IM Tech",
    "sistemas tumaco",
    "tecnología tumaco",
    "soporte tecnológico tumaco",
    "desarrollo de software tumaco",
    "automatización de procesos tumaco",
    "inteligencia artificial tumaco",
    "desarrollo web tumaco",
    "software empresarial tumaco",
    "consultoría tecnológica tumaco",
    "transformación digital tumaco",
    "redes empresariales tumaco",
    "servidores tumaco",
  ],

  authors: [
    {
      name: "IM Tech",
    },
  ],

  creator: "IM Tech",
  publisher: "IM Tech",
  applicationName: "IM Tech",
  category: "Technology",
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "IM Tech | Soluciones Tecnológicas para Empresas",
    description:
      "Transformamos tecnología en resultados mediante soluciones digitales a la medida.",

    url: "https://imtechco.vercel.app",

    siteName: "IM Tech",

    locale: "es_CO",

    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IM Tech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IM Tech | Soluciones Tecnológicas para Empresas",
    description:
      "Transformamos tecnología en resultados mediante soluciones digitales a la medida.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://imtechco.vercel.app/#organization",

      name: "IM Tech",

      url: "https://imtechco.vercel.app",

      logo: "https://imtechco.vercel.app/logo-horizontal.png",

      description:
        "Empresa especializada en soporte tecnológico, infraestructura TI, desarrollo de software y automatización de procesos para empresas.",

      email: "gerencia.imtech@outlook.com",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Tumaco",
        addressRegion: "Nariño",
        addressCountry: "CO",
      },

      sameAs: [
        "https://facebook.com/imtechco",
        "https://linkedin.com/company/imtechco",
        "https://github.com/imtechco",
        "https://youtube.com/@imtechco",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://imtechco.vercel.app/#website",

      url: "https://imtechco.vercel.app",

      name: "IM Tech",

      publisher: {
        "@id": "https://imtechco.vercel.app/#organization",
      },

      inLanguage: "es-CO",
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://imtechco.vercel.app/#localbusiness",

      name: "IM Tech",

      image: "https://imtechco.vercel.app/og-image.png",

      url: "https://imtechco.vercel.app",

      email: "gerencia.imtech@outlook.com",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Tumaco",
        addressRegion: "Nariño",
        addressCountry: "CO",
      },

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      priceRange: "$$",

      openingHours: "Mo-Fr 08:00-18:00",

      parentOrganization: {
        "@id": "https://imtechco.vercel.app/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className={geist.className}>

        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Loader>
          {children}
        </Loader>

        <Toaster
          position="top-right"
          richColors
          closeButton
          theme="dark"
        />

        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}
        />
      </body>
    </html>
  );
}