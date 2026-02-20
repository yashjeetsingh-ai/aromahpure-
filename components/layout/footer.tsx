"use client"

import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa" // Using react-icons for social icons
import FooterProvider from "../animation/FooterProvider"
import { useState } from "react"
import ThankYouModal from "../common/ThankYouModal"

export default function Footer() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState<{ email?: string }>({});
  const [formData, setFormData] = useState({ email: "" });
  const [loading, setLoading] = useState(false);

  // ✅ Validation
  const validate = () => {
    const newErrors: { email?: string } = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle input change + remove error if fixed
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ email: e.target.value });

    if (errors.email) {
      validate();
    }
  };

  // ✅ Submit with API call
  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      // 👇 Replace this with your actual API endpoint
      const res = await fetch("/api/join-community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });

      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }

      const data = await res.json();
      // reset
      setFormData({ email: "" });
      setShowThankYou(true);
      setErrors({});

    } catch (error) {
      console.error("❌ API Error:", error);
      setErrors({ email: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const footerSections = [
    {
      title: "EXPLORE",
      links: [
        { id: 1, label: "About Us", link: "/about-us" },
        { id: 3, label: "Industries We Serve", link: "/industries-we-serve" },
        { id: 2, label: "Fragrance Library", link: "/fragrance-collection" },
        { id: 4, label: "Our Diffusers", link: "/our-diffusers" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { id: 5, label: "Privacy Policy", link: "/privacy-policy" },
        { id: 6, label: "Blogs", link: "/blogs" },
        { id: 7, label: "FAQs", link: "/faqs" },
      ],
    },
  ]

  return (
    <FooterProvider>
      <footer className="relative 2xl:pt-36 py-10 text-white font-xyz overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('/About Us.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-28 relative z-10">
          {/* Main Flex Container for Left and Right Sections */}
          <div className="flex flex-col xl:flex-row xl:justify-between gap-y-12 xl:gap-x-20">
            {/* Left Section: Logo + Explore/Resources/Corporate/Connect */}
            <div className="flex flex-col items-start xl:w-7/12 xl:order-1 order-2">
              <Image
                src="/Home-page-Aromahpure-Air1.png"
                alt="Aromahpure Air Logo"
                width={300} // increased from 200
                height={120} // increased from 80
                className="h-auto object-contain mb-16 md:mb-20 lg:mb-24 xl:mb-28 xl:block hidden"
                loading="lazy"
              />

              {/* Flex Container for the 4 columns: stacks on small, 2x2 on md+ */}
              <div className="flex flex-col md:flex-row w-full justify-between gap-y-8 md:gap-x-16 lg:gap-x-24 2xl:gap-x-32">
                {/* Left Group of 2 columns (Explore, Resources) */}
                <div className="relative z-20 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-y-8 sm:gap-y-16 md:gap-x-16 lg:gap-x-20 xl:gap-x-24 w-full">
                  {footerSections.map((section) => (
                    <div key={section.title}>
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg 2xl:text-xl font-medium uppercase">
                        {section.title}
                      </h4>
                      <div className="w-10 h-[2px] bg-black/30 mb-3"></div>

                      <ul className="space-y-1 md:space-y-3 xl:space-y-4 2xl:space-y-6">
                        {section.links.map((link) => (
                          <li key={link?.id}>
                            <Link
                              href={link?.link}
                              className="relative z-30 text-sm 2xl:text-lg cursor-pointer  font-extralight hover:text-gray-300 transition-colors duration-200"
                            >
                              {link?.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Right Group of 2 columns (Corporate Office, Connect With Us) */}
                <div className="relative z-20 flex flex-col gap-y-8 xl:w-10/12 w-[1150px]">
                  <a
                    href="https://maps.app.goo.gl/867himbnNB7GPMwa6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg 2xl:text-xl font-medium  uppercase">
                        CORPORATE OFFICE
                      </h4>
                      <div className="w-10 h-[2px] bg-black/30 mb-3"></div>
                      <p className="text-sm sm:text-base md:text-base xl:text-sm 2xl:text-lg font-extralight">
                        AVA International Pvt. Ltd.
                        <br />
                        5th Floor, Eco Towers, Plot 14,
                        <br />
                        Sector-125, Noida, 201313
                      </p>
                    </div>
                  </a>


                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg 2xl:text-xl font-medium uppercase">
                      CONNECT WITH US
                    </h4>
                    <div className="w-10 h-[2px] bg-black/30 mb-3"></div>

                    <p className="text-base sm:text-lg md:text-base xl:text-base 2xl:text-lg font-extralight mb-1">
                      Toll Free: <span>18001020241 | 9205256983</span>
                    </p>
                    <p className="text-base sm:text-lg md:text-base xl:text-base 2xl:text-lg font-extralight">
                      Email: <a href="mailto:info@aromahpureair.com" className="hover:underline">info@aromahpureair.com</a>
                    </p>

                  </div>

                  <div className="flex xl:hidden space-x-4">
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className="relative z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#52635A] flex items-center justify-center text-white hover:bg-[#6f7e75] transition-colors duration-200"
                    >
                      <FaFacebookF className="w-6 h-6" />
                    </Link>

                    <Link
                      href="#"
                      aria-label="Instagram"
                      className="relative z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#52635A] flex items-center justify-center text-white hover:bg-[#6f7e75] transition-colors duration-200"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </Link>

                    <Link
                      href="#"
                      aria-label="LinkedIn"
                      className="relative z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#52635A] flex items-center justify-center text-white hover:bg-[#6f7e75] transition-colors duration-200"
                    >
                      <FaLinkedinIn className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: Description + Join Our Community */}
            <div className="relative z-20 flex flex-col items-start xl:items-end xl:text-right xl:w-4/12 xl:order-2 order-1">
              <Image
                src="/Home-page-Aromahpure-Air1.png"
                alt="Aromahpure Air Logo"
                width={300} // increased from 200
                height={120} // increased from 80
                className="h-auto object-contain mb-16 md:mb-20 lg:mb-24 xl:mb-28 hidden  sm:block xl:hidden"
                loading="lazy"
              />

              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl font-extralight leading-relaxed max-w-full lg:max-w-3xl xl:max-w-4xl mb-10 md:mb-20 lg:mb-24">
                Aromahpure Air is India’s leading ambient scenting brand, offering intelligent fragrance solutions for commercial spaces. From app-controlled diffusers to bespoke fragrances, we help businesses create immersive, lasting impressions.
              </p>

              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-3xl font-medium md:mb-10 mb-5 font-abc tracking-wider">
                Join Our Comunity
              </h4>

              <div className="w-full max-w-md md:mb-8 relative">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-transparent border rounded-full text-white placeholder:text-white/70 focus:outline-none focus:ring-1 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-white focus:ring-white"
                    }`}
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`absolute right-1 top-[5px] ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#4b5a50] hover:bg-[#364038]"
                    } text-white font-semibold px-4 py-1 rounded-full shadow-md transition-all duration-300`}
                >
                  {loading ? "Processing..." : "Join"}
                </button>

                {/* ✅ Error message under input */}
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1 ml-2 text-left w-full">{errors.email}</p>
                )}
              </div>




              <div className="xl:flex hidden space-x-4">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="relative z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#52635A] flex items-center justify-center text-white hover:bg-[#6f7e75] transition-colors duration-200"
                >
                  <FaFacebookF className="w-6 h-6" />
                </Link>

                <Link
                  href="https://www.instagram.com/aromahpure_air/"
                  target="_blank"
                  aria-label="Instagram"
                  className="relative z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#52635A] flex items-center justify-center text-white hover:bg-[#6f7e75] transition-colors duration-200"
                >
                  <FaInstagram className="w-6 h-6" />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/aromahpure-air/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="relative z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#52635A] flex items-center justify-center text-white hover:bg-[#6f7e75] transition-colors duration-200"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative z-20 w-full text-center text-white mt-8 2xl:mt-20">
            © AVA International PVT. LTD. All Rights Reserved.
          </div>
        </div>
      </footer>

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
      />
    </FooterProvider>
  )
}
