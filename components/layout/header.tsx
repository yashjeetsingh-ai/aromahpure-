"use client"

import { useState, useEffect, useLayoutEffect, useRef } from "react"
import { Search, Menu, X, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import BookDemoModal from "../common/BookDemoModal"
import ThankYouModal from "../common/ThankYouModal"
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [isBookDemoModalOpen, setIsBookDemoModalOpen] = useState(false)
  const pathname = usePathname();
  const menuRef = useRef(null)
  const searchRef = useRef(null)
  const moreDropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  

  const isActive = pathname === "/contact-us";

  const handleFormSuccess = () => {
    setIsModalOpen(false)
    setShowThankYou(true)
  }

  const handleThankYouClose = () => {
    setShowThankYou(false)
  }

  const handleClick = (href: string) => {
    if (href === "/book-demo") {
      setIsModalOpen(true)
      setIsMenuOpen(false)
      setShowMenu(false)
      return
    }
    router.push(href)

    // 👇 auto close menu after redirect
    setIsMenuOpen(false)
    setShowMenu(false)
  }

  const handleRedirect = () => {
    router.push('/contact-us'); // je page par redirect karvo che
    setShowMenu(false)
    setIsMenuOpen(false)
  };



  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Industries We Serve", href: "/industries-we-serve", hasIndicator: true },
    { name: "Fragrance Collection", href: "/fragrance-collection" },
    { name: "Our Diffusers", href: "/our-diffusers" },
    // { name: "Book a Demo", href: "/book-demo" },
  ]

  useLayoutEffect(() => {
    if (isMenuOpen) {
      setShowMenu(true)
      requestAnimationFrame(() => {
        gsap.fromTo(menuRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 })
      })
    } else if (showMenu) {
      gsap.to(menuRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        onComplete: () => setShowMenu(false),
      })
    }
  }, [isMenuOpen])

  useLayoutEffect(() => {
    if (isSearchOpen) {
      setShowSearch(true)
      requestAnimationFrame(() => {
        gsap.fromTo(searchRef.current, { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 })
      })
    } else if (showSearch) {
      gsap.to(searchRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.2,
        onComplete: () => setShowSearch(false),
      })
    }
  }, [isSearchOpen])

  useEffect(() => {
    // gsap.fromTo(".header-nav", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
    gsap.fromTo(".logo-text", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, delay: 0.3 })
    gsap.fromTo(".nav-item", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.5 })
    gsap.fromTo(".header-actions", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, delay: 0.7 })
  }, [])

  // Close "More" dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev)
    setIsMenuOpen(false)
    setIsMoreOpen(false)
  }

  const toggleMore = () => {
    setIsMoreOpen((prev) => !prev)
    setIsSearchOpen(false)
    setIsMenuOpen(false)
  }
  return (
    <>
      <header className="header-nav bg-[#687970] text-white relative z-40 shadow-md font-xyz sticky top-0">
        <div className="px-4 2xl:px-28 lg:py-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center logo-text">
              <Image
                src="/Home-page-Aromahpure-Air.png"
                alt="Aromathpuri Logo"
                width={180}
                height={70}
                className="
      object-contain
      w-[140px] h-[55px]   /* 📱 Mobile → smaller */
      sm:w-[160px] sm:h-[62px]  /* 📱 sm → medium */
      md:w-[170px] md:h-[65px]  /* 💻 md+ → original size */
      lg:w-[180px] lg:h-[70px] 
    "
                loading="lazy"
              />
            </Link>



            {/* Desktop Navigation */}
            <nav className="hidden lg:flex xl:hidden items-center space-x-10">

              {navItems.slice(0, 3).map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <div
                    key={index}
                    onClick={() => handleClick(item.href)}
                    className={`text-white/90 hover:text-white transition-all duration-300 
                  text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] tracking-wide relative group py-2 cursor-pointer
                  ${isActive ? "font-medium" : "font-extralight"}`}
                  >
                    {item.name}

                    {/* Indicator Dot */}
                    {/* {pathname === item.href && (
                      <span className="absolute top-1 -right-2 w-2 h-2 bg-[#4ade80] rounded-full animate-pulse"></span>
                    )} */}

                    {/* Bottom Hover Border */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </div>
                );
              })}

              <div className="relative nav-item" ref={moreDropdownRef}>
                <button
                  onClick={toggleMore}
                  className="flex items-center text-white/90 hover:text-white transition-all duration-300 text-[15px] font-light py-2 tracking-wide group"
                >
                  More
                  {isMoreOpen ? (
                    <ChevronUp className="ml-1 h-4 w-4  transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
                {isMoreOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-[#7a8471] rounded-md shadow-lg py-2 z-50 animate-fade-in-up">
                    {navItems.slice(2).map((item, index) => {
                      const isActive = pathname === item.href
                      return (
                        <a
                          key={index}
                          onClick={() => handleClick(item.href)}
                          className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 
                                ${isActive ? "font-medium text-black" : ""}`}
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop Navigation for XL screens and above (1280px+) */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-10">
              {/* All nav items visible directly on XL and 2XL screens */}
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <div key={index} className="relative nav-item">
                    <div
                      onClick={() => handleClick(item.href)}
                      className={`text-white/90 hover:text-white transition-all duration-300 
                    text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] tracking-wide relative group py-2 cursor-pointer
                    ${isActive ? "font-medium" : "font-extralight"}`}
                    >
                      {item.name}

                      {/* Indicator Dot */}
                      {/* {pathname === item.href && (
                        <span className="absolute top-1 -right-2 w-2 h-2 bg-[#4ade80] rounded-full animate-pulse"></span>
                      )} */}

                      {/* Bottom Hover Border */}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </div>
                  </div>
                )
              })}
            </nav>



            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-1 header-actions">

              <span
                onClick={handleRedirect}
                className={`text-white font-normal rounded-md transition-all duration-300 px-6 py-2 text-[12px] xl:text-[13px] tracking-wider cursor-pointer
                ${isActive ? "bg-white/20" : "hover:bg-white/10"}`}
              >
                CONTACT US
              </span>

              <span onClick={() => {
                router.push("/") // 👈 home page ma redirect
                setIsMenuOpen(false)
                setShowMenu(false) // 👈 menu close thayi jashe
              }} className="text-white font-normal hover:bg-white/10 rounded-md transition-all duration-300 px-6 py-2 text-[12px] xl:text-[13px] tracking-wider cursor-pointer max-w-[152px]">
                DOWNLOAD E-CATALOGUE
              </span>


              {/* <button
              onClick={toggleSearch}
              className="flex items-center text-white hover:bg-white/10 transition-all tracking-wider duration-300 rounded-sm py-2 px-4"
            >
              {isSearchOpen ? <X className="h-4 w-5" /> : <Search className="h-4 w-5" />}
              <span className="text-[12px] xl:text-[14px]  ml-2">SEARCH</span>
            </button> */}
            </div>


            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white hover:bg-white/10 p-2 rounded-sm transition-all duration-300"
              onClick={() => {
                setIsMenuOpen((prev) => !prev)
                setIsSearchOpen(false)
              }}
            >
              {isMenuOpen ? <X className="text-4xl" /> : <IoIosMenu className="text-4xl" />}
            </button>

          </div>

          {/* Search Bar */}
          {showSearch && (
            <div
              ref={searchRef}
              className="absolute top-full left-0 right-0 bg-white border-t-2 border-[#7a8471] shadow-lg z-40"
            >
              <div className="container mx-auto px-4 md:px-6 py-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center w-full sm:w-3/4 border border-gray-300 rounded-md px-3 py-2">
                    <Search className="h-5 w-5 text-[#7a8471] mr-2" />
                    <input
                      type="text"
                      placeholder="Search here..."
                      className="flex-1 bg-transparent outline-none text-gray-800 text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-0"
                      autoFocus
                    />
                  </div>
                  <div className="flex w-full sm:w-auto md:gap-4 gap-2">
                    {" "}
                    {/* New flex container for buttons */}
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-[#7a8471] text-[#7a8471] hover:bg-[#7a8471] hover:text-white px-6 py-2 bg-transparent"
                    >
                      Search
                    </Button>
                    {/* Close button for the search bar */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsSearchOpen(false)}
                      className="text-[#7a8471] bg-[#f3f4f1] hover:bg-[#e1e3dd] hover:text-[#6b7563] transition-all duration-200 rounded-md"
                    >
                      <X className="h-6 w-6" />
                    </Button>

                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Navigation */}
          {showMenu && (
            <div
              ref={menuRef}
              className="lg:hidden absolute top-full left-0 right-0 bg-[#829088] border-t border-white/20 shadow-lg z-40"
            >
              <nav className="container mx-auto px-4 md:px-6 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <div key={index} className="relative">
                    <div
                      onClick={() => handleClick(item.href)}
                      className="block text-white/90 hover:text-white text-[16px] py-3 border-b border-white/10 font-extralight cursor-pointer"
                    >
                      {item.name}
                      {/* {pathname === item.href && (
                        <span className="absolute top-1 -right-2 w-2 h-2 bg-[#4ade80] rounded-full animate-pulse"></span>
                      )} */}
                    </div>
                  </div>
                ))}
                <div className="pt-4 space-y-3 flex flex-col">
                  <span
                    onClick={handleRedirect}
                    className="text-white font-normal hover:bg-white/10 p-2 rounded-md transition-all duration-300 py-3 text-[12px] xl:text-[13px] tracking-wider cursor-pointer"
                  >
                    CONTACT US
                  </span>
                  <span onClick={() => {
                    router.push("/") // 👈 home page ma redirect
                    setIsMenuOpen(false)
                    setShowMenu(false) // 👈 menu close thayi jashe
                  }} className="text-white font-normal hover:bg-white/10 p-2 rounded-md transition-all duration-300 py-3 text-[12px] xl:text-[13px] tracking-wider cursor-pointer">
                    DOWNLOAD E-CATALOGUE
                  </span>


                  {/* <Button
                  variant="ghost"
                  className="w-full text-white hover:bg-white/10 justify-start py-3 text-[14px]"
                  onClick={toggleSearch}
                >
                  <Search className="h-4 w-4" />
                  SEARCH
                </Button> */}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* <BookDemoModal isOpen={isBookDemoModalOpen} onClose={() => setIsBookDemoModalOpen(false)} /> */}
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={handleFormSuccess} />

      <ThankYouModal isOpen={showThankYou} onClose={handleThankYouClose} />
    </>

  )
}
