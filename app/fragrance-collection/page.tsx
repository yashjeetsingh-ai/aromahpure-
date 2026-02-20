import React from 'react'
import FragranceCategoriesSection from '@/components/fragrance-collection/fragrance-categories-section'
import FragranceCollectionSection from '@/components/fragrance-collection/fragrance-collection-section'
import FragranceIdentitySection from '@/components/fragrance-collection/fragrance-identity-section'
import FragranceProcessSection from '@/components/fragrance-collection/fragrance-process-section'
import FragranceSection from '@/components/fragrance-collection/fragrance-section'
import ScienceFragranceSection from '@/components/fragrance-collection/science-fragrance-section'
import { getPageMetadata } from '@/lib/utils'


export async function generateMetadata() {
  const siteUrl = "https://www.aromahpureair.com";
  const seoData = await getPageMetadata("fragrance-collection");

  if (!seoData) {
    return {
      title: "Fragrance Collection | Aromahpure Air",
      description: "Browse Aromahpureair’s wide range of fragrances, crafted to elevate environments with unique scents and moods.",
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
      <FragranceCollectionSection />
      <ScienceFragranceSection />
      <FragranceIdentitySection />
      <FragranceCategoriesSection />
      <FragranceSection />
      <FragranceProcessSection />
    </>
  )
}

export default page
