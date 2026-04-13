import {
  Hero,
  About,
  Services,
  Experience,
  Certifications,
  Process,
  CTA,
  Footer,
  FloatingWhatsApp,
  HeroCurtain
} from "@/components";

export default function Home() {
  return (
    <main>
      <HeroCurtain />
      <About />
      <Services />
      <Process />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}