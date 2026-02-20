// "use client"
// import { X } from "lucide-react"
// import RevealWrapper from "@/components/animation/RevealWrapper"
// import AnimatedLine from "@/components/animation/AnimatedLine"
// import Image from "next/image"

// interface ThankYouModalProps {
//     isOpen: boolean
//     onClose: () => void
// }

// export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
//     if (!isOpen) return null

//     return (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 font-xyz">
//             {/* Backdrop */}
//             <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

//             {/* Modal */}
//             <div className="relative w-full max-w-2xl">
//                 <RevealWrapper delay={0.1}>
//                     <div className="bg-[#687970] rounded-2xl shadow-2xl p-6 sm:p-12 md:p-16 text-white">
//                         {/* Close Button */}
//                         <button
//                             onClick={onClose}
//                             className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/70 hover:text-white transition-colors duration-200"
//                         >
//                             <X className="h-5 w-5 sm:h-6 sm:w-6" />
//                         </button>

//                         {/* Content */}
//                         <div className="text-center py-4 sm:py-8">
//                             {/* Logo */}
//                             <RevealWrapper delay={0.2}>
//                                 <div className="mb-6 sm:mb-12">
//                                     <div className="mx-auto flex items-center justify-center">
//                                         <Image
//                                             src="/Home-page-Aromahpure-Air.png"
//                                             alt="Aromathpuri Logo"
//                                             width={180}  // required by Next.js (fallback dimension)
//                                             height={70} // required by Next.js (fallback dimension)
//                                             className="object-contain"
//                                             loading="lazy"
//                                         />

//                                     </div>
//                                 </div>

//                             </RevealWrapper>

//                             {/* Thank You Text */}
//                             <RevealWrapper delay={0.3}>
//                                 <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-2">Thank You!</h2>
//                             </RevealWrapper>

//                             {/* Decorative Lines */}
//                             <RevealWrapper delay={0.4}>
//                                 <div className="flex items-center justify-center mb-6 sm:mb-12">
//                                     <AnimatedLine className="h-[1px] bg-white w-full max-w-[340px]" />
//                                 </div>
//                             </RevealWrapper>


//                             {/* Message */}
//                             <RevealWrapper delay={0.5}>
//                                 <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-lg mx-auto px-2 mb-8 sm:mb-12">
//                                     You can expect a response from us with next steps within 24 hours!
//                                 </p>
//                             </RevealWrapper>

//                             {/* Close Button */}
//                             <RevealWrapper delay={0.6}>
//                                 <button
//                                     onClick={onClose}
//                                     className={`bg-white/90 text-black border border-black font-medium py-1.5 px-8 sm:px-12 text-base sm:text-2xl rounded-full 
//                                             transition-colors duration-300 tracking-wide
//                                             hover:bg-[#364233] hover:text-white`}
//                                 >
//                                     CLOSE
//                                 </button>

//                             </RevealWrapper>
//                         </div>
//                     </div>
//                 </RevealWrapper>
//             </div>
//         </div>
//     )
// }

"use client"
import RevealWrapper from "@/components/animation/RevealWrapper"
import { RiCloseLargeFill } from "react-icons/ri";

interface ThankYouModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 font-abc">
            {/* ✅ Backdrop */}
            <div
                className="absolute inset-0 z-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* ✅ Modal Centered */}
            <div className="relative z-10 w-full max-w-6xl min-h-[80vh] sm:min-h-[900px] flex items-center justify-center">
                <RevealWrapper delay={0.1}>
                    <div
                        className="relative w-full h-full rounded-2xl shadow-2xl text-white overflow-hidden flex items-center justify-center"
                        style={{
                            background: "linear-gradient(135deg, #91a39a 0%, #5c6d65 100%)",
                        }}
                    >
                        {/* ✅ Background image - always left-bottom */}
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            <img
                                src="/Assets Coming soon page-02.png"
                                alt="Decorative leaves"
                                className="
                                    absolute
                                    left-0 bottom-0
                                    h-full
                                    object-contain
                                "
                            />
                        </div>

                        {/* ✅ Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 text-white/70 hover:text-white transition-colors duration-200"
                        >
                            <RiCloseLargeFill className="h-8 w-8 sm:h-12 sm:w-12" />
                        </button>

                        {/* ✅ Content */}
                        <div className="relative z-10 px-6 sm:px-12 lg:px-20 xl:px-24 pt-24 pb-12 sm:py-28 md:py-32 lg:py-36 xl:py-40 h-full flex flex-col justify-center">
                            <div className="flex flex-col items-start text-left space-y-6 sm:space-y-8 ">
                                {/* Heading */}
                                <RevealWrapper delay={0.2}>
                                    <div className="inline-block pl-4 sm:pl-24">
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-wide mb-2 text-left border-b-[2px] border-white pb-2">
                                            THANK YOU!
                                        </h2>
                                    </div>
                                </RevealWrapper>

                                {/* Paragraph */}
                                <RevealWrapper delay={0.4}>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tha max-w-3xl pl-4 sm:pl-24 font-xyz">
                                        Your form has been submitted successfully.
                                        <br />
                                        Our team will contact you soon.
                                    </p>
                                </RevealWrapper>
                            </div>
                        </div>
                    </div>
                </RevealWrapper>
            </div>
        </div>
    )
}
