import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fatima Gadea | Social Media Manager & Media Buyer",
  description:
    "Social Media Manager specializing in Meta Ads strategy and execution. Turn your social media presence into measurable results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&family=Tenor+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-sand text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
