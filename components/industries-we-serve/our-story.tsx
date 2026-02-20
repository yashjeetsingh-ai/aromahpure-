"use client";
import Image from "next/image";
import RevealWrapper from "@/components/animation/RevealWrapper";
import useReveal from "@/hooks/useReveal";
import AnimatedLine from "../animation/AnimatedLine";

export default function ScentingSolutionsPage() {
    const { revealRef } = useReveal();

    return (
        <>
            <div className="relative lg:font-abc font-xyz overflow-hidden  bg-full-image">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/Industries we serve -06 (2).png"
                        alt="Background"
                        fill
                        className="object-cover object-bottom translate-y-[-0px]" // Adjust upward
                        priority
                    />
                </div>
                <main className="pt-[350px] md:pt-[400px] lg:pt-[450px] xl:pt-[500px] 2xl:pt-[550px]">


                    <section className="pt-12 sm:pt-16 px-4  lg:px-4 xl:px-0">
                        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
                            {/* Left Column */}
                            <div className="w-full lg:w-[50%] flex flex-col">
                                {/* Top Border - full width of right column */}
                                <AnimatedLine
                                    className="w-full border-t border-[#5e6e65] mb-8 lg:max-w-[640px] lg:mx-auto lg:ml-10 lg:block hidden"
                                    start="top 85%"
                                    end="center center"
                                    scrub={true}
                                    duration={1.5}
                                />


                                {/* Inner content centered & limited width */}
                                <div className="w-full lg:max-w-[640px] lg:mx-auto lg:px-10 2xl:px-0">
                                    {/* Heading */}
                                    <h2
                                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif text-[#5e6e65] leading-sto max-w-[700px] lg:block hidden"
                                        ref={revealRef}
                                    >
                                        Scenting Solutions for Every Space
                                    </h2>
                                    <div className="w-full flex lg:hidden items-center lg:items-end mb-10 sm:mb-12 md:mb-14 lg:mb-28 xl:mb-32 ">
                                        {/* Left line */}
                                        <div className="flex-1 h-[1px] mb-7 bg-[#5e6e65]"></div>

                                        <div className="text-center max-w-[200px] sm:max-w-[300px] md:max-w-[320px] mx-auto md:px-2 px-1">
                                            <h1 className="text-[#5e6e65] font-medium leading-snug 
                                                    text-lg sm:text-xl md:text-3xl lg:text-4xl 
                                                    xl:text-[42px] 2xl:text-[48px] tracking-wide">
                                                Scenting Solutions for Every Space
                                            </h1>
                                        </div>


                                        {/* Right line */}
                                        <div className="flex-1 h-[1px] mb-7 bg-[#5e6e65]"></div>
                                    </div>


                                    {/* Paragraph */}
                                    <p className="lg:mt-8 text-[#708272] font-xyz text-base md:text-lg lg:text-2xl xl:text-xl 2xl:text-2xl text-center lg:text-left leading-sto111 max-w-2xl mx-auto" ref={revealRef}>
                                        Fragrance can elevate any space—from offices to homes, retail to hospitality—enhancing comfort, engagement, and visitor satisfaction.
                                    </p>

                                    <div
                                        className="relative w-full aspect-[4/5] md:aspect-[3/2.6] lg:aspect-[2.6/3.6] xl:aspect-[2.6/2.6] lg:max-w-[700px] md:max-w-full ml-auto overflow-hidden lg:hidden block mt-20"
                                        ref={revealRef}
                                    >
                                        <Image
                                            src="/Industries we serve -03.png"
                                            alt="Diffuser emitting mist"
                                            width={700}
                                            height={700}
                                            className="object-cover object-center w-full h-full"
                                            loading="lazy"
                                        />
                                    </div>



                                    <div className="flex lg:flex-col flex-row lg:items-start items-center lg:gap-0 md:gap-10 gap-8 mt-10 sm:mt-14 lg:mt-16 lg:px-0 md:px-12 sm:px-10 px-6">
                                        {/* Image icon */}
                                        <div
                                            className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-26 lg:h-26"
                                            ref={revealRef}
                                        >
                                            <Image
                                                src="/Assest industries we serve-01.png"
                                                alt="Icon"
                                                width={104} // matches largest size
                                                height={104}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Row: RETAIL text + line */}
                                        <div className="flex items-end lg:w-96 w-full lg:mt-5">
                                            {" "}
                                            {/* Changed w-96 to w-full for responsiveness */}
                                            <h3
                                                className="lg:font-extrabold font-semibold text-xl sm:text-3xl xl:text-2xl 2xl:text-3xl text-[#6b7a71] tracking-wide font-xyz whitespace-nowrap"
                                                ref={revealRef}
                                            >
                                                RETAIL
                                            </h3>
                                            {/* Replaced div with AnimatedLine */}
                                            <AnimatedLine
                                                className="flex-grow border-b border-[#6b7a71] opacity-40 ml-4 mb-1.5 h-[2px] lg:block hidden"
                                                start="top 85%"
                                                end="center center"
                                                scrub={true}
                                                duration={1.5}
                                            />
                                        </div>
                                    </div>



                                    {/* Paragraph 2 */}
                                    <p
                                        className="text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[22px] 2xl:text-[27px] text-[#5e6e65] font-light font-xyz mb-4 leading-our mt-10 sm:mt-14 lg:mt-10 lg:max-w-[530px] lg:px-0 md:px-12 sm:px-10 px-6"
                                        ref={revealRef}
                                    >
                                        According to studies,scent can
                                        increase retail sales by up to 11%
                                        and customer dwell time by 20%.
                                        A well-crafted fragrance
                                        strengthens brand recall,
                                        enhances product appeal, and
                                        turns ordinary shopping into a memorable sensory experience.

                                    </p>

                                    <div className="flex lg:hidden flex-row lg:items-start items-center lg:gap-0  md:gap-10 gap-8 mt-10 sm:mt-14 lg:mt-20  md:px-12 sm:px-10 px-6">
                                        {/* Image icon */}
                                        <div
                                            className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-26 lg:h-26"
                                            ref={revealRef}
                                        >
                                            <Image
                                                src="/Assest industries we serve-02.png"
                                                alt="Icon"
                                                width={104}
                                                height={104}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>



                                        {/* Row: RETAIL text + line */}
                                        <div className="flex items-end w-full max-w-[700px] lg:mt-5">
                                            <h3
                                                className="lg:font-extrabold font-semibold text-xl sm:text-3xl xl:text-2xl 2xl:text-3xl text-[#6b7a71] tracking-wide font-xyz whitespace-nowrap"
                                                ref={revealRef}
                                            >
                                                OFFICE SPACE
                                            </h3>
                                            {/* Replaced div with AnimatedLine */}
                                            <AnimatedLine
                                                className="flex-grow border-b border-[#6b7a71] opacity-40 ml-4 mb-1.5 h-[2px] lg:block hidden"
                                                start="top 85%"
                                                end="center center"
                                                scrub={true}
                                                duration={1.5}
                                            />
                                        </div>

                                    </div>



                                    {/* Paragraph 2 */}
                                    <p
                                        className="block lg:hidden text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[22px] 2xl:text-[27px] text-[#5e6e65] font-light font-xyz mb-4 leading-our mt-10 sm:mt-14 lg:mt-10 md:px-12 sm:px-10 px-6"
                                        ref={revealRef}
                                    >
                                        Scent enhances workplace
                                        well-being by uplifting mood,
                                        reducing stress, and supporting
                                        mental focus. A thoughtfully scented
                                        office contributes to a more positive
                                        atmosphere, helping teams feel
                                        energized, valued, and more
                                        productive throughout the day.
                                    </p>

                                    <div className="flex lg:hidden flex-row lg:items-start items-center lg:gap-0  md:gap-10 gap-8 mt-10 sm:mt-14 lg:mt-20 md:px-12 sm:px-10 px-6">
                                        {/* Image icon */}
                                        <div
                                            className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-26 lg:h-26"
                                            ref={revealRef}
                                        >
                                            <Image
                                                src="/Assest industries we serve-03.png"
                                                alt="Icon"
                                                width={104}
                                                height={104}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>


                                        {/* Row: RETAIL text + line */}

                                        <div className="flex items-end w-full max-w-[700px] lg:mt-5">
                                            <h3
                                                className="lg:font-extrabold font-semibold text-xl sm:text-3xl xl:text-2xl 2xl:text-3xl text-[#6b7a71] tracking-wide font-xyz whitespace-nowrap"
                                                ref={revealRef}
                                            >
                                                HOSPITALITY
                                            </h3>
                                            {/* Replaced div with AnimatedLine */}
                                            <AnimatedLine
                                                className="flex-grow border-b border-[#6b7a71] opacity-40 ml-4 mb-1.5 h-[2px] lg:block hidden"
                                                start="top 85%"
                                                end="center center"
                                                scrub={true}
                                                duration={1.5}
                                            />
                                        </div>

                                    </div>



                                    {/* Paragraph 2 */}
                                    <p
                                        className="block lg:hidden text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[22px] 2xl:text-[27px] text-[#5e6e65] font-light font-xyz mb-4 leading-our mt-10 sm:mt-14 lg:mt-10 md:px-12 sm:px-10 px-6"
                                        ref={revealRef}
                                    >
                                        In hospitality, the right fragrance
                                        elevates guest experience and
                                        reinforces brand identity. Fragrance
                                        shapes how guests feel the moment
                                        they arrive. A well-crafted fragrance
                                        helps form positive memories,
                                        encourages longer stays, and builds
                                        lasting loyalty across every stage of
                                        the visit.
                                    </p>
                                </div>
                                <div
                                    className="relative w-full max-w-[600px] sm:max-w-[700px] md:max-w-full lg:max-w-[90%] xl:max-w-[600px] 2xl:max-w-[700px] aspect-[4/4.2] sm:aspect-[3/3.2] md:aspect-[3/2.2] lg:aspect-[2.6/4] xl:aspect-[2.6/3.2] overflow-hidden my-6 sm:my-8 lg:my-20 xl:my-28 2xl:my-32"
                                    ref={revealRef}
                                >
                                    <Image
                                        src="/Industries we serve -07.png"
                                        alt="Diffuser emitting mist"
                                        width={700}
                                        height={600}
                                        className="object-cover object-center w-full h-full"
                                        loading="lazy"
                                    />
                                </div>




                            </div>

                            {/* Right Column */}
                            <div className="w-full lg:w-[50%] flex flex-col">
                                {/* Paragraph 1 */}
                                <div
                                    className="relative w-full aspect-[4/4] md:aspect-[2.6/4.2] lg:aspect-[2.6/3.6] xl:aspect-[2.6/2.6] lg:max-w-[700px] md:max-w-full ml-auto overflow-hidden lg:block hidden"
                                    ref={revealRef}
                                >
                                    <Image
                                        src="/Industries we serve -03.png"
                                        alt="Diffuser emitting mist"
                                        width={700}
                                        height={700}
                                        className="object-cover object-center w-full h-full"
                                        loading="lazy"
                                    />
                                </div>


                                {/* Paragraph 2 */}
                                <div className="w-full lg:max-w-[500px] mr-auto lg:pr-10 2xl:pr-0">
                                    <div className="lg:flex hidden flex-col items-start mt-10 sm:mt-14 lg:mt-20 gap-1">
                                        {/* Image icon */}
                                        <div
                                            className="flex-shrink-0 w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-26 lg:h-26"
                                            ref={revealRef}
                                        >
                                            <Image
                                                src="/Assest industries we serve-02.png"
                                                alt="Icon"
                                                width={104}
                                                height={104}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>



                                        {/* Row: RETAIL text + line */}
                                        <div className="flex items-end w-full max-w-[700px] mt-5">
                                            <h3
                                                className="font-extrabold text-xl sm:text-3xl xl:text-2xl 2xl:text-3xl text-[#6b7a71] tracking-wide font-xyz whitespace-nowrap"
                                                ref={revealRef}
                                            >
                                                OFFICE SPACE
                                            </h3>
                                            {/* Replaced div with AnimatedLine */}
                                            <AnimatedLine
                                                className="flex-grow border-b border-[#6b7a71] opacity-40 ml-4 mb-1.5 h-[2px]"
                                                start="top 85%"
                                                end="center center"
                                                scrub={true}
                                                duration={1.5}
                                            />
                                        </div>

                                    </div>



                                    {/* Paragraph 2 */}
                                    <p
                                        className="lg:block hidden text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[22px] 2xl:text-[27px] text-[#5e6e65] font-light font-xyz mb-4 leading-our mt-10 sm:mt-14 lg:mt-10"
                                        ref={revealRef}
                                    >
                                        Scent enhances workplace
                                        well-being by uplifting mood,
                                        reducing stress, and supporting
                                        mental focus. A thoughtfully scented
                                        office contributes to a more positive
                                        atmosphere, helping teams feel
                                        energized, valued, and more
                                        productive throughout the day.

                                    </p>
                                </div>

                                <div className="w-full lg:max-w-[500px] mr-auto lg:pr-10 2xl:pr-0">


                                    <div className="lg:flex hidden flex-col items-start mt-10 sm:mt-14 lg:mt-20 gap-1">
                                        {/* Image icon */}
                                        <div
                                            className="flex-shrink-0 w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] md:w-[96px] md:h-[96px] lg:w-[104px] lg:h-[104px]"
                                            ref={revealRef}
                                        >
                                            <Image
                                                src="/Assest industries we serve-03.png"
                                                alt="Icon"
                                                width={104}
                                                height={104}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>



                                        {/* Row: RETAIL text + line */}

                                        <div className="flex items-end w-full max-w-[700px] mt-5">
                                            <h3
                                                className="font-extrabold text-xl sm:text-3xl xl:text-2xl 2xl:text-3xl text-[#6b7a71] tracking-wide font-xyz whitespace-nowrap"
                                                ref={revealRef}
                                            >
                                                HOSPITALITY
                                            </h3>
                                            {/* Replaced div with AnimatedLine */}
                                            <AnimatedLine
                                                className="flex-grow border-b border-[#6b7a71] opacity-40 ml-4 mb-1.5 h-[2px]"
                                                start="top 85%"
                                                end="center center"
                                                scrub={true}
                                                duration={1.5}
                                            />
                                        </div>

                                    </div>



                                    {/* Paragraph 2 */}
                                    <p
                                        className="lg:block hidden text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[22px] 2xl:text-[27px] text-[#5e6e65] font-light font-xyz mb-4 leading-our mt-10 sm:mt-14 lg:mt-10"
                                        ref={revealRef}
                                    >
                                        In hospitality, the right fragrance
                                        elevates guest experience and
                                        reinforces brand identity. Fragrance
                                        shapes how guests feel the moment
                                        they arrive. A well-crafted fragrance
                                        helps form positive memories,
                                        encourages longer stays, and builds
                                        lasting loyalty across every stage of
                                        the visit.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <div className="relative font-abc overflow-hidden">
                <main>

                    <section className="md:pb-20 lg:pb-24 xl:pb-28 lg:px-4 xl:px-0">
                        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
                            {/* Left Column */}
                            <div className="w-full lg:w-[50%] flex flex-col">
                                {/* Inner content centered & limited width */}
                                <div className="w-full lg:max-w-[640px] lg:mx-auto lg:px-10 2xl:px-0">

                                    <div className="flex flex-row lg:flex-col lg:items-start items-center lg:gap-0  md:gap-10 gap-8 mt-10 sm:mt-14 lg:mt-16  lg:px-0 md:px-12 sm:px-10 px-6">
                                        {/* Image icon */}
                                        <div
                                            className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[104px] lg:h-[104px]"
                                            ref={revealRef}
                                        >
                                            <Image
                                                src="/Assest industries we serve-04.png"
                                                alt="Icon"
                                                width={104}
                                                height={104}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>


                                        {/* Row: RETAIL text + line */}
                                        <div className="flex items-end lg:w-96 w-full lg:mt-5">
                                            {" "}
                                            {/* Changed w-96 to w-full for responsiveness */}
                                            <h3
                                                className="lg:font-extrabold font-semibold text-xl sm:text-3xl xl:text-2xl 2xl:text-3xl text-[#6b7a71] tracking-wide font-xyz whitespace-nowrap"
                                                ref={revealRef}
                                            >
                                                REAL ESTATE
                                            </h3>
                                            {/* Replaced div with AnimatedLine */}
                                            <AnimatedLine
                                                className="flex-grow border-b border-[#6b7a71] opacity-40 ml-4 mb-1.5 h-[2px] lg:block hidden"
                                                start="top 85%"
                                                end="center center"
                                                scrub={true}
                                                duration={1.5}
                                            />
                                        </div>
                                    </div>



                                    {/* Paragraph 2 */}
                                    <p
                                        className="text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[22px] 2xl:text-[27px] text-[#5e6e65] font-light font-xyz mb-4 leading-our mt-10 sm:mt-14 lg:mt-10 lg:max-w-[730px] lg:px-0 md:px-12 sm:px-10 px-6"
                                        ref={revealRef}
                                    >
                                        In real estate, scent creates an emotional
                                        backdrop that helps buyers connect with
                                        a space. It makes it easier for them to
                                        envision living or working there and
                                        ensures the property leaves a lasting
                                        impression.
                                    </p>
                                </div>

                                <div className="w-full lg:max-w-[640px] lg:mx-auto lg:px-10 2xl:px-0">

                                    <div className="flex flex-row lg:flex-col lg:items-start items-center lg:gap-0  md:gap-10 gap-8 mt-10 sm:mt-14 lg:mt-16 lg:px-0 md:px-12 sm:px-10 px-6">
                                        {/* Image icon */}
                                        <div
                                            className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[104px] lg:h-[104px]"
                                            ref={revealRef}
                                        >
                                            <Image
                                                src="/Assest industries we serve-05.png"
                                                alt="Icon"
                                                width={104}
                                                height={104}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>


                                        {/* Row: RETAIL text + line */}
                                        <div className="flex items-end w-full lg:mt-5">
                                            {" "}
                                            {/* Changed w-96 to w-full for responsiveness */}
                                            <h3
                                                className="lg:font-extrabold font-semibold text-xl sm:text-3xl xl:text-2xl 2xl:text-3xl text-[#6b7a71] tracking-wide font-xyz whitespace-nowrap"
                                                ref={revealRef}
                                            >
                                                HEALTHCARE & WELLNESS
                                            </h3>
                                            {/* Replaced div with AnimatedLine */}
                                            <AnimatedLine
                                                className="flex-grow border-b border-[#6b7a71] opacity-40 ml-4 mb-1.5 h-[2px] lg:block hidden"
                                                start="top 85%"
                                                end="center center"
                                                scrub={true}
                                                duration={1.5}
                                            />
                                        </div>
                                    </div>



                                    {/* Paragraph 2 */}
                                    <p
                                        className="text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[22px] 2xl:text-[27px] text-[#5e6e65] font-light font-xyz mb-4 leading-our mt-10 sm:mt-14 lg:mt-10 lg:max-w-[730px] lg:px-0 md:px-12 sm:px-10 px-6"
                                        ref={revealRef}
                                    >
                                        In wellness centers, spas, and healthcare
                                        facilities, scent plays a direct role in
                                        determining how safe, cared for, and calm
                                        visitors feel. Studies show that aromas like
                                        lavender and eucalyptus can reduce
                                        anxiety levels by up to 30% in clinical
                                        settings.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="w-full lg:w-[50%] flex flex-col">
                                {/* Paragraph 1 */}
                                <div
                                    className="relative w-full md:aspect-[2.6/2.2] lg:aspect-[2.6/3.6] xl:aspect-[2.6/4] 2xl:aspect-[2.6/3.2] max-w-full xl:max-w-[500px] 2xl:max-w-[600px] ml-auto overflow-hidden lg:block hidden"
                                    ref={revealRef}
                                >
                                    <Image
                                        src="/Industries we serve -08.png"
                                        alt="Diffuser emitting mist"
                                        width={600}     
                                        height={800}    
                                        loading="lazy"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>



                            </div>
                        </div>
                    </section>
                </main>
            </div>


            <div className="w-[calc(100%-6rem)] h-[2px] bg-gray-500 mx-auto mb-20 lg:block hidden"></div>
        </>
    );
}
