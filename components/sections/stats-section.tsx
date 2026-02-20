'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import Counter from '@/components/animation/Counter'

export default function StatsSection() {
    const { revealRef: textRevealRef } = useReveal()

    const stats = [
        { end: 50, label: 'TOP-TIER CLIENTS', suffix: '+' },
        { end: 20, label: 'SIGNATURE FRAGRANCES', suffix: '+' },
        { end: 500000, label: 'SQ. FT. SCENTED', suffix: '+' }
    ]

    return (
        <section className="relative w-full overflow-hidden font-xyz">
            {/* Top and Bottom Border */}
            <div className="w-full border-t-[2px] border-b-[2px] border-[#5e6e65]">
                {/* Background Image */}
                <div
                    className="w-full h-full relative"
                    style={{
                        backgroundImage: "url('/Home page Aromahpure Air-33.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {/* Content */}
                    <div className="relative z-10 px-4 sm:px-10 md:px-16 py-10 sm:py-16 md:py-20 lg:py-24 xl:py-28 max-w-[1800px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-14 md:gap-y-20 gap-x-10 text-center justify-center w-full">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`
        flex flex-col items-center justify-center
        ${index === 2 ? 'lg:col-span-2 lg:mx-auto xl:col-span-1 xl:mx-0' : ''}
      `}
                                >
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] 2xl:text-[70px] text-[#687970] font-bold mb-4 leading-none">
                                        <span className="inline-block">
                                            <Counter end={stat.end} />
                                        </span>
                                        <span className="inline-block">{stat.suffix}</span>
                                    </h3>
                                    <p className="text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#687970] font-bold uppercase tracking-wide">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}
