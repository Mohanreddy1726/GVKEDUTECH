"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=919885852424&text=Hi%2C+I+am+interested+in+studying+abroad.+Please+guide+me."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] blur-lg opacity-50 animate-whatsapp-glow" />

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-ping opacity-30" />

      {/* Button */}
      <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
        {/* <MessageCircle className="w-7 h-7 text-white fill-white" /> */}
        <Image src="https://ik.imagekit.io/abhobz66j/GVK%20Images/whatsappLogoIcon.webp?updatedAt=1776492281833" alt="WhatsappLogo" width={75} height={70} className="text-white fill-white" />
      </div>
      {/* className="w-7 h-7 text-white fill-white" */}

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Chat with us
        <div className="absolute top-full right-5 w-2 h-2 bg-foreground rotate-45 -translate-y-1" />
      </div>
    </a>
  );
};