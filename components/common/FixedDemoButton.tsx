"use client"
import React, { useState } from "react";
import BookDemoModal from "./BookDemoModal";
import ThankYouModal from "./ThankYouModal";
import { useRouter } from "next/navigation";

const FixedDemoButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showThankYou, setShowThankYou] = useState(false)
    const router = useRouter();

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
            return
        }
        router.push(href)
    }
    return (
        <>
            <button
                onClick={() => handleClick("/book-demo")}
                className="fixed bottom-6 right-6 z-50 bg-[#4f5c55] hover:bg-[#3b4841] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
                style={{ minWidth: "160px", textAlign: "center" }}
            >
                Book a Demo
            </button>
            <BookDemoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={handleFormSuccess}
            />

            <ThankYouModal
                isOpen={showThankYou}
                onClose={handleThankYouClose}
            />
        </>
    );
};

export default FixedDemoButton;
