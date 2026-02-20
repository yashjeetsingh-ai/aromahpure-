// "use client";

// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import gsap from "gsap";
// import Image from "next/image";

// import "swiper/css";

// // Images
// import TheHindu from "@/public/the-hindu.png";
// import NDTV from "@/public/ndtv.png";
// import ThePrint from "@/public/ThePrint.png";
// import TheIndianExpress from "@/public/the-indian-express.png";
// import News18 from "@/public/news18.png";

// const logos = [TheHindu, NDTV, ThePrint, TheIndianExpress, News18];

// const Slider = () => {
//     const swiperRef = useRef<HTMLDivElement>(null);
//     const repeatedLogos = [...logos, ...logos, ...logos];



//     return (
//         <div
//             className="relative py-4 xl:py-0 overflow-hidden bg-white"
//             ref={swiperRef}
//         >
//             {/* Fade edges */}
//             <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-[#fcfaf8] via-[#fcfaf8]/80 to-transparent" />
//             <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-[#fcfaf8] via-[#fcfaf8]/80 to-transparent" />

//             <Swiper
//                 modules={[Autoplay]}
//                 loop={true}
//                 speed={2000}
//                 slidesPerView={2}
//                 spaceBetween={20}
//                 breakpoints={{
//                     640: { slidesPerView: 3 },
//                     768: { slidesPerView: 4 },
//                     1024: { slidesPerView: 5 },
//                 }}
//                 autoplay={{
//                     delay: 0,
//                     disableOnInteraction: false,
//                     pauseOnMouseEnter: true,
//                 }}
//                 freeMode={true}
//                 allowTouchMove={false}
//                 grabCursor={false}
//             >
//                 {repeatedLogos.map((logo, index) => (
//                     <SwiperSlide
//                         key={index}
//                         className="flex items-center justify-center px-2 sm:px-3 md:px-4"
//                     >
//                         <div className="w-full flex justify-center items-center">
//                             <Image
//                                 src={logo}
//                                 alt={`Sponsor ${index}`}
//                                 className="sponsor-logo h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-auto object-contain"
//                                 loading="lazy"
//                             />
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default Slider;











"use client";

import React from "react";
import Image from "next/image";

// Images
import TheHindu from "@/public/the-hindu.png";
import NDTV from "@/public/ndtv.png";
import ThePrint from "@/public/ThePrint.png";
import TheIndianExpress from "@/public/the-indian-express.png";
import News18 from "@/public/news18.png";

const logos = [TheHindu, NDTV, ThePrint, TheIndianExpress, News18];

const Slider = () => {
  return (
    <div className="relative py-4 overflow-hidden bg-white">
      <div
        className="
          flex flex-wrap justify-evenly items-center
          gap-6 sm:gap-8 md:gap-10 lg:gap-12
          px-5 lg:px-10 xl:px-0 md:py-0 py-2
        "
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={logo}
              alt={`Sponsor ${index}`}
              width={140} 
              height={70}
              className="object-contain 
                w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 
                h-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
