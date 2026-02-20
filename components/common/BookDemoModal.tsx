// "use client"

// import type React from "react"
// import { useEffect, useState } from "react"
// import { X } from "lucide-react"
// import RevealWrapper from "@/components/animation/RevealWrapper"
// import AnimatedLine from "@/components/animation/AnimatedLine"
// import ThankYouModal from "./ThankYouModal"

// interface BookDemoModalProps {
//   isOpen: boolean
//   onClose: () => void
// }

// interface FormData {
//   firstName: string
//   lastName: string
//   email: string
//   message: string
// }

// interface FormErrors {
//   firstName?: string
//   lastName?: string
//   email?: string
//   message?: string
// }

// export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
//   const [showThankYou, setShowThankYou] = useState(false)
//   console.log("🚀 ~ BookDemoModal ~ showThankYou:", showThankYou)

//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//   })

//   useEffect(() => {
//     if (!isOpen) {
//       // Reset form data and errors when modal is closed
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         message: "",
//       })
//       setErrors({})
//       setIsSubmitting(false)
//     }
//   }, [isOpen])

//   const [errors, setErrors] = useState<FormErrors>({})
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {}

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = "First name is required"
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = "Last name is required"
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address"
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleInputChange = (field: keyof FormData, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: undefined }))
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!validateForm()) return

//     setIsSubmitting(true)

//     // Simulate brief loading state
//     await new Promise((resolve) => setTimeout(resolve, 1000))

//     // Reset form and show Thank You modal
//     setFormData({ firstName: "", lastName: "", email: "", message: "" })
//     setErrors({})
//     setIsSubmitting(false)
//     onClose() // Close the main modal
//     setShowThankYou(true) // Show Thank You modal
//   }

//   const handleThankYouClose = () => {
//     setShowThankYou(false)
//   }

//   if (!isOpen) return null

//   return (
//     <>
//       <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 font-xyz">
//         {/* Backdrop */}
//         <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

//         {/* Modal */}
//         <div className="relative w-full max-w-3xl">
//           <RevealWrapper delay={0.1}>
//             <div className="bg-[#687970] rounded-2xl shadow-2xl p-4 sm:p-8 md:p-16 text-white">
//               {/* Close Button */}
//               <button
//                 onClick={onClose}
//                 className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/70 hover:text-white transition-colors duration-200"
//               >
//                 <X className="h-5 w-5 sm:h-6 sm:w-6" />
//               </button>

//               {/* Header */}
//               <div className="text-center mb-4 sm:mb-6 mt-4">
//                 <RevealWrapper delay={0.2}>
//                   <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-0.5">INQUIRE HERE</h2>
//                 </RevealWrapper>
//                 <RevealWrapper delay={0.3}>
//                   <div className="flex items-center justify-center mb-7 sm:mb-10">
//                     {/* Very short left line */}
//                     <AnimatedLine className="h-[1px] bg-white md:w-[4.2rem] w-[2.2rem]" />

//                     {/* Gap */}
//                     <div className="w-6"></div>

//                     {/* Long right line */}
//                     <AnimatedLine className="h-[1px] bg-white md:w-[16.5rem] w-[10.5rem]" />
//                   </div>
//                 </RevealWrapper>

