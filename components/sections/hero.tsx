// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Parallax, Pagination } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import type { SwiperRef } from "swiper/react";
// import "swiper/css";
// import "swiper/css/parallax";
// import "swiper/css/pagination";
// import slider1 from "@/public/Home-page-Aromahpure-111.png";
// import BookDemoModal from "../common/BookDemoModal";
// import ThankYouModal from "../common/ThankYouModal";
// import { useRouter } from "next/navigation";

// const slides = [
//   {
//     bg: slider1,
//     heading: "Experience Fragrance Like Never Before",
//     button: "Book a Free Consultation",
//   },
//   // {
//   //   bg: slider1,
//   //   heading: "Elevate Your Space with Aromatic Elegance",
//   //   button: "Book a Free Consultation",
//   // },
//   // {
//   //   bg: slider1,
//   //   heading: "Tailored Scents for Your Brand Identity",
//   //   button: "Book a Free Consultation",
//   // },
// ];


// const SwiperSlider = () => {
//   const swiperRef = useRef<SwiperRef>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [showThankYou, setShowThankYou] = useState(false)
//       const router = useRouter();


//     const handleFormSuccess = () => {
//     setIsModalOpen(false)
//     setShowThankYou(true)
//   }

//   const handleThankYouClose = () => {
//     setShowThankYou(false)
//   }

//     const handleClick = (href: string) => {
//     if (href === "/book-demo") {
//       setIsModalOpen(true)
//       return
//     }
//     router.push(href)
//   }

//   useEffect(() => {
//     const swiper = swiperRef.current?.swiper;
//     if (!swiper) return;

//     swiper.on("init", function () {
//       const el = swiper.el;
//       el.querySelectorAll(".bg-img").forEach((bgEl) => {
//         const parallaxValue = 0.75 * swiper.width;
//         bgEl.setAttribute("data-swiper-parallax", `${parallaxValue}`);
//       });
//     });

//     swiper.init();
//   }, []);



//   return (
//     <section className="relative overflow-hidden font-poppins">
//       <Swiper
//         ref={swiperRef}
//         className="w-full h-[calc(100vh-488px)] lg:h-[calc(100vh-118px)]"
//         // style={{ height: sliderHeight }}
//         modules={[Parallax, Autoplay, Pagination]}
//         speed={2000}
//         autoplay={{ delay: 2000 }}
//         parallax={true}
//         loop={true}
//         pagination={{ clickable: true }}
//         onResize={(swiper) => swiper.update()}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="absolute inset-0 bg-cover bg-center flex items-center justify-center bg-img"
//               style={{ backgroundImage: `url(${slide.bg.src})` }}
//             >
//               <div className="container mx-auto px-4">
//                 <div className="xl:max-w-xl max-w-sm ml-auto">
//                   <div className="text-left">
//                     <h1
//                       className="text-2xl sm:text-3xl lg:text-4xl xl:text-[52px]  mb-10 text-[#47574c] font-normal leading-hero font-abc"
//                       data-swiper-parallax="-2000"
//                     >
//                       {slide.heading}
//                     </h1>
//                     <button onClick={() => handleClick("/book-demo")} data-swiper-parallax="-1000" className="inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--text-white)] bg-[var(--primary-color)] border border-[var(--primary-text-color1)] py-2 lg:py-4 px-5 sm:px-6 md:px-8 lg:px-10 rounded-full transition-all duration-500 hover:bg-[var(--primary-text-color1)] hover:border-[var(--primary-text-color1)] hover:text-[var(--text-white)]">
//                       {slide.button}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <style jsx global>{`
//   .swiper-pagination {
//     bottom: 30px !important;
//   }

//   .swiper-pagination-bullet {
//     position: relative;
//     background-color: transparent;
//     border: 1px solid var(--primary-text-color1);
//     width: 18px;
//     height: 18px;
//     border-radius: 50%;
//     margin: 0 6px;
//     opacity: 1;
//     transition: all 0.3s ease;
//     box-sizing: border-box;
//   }

//   .swiper-pagination-bullet::after {
//     content: "";
//     background-color: var(--primary-text-color1);
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }

//   .swiper-pagination-bullet-active {
//     border: 2px solid var(--primary-color);
//     animation: progress-ring 1.5s linear forwards;
//   }

//   .swiper-pagination-bullet-active::after {
//     background-color: var(--primary-color);
//   }

