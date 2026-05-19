"use client";

import { Phone, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const PHONE_NUMBER_MBBS = "919010060000";
const PHONE_NUMBER_MASTERS = "918886661877";

const MESSAGE_MBBS = "Hi, I am interested in studying MBBS abroad. Please guide me.";
const MESSAGE_MASTERS = "Hi, I am interested in studying Masters abroad. Please guide me.";

export const FloatingButtons = () => {
  const [showWhatsAppMenu, setShowWhatsAppMenu] = useState(false);
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowWhatsAppMenu(false);
        setShowPhoneMenu(false);
      }
    };

    if (showWhatsAppMenu || showPhoneMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobile, showWhatsAppMenu, showPhoneMenu]);

  const handleWhatsAppClick = (program) => {
    const phoneNumber = program === "mbbs" ? PHONE_NUMBER_MBBS : PHONE_NUMBER_MASTERS;
    const message = program === "mbbs" ? MESSAGE_MBBS : MESSAGE_MASTERS;
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setShowWhatsAppMenu(false);
  };

  const handlePhoneClick = (program) => {
    const phoneNumber = program === "mbbs" ? PHONE_NUMBER_MBBS : PHONE_NUMBER_MASTERS;
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
    setShowPhoneMenu(false);
  };

  const toggleWhatsAppMenu = (e) => {
    e.stopPropagation();
    setShowWhatsAppMenu(!showWhatsAppMenu);
    setShowPhoneMenu(false);
  };

  const togglePhoneMenu = (e) => {
    e.stopPropagation();
    setShowPhoneMenu(!showPhoneMenu);
    setShowWhatsAppMenu(false);
  };

  const closeMenus = () => {
    setShowWhatsAppMenu(false);
    setShowPhoneMenu(false);
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col gap-4" onClick={closeMenus}>
      {/* WhatsApp Button */}
      <div className="relative group/whatsapp" onClick={(e) => e.stopPropagation()}>
        {/* Glow effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] blur-lg opacity-50 animate-whatsapp-glow" />

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-ping opacity-30" />

        {/* Button */}
        <button
          onClick={toggleWhatsAppMenu}
          className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <Image src="https://ik.imagekit.io/abhobz66j/GVK%20Images/whatsappLogoIcon.webp?updatedAt=1776492281833" alt="WhatsappLogo" width={75} height={70} className="text-white fill-white" />
        </button>

        {/* Tooltip - show on hover (desktop) or click (mobile) */}
        <div className={`absolute bottom-full right-0 mb-2 min-w-[160px] bg-foreground text-background text-sm font-medium rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${
          isMobile
            ? (showWhatsAppMenu ? "opacity-100 visible" : "opacity-0 invisible")
            : ("group-hover/whatsapp:opacity-100 group-hover/whatsapp:visible opacity-0 invisible")
        }`}>
          <div className="p-2 text-center border-b border-background/20 font-semibold">
            Select Program
          </div>
          <button
            onClick={() => handleWhatsAppClick("masters")}
            className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Masters</span>
          </button>
          <button
            onClick={() => handleWhatsAppClick("mbbs")}
            className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>MBBS</span>
          </button>
          <div className="absolute top-full right-5 w-2 h-2 bg-foreground rotate-45 -translate-y-1" />
        </div>
      </div>

      {/* Phone Button */}
      <div className="relative group/phone" onClick={(e) => e.stopPropagation()}>
        {/* Glow effect */}
        <span className="absolute inset-0 rounded-full bg-blue-600 blur-lg opacity-50 animate-whatsapp-glow" />

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-blue-600 animate-whatsapp-ping opacity-30" />

        {/* Button */}
        <button
          onClick={togglePhoneMenu}
          className="relative w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Call us"
        >
          <PhoneCall className="w-7 h-7 text-white" />
        </button>

        {/* Tooltip - show on hover (desktop) or click (mobile) */}
        <div className={`absolute bottom-full right-0 mb-2 min-w-[160px] bg-foreground text-background text-sm font-medium rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${
          isMobile
            ? (showPhoneMenu ? "opacity-100 visible" : "opacity-0 invisible")
            : ("group-hover/phone:opacity-100 group-hover/phone:visible opacity-0 invisible")
        }`}>
          <div className="p-2 text-center border-b border-background/20 font-semibold">
            Select Program
          </div>
          <button
            onClick={() => handlePhoneClick("masters")}
            className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Masters</span>
          </button>
          <button
            onClick={() => handlePhoneClick("mbbs")}
            className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>MBBS</span>
          </button>
          <div className="absolute top-full right-5 w-2 h-2 bg-foreground rotate-45 -translate-y-1" />
        </div>
      </div>
    </div>
  );
};