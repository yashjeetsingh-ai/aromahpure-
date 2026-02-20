import React from 'react'
import ContactFormPage from '@/components/industries-we-serve/contact-form-page'
import DiscoverScentSection from '@/components/industries-we-serve/discover-scent-section'
import FragranceBrandingSection from '@/components/industries-we-serve/fragrance-branding-section'
import ScentingSolutionsPage from '@/components/industries-we-serve/our-story'
import { getPageMetadata } from '@/lib/utils'


export async function generateMetadata() {
  const siteUrl = "https://www.aromahpureair.com";
  const seoData = await getPageMetadata("industries-we-serve");

  if (!seoData) {
    return {
      title: "Industries We Serve | Aromahpure Air",
      description: "Discover how Aromahpureair provides customized scenting and air purification solutions across diverse industries.",
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
    <>
      <DiscoverScentSection />
      <FragranceBrandingSection />
      <ScentingSolutionsPage />
      <ContactFormPage />
    </>
  )
}

export default page
