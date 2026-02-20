"use client"

import React from "react"
import Image from "next/image"
import RevealWrapper from "../animation/RevealWrapper"

const ComingSoon = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden font-xyz">
            {/* Background Image */}
            <Image
                src="/Assets Coming soon page-05.png" // <-- અહીં તમારી bg image મૂકો (public folder માં રાખો)
                alt="Coming Soon Background"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay (optional dark/gradient effect) */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <RevealWrapper delay={0.1}>
                    <h1 className="text-4xl md:text-6xl font-medium text-white">
                        COMING SOON
                    </h1>
                </RevealWrapper>
                <RevealWrapper delay={0.2}>
                    <p className="mt-20 text-lg md:text-2xl text-gray-200 max-w-3xl">
                        We’re currently working on creating something fantastic.
                        We’ll be here soon, subscribe to be notified.
                    </p>
                </RevealWrapper>

                {/* Divider line */}
                <RevealWrapper delay={0.3}>
                    <div className="mt-6 w-60 h-px bg-gray-300" />
                </RevealWrapper>
            </div>
        </div>
    )
}

export default ComingSoon
