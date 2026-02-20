"use client"
import { useState } from "react"
import type React from "react"
import { toast } from "react-toastify"
import RevealWrapper from "@/components/animation/RevealWrapper"
import AnimatedLine from "@/components/animation/AnimatedLine"
import useReveal from "@/hooks/useReveal"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import Link from "next/link"
import ThankYouModal from "../common/ThankYouModal"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

export default function ContactSection() {
  const { revealRef } = useReveal()

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)



  const handleThankYouClose = () => {
    setShowThankYou(false)
  }


  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Mobile number must be exactly 10 digits"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        // Reset form on successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })

        // toast.success("Thank you! Your message has been sent successfully.", {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        // })

        setShowThankYou(true)

      } else {
        toast.error("Sorry, there was an error sending your message. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      }
    } catch (error) {
      console.error("Contact form error:", error)
      toast.error("Network error. Please check your connection and try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div
        className="relative min-h-screen w-full overflow-hidden bg-[#f1ece5]"
        style={{
          backgroundImage: "url('/Untitled-10-28_optimized.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 font-xyz">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
            {/* Left - Contact Form */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12">
              {/* Contact Us Label */}
              <RevealWrapper delay={0.2}>
                <div className="flex items-center gap-3 sm:gap-4">
                  <AnimatedLine className="h-[2px] w-6 sm:w-8 md:w-10 bg-[#364233]" duration={1.2} />
                  <p className="text-[#364233] font-medium text-lg sm:text-xl md:text-2xl xl:text-2xl 2xl:text-3xl tracking-wide">
                    Contact Us
                  </p>
                </div>
              </RevealWrapper>

              {/* Heading */}
              <RevealWrapper delay={0.3}>
                <div className="space-y-3 sm:space-y-4">
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-[#a0a0a0] leading-tight"
                    ref={revealRef}
                  >
                    JOIN US IN CREATING SOMETHING GREAT
                  </h1>
                  <AnimatedLine
                    className="h-[2px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl bg-[#62705a]"
                    duration={1.5}
                  />
                </div>
              </RevealWrapper>

              {/* Form */}
              <RevealWrapper delay={0.4}>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-full lg:max-w-3xl xl:max-w-4xl pt-6 sm:pt-8 lg:pt-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    <div>
                      <input
                        type="text"
                        placeholder="First Name*"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={`w-full pl-4 sm:pl-5 lg:pl-6 pr-4 py-3 sm:py-3.5 lg:py-4 border-2 rounded-lg bg-transparent text-[#364233] placeholder-[#7d8b74] text-base sm:text-lg focus:outline-none transition-colors ${errors.firstName
                          ? "border-red-500 focus:border-red-600"
                          : "border-[#7d8b74] focus:border-[#364233]"
                          }`}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1 ml-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name*"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className={`w-full pl-4 sm:pl-5 lg:pl-6 pr-4 py-3 sm:py-3.5 lg:py-4 border-2 rounded-lg bg-transparent text-[#364233] placeholder-[#7d8b74] text-base sm:text-lg focus:outline-none transition-colors ${errors.lastName
                          ? "border-red-500 focus:border-red-600"
                          : "border-[#7d8b74] focus:border-[#364233]"
                          }`}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1 ml-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                    <div>
                      <input
                        type="text"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`w-full pl-4 sm:pl-5 lg:pl-6 pr-4 py-3 sm:py-3.5 lg:py-4 border-2 rounded-lg bg-transparent text-[#364233] placeholder-[#7d8b74] text-base sm:text-lg focus:outline-none transition-colors ${errors.email ? "border-red-500 focus:border-red-600" : "border-[#7d8b74] focus:border-[#364233]"
                          }`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1 ml-1">{errors.email}</p>}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number*"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={`w-full pl-4 sm:pl-5 lg:pl-6 pr-4 py-3 sm:py-3.5 lg:py-4 border-2 rounded-lg bg-transparent text-[#364233] placeholder-[#7d8b74] text-base sm:text-lg focus:outline-none transition-colors ${errors.phone ? "border-red-500 focus:border-red-600" : "border-[#7d8b74] focus:border-[#364233]"
                          }`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1 ml-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <textarea
                      placeholder="Message*"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`w-full pl-4 sm:pl-5 lg:pl-6 pr-4 py-3 sm:py-3.5 lg:py-4 border-2 rounded-lg bg-transparent text-[#364233] placeholder-[#7d8b74] text-base sm:text-lg focus:outline-none transition-colors ${errors.message ? "border-red-500 focus:border-red-600" : "border-[#7d8b74] focus:border-[#364233]"
                        }`}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1 ml-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto min-w-[220px] px-14 sm:px-16 lg:px-20 py-3 sm:py-3.5 lg:py-4 border-2 border-[#6b7a6b] text-lg sm:text-xl font-semibold transition-colors duration-300 tracking-wide rounded-full ${isSubmitting
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                      : "text-[#7d8b74] hover:bg-[#364233] hover:text-white"
                      }`}
                  >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                </form>
              </RevealWrapper>
            </div>

            {/* Right - Info Box */}
            <RevealWrapper delay={0.2}>
              <div className="bg-[#f1ece5] border-2 border-[#62705a] rounded-lg p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 lg:space-y-10 lg:mt-40 xl:mt-52 2xl:mt-60 lg:mb-12 xl:mb-16 2xl:mb-20">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-2xl font-semibold text-[#808080] mb-3 sm:mb-4">
                    Address
                  </h3>
                  <p className="text-[#1f261c] font-medium leading-relaxed text-sm sm:text-base lg:text-base">
                    Ava International Pvt. Ltd. 5th Floor, Eco Towers, Plot 14, Sector-125, Noida
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-2xl font-semibold text-[#808080] mb-3 sm:mb-4">
                    Contact
                  </h3>
                  <p className="text-black text-base sm:text-lg lg:text-xl">+91 9829930228</p>
                  <p className="text-black text-base sm:text-lg lg:text-xl mt-2 sm:mt-3">+91 9810452723</p>
                  {/* Toll-Free Number */}
                  <p className="text-[#3b4a42] text-base sm:text-lg lg:text-xl mt-2 sm:mt-3 font-medium">
                    Toll-Free: 1800-102-0241
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-2xl font-semibold text-[#808080] mb-3 sm:mb-4">
                    Stay Connected
                  </h3>
                  <div className="flex space-x-3 sm:space-x-4">
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3b4a42] flex items-center justify-center text-white hover:bg-[#4d5c54] transition-colors duration-200"
                    >
                      <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/aromahpure_air/"
                      target="_blank"
                      aria-label="Instagram"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3b4a42] flex items-center justify-center text-white hover:bg-[#4d5c54] transition-colors duration-200"
                    >
                      <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/aromahpure-air/"
                      target="_blank"
                      aria-label="LinkedIn"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3b4a42] flex items-center justify-center text-white hover:bg-[#4d5c54] transition-colors duration-200"
                    >
                      <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </RevealWrapper>

          </div>
        </div>
      </div>
      <ThankYouModal isOpen={showThankYou} onClose={handleThankYouClose} />
    </>
  )
}