//   @keyframes progress-ring {
//     from {
//       transform: scale(0);
//     }
//     to {
//       transform: scale(1);
//     }
//   }
// `}</style>

//       <BookDemoModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSuccess={handleFormSuccess}
//       />

//       <ThankYouModal
//         isOpen={showThankYou}
//         onClose={handleThankYouClose}
//       />

//     </section>
//   );
// };

// export default SwiperSlider;



"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/pagination";
import slider1 from "@/public/Home-page-Aromahpure-111.png";
import BookDemoModal from "../common/BookDemoModal";
import ThankYouModal from "../common/ThankYouModal";
import { useRouter } from "next/navigation";

const slides = [
  {
    bg: slider1,
    heading: "Experience Fragrance Like Never Before",
    button: "Book a Free Consultation",
  },
  //   {
  //   bg: slider1,
  //   heading: "Experience Fragrance Like Never Before11",
  //   button: "Book a Free Consultation11",
  // },
];

const SwiperSlider = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const router = useRouter();

  const handleFormSuccess = () => {
    setIsModalOpen(false);
    setShowThankYou(true);
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
  };

  const handleClick = (href: string) => {
    if (href === "/book-demo") {
      setIsModalOpen(true);
      return;
    }
    router.push(href);
  };

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    swiper.on("init", function () {
      const el = swiper.el;
      el.querySelectorAll(".bg-img").forEach((bgEl) => {
        const parallaxValue = 0.75 * swiper.width;
        bgEl.setAttribute("data-swiper-parallax", `${parallaxValue}`);
      });
    });

    swiper.init();
  }, []);

  return (
    <section className="relative overflow-hidden font-poppins">
      <Swiper
        ref={swiperRef}
        className="w-full h-[calc(100vh-488px)] lg:h-[calc(100vh-118px)]"
        modules={[Parallax, Autoplay, Pagination]}
        speed={2000}
        autoplay={slides.length > 1 ? { delay: 2000 } : false}
        parallax={true}
        loop={slides.length > 1}
        pagination={slides.length > 1 ? { clickable: true } : false}
        onResize={(swiper) => swiper.update()}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 bg-cover bg-center flex items-center justify-center bg-img"
              style={{ backgroundImage: `url(${slide.bg.src})` }}
            >
              <div className="container mx-auto px-4">
                <div className="xl:max-w-xl max-w-sm ml-auto">
                  <div className="text-left">
                    <h1
                      className={`text-2xl sm:text-3xl lg:text-4xl xl:text-[52px] mb-10 text-[#47574c] font-normal leading-hero font-abc
                        ${slides.length === 1 ? "animate-fade-up" : ""}`}
                      data-swiper-parallax={slides.length > 1 ? "-2000" : undefined}
                    >
                      {slide.heading}
                    </h1>
                    <button
                      onClick={() => handleClick("/book-demo")}
                      data-swiper-parallax={slides.length > 1 ? "-2000" : undefined}
                      className={`inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--text-white)] bg-[var(--primary-color)] border border-[var(--primary-text-color1)] py-2 lg:py-4 px-5 sm:px-6 md:px-8 lg:px-10 rounded-full transition-all duration-500 hover:bg-[var(--primary-text-color1)] hover:border-[var(--primary-text-color1)] hover:text-[var(--text-white)]
                       ${slides.length === 1 ? "animate-fade-up" : ""}`}
                    >
                      {slide.button}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        /* Heading animation */
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        /* Button animation (smooth + little zoom) */
/* Button animation (same style as heading, just delay added) */
@keyframes fadeUpButton {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up-button {
  animation: fadeUpButton 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  animation-delay: 0.4s; /* after heading */
}

        .swiper-pagination {
          bottom: 30px !important;
        }

        .swiper-pagination-bullet {
          position: relative;
          background-color: transparent;
          border: 1px solid var(--primary-text-color1);
          width: 18px;
          height: 18px;
          border-radius: 50%;
          margin: 0 6px;
          opacity: 1;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .swiper-pagination-bullet::after {
          content: "";
          background-color: var(--primary-text-color1);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .swiper-pagination-bullet-active {
          border: 2px solid var(--primary-color);
          animation: progress-ring 1.5s linear forwards;
        }

        .swiper-pagination-bullet-active::after {
          background-color: var(--primary-color);
        }

        @keyframes progress-ring {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>

      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleFormSuccess}
      />

      <ThankYouModal isOpen={showThankYou} onClose={handleThankYouClose} />
    </section>
  );
};

export default SwiperSlider;
