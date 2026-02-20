import React from 'react'
import DiffuserProductSection from '@/components/our-diffusers/DiffuserProductSection'
import OurdiffuUserSection from '@/components/our-diffusers/ourdiffusersection'
import { getPageMetadata } from '@/lib/utils';

export async function generateMetadata() {
  const siteUrl = "https://www.aromahpureair.com";
  const seoData = await getPageMetadata("our-diffusers");

  if (!seoData) {
    return {
      title: "Our Diffusers | Aromahpure Air",
      description: "Explore Aromahpureair’s advanced diffuser collection designed for effective and long-lasting scenting solutions.",
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
      <OurdiffuUserSection />
      <DiffuserProductSection />
    </div>
  )
}

export default page
