"use client"
import { Waves, Utensils, Trash2, Droplets, Cigarette, Home } from "lucide-react"
import RevealWrapper from "@/components/animation/RevealWrapper"
import Image from "next/image"
import useReveal from "@/hooks/useReveal"
import CenterOutwardLine from "../animation/CenterOutwardLine"

export default function FragranceSection() {
  const { revealRef } = useReveal()

  const odorCategories = [
    { icon: "Fragrance Collection-08.png", icon1: "aromahpure air-06.png", label: "RESTROOM" },
    { icon: "Fragrance Collection-07.png", icon1: "aromahpure air-07.png", label: "FOOD" },
    { icon: "Fragrance Collection-09.png", icon1: "aromahpure air-08.png", label: "TRASH" },
    { icon: "Fragrance Collection-10.png", icon1: "aromahpure air-09.png", label: "DAMP" },
    { icon: "Fragrance Collection-12.png", icon1: "aromahpure air-10.png", label: "PET ODOR" },
  ];



  const certifications = [
    { name: "IFRA COMPLIANT FRAGRANCES", abbr: "ifra", imgSrc: "/Fragrance Collection-14.png" },
    { name: "GMO-FREE", abbr: "gmo", imgSrc: "/Fragrance Collection-15.png" },
    { name: "HALAL", abbr: "halal", imgSrc: "/Fragrance Collection-16.png" },
    { name: "KOSHER", abbr: "kosher", imgSrc: "/Fragrance Collection-17.png" },
    { name: "MSDS", abbr: "msds", imgSrc: "/Fragrance Collection-18.png" },
  ];


  const isoStandards = [
    "GREENHOUSE GAS EMISSIONS ACCOUNTING AND VERIFICATION (ISO 14064-1:2018)",
    "WATER EFFICIENCY MANAGEMENT SYSTEMS (ISO 46001:2019)",
    "ENERGY MANAGEMENT SYSTEMS (ISO 50001:2018)",
    "QUALITY MANAGEMENT SYSTEMS (ISO 9001:2015)",
    "ENVIRONMENTAL MANAGEMENT SYSTEMS (ISO 14001:2015)",
  ]

  return (
    <div className="font-xyz overflow-hidden pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 2xl:pt-18  ">
      <main>
        {/* Odor Neutralising Section */}
        <section
          className="font-xyz mt-20 md:mt-0"
          style={{
            backgroundImage: `
                        linear-gradient(to bottom, white 0%, white 20%, #F6F1EB 20%, #F6F1EB 100%),
                        url('/images/philosophy-bg.png')
                        `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="container mx-auto px-4">
            <div className="bg-[#66756C] text-white rounded-2xl px-6 sm:px-10 md:px-16 py-14 sm:py-16 md:py-20 text-center">

              <RevealWrapper delay={0.2}>
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[52px] font-medium tracking-wide mb-12 sm:mb-14 md:mb-20 max-w-4xl mx-auto leading-fra"
                  ref={revealRef}
                >
                  ODOR NEUTRALISING
                  FRAGRANCES
                </h2>

              </RevealWrapper>


              <RevealWrapper delay={0.3}>
                <p
                  className="max-w-6xl mx-auto md:text-center text-justify text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] 2xl:text-[25px] font-extralight leading-creators mb-8 sm:mb-10 md:mb-14 "
                  ref={revealRef}
                >
                  Our specially formulated odor neutralising fragrances are designed to target malodors and odor
                  causing compounds at the molecular level. Using advanced active ingredients, these blends
                  help transform odor challenged spaces like restrooms, kitchens, trash zones, or pet prone areas
                  into clean, balanced environments. Each variant is thoughtfully selected to neutralise specific
                  odor types while maintaining a light, pleasant fragrance that supports a welcoming
                  atmosphere.
                </p>
              </RevealWrapper>
              <RevealWrapper delay={0.2}>
                <div className="max-w-5xl mx-auto mt-12 sm:mt-16 lg:mt-20 px-6 sm:px-6 md:px-8 lg:px-12 md:block hidden">
                  {/* Icons + Labels Container */}
                  <div
                    className="
                              grid grid-cols-3 grid-rows-2 gap-y-2 gap-x-4
                               rounded-full px-6 py-6 sm:py-8
                              md:flex md:justify-evenly md:items-center md:bg-[#F6F1EB] md:rounded-full md:px-3
                              lg:flex lg:justify-evenly lg:items-center lg:bg-[#F6F1EB] lg:rounded-full lg:px-3
                            "
                  >
                    {odorCategories.map((category, index) => (
                      <div
                        key={category.label}
                        className={`
                          flex flex-col items-center justify-center
                          ${index < 3 ? 'row-start-1' : 'row-start-2'}
                          md:row-start-auto
                        `}
                      >
                        <Image
                          src={category.icon}
                          alt={category.label}
                          width={48}
                          height={48}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain md:flex hidden"
                        />
                        <Image
                          src={category.icon1}
                          alt={category.label}
                          width={48}
                          height={48}
                          className="w-20 h-20 object-contain flex md:hidden"
                          loading="lazy"
                        />
                        {/* Mobile only labels below each icon */}
                        <span className="text-[12px] sm:text-sm md:text-base font-normal tracking-wide text-white text-center mt-1 md:hidden">
                          {category.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Labels Row for md+ screens only */}
                  <div className="hidden md:flex justify-evenly items-center mt-3">
                    {odorCategories.map((category) => (
                      <div
                        key={category.label}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="text-[2px] sm:text-xs lg:text-base font-normal tracking-wide md:text-white text-black text-center px-2 lg:px-6">
                          {category.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </RevealWrapper>

              <RevealWrapper delay={0.2}>
                <div className="max-w-5xl mx-auto mt-12 sm:mt-16 lg:mt-20 px-6 sm:px-6 md:px-8 lg:px-12 block md:hidden">
                  {/* Icons + Labels Container */}
                  <div
                    className="
        rounded-full px-4 py-6 sm:py-8
        md:bg-[#F6F1EB] md:rounded-full md:px-3
        lg:bg-[#F6F1EB] lg:rounded-full lg:px-3
        text-center
      "
                  >
                    {/* Top row (3 items) */}
                    <div className="flex justify-center gap-6 sm:gap-6 mb-5">
                      {odorCategories.slice(0, 3).map((category) => (
                        <div
                          key={category.label}
                          className="flex flex-col items-center w-1/4 sm:w-1/5"
                        >
                          <Image
                            src={category.icon1}
                            alt={category.label}
                            width={48}
                            height={48}
                            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                            loading="lazy"
                          />
                          <span className="text-[11px] sm:text-sm font-normal tracking-wide text-white text-center mt-1">
                            {category.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom row (2 items centered) */}
                    <div className="flex justify-center gap-4 sm:gap-6">
                      {odorCategories.slice(3, 5).map((category) => (
                        <div
                          key={category.label}
                          className="flex flex-col items-center w-1/4 sm:w-1/5"
                        >
                          <Image
                            src={category.icon1}
                            alt={category.label}
                            width={48}
                            height={48}
                            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                            loading="lazy"
                          />
                          <span className="text-[11px] sm:text-sm font-normal tracking-wide text-white text-center mt-1">
                            {category.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Labels Row for md+ screens only */}
                  <div className="hidden md:flex justify-evenly items-center mt-3">
                    {odorCategories.map((category) => (
                      <div
                        key={category.label}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="text-xs lg:text-base font-normal tracking-wide md:text-white text-black text-center px-2 lg:px-6" >
                          {category.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealWrapper>

            </div>
          </div>
        </section>

        {/* Fragrance Certifications Section */}
        <section className="bg-[#F6F1EB]">
          <div className="container mx-auto px-6 xl:px-0 py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36">

            <RevealWrapper delay={0.3}>

              {/* Top full width 2px line with text color */}
              <div className="flex justify-center mb-20 sm:mb-24 md:mb-28 lg:mb-32 xl:mb-36">
                <CenterOutwardLine
                  className="h-[2px] bg-[#4a5a51]"
                  duration={1.2}
                  delay={0.3}
                />
              </div>



              <h2
                className="text-[#6b7a70] font-medium uppercase text-4xl sm:text-5xl md:text-6xl tracking-wide leading-fra text-center mb-16 sm:mb-20 md:mb-28 max-w-lg mx-auto"
              >
                FRAGRANCE CERTIFICATIONS
              </h2>

            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              <div className="mb-16 sm:mb-20 md:mb-24">
                <div className="flex flex-col items-center gap-16">
                  {/* Mobile: Single column */}
                  <div className="flex flex-col items-center gap-16 md:hidden">
                    {certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                      >
                        <div className="w-32 h-32 flex items-center justify-center mb-4 relative overflow-hidden">
                          <Image
                            src={cert.imgSrc || "/placeholder.svg"}
                            alt={cert.name}
                            width={160}
                            height={160}
                            className="object-contain w-full h-full"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-sm font-semibold text-[#4a5a51] text-center max-w-xl mt-3">{cert.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* MD and LG screens: 3+2 layout with centered bottom row */}
                  <div className="hidden md:flex lg:flex xl:hidden flex-col items-center gap-16">
                    {/* First row: 3 items */}
                    <div className="flex justify-center gap-16">
                      {certifications.slice(0, 3).map((cert) => (
                        <div
                          key={cert.name}
                          className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                        >
                          <div className="w-36 h-36 lg:w-40 lg:h-40 flex items-center justify-center mb-4 relative overflow-hidden">
                            <Image
                              src={cert.imgSrc || "/placeholder.svg"}
                              alt={cert.name}
                              width={160}
                              height={160}
                              className="object-contain w-full h-full"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-base lg:text-lg font-semibold text-[#4a5a51] text-center max-w-44 mt-3">
                            {cert.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Second row: 2 items centered */}
                    <div className="flex justify-center gap-16">
                      {certifications.slice(3, 5).map((cert) => (
                        <div
                          key={cert.name}
                          className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                        >
                          <div className="w-36 h-36 lg:w-40 lg:h-40 flex items-center justify-center mb-4 relative overflow-hidden">
                            <Image
                              src={cert.imgSrc || "/placeholder.svg"}
                              alt={cert.name}
                              width={160}
                              height={160}
                              className="object-contain w-full h-full"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-base lg:text-lg font-semibold text-[#4a5a51] text-center max-w-44 mt-3">
                            {cert.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* XL screens and above: All 5 in one row */}
                  <div className="hidden xl:flex justify-center gap-16">
                    {certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                      >
                        <div className="w-40 h-40 flex items-center justify-center mb-4 relative overflow-hidden">
                          <Image
                            src={cert.imgSrc || "/placeholder.svg"}
                            alt={cert.name}
                            width={160}
                            height={160}
                            className="object-contain w-full h-full"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-lg font-semibold text-[#4a5a51] text-center max-w-44 mt-3">{cert.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </RevealWrapper>




            <RevealWrapper delay={0.3}>
              <div className="lg:pt-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 relative">

                  {/* Left side image block */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-40 h-32 sm:w-48 sm:h-36 md:w-52 md:h-44 lg:w-64 lg:h-56 overflow-hidden relative">
                      <Image
                        src="/Fragrance Collection-19.png"
                        alt="ISO Standards"
                        width={256}   
                        height={224} 
                        loading="lazy"
                        className="object-contain w-full h-full"
                      />
                    </div>

                  </div>

                  {/* Vertical line */}
                  <div className="hidden md:block bg-[#5e6e65] w-[1.5px] self-stretch mx-4"></div>

                  {/* Right side text */}
                  <div className="flex-1 space-y-8">
                    {isoStandards.map((standard, idx) => (
                      <div
                        key={idx}
                        ref={revealRef}
                        className="text-sm md:text-base lg:text-xl font-medium text-[#6b7c73] leading-tight lg:text-left text-center"
                      >
                        {standard}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </RevealWrapper>
          </div>
        </section>
      </main>
    </div>
  )
}
