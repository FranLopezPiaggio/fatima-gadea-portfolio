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
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      {/* <Experience /> */}
      {/* <Certifications /> */}
      <Process />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}