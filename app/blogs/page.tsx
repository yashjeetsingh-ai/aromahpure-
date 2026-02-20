import ComingSoon from '@/components/common/commingsoon'
import { getPageMetadata } from '@/lib/utils';
import React from 'react'

export async function generateMetadata() {
  const siteUrl = "https://www.aromahpureair.com";
  const seoData = await getPageMetadata("blogs");

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
    <div>
      <ComingSoon />
    </div>
  )
}

export default page
