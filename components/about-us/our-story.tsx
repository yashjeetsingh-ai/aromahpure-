"use client";
import Image from "next/image";
import RevealWrapper from "@/components/animation/RevealWrapper";
import useReveal from "@/hooks/useReveal";
import AnimatedLine from "../animation/AnimatedLine";

export default function OurStoryPage() {
  const { revealRef } = useReveal();

  return (
    <div className="font-xyz overflow-hidden">
      <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40">
        {/* Section 1: Our Story Intro */}
        <div className="lg:flex hidden items-end justify-end w-full gap-1"> {/* items-end for bottom align */}
          <RevealWrapper delay={0.1}>
            <h2
              className="text-[#4a5b53] font-semibold 
               text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] 2xl:text-[56px] 
               tracking-wide whitespace-nowrap"
              ref={revealRef}
            >
              OUR STORY
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            <AnimatedLine
              className="h-[2px] bg-[#4a5b53] 2xl:w-[48rem] xl:w-[31rem] lg:w-[16rem] md:w-[20rem] w-[10rem]"
              start="top 85%"
              end="center center"
              scrub={true}
              duration={1.5}
            />
          </RevealWrapper>
        </div>

        <div className="lg:hidden flex items-center w-full gap-4">
          <div className="flex-1 h-[1px] bg-[#4a5b53]"></div> {/* Left line */}

          <RevealWrapper delay={0.1}>
            <h2
              className="text-[#4a5b53] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] 2xl:text-[56px] tracking-wide whitespace-nowrap"
              ref={revealRef}
            >
              OUR STORY
            </h2>
          </RevealWrapper>

          <div className="flex-1 h-[1px] bg-[#4a5b53]"></div> {/* Right line */}
        </div>




        <section className="py-12 sm:py-16 md:pb-20 lg:pb-24 xl:pb-12 2xl:pb-28">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
            {/* Left Column */}
            <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start">

              <RevealWrapper delay={0.2}>
                <p
                  className="block lg:hidden text-base text-center sm:text-lg md:text-base lg:text-[22px] xl:text-[26px] 2xl:text-[27px] text-[#5e6e65] font-medium font-xyz mb-20 leading-our max-w-[720px] px-4 xl:px-0"
                >
                  Established in 2022 by Mr. Akshit Mittal and Dr.
                  Anirudh Bansal, Aromahpure began with a singular
                  vision, to craft premium fragrances that leave a
                  lasting impression. What started as a passion to bring
                  emotion-driven scent experiences into everyday
                  spaces quickly evolved into one of the leading names
                  in Ambient Scenting.
                </p>
              </RevealWrapper>

              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[2.6/4] max-w-[520px] overflow-hidden shadow-lg">
                <Image
                  src="/About Us-04.png"
                  alt="Diffuser emitting mist"
                  width={520}
                  height={650}
                  loading="lazy"
                  className="object-cover object-center w-full h-full"
                />
              </div>




              {/* Aromahpure Air Reimagines Text */}
              <RevealWrapper delay={0.4}>
                <div className="lg:flex hidden flex-col justify-center items-center font-abc mt-12 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-14 2xl:mt-24 xl:px-0 px-4">
                  {/* Top lines */}
                  <div className="lg:flex items-start justify-center w-full max-w-full lg:max-w-[60%] hidden space-x-8">
                    <AnimatedLine className="h-[2px] flex-1 bg-[#7a8a80]" duration={3.0} />
                    <AnimatedLine className="h-[2px] w-8 sm:w-10 bg-[#7a8a80]" duration={6.0} />
                  </div>
                  {/* Single border - mobile */}
                  <AnimatedLine className="lg:hidden block w-full border-t-2 border-[#7a8a80] px-4" duration={3.0} />


                  <p
                    className="md:text-left text-justify text-base md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[40px] 
                 text-[#4a5a51] font-medium leading-our1 max-w-full lg:max-w-[60%]  py-8 xl:py-10"
                    ref={revealRef}
                  >
                    Aromahpure Air specialises in ambient scenting with advanced diffusion technology and curated fragrances that enhance every space and create memorable experiences.
                  </p>

                  {/* Bottom lines */}
                  <div className="lg:flex items-start justify-center w-full max-w-full lg:max-w-[60%] hidden space-x-8">
                    <AnimatedLine className="h-[2px] flex-1 bg-[#7a8a80]" duration={3.0} />
                    <AnimatedLine className="h-[2px] w-8 sm:w-10 bg-[#7a8a80]" duration={6.0} />
                  </div>
                  {/* Single border - mobile */}
                  <AnimatedLine className="lg:hidden block w-full border-t-2 border-[#7a8a80] px-4" duration={3.0} />
                </div>
              </RevealWrapper>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-[60%] flex flex-col mt-4 sm:mt-6 lg:mt-0">
              {/* Paragraph 1 */}
              <RevealWrapper delay={0.2}>
                <p
                  className="lg:block hidden text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[22px] 2xl:text-[27px] text-[#5e6e65] 2xl:mb-4 font-medium font-xyz leading-our max-w-full xl:max-w-[750px] 2xl:max-w-[930px] px-4 xl:px-0"
                  ref={revealRef}
                >
                  Established in 2022 by Mr. Akshit Mittal and Dr. Anirudh Bansal, Aromahpure began with a singular vision to craft premium fragrances that leave a lasting impression. What started as a passion to bring emotion-driven scent experiences into everyday spaces quickly evolved into one of the leading names in Ambient Scenting.
                </p>
              </RevealWrapper>

              {/* Paragraph 2 */}
              <RevealWrapper delay={0.3}>
                <p
                  className="text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[22px] 2xl:text-[27px] text-[#5e6e65] font-light font-xyz 2xl:mb-4 leading-our lg:max-w-full xl:max-w-[750px] 2xl:max-w-[930px] mt-10 sm:mt-14 lg:mt-16 max-w-[720px] mx-auto lg:mx-0 px-4 xl:px-0 lg:text-left text-center"
                  ref={revealRef}
                >
                  In just two years, Aromahpure has reached
                  over 15 million consumers and partnered with
                  more than 50 top-tier clients including malls,
                  hotels, and luxury showrooms delivering scent
                  solutions that enrich environments and
                  elevate experiences.
                </p>
              </RevealWrapper>

              <RevealWrapper delay={0.3}>
                <p
                  className="block lg:hidden mt-10 sm:mt-14 lg:mt-16 text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[26px] 2xl:text-[27px] text-[#5e6e65] font-light font-xyz leading-our max-w-[720px] mx-auto px-4 xl:px-0 lg:text-left text-center"
                  ref={revealRef}
                >
                  With rising demand from commercial,
                  corporate and institutional clients, we
                  launched Aromahpure Air—a
                  specialized division offering intelligent
                  fragrance diffusion systems. From
                  expert consultation and tailored
                  installation to ongoing servicing,
                  Aromahpure Air delivers uniform,
                  high-quality scenting that transforms
                  any space.
                </p>
              </RevealWrapper>

              {/* Image */}
              <div className="mt-16 sm:mt-20 lg:mt-24 flex justify-end">
                <div className="relative w-full aspect-[16/9] max-w-[980px] overflow-hidden shadow-lg mx-auto lg:mx-0">
                  <Image
                    src="/About Us-05.png"
                    alt="Person interacting with diffuser"
                    width={980}
                    height={551}
                    loading="lazy"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>

              {/* Paragraph 3 */}
              <RevealWrapper delay={0.3}>
                <p
                  className="lg:block hidden mt-10 sm:mt-14 lg:mt-16 text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[22px] 2xl:text-[27px] text-[#5e6e65] font-light font-xyz leading-our max-w-[820px] mx-auto px-4 xl:px-0"
                  ref={revealRef}
                >
                  With rising demand from commercial,
                  corporate and institutional clients, we
                  launched Aromahpure Air—a
                  specialized division offering intelligent
                  fragrance diffusion systems. From
                  expert consultation and tailored
                  installation to ongoing servicing,
                  Aromahpure Air delivers uniform,
                  high-quality scenting that transforms
                  any space.
                </p>
              </RevealWrapper>

              <RevealWrapper delay={0.4}>
                <div className="flex lg:hidden flex-col justify-center items-center font-abc mt-12 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-14 2xl:mt-24 xl:px-0 px-4">

                  {/* Centered smaller line */}
                  <AnimatedLine
                    className="border-t-2 border-[#7a8a80] md:w-60 w-40" // w-24 = smaller width
                    duration={3.0}
                  />

                  <p
                    className="text-base md:text-xl lg:text-2xl xl:text-[32px] 2xl:text-[40px] 
                  text-[#4a5a51] font-medium leading-our1 lg:max-w-[60%] py-8 xl:py-10 max-w-[720px] mx-auto px-4 xl:px-0 text-center" // text-center to align with line
                    ref={revealRef}
                  >
                    Aromahpure Air specialises in ambient scenting with advanced diffusion technology and curated fragrances that enhance every space and create memorable experiences.
                  </p>

                </div>
              </RevealWrapper>


              {/* Paragraph 4 */}
              <RevealWrapper delay={0.5}>
                <p
                  className="mt-10 sm:mt-14 lg:mt-16 text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[22px] 2xl:text-[27px] text-[#5e6e65] font-light font-xyz leading-our lg:max-w-[820px] max-w-[720px] mx-auto px-4 xl:px-0 lg:text-left text-center "
                  ref={revealRef}
                >
                  Backed by Aromahpure’s commitment
                  to quality, innovation, and design,
                  Aromahpure Air is not just a service—it’s
                  a fragrance partner for those who want
                  to transform their space into an
                  experience.
                </p>
              </RevealWrapper>
            </div>
          </div>
        </section>




        <section className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[420px] xl:h-[500px] 2xl:h-[560px] overflow-hidden mt-12">
          <Image
            src="/About Us-03.png"
            alt="Person interacting with diffuser"
            width={1920}
            height={1080}
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </section>



        <section className="max-w-7xl container mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-20 lg:py-48 xl:py-24 2xl:py-48 grid grid-cols-1 lg:grid-cols-[0.8fr_1px_1.5fr] gap-x-8 sm:gap-x-16 md:gap-x-24  lg:gap-y-32 items-center font-xyz">
          {/* Vision Row */}
          <RevealWrapper delay={0.1}>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 2xl:text-[54px] text-[#5e6e65] font-medium font-xyz tracking-wide leading-tight lg:text-left text-center"
              ref={revealRef}
            >
              VISION
            </h2>
          </RevealWrapper>
          {/* Vertical line for md and above */}
          <div className="hidden lg:block bg-[#91a29a] w-[1.6px] self-stretch mx-2 sm:mx-4 md:mx-6"></div>

          <div className="block lg:hidden mx-auto md:w-[160px] w-[130px] h-[1.3px] bg-[#91a29a] mt-1"></div>

          <RevealWrapper delay={0.1}>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[20px] 2xl:text-[30px] text-[#7a8a7f] font-light leading-relaxed lg:mt-0 mt-10 lg:text-left text-center"
              ref={revealRef}
            >
              Aromahpure Air aspires to be the world's
              leading ambient fragrance brand enriched
              with cutting edge technology in premium
              fragrance solutions, setting the standard for
              quality and innovation in the industry.
            </p>
          </RevealWrapper>

          {/* Mission Row */}
          <RevealWrapper >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 2xl:text-[54px] text-[#5e6e65] font-medium font-xyz tracking-wide leading-tight lg:mt-0 md:mt-20 mt-12 lg:text-left text-center"
              ref={revealRef}
            >
              MISSION
            </h2>
          </RevealWrapper >
          {/* Vertical line for md and above */}
          <div className="hidden lg:block bg-[#91a29a] w-[1.6px] self-stretch mx-2 sm:mx-4 md:mx-6"></div>

          <div className="block lg:hidden mx-auto md:w-[200px] w-[140px] h-[1.3px] bg-[#91a29a] mt-1"></div>

          <RevealWrapper >
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[20px] 2xl:text-[30px] text-[#7a8a7f] font-light leading-relaxed lg:mt-0 mt-10 lg:text-left text-center"
              ref={revealRef}
            >
              Aromahpure Air is dedicated to offering
              the highest-quality fragrances,
              combining exceptional ingredients and
              advanced technology. Our mission is to
              create innovative scent solutions that not
              only meet but exceed customer
              expectations, with a deep commitment
              to sustainability and social responsibility.
            </p>
          </RevealWrapper>
        </section>


      </main>
    </div>
  );
}
