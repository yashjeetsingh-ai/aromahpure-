import InquireSection from "@/components/inquire/InquireSection"
import { getPageMetadata } from "@/lib/utils"

export async function generateMetadata() {
  const siteUrl = "https://www.aromahpureair.com"
  const seoData = await getPageMetadata("inquire")

  if (!seoData) {
    return {
      title: "Inquire Here | Aromahpure Air",
      description: "Send an inquiry to Aromahpure Air. Our team will get back to you shortly.",
    }
  }

  const fullImageUrl = seoData.images[0].startsWith("http")
    ? seoData.images[0]
    : `${siteUrl}${seoData.images[0].startsWith("/") ? "" : "/"}${seoData.images[0]}`

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
  }
}

export default function Page() {
  return <InquireSection />
}

