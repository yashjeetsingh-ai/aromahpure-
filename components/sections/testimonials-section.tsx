'use client'

import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import { ArrowRight, ArrowLeft, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { usePageNavigation } from '@/hooks/usePageNavigation'

export default function TestimonialsSection() {
    const { revealRef: textRevealRef } = useReveal()
    const brandSliderRef = useRef<HTMLDivElement>(null)
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    // Swiper instance ref for direct control
    const swiperRef = useRef<any>(null);

    // Use our custom page navigation hook
    usePageNavigation(() => {
        // Reset swiper when page navigates
        if (swiperRef.current) {
            swiperRef.current.update();
        }
    });

    const brands = [
        // { src: '/Untitled-10-05.png', alt: 'Deloitte Logo' },
        // { src: '/Untitled-10-06.png', alt: 'Innovatiview Logo' },
        // { src: '/Untitled-10-07.png', alt: 'The Zora Logo' },
        // Duplicate the first three to ensure enough content for a smooth loop
        { src: '/Website_logos_clients-10_1_optimized.png', alt: 'Deloitte Logo' },
        { src: '/Website_logos_clients-11_1_optimized.png', alt: 'Innovatiview Logo' },
        { src: '/Website_logos_clients-13_1_optimized.png', alt: 'The Zora Logo' },
        { src: '/Website_logos_clients-12_1_optimized.png', alt: 'The Zora Logo' },
        { src: '/Website_logos_clients-09_1_optimized.png', alt: 'The Zora Logo' },
        { src: '/Website_logos_clients-08_1_optimized.png', alt: 'The Zora Logo' },
        { src: '/Website_logos_clients-07_1_optimized.png', alt: 'The Zora Logo' },
        { src: '/Website_logos_clients-06_1_optimized.png', alt: 'The Zora Logo' },
        { src: '/Home_page_Aromahpure_Air-36_optimized.png', alt: 'The Zora Logo' },
        { src: '/Home_page_Aromahpure_Air-35_optimized.png', alt: 'The Zora Logo' },
        { src: '/Home_page_Aromahpure_Air-34_optimized.png', alt: 'The Zora Logo' },
    ]

    const testimonials = [
        {
            quote: 'The technical team was well-informed and genuinely committed to helping us find the right diffuser. Their attention to detail and willingness to assist made the entire process seamless.',
            rating: 5,
            author: 'Facilities Lead, AAI',
        },
        {
            quote: 'We’ve received positive feedback from both staff and travelers. The fragrance solution has genuinely uplifted the airport atmosphere.',
            rating: 5,
            author: 'Operations Manager,GMR Group',
        },
        {
            quote: 'Aromahpure Air’s diffusers are a game changer — elegant design, long-lasting premium scents, and truly exceptional customer support.',
            rating: 5,
            author: 'Head of Operations, Get It Rent',
        },
        {
            "quote": "We couldn't be more pleased with my experience using these fragrance diffusers and the incredible selection of fragrances available. The quality and service both are exceptional.",
            "rating": 5,
            "author": "Managing Director, Mobbiboost"
        },
        {
            quote: 'There’s a noticeable difference in the way our spaces feel now—brighter, fresher, and more inviting.',
            rating: 5,
            author: 'General Manager, Spark Minda Foundation',
        }
    ]

    // GSAP for Brand Logo Auto-Scroll with Hover Pause
    useGSAP(() => {
  const slider = brandSliderRef.current
  if (!slider) return

  const inner = slider.querySelector('.brand-slider-inner') as HTMLElement
  if (!inner) return

  // Total width of half content (kyunki double brands diye hain)
  const contentWidth = inner.scrollWidth / 2;

  const tl = gsap.to(inner, {
    x: -contentWidth,
    ease: "none",
    duration: 20, // speed adjust karo (kam = fast, zyada = slow)
    repeat: -1,
  });

  const pause = () => tl.pause()
  const play = () => tl.play()

  slider.addEventListener("mouseenter", pause)
  slider.addEventListener("mouseleave", play)

  return () => {
    slider.removeEventListener("mouseenter", pause)
    slider.removeEventListener("mouseleave", play)
    tl.kill()
  }
}, { scope: brandSliderRef })



    return (
        <section className="font-xyz pt-20 bg-[#F7F2EB]">
            {/* Top Section: Trusted by Great Brands */}
           <div className="bg-[#5e6e65] py-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-[1500px] mx-auto flex flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Heading */}
        <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px] text-white font-medium text-center lg:text-left w-full lg:w-auto md:max-w-[400px] max-w-[110px] whitespace-normal">
          Trusted by Great Brands
        </h2>

        {/* Brand Logo Slider */}
        <div className="w-full lg:flex-grow max-w-full overflow-hidden pr-[10px]">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true} // continuous scroll
            allowTouchMove={false} // no drag
            slidesPerView="auto"
            spaceBetween={80} // 👈 same as lg:gap-28 (100px approx)
            autoplay={{
              delay: 0, // no delay
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // 👈 hover par pause
            }}
            speed={2000} // 👈 20s duration same as GSAP duration:20
            className="brand-slider-inner flex items-center"
          >
            {[...brands, ...brands].map((brand, index) => (
              <SwiperSlide
                key={index}
                className="!w-auto flex-shrink-0 flex items-center"
              >
                <Image
                  src={brand.src || "/placeholder.svg"}
                  alt={brand.alt}
                  width={250}
                  height={120}
                  className="object-contain w-[220px] sm:h-56 h-40"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
            {/* Bottom Section: What Our Customers Are Saying */}
            <div className="bg-[#f2ece3] py-20 sm:py-24 md:py-28 lg:py-32 xl:py-40 px-4 sm:px-10 md:pl-14 lg:px-24 xl:px-32 w-full">
                <div className="flex flex-row gap-12 md:gap-20 xl:gap-24 w-full">

                    {/* Left Content */}
                    <div className="w-1/6 flex flex-col items-start mb-10 md:mb-0">
                        <Image
                            src="/Home page Aromahpure Air-42.png"
                            alt="Quote Icon"
                            width={100}
                            height={100}
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-6 object-contain"
                            loading="lazy"
                        />
                        <RevealWrapper delay={0.1}>
                            <h3 className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[22px] text-black font-medium leading-tight mb-6 uppercase max-w-full text-left">
                                WHAT OUR CUSTOMERS ARE SAYING
                            </h3>
                        </RevealWrapper>
                        <RevealWrapper delay={0.1}>
                            <Link
                                href="#"
                                className="inline-flex items-center text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-normal tracking-wider group"
                            >
                                <span className="text-base sm:text-lg md:text-base font-extrabold">&larr;</span>
                                <span className="h-[1px] w-10 sm:w-28 md:w-32 lg:w-14 bg-[#5e6e65] mx-2 translate-y-[1px] mt-0.5"></span>
                                <span className="text-base sm:text-lg md:text-base font-extrabold">&rarr;</span>
                            </Link>
                        </RevealWrapper>
                    </div>

                    {/* Right Content: Testimonial Slider */}
                    <div className="2xl:w-2/3 lg:w-10/12 w-2/3 flex-shrink-0 relative">
                        <Swiper
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper
                                setIsBeginning(swiper.isBeginning)
                                setIsEnd(swiper.isEnd)
                            }}
                            onSlideChange={(swiper) => {
                                setIsBeginning(swiper.isBeginning)
                                setIsEnd(swiper.isEnd)
                            }}
                            modules={[Navigation, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={false}
                            autoplay={false}
                            breakpoints={{
                                375: { slidesPerView: 1, spaceBetween: 20 }, // mobile: 1 per row
                                768: { slidesPerView: 1.2, spaceBetween: 30 }, // md: 2 per row
                                1024: { slidesPerView: 2, spaceBetween: 30 }, // lg: 2 per row
                                1280: { slidesPerView: 3, spaceBetween: 30 }, // xl: 3 per row
                            }}
                            className="w-full"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="bg-[#D7D5C9] p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm h-full flex flex-col min-h-[200px] md:min-h-[350px] xl:min-h-[440px] 2xl:min-h-[350px] w-full">

                                        {/* Quote text with fixed height */}
                                        <p
                                            className="text-sm sm:text-base md:text-lg text-black font-light leading-relaxed mb-4 overflow-hidden text-ellipsis min-h-52"

                                        >
                                            &quot;{testimonial.quote}&quot;
                                        </p>

                                        <div className="mt-auto">
                                            <div className="flex items-center mb-2">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-5 h-5 text-[#FCD18B] fill-[#FCD18B]"
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-xs sm:text-sm md:text-base text-black font-semibold min-h-10">
                                                {testimonial.author}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            ))}
                        </Swiper>

                        {/* Custom Navigation Arrows */}
                        <div className="absolute -bottom-14 md:-bottom-[70px] xl:-bottom-20 lg:right-0 md:right-20 right-0 z-20 flex gap-3">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                disabled={isBeginning}
                                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border-2 transition-colors duration-200
                                 border-[#5e6e65] text-[#5e6e65] bg-transparent hover:bg-[#5e6e65] hover:text-white
                                 disabled:border-gray-300 disabled:text-gray-400 disabled:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:hover:text-gray-400
                               `}
                                aria-label="Previous testimonial"
                            >
                                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>

                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                disabled={isEnd}
                                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border-2 transition-colors duration-200
                                  border-[#5e6e65] text-[#5e6e65] bg-transparent hover:bg-[#5e6e65] hover:text-white
                                  disabled:border-gray-300 disabled:text-gray-400 disabled:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-gray-100                               disabled:hover:text-gray-400
                                `}
                                aria-label="Next testimonial"
                            >
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>

                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
