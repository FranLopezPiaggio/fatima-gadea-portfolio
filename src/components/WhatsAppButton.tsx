"use client";

import Image from "next/image";

const phoneNumber = "+5493764609782";
const defaultMessage = "Hola Fatima, me interesa conocer más sobre tus servicios de gestión de redes sociales.";

export function WhatsAppButton({ message }: { message?: string }) {
  const finalMessage = encodeURIComponent(message || defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${finalMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 hover:-translate-y-1 cursor-pointer"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/svg/whatsapp.svg"
        alt="WhatsApp"
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <span>WhatsApp</span>
    </a>
  );
}

export function WhatsAppLink({ message, className = "" }: { message?: string; className?: string }) {
  const finalMessage = encodeURIComponent(message || defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${finalMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/svg/whatsapp.svg"
        alt="WhatsApp"
        width={64}
        height={64}
        className="w-16 h-16"
      />
    </a>
  );
}