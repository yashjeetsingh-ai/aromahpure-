"use client"

import Image from "next/image"
import RevealWrapper from "@/components/animation/RevealWrapper"
import useReveal from "@/hooks/useReveal"

export default function FragranceCategoriesSection() {
    const { revealRef } = useReveal()

    const categories = [
        {
            id: 1,
            title: "WOODY",
            description: "This family evokes the grounding calm of nature, with deep, dry, and smooth notes that bring warmth and timeless sophistication.",
            image: "/Fragrance Collection-25.png",
            position: "right",
        },
        {
            id: 2,
            title: "FLORAL",
            description: "Inspired by blooming gardens and soft petals, floral scents capture elegance, romance, and the gentle beauty of nature.",
            image: "/Fragrance Collection-26.png",
            position: "left",
        },
        {
            id: 3,
            title: "ORIENTAL",
            description: "Rich, sensual, and enveloping often featuring spices, amber, and resins that create a mysterious and opulent atmosphere.",
            image: "/Fragrance Collection-3333.png",
            position: "right",
        },
        {
            id: 4,
            title: "CITRUS",
            description: "Vibrant and bright, citrus scents spark energy and positivity with zesty notes that instantly awaken the senses.",
            image: "/Fragrance Collection-28.png",
            position: "left",
        },
        {
            id: 5,
            title: "AQUATIC",
            description: "Cool and airy, aquatic scents bring the feeling of ocean mist and open water, ideal for creating a refreshing ambience.",
            image: "/Fragrance Collection-29.png",
            position: "right",
        },
        {
            id: 6,
            title: "GOURMAND",
            description: "Sweet and addictive, gourmand fragrances comfort the senses with notes reminiscent of edibles, such as vanilla, caramel, and soft spices.",
            image: "/Fragrance Collection-30.png",
            position: "left",
        },
        {
            id: 7,
            title: "FRUITY",
            description: "Fruity fragrances are playful and radiant, filled with the cheerful character of ripe, sun-kissed fruits.",
            image: "/Fragrance Collection-31.png",
            position: "right",
        },
        {
            id: 8,
            title: "FRESH",
            description: "Fresh fragrances feel clean, crisp, and breezy, often reminding you of open air and greenery.",
            image: "/Fragrance Collection-32.png",
            position: "left",
        }
    ]

    return (
        <section className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-36 overflow-hidden bg-[#EEE8DF] lg:bg-white">
            {/* Background for lg+ */}
            <div className="hidden lg:block absolute inset-0 -z-10">
                <Image
                    src="/Fragrance Collection-03.png"
                    alt="Background"
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="object-cover"
                />
            </div>


            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Center Divider pattern lg+ */}
                <div className="absolute left-1/2 top-0 bottom-0 w-32 sm:w-36 md:w-40 transform -translate-x-1/2 hidden lg:block">
                    <Image
                        src="/Fragrance Collection-04.png"
                        alt="Center divider pattern"
                        width={160}
                        height={600}
                        loading="lazy"
                        className="object-cover rounded-xl object-center h-full w-full"
                    />
                </div>


                <div className="lg:hidden md:space-y-20 space-y-10">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="relative w-full rounded-xl flex items-center p-3 sm:p-4 text-white overflow-visible h-36 bg-cover bg-center"
                            style={{ backgroundImage: `url('/Home page Aromahpure Air-28.png')` }}
                        >
                            {category.position === "right" ? (
                                <>
                                    <RevealWrapper delay={0.1}>
                                        <div className="flex-1 pr-4 text-left flex flex-col justify-center z-10">
                                            <p className="text-xs sm:text-sm md:text-base leading-snug">{category.description}</p>
                                        </div>
                                    </RevealWrapper>
                                    <RevealWrapper delay={0.2}>

                                        <div className="relative w-32 sm:w-56 md:w-60 h-full flex justify-center items-center">
                                            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-sm sm:text-base md:text-lg font-bold text-white drop-shadow z-10 text-center">
                                                {category.title}
                                            </h3>

                                            <Image
                                                src={category.image}
                                                alt={category.title}
                                                width={300}
                                                height={300}
                                                className="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>
                                    </RevealWrapper>

                                </>
                            ) : (
                                <>
                                    <RevealWrapper delay={0.1}>
                                        <div className="relative w-32 sm:w-56 md:w-60 h-full flex justify-center items-center">
                                            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-sm sm:text-base md:text-lg font-bold text-white drop-shadow z-10 text-center">
                                                {category.title}
                                            </h3>
                                            <Image
                                                src={category.image}
                                                alt={category.title}
                                                width={300}
                                                height={300}
                                                className="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>
                                    </RevealWrapper>
                                    <RevealWrapper delay={0.2}>
                                        <div className="flex-1 pl-4 text-right flex flex-col justify-center z-10">
                                            <p className="text-xs sm:text-sm md:text-base leading-snug">{category.description}</p>
                                        </div>
                                    </RevealWrapper>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <div className="space-y-10 lg:space-y-0">
                    {categories.map((category, index) => (
                        <div key={category.id} className="relative">
                            {/* ✅ Desktop Layout remains same */}
                            <div className="hidden lg:block relative min-h-[320px] xl:min-h-[360px] 2xl:min-h-[400px]">
                                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    <RevealWrapper delay={0.1}>
                                        <div className="relative w-64 h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 overflow-hidden">
                                            <Image
                                                src={category.image || "/placeholder.svg"}
                                                alt={category.title}
                                                width={320}
                                                height={320}
                                                loading="lazy"
                                                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110 w-full h-full"
                                            />
                                        </div>
                                    </RevealWrapper>
                                </div>

                                {/* Text positioning */}
                                {category.position === "left" ? (
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[calc(50%-180px)] xl:w-[calc(50%-200px)] 2xl:w-[calc(50%-220px)]">
                                        <div className="text-right">
                                            <RevealWrapper delay={0.2}>
                                                <h3 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#7a8a7f] tracking-wide mb-6">
                                                    {category.title}
                                                </h3>
                                            </RevealWrapper>
                                            <RevealWrapper delay={0.3}>
                                                <p className="text-base xl:text-lg 2xl:text-xl text-[#7a8a7f] font-light leading-relaxed">
                                                    {category.description}
                                                </p>
                                            </RevealWrapper>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[calc(50%-180px)] xl:w-[calc(50%-200px)] 2xl:w-[calc(50%-220px)]">
                                        <div className="text-left">
                                            <RevealWrapper delay={0.2}>
                                                <h3 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#7a8a7f] tracking-wide mb-6">
                                                    {category.title}
                                                </h3>
                                            </RevealWrapper>
                                            <RevealWrapper delay={0.3}>
                                                <p className="text-base xl:text-lg 2xl:text-xl text-[#7a8a7f] font-light leading-relaxed">
                                                    {category.description}
                                                </p>
                                            </RevealWrapper>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:mt-20 mt-12 border-b-4 border-black w-full"></div>
        </section>
    )
}
