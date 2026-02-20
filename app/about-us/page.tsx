import AboutUsHero from '@/components/about-us/about-us-hero'
import OurStoryPage from '@/components/about-us/our-story'
import QualitySafetySection from '@/components/about-us/quality-safety-section'
import TheCreatorsSection from '@/components/about-us/the-creators-section'
import { getPageMetadata } from '@/lib/utils'
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const siteUrl = "https://www.aromahpureair.com";
  const seoData = await getPageMetadata("about-us");

  if (!seoData) {
    return {
      title: "About Us | Aromahpure Air",
      description: "Learn more about Aromahpureair, our mission, values, and commitment to delivering fresh and pure air solutions.",
      keywords: ["Aromahpure Air", "Air Purification", "Clean Air"],
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

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsHero />
      <OurStoryPage />
      <TheCreatorsSection />
      <QualitySafetySection />
    </div>
  )
}

export default AboutUsPage;
