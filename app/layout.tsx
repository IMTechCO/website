import { Geist } from "next/font/google";
import "./globals.css";
import Loader from "@/components/loader/Loader";
import { Toaster } from "sonner";
import "sonner/dist/styles.css";
import Script from "next/script";
import type { Metadata, Viewport } from "next";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imtech.com.co"),

  title: {
    default: "IM Tech | Soluciones Tecnológicas para Empresas",
    template: "%s | IM Tech",
  },

  description:
    "Impulsamos la transformación digital de las empresas mediante desarrollo de software, automatización de procesos, infraestructura tecnológica y soluciones a la medida.",

  keywords: [
    "desarrollo de software",
    "transformación digital",
    "automatización de procesos",
    "desarrollo web",
    "software empresarial",
    "consultoría TI",
    "infraestructura tecnológica",
    "IM Tech",
  ],

  authors: [
    {
      name: "IM Tech",
    },
  ],

  creator: "IM Tech",
  applicationName: "IM Tech",
  category: "Technology",

  openGraph: {
    title: "IM Tech | Soluciones Tecnológicas para Empresas",
    description:
      "Transformamos tecnología en resultados mediante soluciones digitales a la medida.",

    url: "https://imtech.com.co",

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
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "IM Tech",

  url: "https://imtech.com.co",

  logo: "https://imtech.com.co/logo-horizontal.png",

  description:
    "Empresa especializada en desarrollo de software, automatización de procesos, infraestructura tecnológica y transformación digital.",

  inLanguage: "es-CO",

  email: "gerencia.imtech@outlook.com",

  address: {
    "@type": "PostalAddress",
    addressCountry: "CO",
  },

  sameAs: [
    "https://facebook.com/imtechco",
    "https://linkedin.com/company/imtechco",
    "https://github.com/imtechco",
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

      </body>
    </html>
  );
}