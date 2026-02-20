'use client';

import Image from 'next/image';
import RevealWrapper from '@/components/animation/RevealWrapper';
import useReveal from '@/hooks/useReveal';
import AnimatedLine from '../animation/AnimatedLine';
import CenterOutwardLine from '../animation/CenterOutwardLine';

export default function DiffuserProductSection() {
  const { revealRef } = useReveal();

  return (
    <div
      className="font-xyz overflow-hidden "
      style={{ backgroundImage: "url('/Our diffusers-09 (1).png')" }}
    >
      <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-20 pb-16 2xl:pb-20">
        {/* Header Section */}
        <div className="px-6 sm:px-10 lg:px-24 lg:mb-16">
          <RevealWrapper delay={0.1}>
            <h1
              className="text-[#4a5b53] font-medium 
                                       text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44px] 2xl:text-[52px] 
                                       lg:max-w-xl leading-diff text-center lg:text-left"
              ref={revealRef}
            >
              Elevate Every Space With Our Diffusers
            </h1>
          </RevealWrapper>
        </div>
        <div className="flex lg:hidden justify-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 px-4 sm:px-6 md:px-10 lg:px-16 mt-5">
          <CenterOutwardLine className="h-[1.5px] bg-[#7f9088]" duration={1.2} delay={0.3} />
        </div>

        {/* Product Section 1*/}
        <div className="lg:block hidden px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] xl:grid-cols-[450px_1fr] 2xl:grid-cols-[500px_1fr] gap-2 md:gap-10  xl:gap-[30px] lg:gap-[6px] items-stretch">
            {/* Left Column - Image */}
            <RevealWrapper delay={0.2}>
              <div className="border-[2px] border-[#a6b5ad]  bg-white flex justify-center items-center p-4 sm:p-6 lg:p-8 h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="relative flex justify-center items-center">
                  <Image
                    src="/Our diffusers-02.png"
                    alt="AP AIR - Small Tower Diffuser"
                    width={300}
                    height={556}
                    loading="lazy"
                    className="
                                        object-contain
                                        w-fit h-fit
                                      "
                  />
                </div>
              </div>
            </RevealWrapper>

            {/* Right Column - Product Info */}
            <RevealWrapper delay={0.3}>
              <div className="border-[2px] border-[#a6b5ad] bg-white flex flex-col p-4 sm:p-4 md:p-5 lg:p-6 2xl:p-8 justify-start h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="flex-1 overflow-auto lg:overflow-hidden">
                  {/* Title */}
                  <RevealWrapper delay={0.4}>
                    <h2
                      ref={revealRef}
                      className="text-[#5e6e65] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[38px] mb-2"
                    >
                      AP AIR - SMALL TOWER
                    </h2>
                  </RevealWrapper>

                  <RevealWrapper delay={0.5}>
                    <AnimatedLine
                      className="h-[1.2px] bg-[#4a5b53] w-[250px] md:w-[370px] lg:w-[450px] xl:w-[450px] 2xl:w-[500px] mb-4 sm:mb-6 md:mb-8"
                      start="top 85%"
                      end="center center"
                      scrub={true}
                      duration={1.5}
                    />
                  </RevealWrapper>

                  {/* Description */}
                  <RevealWrapper delay={0.5}>
                    <div ref={revealRef} className="mb-4 sm:mb-6 2xl:mb-8">
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium mb-3 leading-relaxed">
                        The AP AIR–Small Tower is a compact waterless diffuser designed for personal
                        and small spaces. With a 120 ml refill capacity and Type-C USB power supply,
                        it covers up to 300 sq. ft.
                      </p>
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium leading-relaxed">
                        Its aluminium build and ultra-quiet operation (&lt;38dBa) makes it ideal for
                        desktops or discreet scenting zones. Perfect for modern interiors which
                        requires low-profile diffusion
                      </p>
                    </div>
                  </RevealWrapper>

                  {/* Specifications */}
                  <RevealWrapper delay={0.6}>
                    <div>
                      <h3
                        ref={revealRef}
                        className="text-[#5e6e65] font-extrabold text-lg sm:text-3xl mb-6 tracking-wide"
                      >
                        SPECIFICATIONS
                      </h3>
                      <div className="space-y-2 sm:space-y-3 2xl:space-y-2 text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-base">
                        {/* Row 1: Size | Material */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Size :{' '}
                                <span className="font-medium text-[#6f7b75] tracking-wider">
                                  65x85x285 mm
                                </span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Material :{' '}
                                <span className="font-medium text-[#6f7b75]">Aluminium</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 2: Bottle Capacity | Power Supply */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Bottle Capacity :{' '}
                                <span className="font-medium text-[#6f7b75]">120 ml</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Power Supply :{' '}
                                <span className="font-medium text-[#6f7b75]">
                                  Type-C USB electric
                                </span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 3: Voltage | Colors */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Voltage :{' '}
                                <span className="font-medium text-[#6f7b75]">DC5V 2A</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Colors :{' '}
                                <span className="font-medium text-[#6f7b75]">Black and Silver</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 4: Power | Coverage */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Power : <span className="font-medium text-[#6f7b75]">10W</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Coverage :{' '}
                                <span className="font-medium text-[#6f7b75]">Upto 300 sq.ft</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 5: Noise (full width) */}
                        <RevealWrapper delay={0.3}>
                          <div className="flex items-center border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Noise :{' '}
                                <span className="font-medium text-[#6f7b75]">&lt;38dBA</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>
                      </div>
                    </div>
                  </RevealWrapper>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>

        {/* Product Section 1- MD and Mobile design*/}
        <div className="block lg:hidden px-4 sm:px-6 md:px-10 lg:px-16 mb-20">
          <div className="border-2 border-[#a6b5ad] bg-white p-6 sm:p-8">
            {/* Top Content - Full Width */}
            <RevealWrapper delay={0.1}>
              <div className="text-center mb-7 sm:mb-0">
                {/* Title */}
                <h2
                  ref={revealRef}
                  className="text-[#5e6e65] font-semibold text-xl sm:text-2xl md:text-3xl mb-8"
                >
                  AP AIR - SMALL TOWER
                </h2>

                {/* Description */}
                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light mb-5 leading-relaxed max-w-3xl mx-auto"
                >
                  The AP AIR–Small Tower is a compact waterless diffuser designed for personal and
                  small spaces. With a 120 ml refill capacity and Type-C USB power supply, it covers
                  up to 300 sq. ft.
                </p>
                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto"
                >
                  Its aluminium build and ultra-quiet operation (&lt;38dBa) makes it ideal for
                  desktops or discreet scenting zones. Perfect for modern interiors which requires
                  low-profile diffusion
                </p>
              </div>
            </RevealWrapper>

            {/* Bottom Content - Flex Left/Right */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* Left Side - Specifications */}
              <div className="flex-1 w-full sm:order-1 order-2">
                <h3
                  ref={revealRef}
                  className="text-[#5e6e65] font-bold text-lg sm:text-xl md:text-2xl mb-3 tracking-wide"
                >
                  SPECIFICATIONS
                </h3>

                <div className="grid grid-cols-1 gap-y-2 text-sm sm:text-base text-left w-full max-w-md">
                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Size: <span className="font-medium">65x85x285 mm</span>
                    </p>
                  </RevealWrapper>
                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Bottle Capacity: <span className="font-medium">120 ml</span>
                    </p>
                  </RevealWrapper>
                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Voltage: <span className="font-medium">DC5V 2A</span>
                    </p>
                  </RevealWrapper>
                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Power: <span className="font-medium">10W</span>
                    </p>
                  </RevealWrapper>
                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Noise: <span className="font-medium">&lt;38dBa</span>
                    </p>
                  </RevealWrapper>
                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Material: <span className="font-medium">Aluminium</span>
                    </p>
                  </RevealWrapper>
                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Power Supply: <span className="font-medium">Type-C USB electric</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Colors: <span className="font-medium">Black and Silver</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Coverage: <span className="font-medium">Upto 300 sq.ft</span>
                    </p>
                  </RevealWrapper>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex flex-1 justify-center items-center sm:order-2 order-1">
                <RevealWrapper delay={0.3}>
                  <Image
                    src="/Our diffusers-02.png"
                    alt="AP AIR - Small Tower Diffuser"
                    width={280}
                    height={600}
                    loading="lazy"
                    className="object-contain h-auto max-h-[500px]"
                  />
                </RevealWrapper>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section 2*/}
        <div className="lg:block hidden px-4 sm:px-6 md:px-10 lg:px-16 mt-8 md:mt-10 lg:mt-2 xl:mt-10 2xl:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] xl:grid-cols-[450px_1fr] 2xl:grid-cols-[500px_1fr] gap-2 md:gap-10  xl:gap-[30px] lg:gap-[6px] items-stretch">
            {/* Left Column - Image */}
            <RevealWrapper delay={0.2}>
              <div className="border-[2px] border-[#a6b5ad]  bg-white flex justify-center items-center p-4 sm:p-6 lg:p-8 h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="relative flex justify-center items-center">
                  <Image
                    src="/Our diffusers-03.png"
                    alt="AP AIR - Small Tower Diffuser"
                    width={300}
                    height={555}
                    loading="lazy"
                    className="
                                        object-contain
                                        w-[180px] h-[333px]       /* mobile */
                                        sm:w-[220px] sm:h-[407px] /* small screens */
                                        md:w-[260px] md:h-[481px] /* medium screens */
                                        lg:w-[280px] lg:h-[518px] /* large screens */
                                        xl:w-[300px] xl:h-[555px] /* extra large */
                                        2xl:w-[300px] 2xl:h-[555px] /* 2xl (same as xl) */
                                      "
                  />
                </div>
              </div>
            </RevealWrapper>

            {/* Right Column - Product Info */}
            <RevealWrapper delay={0.3}>
              <div className="border-[2px] border-[#a6b5ad] bg-white flex flex-col p-4 sm:p-4 md:p-5 lg:p-6 2xl:p-8 justify-start h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="flex-1 overflow-auto lg:overflow-hidden">
                  {/* Title */}
                  <RevealWrapper delay={0.4}>
                    <h2
                      ref={revealRef}
                      className="text-[#5e6e65] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[38px] mb-2"
                    >
                      AP AIR - TOWER 4000 C
                    </h2>
                  </RevealWrapper>

                  <RevealWrapper delay={0.5}>
                    <AnimatedLine
                      className="h-[1.2px] bg-[#4a5b53] w-[250px] md:w-[370px] lg:w-[450px] xl:w-[450px] 2xl:w-[500px] mb-4 sm:mb-6 md:mb-8"
                      start="top 85%"
                      end="center center"
                      scrub={true}
                      duration={1.5}
                    />
                  </RevealWrapper>

                  {/* Description */}
                  <RevealWrapper delay={0.5}>
                    <div ref={revealRef} className="mb-4 sm:mb-6 2xl:mb-8">
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium mb-3 leading-relaxed">
                        The AP AIR–Tower 4000C is designed for large-scale scenting in commercial
                        and hospitality spaces. A high-capacity 1500 ml PET bottle minimizes
                        refills, while ensuring uniform scent coverage across 3000 sq. ft.
                      </p>
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium leading-relaxed">
                        Built from aluminium with a quite operation (≤45dBA), its ideal for
                        freestanding use in high-traffic zones.
                      </p>
                    </div>
                  </RevealWrapper>

                  {/* Specifications */}
                  <RevealWrapper delay={0.6}>
                    <div>
                      <h3
                        ref={revealRef}
                        className="text-[#5e6e65] font-extrabold text-lg sm:text-3xl mb-6 tracking-wide"
                      >
                        SPECIFICATIONS
                      </h3>
                      <div className="space-y-2 sm:space-y-3 2xl:space-y-2 text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-base">
                        {/* Row 1: Size | Material */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Color :{' '}
                                <span className="font-medium text-[#6f7b75] tracking-wider">
                                  Titanium
                                </span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Power : <span className="font-medium text-[#6f7b75]">15W</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 2: Bottle Capacity | Power Supply */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Material :{' '}
                                <span className="font-medium text-[#6f7b75]">Aluminium</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Net Weight :{' '}
                                <span className="font-medium text-[#6f7b75]">5.8 Kg</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 3: Voltage | Colors */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Capacity :{' '}
                                <span className="font-medium text-[#6f7b75]">
                                  1500 ml PET bottle
                                </span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Noise : <span className="font-medium text-[#6f7b75]">≤ 45dBa</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 4: Power | Coverage */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Coverage :{' '}
                                <span className="font-medium text-[#6f7b75]">Upto 3000 sq.ft.</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Machine Size :{' '}
                                <span className="font-medium text-[#6f7b75]">
                                  L186*W186*H650 mm
                                </span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 5: Noise (full width) */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Voltage : <span className="font-medium text-[#6f7b75]">12V DC</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Control Way :{' '}
                                <span className="font-medium text-[#6f7b75]">Bluetooth</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>
                      </div>
                    </div>
                  </RevealWrapper>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>

        {/* Product Section 2- MD and Mobile design*/}
        <div className="block lg:hidden px-4 sm:px-6 md:px-10 lg:px-16 mb-20">
          <div className="border-2 border-[#a6b5ad] bg-white p-6 sm:p-8">
            {/* Top Content - Full Width */}
            <RevealWrapper delay={0.1}>
              <div className="text-center mb-7 sm:mb-0">
                {/* Title */}
                <h2
                  ref={revealRef}
                  className="text-[#5e6e65] font-semibold text-xl sm:text-2xl md:text-3xl mb-8"
                >
                  AP AIR - TOWER 4000 C
                </h2>

                {/* Description */}
                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light mb-5 leading-relaxed max-w-3xl mx-auto"
                >
                  The AP AIR–Tower 4000C is designed for large-scale scenting in commercial and
                  hospitality spaces. A high-capacity 1500 ml PET bottle minimizes refills, while
                  ensuring uniform scent coverage across 3000 sq. ft.
                </p>
                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto"
                >
                  Built from aluminium with a quite operation (≤45dBA), its ideal for freestanding
                  use in high-traffic zones.
                </p>
              </div>
            </RevealWrapper>

            {/* Bottom Content - Flex Left/Right */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* Left Side - Specifications */}
              <div className="flex-1 w-full sm:order-1 order-2">
                <h3
                  ref={revealRef}
                  className="text-[#5e6e65] font-bold text-lg sm:text-xl md:text-2xl mb-3 tracking-wide"
                >
                  SPECIFICATIONS
                </h3>

                <div className="grid grid-cols-1 gap-y-2 text-sm sm:text-base text-left w-full max-w-md">
                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Color: <span className="font-medium">Titanium</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Material: <span className="font-medium">Aluminium</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Capacity: <span className="font-medium">1500 ml PET bottle</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Coverage: <span className="font-medium">Upto 3000 sq.ft.</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Voltage: <span className="font-medium">12V DC</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Power: <span className="font-medium">15W</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Net Weight: <span className="font-medium">5.8 Kg</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Noise: <span className="font-medium">≤ 45dBa</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Machine Size: <span className="font-medium">L186*W186*H650 mm</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Control Way: <span className="font-medium">Bluetooth</span>
                    </p>
                  </RevealWrapper>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex flex-1 justify-center items-center sm:order-2 order-1">
                <RevealWrapper delay={0.3}>
                  <Image
                    src="/Our diffusers-03.png"
                    alt="AP AIR - Tower 4000 C Diffuser"
                    width={300}
                    height={555}
                    loading="lazy"
                    className="object-contain h-auto max-h-[500px]"
                  />
                </RevealWrapper>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section 3*/}
        <div className="lg:block hidden px-4 sm:px-6 md:px-10 lg:px-16 mt-8 md:mt-10 lg:mt-2 xl:mt-10 2xl:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] xl:grid-cols-[450px_1fr] 2xl:grid-cols-[500px_1fr] gap-2 md:gap-10  xl:gap-[30px] lg:gap-[6px] items-stretch">
            {/* Left Column - Image */}
            <RevealWrapper delay={0.2}>
              <div className="border-[2px] border-[#a6b5ad]  bg-white flex justify-center items-center p-4 sm:p-6 lg:p-8 h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="relative flex justify-center items-center">
                  <Image
                    src="/Our diffusers-04.png"
                    alt="AP AIR - Small Tower Diffuser"
                    width={432}
                    height={432}
                    loading="lazy"
                    className="
                                        object-contain
                                        w-fit h-fit
                                      "
                  />
                </div>
              </div>
            </RevealWrapper>

            {/* Right Column - Product Info */}
            <RevealWrapper delay={0.3}>
              <div className="border-[2px] border-[#a6b5ad] bg-white flex flex-col p-4 sm:p-4 md:p-5 lg:p-6 2xl:p-8 justify-start h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="flex-1 overflow-auto lg:overflow-hidden">
                  {/* Title */}
                  <RevealWrapper delay={0.4}>
                    <h2
                      ref={revealRef}
                      className="text-[#5e6e65] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[38px] mb-2"
                    >
                      AP AIR - 5000 C
                    </h2>
                  </RevealWrapper>

                  <RevealWrapper delay={0.5}>
                    <AnimatedLine
                      className="h-[1.2px] bg-[#4a5b53]  w-[170px] md:w-[270px] lg:w-[300px] xl:w-[300px] 2xl:w-[350px] mb-4 sm:mb-6 md:mb-8"
                      start="top 85%"
                      end="center center"
                      scrub={true}
                      duration={1.5}
                    />
                  </RevealWrapper>

                  {/* Description */}
                  <RevealWrapper delay={0.5}>
                    <div ref={revealRef} className="mb-4 sm:mb-6 2xl:mb-8">
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium mb-3 leading-relaxed">
                        The AP AIR–5000C is an HVAC diffuser designed for targeted scenting. Built
                        from durable metal alloy, it features a 1000ml refill and advanced
                        touch-panel control.
                      </p>
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium leading-relaxed">
                        Compact yet effective, it covers up to 5000 sq.ft. and is ideal for
                        workspaces, reception areas and larger space which requires scenting.
                      </p>
                    </div>
                  </RevealWrapper>

                  {/* Specifications */}
                  <RevealWrapper delay={0.6}>
                    <div>
                      <h3
                        ref={revealRef}
                        className="text-[#5e6e65] font-extrabold text-lg sm:text-3xl mb-6 tracking-wide"
                      >
                        SPECIFICATIONS
                      </h3>
                      <div className="space-y-2 sm:space-y-3 2xl:space-y-2 text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-base">
                        {/* Row 1: Size | Material */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Material :{' '}
                                <span className="font-medium text-[#6f7b75] tracking-wider">
                                  Metal
                                </span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Product Size :{' '}
                                <span className="font-medium text-[#6f7b75]">
                                  L17.2 * W17.2 * H26 cm
                                </span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 2: Bottle Capacity | Power Supply */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Voltage :{' '}
                                <span className="font-medium text-[#6f7b75]">DC24V Power: 48W</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Color : <span className="font-medium text-[#6f7b75]">Black</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 3: Voltage | Colors */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Capacity :{' '}
                                <span className="font-medium text-[#6f7b75]">1000 ml</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Operation :{' '}
                                <span className="font-medium text-[#6f7b75]">
                                  Touch & Bluetooth App
                                </span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 4: Power | Coverage */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Coverage :{' '}
                                <span className="font-medium text-[#6f7b75]">Upto 5000 sq.ft.</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                HVAC CONNECTABLE<span className="font-medium text-[#6f7b75]"></span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 5: Noise (full width) */}
                        <RevealWrapper delay={0.3}>
                          <div className="flex items-center border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                N W : <span className="font-medium text-[#6f7b75]">6 kg</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>
                      </div>
                    </div>
                  </RevealWrapper>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>

        {/* Product Section 3- MD and Mobile design*/}
        <div className="block lg:hidden px-4 sm:px-6 md:px-10 lg:px-16 mb-20">
          <div className="border-2 border-[#a6b5ad] bg-white p-6 sm:p-8">
            {/* Top Content - Full Width */}
            <RevealWrapper delay={0.1}>
              <div className="text-center mb-7 sm:mb-10">
                {/* Title */}
                <h2
                  ref={revealRef}
                  className="text-[#5e6e65] font-semibold text-xl sm:text-2xl md:text-3xl mb-8"
                >
                  AP AIR - 5000 C
                </h2>

                {/* Description */}
                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light mb-5 leading-relaxed max-w-3xl mx-auto"
                >
                  The AP AIR–5000C is an HVAC diffuser designed for targeted scenting. Built from
                  durable metal alloy, it features a 1000ml refill and advanced touch-panel control.
                </p>
                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto"
                >
                  Compact yet effective, it covers up to 5000 sq.ft. and is ideal for workspaces,
                  reception areas and larger space which requires scenting.
                </p>
              </div>
            </RevealWrapper>

            {/* Bottom Content - Flex Left/Right */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* Left Side - Specifications */}
              <div className="flex-1 w-full sm:order-1 order-2">
                <h3
                  ref={revealRef}
                  className="text-[#5e6e65] font-bold text-lg sm:text-xl md:text-2xl mb-3 tracking-wide"
                >
                  SPECIFICATIONS
                </h3>

                <div className="grid grid-cols-1 gap-y-2 text-sm sm:text-base text-left w-full max-w-md">
                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Material: <span className="font-medium">Metal</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Voltage: <span className="font-medium">DC24V</span> | Power:{' '}
                      <span className="font-medium">48W</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Capacity: <span className="font-medium">1000 ml</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Coverage: <span className="font-medium">Upto 5000 sq.ft.</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Net Weight: <span className="font-medium">6 Kg</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Product Size: <span className="font-medium">L17.2 * W17.2 * H26 cm</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Color: <span className="font-medium">Black</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Operation: <span className="font-medium">Touch & Bluetooth App</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      HVAC Connectable
                    </p>
                  </RevealWrapper>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex flex-1 justify-center items-center sm:order-2 order-1">
                <RevealWrapper delay={0.3}>
                  <Image
                    src="/Our diffusers-04.png"
                    alt="AP AIR - 5000 C Diffuser"
                    width={300}
                    height={500}
                    loading="lazy"
                    className="object-contain h-auto max-h-[500px]"
                  />
                </RevealWrapper>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section 4*/}
        <div className="lg:block hidden px-4 sm:px-6 md:px-10 lg:px-16 mt-8 md:mt-10 lg:mt-2 xl:mt-10 2xl:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] xl:grid-cols-[450px_1fr] 2xl:grid-cols-[500px_1fr] gap-2 md:gap-10  xl:gap-[30px] lg:gap-[6px] items-stretch">
            {/* Left Column - Image */}
            <RevealWrapper delay={0.2}>
              <div className="border-[2px] border-[#a6b5ad]  bg-white flex justify-center items-center p-4 sm:p-6 lg:p-8 h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="relative flex justify-center items-center">
                  <Image
                    src="/Our diffusers-05.png"
                    alt="AP AIR - Small Tower Diffuser"
                    width={432}
                    height={432}
                    loading="lazy"
                    className="
                                        object-contain
                                        w-fit h-fit
                                      "
                  />
                </div>
              </div>
            </RevealWrapper>

            {/* Right Column - Product Info */}
            <RevealWrapper delay={0.3}>
              <div className="border-[2px] border-[#a6b5ad] bg-white flex flex-col p-4 sm:p-4 md:p-5 lg:p-6 2xl:p-8 justify-start h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="flex-1 overflow-auto lg:overflow-hidden">
                  {/* Title */}
                  <RevealWrapper delay={0.4}>
                    <h2
                      ref={revealRef}
                      className="text-[#5e6e65] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[38px]mb-2"
                    >
                      AP AIR - 8000 C
                    </h2>
                  </RevealWrapper>

                  <RevealWrapper delay={0.5}>
                    <AnimatedLine
                      className="h-[1.2px] bg-[#4a5b53]  w-[170px] md:w-[270px] lg:w-[300px] xl:w-[330px] 2xl:w-[330px] mb-4 sm:mb-6 md:mb-8 mt-1"
                      start="top 85%"
                      end="center center"
                      scrub={true}
                      duration={1.5}
                    />
                  </RevealWrapper>

                  {/* Description */}
                  <RevealWrapper delay={0.5}>
                    <div ref={revealRef} className="mb-4 sm:mb-6 2xl:mb-8">
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium mb-3 leading-relaxed">
                        The AP AIR–8000C is a high-performance diffuser built for large spaces up to
                        8,000 sq.ft. With HVAC compatibility and a generous 2L HDPE refill tank, it
                        ensures consistent fragrance delivery across large spaces with minimal
                        maintenance.
                      </p>
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium leading-relaxed">
                        A sturdy metal body adds durability while maintaining a sleek, professional
                        look. The diffuser can be operated via mobile app. It is ideal for lobbies,
                        reception areas, and other spacious commercial environments.
                      </p>
                    </div>
                  </RevealWrapper>

                  {/* Specifications */}
                  <RevealWrapper delay={0.6}>
                    <div>
                      <h3
                        ref={revealRef}
                        className="text-[#5e6e65] font-extrabold text-lg sm:text-3xl mb-6 tracking-wide"
                      >
                        SPECIFICATIONS
                      </h3>
                      <div className="space-y-2 sm:space-y-3 2xl:space-y-2 text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-base">
                        {/* Row 1: Size | Material */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Material :{' '}
                                <span className="font-medium text-[#6f7b75] tracking-wider">
                                  Metal
                                </span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Product Size :{' '}
                                <span className="font-medium text-[#6f7b75]">
                                  L17.2 * W17.2 * H26 cm
                                </span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 2: Bottle Capacity | Power Supply */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Voltage :{' '}
                                <span className="font-medium text-[#6f7b75]">DC24V Power: 48W</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Color : <span className="font-medium text-[#6f7b75]">Black</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 3: Voltage | Colors */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Capacity :{' '}
                                <span className="font-medium text-[#6f7b75]">2000 ml</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Operation :{' '}
                                <span className="font-medium text-[#6f7b75]">
                                  Touch / Bluetooth App
                                </span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 4: Power | Coverage */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Coverage :{' '}
                                <span className="font-medium text-[#6f7b75]">Upto 8000 sq.ft.</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                HVAC CONNECTABLE<span className="font-medium text-[#6f7b75]"></span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 5: Noise (full width) */}
                        <RevealWrapper delay={0.3}>
                          <div className="flex items-center border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                N W : <span className="font-medium text-[#6f7b75]">6 kg</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>
                      </div>
                    </div>
                  </RevealWrapper>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>

        {/* Product Section 4- MD and Mobile design*/}
        <div className="block lg:hidden px-4 sm:px-6 md:px-10 lg:px-16 mb-20">
          <div className="border-2 border-[#a6b5ad] bg-white p-6 sm:p-8">
            {/* Top Content - Full Width */}
            <RevealWrapper delay={0.1}>
              <div className="text-center mb-7 sm:mb-10">
                {/* Title */}
                <h2
                  ref={revealRef}
                  className="text-[#5e6e65] font-semibold text-xl sm:text-2xl md:text-3xl mb-8"
                >
                  AP AIR - 8000 C
                </h2>

                {/* Description */}
                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light mb-5 leading-relaxed max-w-3xl mx-auto"
                >
                  The AP AIR–8000C is a high-performance diffuser built for large spaces up to 8,000
                  sq.ft. With HVAC compatibility and a generous 2L HDPE refill tank, it ensures
                  consistent fragrance delivery across large spaces with minimal maintenance.
                </p>
                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto"
                >
                  A sturdy metal body adds durability while maintaining a sleek, professional look.
                  The diffuser can be operated via mobile app. It is ideal for lobbies, reception
                  areas, and other spacious commercial environments.
                </p>
              </div>
            </RevealWrapper>

            {/* Bottom Content - Flex Left/Right */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* Left Side - Specifications */}
              <div className="flex-1 w-full sm:order-1 order-2">
                <h3
                  ref={revealRef}
                  className="text-[#5e6e65] font-bold text-lg sm:text-xl md:text-2xl mb-3 tracking-wide"
                >
                  SPECIFICATIONS
                </h3>

                <div className="grid grid-cols-1 gap-y-2 text-sm sm:text-base text-left w-full max-w-md">
                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Material: <span className="font-medium">Metal</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Voltage: <span className="font-medium">DC24V</span> | Power:{' '}
                      <span className="font-medium">48W</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Capacity: <span className="font-medium">2000 ml</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Coverage: <span className="font-medium">Upto 8000 sq.ft.</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Net Weight: <span className="font-medium">6 Kg</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Product Size: <span className="font-medium">L17.2 * W17.2 * H26 cm</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Color: <span className="font-medium">Black</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Operation: <span className="font-medium">Touch / Bluetooth App</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      HVAC Connectable
                    </p>
                  </RevealWrapper>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex flex-1 justify-center items-center sm:order-2 order-1">
                <RevealWrapper delay={0.3}>
                  <Image
                    src="/Our diffusers-05.png"
                    alt="AP AIR - 8000 C Diffuser"
                    width={300}
                    height={500}
                    loading="lazy"
                    className="object-contain h-auto max-h-[500px]"
                  />
                </RevealWrapper>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section 5*/}
        <div className="lg:block hidden px-4 sm:px-6 md:px-10 lg:px-16 mt-8 md:mt-10 lg:mt-2 xl:mt-10 2xl:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] xl:grid-cols-[450px_1fr] 2xl:grid-cols-[500px_1fr] gap-2 md:gap-10  xl:gap-[30px] lg:gap-[6px] items-stretch">
            {/* Left Column - Image */}
            <RevealWrapper delay={0.2}>
              <div className="border-[2px] border-[#a6b5ad]  bg-white flex justify-center items-center p-4 sm:p-6 lg:p-8 h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="relative flex justify-center items-center">
                  <Image
                    src="/Our diffusers-06.png"
                    alt="AP AIR - Small Tower Diffuser"
                    width={432}
                    height={294}
                    loading="lazy"
                    className="
                                        object-contain
                                        w-fit h-fit
                                      "
                  />
                </div>
              </div>
            </RevealWrapper>

            {/* Right Column - Product Info */}
            <RevealWrapper delay={0.3}>
              <div className="border-[2px] border-[#a6b5ad] bg-white flex flex-col p-4 sm:p-4 md:p-5 lg:p-6 2xl:p-8 justify-start h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="flex-1 overflow-auto lg:overflow-hidden">
                  {/* Title */}
                  <RevealWrapper delay={0.4}>
                    <h2
                      ref={revealRef}
                      className="text-[#5e6e65] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[38px] mb-2"
                    >
                      AP AIR - 400 C
                    </h2>
                  </RevealWrapper>

                  <RevealWrapper delay={0.5}>
                    <AnimatedLine
                      className="h-[1.2px] bg-[#4a5b53] w-[140px] md:w-[250px] lg:w-[300px] xl:w-[300px] 2xl:w-[300px] mb-4 sm:mb-6 md:mb-8"
                      start="top 85%"
                      end="center center"
                      scrub={true}
                      duration={1.5}
                    />
                  </RevealWrapper>

                  {/* Description */}
                  <RevealWrapper delay={0.5}>
                    <div ref={revealRef} className="mb-4 sm:mb-6 2xl:mb-8">
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium mb-3 leading-relaxed">
                        The AP AIR–400C is a compact aroma diffuser with a durable polypropylene
                        body, available in white and black. Designed for small to medium spaces, it
                        effectively covers areas up to 400 sq. ft. It can be wall-mounted or used as
                        a freestanding unit, offering versatile placement options.
                      </p>
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium leading-relaxed">
                        Additionally, it’s easy to use, with both manual button control and mobile
                        app compatibility, allowing convenient adjustment of fragrance intensity and
                        more.
                      </p>
                    </div>
                  </RevealWrapper>

                  {/* Specifications */}
                  <RevealWrapper delay={0.6}>
                    <div>
                      <h3
                        ref={revealRef}
                        className="text-[#5e6e65] font-extrabold text-lg sm:text-3xl mb-6 tracking-wide"
                      >
                        SPECIFICATIONS
                      </h3>
                      <div className="space-y-2 sm:space-y-3 2xl:space-y-2 text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-base">
                        {/* Row 1: Size | Material */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Material :{' '}
                                <span className="font-medium text-[#6f7b75] tracking-wider">
                                  Polypropylene
                                </span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Product Size :{' '}
                                <span className="font-medium text-[#6f7b75]">
                                  L15.8 * W7.5 * H21.2 cm
                                </span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 2: Bottle Capacity | Power Supply */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Voltage :{' '}
                                <span className="font-medium text-[#6f7b75]">DC12V Power: 5W</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Color :{' '}
                                <span className="font-medium text-[#6f7b75]">White, Black</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 3: Voltage | Colors */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Capacity :{' '}
                                <span className="font-medium text-[#6f7b75]">400 ml</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Operation :{' '}
                                <span className="font-medium text-[#6f7b75]">
                                  Buttons & Bluetooth
                                </span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 4: Power | Coverage */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Coverage :{' '}
                                <span className="font-medium text-[#6f7b75]">Upto 400 sq.ft.</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 5: Noise (full width) */}
                        <RevealWrapper delay={0.3}>
                          <div className="flex items-center border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                N W :{' '}
                                <span className="font-medium text-[#6f7b75]">
                                  0.8 kg&nbsp;&nbsp;&nbsp;G W: 1.05 kg
                                </span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>
                      </div>
                    </div>
                  </RevealWrapper>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>

        {/* Product Section 5- MD and Mobile design*/}
        <div className="block lg:hidden px-4 sm:px-6 md:px-10 lg:px-16 mb-20">
          <div className="border-2 border-[#a6b5ad] bg-white p-6 sm:p-8">
            {/* Top Content - Full Width */}
            <RevealWrapper delay={0.1}>
              <div className="text-center mb-7 sm:mb-10">
                {/* Title */}
                <h2
                  ref={revealRef}
                  className="text-[#5e6e65] font-semibold text-xl sm:text-2xl md:text-3xl mb-8"
                >
                  AP AIR - 400 C
                </h2>

                {/* Description */}
                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light mb-5 leading-relaxed max-w-3xl mx-auto"
                >
                  The AP AIR–400C is a compact aroma diffuser with a durable polypropylene body,
                  available in white and black. Designed for small to medium spaces, it effectively
                  covers areas up to 400 sq. ft. It can be wall-mounted or used as a freestanding
                  unit, offering versatile placement options.
                </p>
                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto"
                >
                  Additionally, it’s easy to use, with both manual button control and mobile app
                  compatibility, allowing convenient adjustment of fragrance intensity and more.
                </p>
              </div>
            </RevealWrapper>

            {/* Bottom Content - Flex Left/Right */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* Left Side - Specifications */}
              <div className="flex-1 w-full sm:order-1 order-2">
                <h3
                  ref={revealRef}
                  className="text-[#5e6e65] font-bold text-lg sm:text-xl md:text-2xl mb-3 tracking-wide"
                >
                  SPECIFICATIONS
                </h3>

                <div className="grid grid-cols-1 gap-y-2 text-sm sm:text-base text-left w-full max-w-md">
                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Material: <span className="font-medium">Polypropylene</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Voltage: <span className="font-medium">DC12V</span> | Power:{' '}
                      <span className="font-medium">5W</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Capacity: <span className="font-medium">400 ml</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Coverage: <span className="font-medium">Upto 400 sq.ft.</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      N W: <span className="font-medium">0.8 kg</span> &nbsp;&nbsp;&nbsp; G W:{' '}
                      <span className="font-medium">1.05 kg</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Product Size: <span className="font-medium">L15.8 * W7.5 * H21.2 cm</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Color: <span className="font-medium">White, Black</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Operation: <span className="font-medium">Buttons & Bluetooth</span>
                    </p>
                  </RevealWrapper>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex flex-1 justify-center items-center sm:order-2 order-1">
                <RevealWrapper delay={0.3}>
                  <Image
                    src="/Our diffusers-06.png"
                    alt="AP AIR - 400 C Diffuser"
                    width={300}
                    height={500}
                    loading="lazy"
                    className="object-contain h-auto max-h-[500px]"
                  />
                </RevealWrapper>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section 6*/}
        <div className="lg:block hidden px-4 sm:px-6 md:px-10 lg:px-16 mt-8 md:mt-10 lg:mt-2 xl:mt-10 2xl:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] xl:grid-cols-[450px_1fr] 2xl:grid-cols-[500px_1fr] gap-2 md:gap-10  xl:gap-[30px] lg:gap-[6px] items-stretch">
            {/* Left Column - Image */}
            <RevealWrapper delay={0.2}>
              <div className="border-[2px] border-[#a6b5ad]  bg-white flex justify-center items-center p-4 sm:p-6 lg:p-8 h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="relative flex justify-center items-center">
                  <Image
                    src="/Our diffusers-08.png"
                    alt="AP AIR - Small Tower Diffuser"
                    width={432}
                    height={279}
                    loading="lazy"
                    className="
                                        object-contain
                                        w-fit h-fit
                                      "
                  />
                </div>
              </div>
            </RevealWrapper>

            {/* Right Column - Product Info */}
            <RevealWrapper delay={0.3}>
              <div className="border-[2px] border-[#a6b5ad] bg-white flex flex-col p-4 sm:p-4 md:p-5 lg:p-6 2xl:p-8 justify-start h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="flex-1 overflow-auto lg:overflow-hidden">
                  {/* Title */}
                  <RevealWrapper delay={0.4}>
                    <h2
                      ref={revealRef}
                      className="text-[#5e6e65] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[38px] mb-2"
                    >
                      AP AIR - 2000 C
                    </h2>
                  </RevealWrapper>

                  <RevealWrapper delay={0.5}>
                    <AnimatedLine
                      className="h-[1.2px] bg-[#4a5b53] w-[170px] md:w-[270px] lg:w-[300px] xl:w-[320px] 2xl:w-[320px] mb-4 sm:mb-6 md:mb-8"
                      start="top 85%"
                      end="center center"
                      scrub={true}
                      duration={1.5}
                    />
                  </RevealWrapper>

                  {/* Description */}
                  <RevealWrapper delay={0.5}>
                    <div ref={revealRef} className="mb-4 sm:mb-6 2xl:mb-8">
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium mb-3 leading-relaxed">
                        The AP AIR–2000C strikes a balance between compact design and smart
                        functionality. Built from durable polypropylene with 800 ml capacity, it
                        covers areas up to 2000 sq. ft., making it ideal for medium-sized spaces.
                      </p>
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium leading-relaxed">
                        With Bluetooth connectivity and manual button controls, it offers user
                        friendly operation and flexible use. This diffuser can be used freestanding
                        or mounted on a wall, making it suitable for offices, hotels, and wellness
                        spaces., making it easy to adapt to offices, hospitality settings, or
                        wellness spaces.
                      </p>
                    </div>
                  </RevealWrapper>

                  {/* Specifications */}
                  <RevealWrapper delay={0.6}>
                    <div>
                      <h3
                        ref={revealRef}
                        className="text-[#5e6e65] font-extrabold text-lg sm:text-3xl mb-6 tracking-wide"
                      >
                        SPECIFICATIONS
                      </h3>
                      <div className="space-y-2 sm:space-y-3 2xl:space-y-2 text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-base">
                        {/* Row 1: Size | Material */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Material :{' '}
                                <span className="font-medium text-[#6f7b75] tracking-wider">
                                  Polypropylene
                                </span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Color :{' '}
                                <span className="font-medium text-[#6f7b75]">White, Black</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 2: Bottle Capacity | Power Supply */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Voltage :{' '}
                                <span className="font-medium text-[#6f7b75]">DC12V Power: 17W</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Operation :{' '}
                                <span className="font-medium text-[#6f7b75]">
                                  Buttons / Bluetooth
                                </span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 3: Voltage | Colors */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Capacity :{' '}
                                <span className="font-medium text-[#6f7b75]">
                                  800 ml, N W: 2 kg, G W: 3 kg
                                </span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 4: Power | Coverage */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Coverage :{' '}
                                <span className="font-medium text-[#6f7b75]">Upto 2000 sq.ft.</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 5: Noise (full width) */}
                        <RevealWrapper delay={0.3}>
                          <div className="flex items-center border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Product Size :{' '}
                                <span className="font-medium text-[#6f7b75]">
                                  L22.5 * W22.2 * H10.8 cm
                                </span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>
                      </div>
                    </div>
                  </RevealWrapper>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>

        {/* Product Section 6- MD and Mobile design*/}
        <div className="block lg:hidden px-4 sm:px-6 md:px-10 lg:px-16 mb-20">
          <div className="border-2 border-[#a6b5ad] bg-white p-6 sm:p-8">
            {/* Top Content - Full Width */}
            <RevealWrapper delay={0.1}>
              <div className="text-center mb-7 sm:mb-10">
                <h2
                  ref={revealRef}
                  className="text-[#5e6e65] font-semibold text-xl sm:text-2xl md:text-3xl mb-8"
                >
                  AP AIR - 2000 C
                </h2>

                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light mb-5 leading-relaxed max-w-3xl mx-auto"
                >
                  The AP AIR–2000C strikes a balance between compact design and smart functionality.
                  Built from durable polypropylene with 800 ml capacity, it covers areas up to 2000
                  sq. ft., making it ideal for medium-sized spaces.
                </p>
                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto"
                >
                  With Bluetooth connectivity and manual button controls, it offers user friendly
                  operation and flexible use. This diffuser can be used freestanding or mounted on a
                  wall, making it suitable for offices, hotels, and wellness spaces., making it easy
                  to adapt to offices, hospitality settings, or wellness spaces.
                </p>
              </div>
            </RevealWrapper>

            {/* Bottom Content - Flex Left/Right */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* Left Side - Specifications */}
              <div className="flex-1 w-full sm:order-1 order-2">
                <h3
                  ref={revealRef}
                  className="text-[#5e6e65] font-bold text-lg sm:text-xl md:text-2xl mb-3 tracking-wide"
                >
                  SPECIFICATIONS
                </h3>

                <div className="grid grid-cols-1 gap-y-2 text-sm sm:text-base text-left w-full max-w-md">
                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Material: <span className="font-medium">Polypropylene</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Voltage: <span className="font-medium">DC12V</span> | Power:{' '}
                      <span className="font-medium">17W</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Capacity:: <span className="font-medium">800 ml / 2 kg / 3 kg</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Coverage: <span className="font-medium">Upto 2000 sq.ft.</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Product Size: <span className="font-medium">L22.5 * W22.2 * H10.8 cm</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Color: <span className="font-medium">White, Black</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Operation: <span className="font-medium">Buttons / Bluetooth</span>
                    </p>
                  </RevealWrapper>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex flex-1 justify-center items-center sm:order-2 order-1">
                <RevealWrapper delay={0.3}>
                  <Image
                    src="/Our diffusers-08.png"
                    alt="AP AIR - 2000 C Diffuser"
                    width={300}
                    height={500}
                    loading="lazy"
                    className="object-contain h-auto max-h-[500px]"
                  />
                </RevealWrapper>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section 7*/}
        <div className="lg:block hidden px-4 sm:px-6 md:px-10 lg:px-16 mt-8 md:mt-10 lg:mt-2 xl:mt-10 2xl:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] xl:grid-cols-[450px_1fr] 2xl:grid-cols-[500px_1fr] gap-2 md:gap-10  xl:gap-[30px] lg:gap-[6px] items-stretch">
            {/* Left Column - Image */}
            <RevealWrapper delay={0.2}>
              <div className="border-[2px] border-[#a6b5ad]  bg-white flex justify-center items-center p-4 sm:p-6 lg:p-8 h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="relative flex justify-center items-center">
                  <Image
                    src="/Our diffusers-07.png"
                    alt="AP AIR - Small Tower Diffuser"
                    width={432}
                    height={323}
                    loading="lazy"
                    className="
                                        object-contain
                                        w-fit h-fit
                                      "
                  />
                </div>
              </div>
            </RevealWrapper>

            {/* Right Column - Product Info */}
            <RevealWrapper delay={0.3}>
              <div className="border-[2px] border-[#a6b5ad] bg-white flex flex-col p-4 sm:p-4 md:p-5 lg:p-6 2xl:p-8 justify-start h-[400px] sm:h-[400px] md:h-[500px] lg:h-[760px] xl:h-[680px] 2xl:h-[580px]">
                <div className="flex-1 overflow-auto lg:overflow-hidden">
                  {/* Title */}
                  <RevealWrapper delay={0.4}>
                    <h2
                      ref={revealRef}
                      className="text-[#5e6e65] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[38px] mb-2"
                    >
                      AP AIR- CAR DIFFUSER
                    </h2>
                  </RevealWrapper>

                  <RevealWrapper delay={0.5}>
                    <AnimatedLine
                      className="h-[1.2px] bg-[#4a5b53] w-[220px] md:w-[350px] lg:w-[400px] xl:w-[410px] 2xl:w-[450px] mb-4 sm:mb-6 md:mb-8"
                      start="top 85%"
                      end="center center"
                      scrub={true}
                      duration={1.5}
                    />
                  </RevealWrapper>

                  {/* Description */}
                  <RevealWrapper delay={0.5}>
                    <div ref={revealRef} className="mb-4 sm:mb-6 2xl:mb-8">
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium mb-3 leading-relaxed">
                        The Car Diffuser is a compact, versatile solution for your car, office, or
                        home. Its touch-panel interface allows you to easily adjust fragrance
                        intensity and switch between modes for a personalized scent experience.
                      </p>
                      <p className="text-[#6f7b75] text-sm sm:text-lg font-medium leading-relaxed">
                        Ideal for spaces up to 50 sq. ft., it uses advanced cold air diffusion to
                        convert liquid fragrance into ultra-fine particles, delivering a clean and
                        consistent aroma.
                      </p>
                    </div>
                  </RevealWrapper>

                  {/* Specifications */}
                  <RevealWrapper delay={0.6}>
                    <div>
                      <h3
                        ref={revealRef}
                        className="text-[#5e6e65] font-extrabold text-lg sm:text-3xl mb-6 tracking-wide"
                      >
                        SPECIFICATIONS
                      </h3>
                      <div className="space-y-2 sm:space-y-3 2xl:space-y-2 text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-base">
                        {/* Row 1: Size | Material */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4 ">
                                Material :{' '}
                                <span className="font-medium text-[#6f7b75] tracking-wider">
                                  Aluminium Alloy
                                </span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4 md:pl-0"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Operation :{' '}
                                <span className="font-medium text-[#6f7b75]">Touch Panel</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 2: Bottle Capacity | Power Supply */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Capacity : <span className="font-medium text-[#6f7b75]">10 ml</span>
                              </p>
                            </div>
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4 md:pl-0"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Installation :{' '}
                                <span className="font-medium text-[#6f7b75]">Desktop</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 3: Voltage | Colors */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Weight : <span className="font-medium text-[#6f7b75]">0.5 kg</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 4: Power | Coverage */}
                        <RevealWrapper delay={0.3}>
                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Size :{' '}
                                <span className="font-medium text-[#6f7b75]">D6.5 * H13 cm</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>

                        {/* Row 5: Noise (full width) */}
                        <RevealWrapper delay={0.3}>
                          <div className="flex items-center border-b border-[#6f7b75] pb-1 sm:pb-2">
                            <div
                              ref={revealRef}
                              className="flex items-center gap-1 sm:gap-2 mb-1.5 md:mb-0 pl-4"
                            >
                              <div className="w-1.5 h-1.5 bg-[#6f7b75] rounded-full flex-shrink-0"></div>
                              <p className="font-medium text-[#6f7b75] md:pl-4">
                                Coverage :{' '}
                                <span className="font-medium text-[#6f7b75]">Upto 50 sq.ft.</span>
                              </p>
                            </div>
                          </div>
                        </RevealWrapper>
                      </div>
                    </div>
                  </RevealWrapper>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>

        {/* Product Section 7- MD and Mobile design*/}
        <div className="block lg:hidden px-4 sm:px-6 md:px-10 lg:px-16 mb-20">
          <div className="border-2 border-[#a6b5ad] bg-white p-6 sm:p-8">
            {/* Top Content - Full Width */}
            <RevealWrapper delay={0.1}>
              <div className="text-center mb-7 sm:mb-10">
                <h2
                  ref={revealRef}
                  className="text-[#5e6e65] font-semibold text-xl sm:text-2xl md:text-3xl mb-8"
                >
                  AP AIR- CAR DIFFUSER
                </h2>

                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light mb-5 leading-relaxed max-w-3xl mx-auto"
                >
                  The Car Diffuser is a compact, versatile solution for your car, office, or home.
                  Its touch-panel interface allows you to easily adjust fragrance intensity and
                  switch between modes for a personalized scent experience.
                </p>
                <p
                  ref={revealRef}
                  className="text-[#6f7b75] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto"
                >
                  Ideal for spaces up to 50 sq. ft., it uses advanced cold air diffusion to convert
                  liquid fragrance into ultra-fine particles, delivering a clean and consistent
                  aroma.
                </p>
              </div>
            </RevealWrapper>

            {/* Bottom Content - Flex Left/Right */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* Left Side - Specifications */}
              <div className="flex-1 w-full sm:order-1 order-2">
                <h3
                  ref={revealRef}
                  className="text-[#5e6e65] font-bold text-lg sm:text-xl md:text-2xl mb-3 tracking-wide"
                >
                  SPECIFICATIONS
                </h3>

                <div className="grid grid-cols-1 gap-y-2 text-sm sm:text-base text-left w-full max-w-md">
                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Material: <span className="font-medium">Aluminium Alloy</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Capacity: <span className="font-medium">10 ml</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Weight: <span className="font-medium">0.5 kg</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Size: <span className="font-medium">D6.5 * H13 cm</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Coverage: <span className="font-medium">Upto 50 sq.ft.</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Operation: <span className="font-medium">Touch Panel</span>
                    </p>
                  </RevealWrapper>

                  <RevealWrapper delay={0.3}>
                    <p ref={revealRef} className="text-[#6f7b75] border-b border-[#a6b5ad] pb-1">
                      Installation: <span className="font-medium">Desktop</span>
                    </p>
                  </RevealWrapper>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex flex-1 justify-center items-center sm:order-2 order-1">
                <RevealWrapper delay={0.3}>
                  <Image
                    src="/Our diffusers-07.png"
                    alt="AP AIR - CAR Diffuser"
                    width={300}
                    height={500}
                    loading="lazy"
                    className="object-contain h-auto max-h-[500px]"
                  />
                </RevealWrapper>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
