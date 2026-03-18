"use client"

import { useState } from "react"
import type React from "react"
import { toast } from "react-toastify"
import RevealWrapper from "@/components/animation/RevealWrapper"
import AnimatedLine from "@/components/animation/AnimatedLine"
import useReveal from "@/hooks/useReveal"
import ThankYouModal from "@/components/common/ThankYouModal"

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

export default function InquireSection() {
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

  const handleThankYouClose = () => setShowThankYou(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"

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

    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json().catch(() => null)

      if (response.ok && result?.success) {
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
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
      console.error("Inquire form error:", error)
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
        className="relative w-full overflow-hidden bg-[#f1ece5]"
        style={{
          backgroundImage: "url('/Untitled-10-28_optimized.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-10 sm:py-14 lg:py-20 font-xyz">
          <div className="max-w-4xl">
            <RevealWrapper delay={0.2}>
              <div className="flex items-center gap-3 sm:gap-4">
                <AnimatedLine className="h-[2px] w-6 sm:w-8 md:w-10 bg-[#364233]" duration={1.2} />
                <p className="text-[#364233] font-medium text-lg sm:text-xl md:text-2xl tracking-wide">
                  Inquire Here
                </p>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={0.3}>
              <div className="space-y-3 sm:space-y-4 mt-4">
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#a0a0a0] leading-tight"
                  ref={revealRef}
                >
                  SEND US YOUR INQUIRY
                </h1>
                <AnimatedLine className="h-[2px] w-full max-w-2xl bg-[#62705a]" duration={1.5} />
              </div>
            </RevealWrapper>

            <RevealWrapper delay={0.4}>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-7 pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name*"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={`w-full pl-4 pr-4 py-3 border-2 rounded-lg bg-transparent text-[#364233] placeholder-[#7d8b74] focus:outline-none transition-colors ${
                        errors.firstName ? "border-red-500 focus:border-red-600" : "border-[#7d8b74] focus:border-[#364233]"
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
                      className={`w-full pl-4 pr-4 py-3 border-2 rounded-lg bg-transparent text-[#364233] placeholder-[#7d8b74] focus:outline-none transition-colors ${
                        errors.lastName ? "border-red-500 focus:border-red-600" : "border-[#7d8b74] focus:border-[#364233]"
                      }`}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1 ml-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full pl-4 pr-4 py-3 border-2 rounded-lg bg-transparent text-[#364233] placeholder-[#7d8b74] focus:outline-none transition-colors ${
                        errors.email ? "border-red-500 focus:border-red-600" : "border-[#7d8b74] focus:border-[#364233]"
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
                      className={`w-full pl-4 pr-4 py-3 border-2 rounded-lg bg-transparent text-[#364233] placeholder-[#7d8b74] focus:outline-none transition-colors ${
                        errors.phone ? "border-red-500 focus:border-red-600" : "border-[#7d8b74] focus:border-[#364233]"
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1 ml-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Message*"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`w-full pl-4 pr-4 py-3 border-2 rounded-lg bg-transparent text-[#364233] placeholder-[#7d8b74] focus:outline-none transition-colors ${
                      errors.message ? "border-red-500 focus:border-red-600" : "border-[#7d8b74] focus:border-[#364233]"
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1 ml-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto min-w-[220px] px-14 sm:px-16 py-3 border-2 border-[#6b7a6b] text-lg font-semibold transition-colors duration-300 tracking-wide rounded-full ${
                    isSubmitting ? "bg-gray-400 text-gray-600 cursor-not-allowed" : "text-[#7d8b74] hover:bg-[#364233] hover:text-white"
                  }`}
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </button>
              </form>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <ThankYouModal isOpen={showThankYou} onClose={handleThankYouClose} />
    </>
  )
}