//                 <RevealWrapper delay={0.4}>
//                   <p className="text-sm sm:text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto px-2">
//                     Fill out the contact form below to enquire about our services. You can expect a response from us
//                     with next steps within 24 hours!
//                   </p>
//                 </RevealWrapper>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-16">
//                 {/* Name Fields */}
//                 <div className="space-y-8 sm:space-y-4">
//                   <RevealWrapper delay={0.5}>
//                     <div>
//                       <label className="block text-white text-sm sm:text-lg font-normal mb-2 sm:mb-4">
//                         Name (Required)
//                       </label>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16">
//                         <div>
//                           <input
//                             type="text"
//                             placeholder="First Name*"
//                             value={formData.firstName}
//                             onChange={(e) => handleInputChange("firstName", e.target.value)}
//                             className={`w-full bg-transparent border-b-2 tracking-wider ${
//                               errors.firstName ? "border-red-400" : "border-white/30"
//                             } focus:border-white outline-none py-2 sm:py-4 text-sm sm:text-lg text-white placeholder-[#D9DFDB] transition-colors duration-200`}
//                           />
//                           {errors.firstName && (
//                             <p className="text-red-300 sm:text-sm text-xs mt-1">{errors.firstName}</p>
//                           )}
//                         </div>
//                         <div>
//                           <input
//                             type="text"
//                             placeholder="Last Name*"
//                             value={formData.lastName}
//                             onChange={(e) => handleInputChange("lastName", e.target.value)}
//                             className={`w-full bg-transparent border-b-2 ${
//                               errors.lastName ? "border-red-400" : "border-white/30"
//                             } focus:border-white outline-none py-2 sm:py-4 text-sm sm:text-lg text-white placeholder-[#D9DFDB] transition-colors duration-200`}
//                           />
//                           {errors.lastName && <p className="text-red-300 sm:text-sm text-xs mt-1">{errors.lastName}</p>}
//                         </div>
//                       </div>
//                     </div>
//                   </RevealWrapper>

//                   {/* Email Field */}
//                   <RevealWrapper delay={0.6}>
//                     <div>
//                       <input
//                         type="email"
//                         placeholder="Email* (Required)"
//                         value={formData.email}
//                         onChange={(e) => handleInputChange("email", e.target.value)}
//                         className={`w-full bg-transparent border-b-2 ${
//                           errors.email ? "border-red-400" : "border-white/30"
//                         } focus:border-white outline-none py-2 sm:py-4 text-sm sm:text-lg text-white placeholder-[#D9DFDB] transition-colors duration-200`}
//                       />
//                       {errors.email && <p className="text-red-300 sm:text-sm text-xs mt-1">{errors.email}</p>}
//                     </div>
//                   </RevealWrapper>

//                   {/* Message Field */}
//                   <RevealWrapper delay={0.7}>
//                     <div>
//                       <input
//                         placeholder="Message*"
//                         value={formData.message}
//                         onChange={(e) => handleInputChange("message", e.target.value)}
//                         className={`w-full bg-transparent border-b-2 ${
//                           errors.message ? "border-red-400" : "border-white/30"
//                         } focus:border-white outline-none py-2 sm:py-4 text-sm sm:text-lg text-white placeholder-[#D9DFDB] resize-none transition-colors duration-200`}
//                       />
//                       {errors.message && <p className="text-red-300 sm:text-sm text-xs mt-1">{errors.message}</p>}
//                     </div>
//                   </RevealWrapper>
//                 </div>

//                 {/* Submit Button */}
//                 <RevealWrapper delay={0.2}>
//                   <div className="text-center pt-5 sm:pt-10 mb-5 md:mb-0">
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="bg-white/90 hover:bg-white text-black border border-black font-medium py-1.5 px-8 sm:px-12 text-base sm:text-2xl rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
//                     </button>
//                   </div>
//                 </RevealWrapper>
//               </form>
//             </div>
//           </RevealWrapper>
//         </div>
//       </div>

//       <ThankYouModal isOpen={showThankYou} onClose={handleThankYouClose} />
//     </>
//   )
// }



"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { toast } from "react-toastify"
import RevealWrapper from "@/components/animation/RevealWrapper"
import AnimatedLine from "@/components/animation/AnimatedLine"

interface BookDemoModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
}

