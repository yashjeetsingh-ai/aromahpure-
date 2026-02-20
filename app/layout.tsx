import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import FixedDemoButton from "@/components/common/FixedDemoButton";
import ClientWrapper from "@/components/common/ClientWrapper";
import { getPageMetadata } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const siteUrl = "https://www.aromahpureair.com";
  const seoData = await getPageMetadata("home");

  if (!seoData) {
    return {
      title: "Home | Aromahpure Air",
      description: "Welcome to Aromahpureair — your trusted partner for innovative and sustainable air purification solutions.",
    };
  }

  const fullImageUrl = seoData.images[0].startsWith("http")
    ? seoData.images[0]
    : `${siteUrl}${seoData.images[0].startsWith("/") ? "" : "/"}${seoData.images[0]}`;

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords || [],
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      type: seoData.type,
      url: seoData.url,
      images: [fullImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
      images: [fullImageUrl],
      keywords: seoData.keywords || [],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-350K4Q5SE1"></script>
        <script>
         {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-350K4Q5SE1');`}
        </script>
      </head>
      <body className={`${inter.className} scroll-smooth`}>
        <Header />

        {/* Wrap children with ClientWrapper and keep main className */}
        <ClientWrapper>
          <main className="relative z-30 bg-white">{children}</main>
        </ClientWrapper>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <FixedDemoButton />
        <Footer />
      </body>
    </html>
  );
}