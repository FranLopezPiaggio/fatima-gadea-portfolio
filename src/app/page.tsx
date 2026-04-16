import {
  About,
  Services,
  Projects,
  LinearDecorator,
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
      {/* <Projects /> */}
      <LinearDecorator />
      <Process />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}