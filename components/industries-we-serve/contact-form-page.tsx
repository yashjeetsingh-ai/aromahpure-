"use client"

import type React from "react"
import { useState, useRef } from "react"
import RevealWrapper from "@/components/animation/RevealWrapper"
import useReveal from "@/hooks/useReveal"
import { UnderlineInput } from "@/components/animation/underline-input"
import { toast } from "react-toastify"
import ThankYouModal from "../common/ThankYouModal"

export default function ContactFormPage() {
  const { revealRef } = useReveal()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleThankYouClose = () => {
    setShowThankYou(false)
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    stateProvince: "",
    messageLine1: "",
  })

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    stateProvince: "",
    messageLine1: "",
  })

  // 🔑 Refs for inputs
  const inputRefs = {
    firstName: useRef<HTMLInputElement | null>(null),
    lastName: useRef<HTMLInputElement | null>(null),
    email: useRef<HTMLInputElement | null>(null),
    phone: useRef<HTMLInputElement | null>(null),
    city: useRef<HTMLInputElement | null>(null),
    stateProvince: useRef<HTMLInputElement | null>(null),
    messageLine1: useRef<HTMLInputElement | null>(null),
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      stateProvince: "",
      messageLine1: "",
    }

    const nameRegex = /^[A-Za-z\s]+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[0-9]{10}$/

    if (!formData.firstName?.trim()) {
      newErrors.firstName = "Please enter your first name."
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = "First name should contain only letters."
    }

    if (!formData.lastName?.trim()) {
      newErrors.lastName = "Please enter your last name."
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Last name should contain only letters."
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.phone?.trim()) {
      newErrors.phone = "Please enter your phone number."
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits."
    }

    if (!formData.city?.trim()) {
      newErrors.city = "Please enter your city."
    } else if (!nameRegex.test(formData.city)) {
      newErrors.city = "City name should contain only letters."
    }

    if (!formData.stateProvince?.trim()) {
      newErrors.stateProvince = "Please enter your state/province."
    } else if (!nameRegex.test(formData.stateProvince)) {
      newErrors.stateProvince = "State/Province should contain only letters."
    }

    if (!formData.messageLine1?.trim()) {
      newErrors.messageLine1 = "Please enter your message."
    }

    setErrors(newErrors)

    // 🔑 Scroll to first error
    const firstErrorField = Object.keys(newErrors).find(
      (field) => newErrors[field as keyof typeof newErrors] !== ""
    )
    if (firstErrorField && inputRefs[firstErrorField as keyof typeof inputRefs].current) {
      inputRefs[firstErrorField as keyof typeof inputRefs].current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
      inputRefs[firstErrorField as keyof typeof inputRefs].current?.focus()
    }

    return Object.values(newErrors).every((error) => error === "")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/send-industries-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.status === 200) {
        setShowThankYou(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          city: "",
          stateProvince: "",
          messageLine1: "",
        })
      } else {
        toast.error("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row font-xyz">
        {/* Left Column: Text and Button */}
        <div className=" relative w-full lg:w-1/2 bg-[#f8f8f8] lg:flex hidden flex-col justify-between py-5 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-14">
          <div className="relative z-10 flex flex-col lg:justify-start  lg:items-start items-center h-full ">
            <div className="px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-40">
              <RevealWrapper delay={0.1}>
                <h1
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-medium uppercase text-[#4a5b53] leading-cont lg:max-w-md text-center lg:text-left"
                  ref={revealRef}
                >
                  NEED SCENTING FOR YOUR INDUSTRY?
                </h1>
              </RevealWrapper>


              <RevealWrapper delay={0.1}>
                <p
                  className="mt-7 sm:mt-8 md:mt-10 lg:mt-24 lg:text-base xl:text-lg 2xl:text-3xl text-black leading-snug lg:max-w-96 text-center lg:text-left "
                  ref={revealRef}
                >
                  Tell us about your space.We'll tailor a scent
                  experience just for you
                </p>
              </RevealWrapper>

            </div>

            <div className="w-full h-[300px] overflow-hidden rounded-lg">
              <img src="/Industries we serve -10.png" alt="Scenting industry" className="w-full h-full object-cover" />
            </div>
          </div>


        </div>

        <div
          className="relative w-full lg:w-1/2 flex lg:hidden flex-col justify-center items-center 
                     lg:border-t-2 lg:border-r-2 lg:border-b-2 border-black bg-[#EEE7DE]
                     bg-cover bg-center bg-no-repeat sm:min-h-[300px] min-h-[200px]"
          style={{ backgroundImage: "url('/Industries we serve -10.png')" }}
        >
          <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-40 rounded-lg">
            <RevealWrapper delay={0.1}>
              <h1
                className="text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-medium uppercase text-[#5f6c63] leading-cont max-w-md"
                ref={revealRef}
              >
                NEED SCENTING FOR YOUR INDUSTRY?
              </h1>

            </RevealWrapper>

            <RevealWrapper delay={0.1}>
              <p
                className="mt-7 sm:mt-8 md:mt-10 lg:mt-24 text-sm sm:text-lg md:text-xl text-black leading-snug lg:max-w-md text-center lg:text-left sm:max-w-96 max-w-72"
                ref={revealRef}
              >
                Tell us about your space.We'll tailor a scent
                experience just for you
              </p>
            </RevealWrapper>



          </div>
        </div>




        {/* Right Column: Form Fields */}
        <div className="w-full lg:w-1/2 lg:bg-[#B7C7BD] bg-[#AAC1AE] p-6 sm:p-6 md:p-10 lg:p-10 xl:p-12 2xl:p-14 flex flex-col justify-center  mb-40 lg:mb-0">
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-8 pb-14 lg:pb-0">
            <RevealWrapper delay={0.2}>
              <UnderlineInput
                id="firstName"
                ref={inputRefs.firstName}
                name="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className={`py-1.5 text-sm sm:text-base ${errors.firstName ? "border-red-500" : ""}`}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1 ml-1">{errors.firstName}</p>}
            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              <UnderlineInput
                id="lastName"
                ref={inputRefs.lastName}
                name="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className={`py-1.5 text-sm sm:text-base ${errors.lastName ? "border-red-500" : ""}`}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1 ml-1">{errors.lastName}</p>}
            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              <UnderlineInput
                id="email"
                ref={inputRefs.email}
                name="email"
                label="Email Address"
                type="text"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`py-1.5 text-sm sm:text-base ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1 ml-1">{errors.email}</p>}
            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              <UnderlineInput
                id="phone"
                ref={inputRefs.phone}
                name="phone"
                label="Phone no."
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={`py-1.5 text-sm sm:text-base ${errors.phone ? "border-red-500" : ""}`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1 ml-1">{errors.phone}</p>}
            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              <UnderlineInput
                id="city"
                ref={inputRefs.city}
                name="city"
                label="City"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className={`py-1.5 text-sm sm:text-base ${errors.city ? "border-red-500" : ""}`}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1 ml-1">{errors.city}</p>}
            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              <UnderlineInput
                id="stateProvince"
                ref={inputRefs.stateProvince}
                name="stateProvince"
                label="State/ Province"
                value={formData.stateProvince}
                onChange={(e) => handleInputChange("stateProvince", e.target.value)}
                className={`py-1.5 text-sm sm:text-base ${errors.stateProvince ? "border-red-500" : ""}`}
              />
              {errors.stateProvince && <p className="text-red-500 text-sm mt-1 ml-1">{errors.stateProvince}</p>}
            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              <h2
                className="mt-6 sm:mt-8 md:mt-12 lg:mt-14 text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium uppercase text-[#4a5b53] inline-block px-4 py-2 rounded lg:max-w-2xl leading-contact max-w-xl"
                ref={revealRef}
              >
                WHAT CAN WE DO FOR YOU?
              </h2>
            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              <UnderlineInput
                id="messageLine1"
                ref={inputRefs.messageLine1}
                name="messageLine1"
                label=""
                value={formData.messageLine1}
                onChange={(e) => handleInputChange("messageLine1", e.target.value)}
                className={`mt-10 py-1.5 text-sm sm:text-base ${errors.messageLine1 ? "border-red-500" : ""}`}
              />
              {errors.messageLine1 && <p className="text-red-500 text-sm mt-1 ml-1">{errors.messageLine1}</p>}
            </RevealWrapper>


            <RevealWrapper delay={0.1}>
              <div className=" hidden relative z-10 mt-14 sm:mt-20 md:mt-20 lg:mt-20 lg:mb-10 lg:flex justify-center">
                <button
                  type="submit"
                  form="contact-form"
                  disabled={isSubmitting}
                  className="px-10 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-3 
                 text-white uppercase text-sm sm:text-base md:text-lg 
                 font-medium rounded-full 
                 bg-[#414A49] hover:bg-[#363f3e] 
                 transition-transform transition-colors duration-300 ease-out 
                 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#414A49]/40 
                 font-xyz disabled:opacity-50 disabled:cursor-not-allowed
                 will-change-transform"
                >
                  {isSubmitting ? "SENDING..." : "SUBMIT"}
                </button>
              </div>
            </RevealWrapper>




            {/* Mobile & md button (bottom center) */}
            <RevealWrapper delay={0.1}>
              <div className="block lg:hidden">
                <div className="absolute left-1/2 -bottom-[80px] sm:-bottom-[77px] md:-bottom-24 translate-x-[-50%] translate-y-1/2 flex justify-center">
                  <button
                    type="submit"
                    form="contact-form"
                    disabled={isSubmitting}
                    className="px-10 sm:px-12 md:px-16 py-3 text-white uppercase text-sm sm:text-base md:text-lg font-medium rounded-full bg-[#414A49] hover:bg-[#363f3e] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#414A49]/40 font-xyz disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "SENDING..." : "SUBMIT"}
                  </button>
                </div>
              </div>
            </RevealWrapper>
          </form>
        </div>
      </div>
      <ThankYouModal isOpen={showThankYou} onClose={handleThankYouClose} />
    </>
  )
}
