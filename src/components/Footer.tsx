"use client";

import { Mail, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-sand">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-heading text-2xl text-green mb-4">Fatima Gadea</h3>
        <p className="text-green/70 mb-6">Social Media Manager & trafficker digital</p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://instagram.com/fatimagadeab"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-green text-white rounded-full flex items-center justify-center hover:bg-teal transition-colors cursor-pointer"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/fatima-gadea-370110274/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-green text-white rounded-full flex items-center justify-center hover:bg-teal transition-colors cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contacto@fatimagadea.com"
            className="w-10 h-10 bg-green text-white rounded-full flex items-center justify-center hover:bg-teal transition-colors cursor-pointer"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-green/60 text-sm">
          © {new Date().getFullYear()} Fatima Gadea. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}