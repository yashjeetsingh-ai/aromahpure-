'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '@/components/animation/RevealWrapper'

export default function AromaExperience() {
  const { revealRef } = useReveal()

  return (
    <section className="2xl:py-32 md:py-14 py-10 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48 bg-[#f2ece3]">
      <div className="container mx-auto text-center lg:block hidden">
        <RevealWrapper>
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[54px] text-[#5e6e65] font-medium mb-12 md:mb-16 font-abc tracking-wide"
            ref={revealRef}
          >
            Aromas should inspire, not interrupt.
          </h2>
        </RevealWrapper>
        <div className="space-y-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[38px] font-light leading-snug font-xyz text-[#47574c]">
          <RevealWrapper>
            <p
              className="text-sm sm:text-base md:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-light leading-aro transition-colors duration-500 [&>strong]:font-semibold [&>strong]:text-[#47574c]"
              ref={revealRef}
            >
              At <span className='font-medium'>Aromahpure Air</span>, we make your scent experience effortless by offering full-service
              programs that cover installation, regular maintenance, and dedicated support. From
              carefully curated fragrance selection to expert on-site servicing, we provide a seamless
              experience tailored to your space and brand goals.
            </p>
          </RevealWrapper>

        </div>
      </div>
      <div className="container mx-auto text-center block lg:hidden">
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[54px] text-[#5e6e65] font-medium mb-8 md:mb-16 font-abc tracking-wide"
          ref={revealRef}
        >
          Aromas should inspire, not interrupt.
        </h2>
        <div className="space-y-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] font-light leading-snug font-xyz text-[#47574c]">
          <p
            className="text-sm sm:text-base md:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-light leading-aro transition-colors duration-500 [&>strong]:font-semibold [&>strong]:text-[#47574c]"
            ref={revealRef}
          >
            At <span className='font-medium'>Aromahpure Air</span>, we make your scent experience effortless by offering full-service
            programs that cover installation, regular maintenance, and dedicated support. From
            carefully curated fragrance selection to expert on-site servicing, we provide a seamless
            experience tailored to your space and brand goals.
          </p>
        </div>
      </div>
    </section>
  )
}

