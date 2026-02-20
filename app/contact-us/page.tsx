import React from 'react'
import ContactUsHero from '@/components/contact-us/contact-us-hero'
import ContactSection from '@/components/contact-us/ContactSection'
import MapSection from '@/components/contact-us/MapSection'
import { getPageMetadata } from '@/lib/utils';


export async function generateMetadata() {
  const siteUrl = "https://www.aromahpureair.com";
  const seoData = await getPageMetadata("contact-us");

  if (!seoData) {
    return {
      title: "Contact Us | Aromahpure Air",
      description: "Get in touch with Aromahpureair for product inquiries, support, and customized air purification solutions.",
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

const page = () => {
  return (
    <div>
      <ContactUsHero />
      <ContactSection />
      <MapSection />
    </div>
  )
}

export default page