export default function BookDemoModal({ isOpen, onClose, onSuccess }: BookDemoModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      })
      setErrors({})
      setIsSubmitting(false)
    }
  }, [isOpen])

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

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-demo-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // toast.success("Demo request sent successfully! Check your email for confirmation.")
        onSuccess()
      } else {
        const errorData = await response.json()
        toast.error(errorData.error || "Failed to send demo request. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 font-xyz">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-3xl">
        <RevealWrapper delay={0.1}>
          <div className="bg-[#687970] rounded-2xl shadow-2xl p-4 sm:p-8 md:p-16 text-white">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/70 hover:text-white transition-colors duration-200"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-4 sm:mb-6 mt-4">
              <RevealWrapper delay={0.2}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-0.5">INQUIRE HERE</h2>
              </RevealWrapper>
              <RevealWrapper delay={0.3}>
                <div className="flex items-center justify-center mb-7 sm:mb-10">
                  {/* Very short left line */}
                  <AnimatedLine className="h-[1px] bg-white md:w-[4.2rem] w-[2.2rem]" />

                  {/* Gap */}
                  <div className="w-6"></div>

                  {/* Long right line */}
                  <AnimatedLine className="h-[1px] bg-white md:w-[16.5rem] w-[10.5rem]" />
                </div>
              </RevealWrapper>

              <RevealWrapper delay={0.4}>
                <p className="text-sm sm:text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto px-2">
                  Fill out the contact form below to enquire about our services. You can expect a response from us with
                  next steps within 24 hours!
                </p>
              </RevealWrapper>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-16">
              {/* Name Fields */}
              <div className="space-y-8 sm:space-y-4">
                <RevealWrapper delay={0.5}>
                  <div>
                    <label className="block text-white text-sm sm:text-lg font-normal mb-2 sm:mb-4">
                      Name (Required)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16">
                      <div>
                        <input
                          type="text"
                          placeholder="First Name*"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className={`w-full bg-transparent border-b-2 tracking-wider ${errors.firstName ? "border-red-400" : "border-white/30"
                            } focus:border-white outline-none py-2 sm:py-4 text-sm sm:text-lg text-white placeholder-[#D9DFDB] transition-colors duration-200`}
                        />
                        {errors.firstName && <p className="text-red-300 sm:text-sm text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Last Name*"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className={`w-full bg-transparent border-b-2 ${errors.lastName ? "border-red-400" : "border-white/30"
                            } focus:border-white outline-none py-2 sm:py-4 text-sm sm:text-lg text-white placeholder-[#D9DFDB] transition-colors duration-200`}
                        />
                        {errors.lastName && <p className="text-red-300 sm:text-sm text-xs mt-1">{errors.lastName}</p>}
                      </div>
                    </div>
                  </div>
                </RevealWrapper>

                {/* Email Field */}
                <RevealWrapper delay={0.6}>
                  <div>
                    <input
                      type="text"
                      placeholder="Email* (Required)"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full bg-transparent border-b-2 ${errors.email ? "border-red-400" : "border-white/30"
                        } focus:border-white outline-none py-2 sm:py-4 text-sm sm:text-lg text-white placeholder-[#D9DFDB] transition-colors duration-200`}
                    />
                    {errors.email && <p className="text-red-300 sm:text-sm text-xs mt-1">{errors.email}</p>}
                  </div>
                </RevealWrapper>

                {/* Message Field */}
                <RevealWrapper delay={0.7}>
                  <div>
                    <input
                      placeholder="Message*"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`w-full bg-transparent border-b-2 ${errors.message ? "border-red-400" : "border-white/30"
                        } focus:border-white outline-none py-2 sm:py-4 text-sm sm:text-lg text-white placeholder-[#D9DFDB] resize-none transition-colors duration-200`}
                    />
                    {errors.message && <p className="text-red-300 sm:text-sm text-xs mt-1">{errors.message}</p>}
                  </div>
                </RevealWrapper>
              </div>

              {/* Submit Button */}
              <RevealWrapper>
                <div className="text-center pt-5 sm:pt-10 mb-5 md:mb-0">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-white/90 text-black border border-black font-medium py-1.5 px-8 sm:px-12 text-base sm:text-2xl rounded-full transition-all duration-300 tracking-wide ${isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-[#364233] hover:text-white"
                      }`}
                  >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                </div>

              </RevealWrapper>
            </form>
          </div>
        </RevealWrapper>
      </div>
    </div>
  )
}
