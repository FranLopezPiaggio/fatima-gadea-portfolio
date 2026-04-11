"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  MessageCircle,
  TrendingUp,
  BarChart3,
  FileText,
  Target,
  Award,
  CheckCircle2,
  Mail,
  Instagram,
  Linkedin,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// WhatsApp CTA component
function WhatsAppButton({ message }: { message?: string }) {
  const phoneNumber = "+5493764609782"; // Replace with actual number
  const defaultMessage =
    "Hola Fatima, me interesa conocer más sobre tus servicios de gestión de redes sociales.";
  const finalMessage = encodeURIComponent(message || defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${finalMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-lightGold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 hover:-translate-y-1 cursor-pointer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span>WhatsApp</span>
    </a>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-sand to-aqua/30">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="inline-block text-teal font-medium mb-4 tracking-wider uppercase"
        >
          Social Media Manager & Media Buyer
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-navy mb-6"
        >
          Fatima Gadea
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-navy/80 max-w-2xl mx-auto mb-10"
        >
          Transformo tu presencia en redes sociales en resultados medibles.
          Especialista en Meta Ads y estrategia de contenido.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <WhatsAppButton />
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-all duration-200 cursor-pointer"
          >
            <span>Conoce mis servicios</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 flex justify-center gap-8"
        >
          <div className="text-center">
            <p className="font-heading text-3xl text-navy">5+</p>
            <p className="text-sm text-navy/60">Años de experiencia</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-3xl text-navy">100+</p>
            <p className="text-sm text-navy/60">Proyectos gestionados</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-3xl text-navy">ROI</p>
            <p className="text-sm text-navy/60">Promedio 300%</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.span
          variants={fadeInUp}
          className="text-gold font-medium tracking-wider uppercase"
        >
          Sobre Mí
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          className="font-heading text-4xl md:text-5xl text-navy mt-4 mb-8"
        >
          Mi enfoque: resultados que se pueden medir
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="space-y-6 text-lg text-navy/80"
        >
          <p>
            Soy especialista en gestión de redes sociales y compra de medios en
            Meta Ads. Mi enfoque va más allá de publicar contenido: creo
            estrategias que generan conversaciones, construyen comunidades y
            convierten seguidores en clientes.
          </p>
          <p>
            Trabajo con negocios que entienden que las redes sociales no son
            solo "estar presente", sino una herramienta de marketing poderosa
            que debe medir su impacto.
          </p>
          <p className="text-gold font-medium">
            Mi diferencia: Combino creatividad con datos. Cada decisión se basa
            en métricas reales y cada campaña se optimiza continuamente para
            maximizar el retorno de inversión.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-sand rounded-xl">
            <TrendingUp className="w-8 h-8 text-teal mb-4" />
            <h3 className="font-heading text-xl text-navy mb-2">
              Enfoque en ROI
            </h3>
            <p className="text-navy/70">
              Cada campaña optimizada para resultados medibles
            </p>
          </div>
          <div className="p-6 bg-sand rounded-xl">
            <BarChart3 className="w-8 h-8 text-teal mb-4" />
            <h3 className="font-heading text-xl text-navy mb-2">Data-Driven</h3>
            <p className="text-navy/70">
              Decisiones basadas en análisis de datos reales
            </p>
          </div>
          <div className="p-6 bg-sand rounded-xl">
            <Target className="w-8 h-8 text-teal mb-4" />
            <h3 className="font-heading text-xl text-navy mb-2">
              Estrategia Personalizada
            </h3>
            <p className="text-navy/70">
              Soluciones adaptadas a cada negocio y objetivo
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Services Section
const services = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Gestión de Meta Ads",
    description:
      "Campañas optimizadas para maximizar tu ROI. Configuración, segmentación, creativo y optimización continua.",
    benefit: "Aumenta tus ventas con anuncios que realmente funcionan",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Estrategia de Contenido",
    description:
      "Planificación editorial que conecta con tu audiencia. Calendarios, copywriting y línea visual coherente.",
    benefit: "Construye una marca con voz propia y reconocible",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytics & Reporting",
    description:
      "Dashboard personalizado con métricas que importan. Informes claros y accionables cada semana.",
    name: "Toma decisiones informadas con datos reales",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Community Management",
    description:
      "Gestión de comunidad activa. Respuestas, engagement y construcción de relaciones con tu audiencia.",
    benefit: "Convierte seguidores en clientes leales",
  },
];

function Services() {
  return (
    <section id="servicios" className="py-20 px-4 bg-aqua/20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase">
            Servicios
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-navy mt-4">
            Soluciones para tu presencia digital
          </h2>
          <p className="text-lg text-navy/70 mt-4 max-w-2xl mx-auto">
            No solo ejecuto tareas.Creo estrategias que generan resultados
            reales para tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-heading text-2xl text-navy mb-4">
                {service.title}
              </h3>
              <p className="text-navy/70 mb-4">{service.description}</p>
              <p className="text-teal font-medium">
                {service.benefit || service.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// Experience Section
const experiences = [
  {
    company: "Agencia Digital",
    role: "Social Media Manager",
    period: "2021 - Actualidad",
    description:
      "Gestión integral de redes sociales para +20 clientes en diversos sectores",
  },
  {
    company: "E-commerce Local",
    role: "Media Buyer",
    period: "2020 - 2021",
    description: "Campañas de Meta Ads con ROAS promedio de 4x",
  },
  {
    company: "Startup Tech",
    role: "Content Strategist",
    period: "2019 - 2020",
    description: "Crecimiento de comunidad de 0 a 10K seguidores en 6 meses",
  },
];

function Experience() {
  return (
    <section id="experiencia" className="py-20 px-4 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase">
            Experiencia
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-navy mt-4">
            Trayectoria profesional
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col md:flex-row gap-6 p-6 bg-sand rounded-xl hover:bg-aqua/30 transition-colors duration-300"
            >
              <div className="md:w-1/3">
                <h3 className="font-heading text-xl text-navy">
                  {exp.company}
                </h3>
                <p className="text-teal font-medium">{exp.role}</p>
                <p className="text-navy/60 text-sm mt-2">{exp.period}</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-navy/80">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// Certifications Section
const certifications = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Meta Certified Marketing Professional",
    issuer: "Meta",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Google Digital Garage Certification",
    issuer: "Google",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "HubSpot Inbound Marketing",
    issuer: "HubSpot",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Social Media Marketing Specialist",
    issuer: "Digital Marketing Institute",
  },
];

function Certifications() {
  return (
    <section className="py-20 px-4 bg-navy">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase">
            Certificaciones
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mt-4">
            Formación continua
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center gap-4 p-6 bg-white/10 rounded-xl"
            >
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold">
                {cert.icon}
              </div>
              <div>
                <h3 className="font-heading text-lg text-white">
                  {cert.title}
                </h3>
                <p className="text-gold text-sm">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// Process Section
const process = [
  {
    step: "01",
    title: "Descubrimiento",
    description:
      "Analizo tu negocio, competencia y objetivos. Entiendo tu audiencia meta y tus metas de negocio.",
  },
  {
    step: "02",
    title: "Estrategia",
    description:
      "Desarrollo un plan personalizado con métricas claras, timeline y presupuesto optimizado.",
  },
  {
    step: "03",
    title: "Ejecución",
    description:
      "Implemento la estrategia con gestión diaria de contenido, campañas y community management.",
  },
  {
    step: "04",
    title: "Optimización",
    description:
      "Ajustes continuos basados en datos para mejorar resultados y maximizar el ROI.",
  },
  {
    step: "05",
    title: "Reporte",
    description:
      "Informes semanales con métricas claras y recomendaciones accionables.",
  },
];

function Process() {
  return (
    <section id="proceso" className="py-20 px-4 bg-aqua/20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase">
            Proceso
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-navy mt-4">
            Así trabajo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {process.map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center font-heading text-2xl mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-heading text-xl text-navy mb-2">
                {item.title}
              </h3>
              <p className="text-navy/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-20 px-4 bg-navy">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="text-gold font-medium tracking-wider uppercase"
        >
          ¿Listo para empezar?
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          className="font-heading text-4xl md:text-5xl text-white mt-4 mb-6"
        >
          Hagamos que tu presencia digital cuente
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10">
          Agenda una llamada gratuita de 30 minutos y descubre cómo puedo
          ayudarte a alcanzar tus objetivos en redes sociales.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <WhatsAppButton message="Hola Fatima, me gustaría agendar una llamada para hablar sobre servicios de gestión de redes sociales" />
        </motion.div>

        <motion.p variants={fadeInUp} className="text-white/60 mt-8 text-sm">
          Respuesta garantizada en menos de 24 horas
        </motion.p>
      </motion.div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-4 bg-sand">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-heading text-2xl text-navy mb-4">Fatima Gadea</h3>
        <p className="text-navy/70 mb-6">Social Media Manager & Media Buyer</p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center hover:bg-teal transition-colors cursor-pointer"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center hover:bg-teal transition-colors cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contacto@fatimagadea.com"
            className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center hover:bg-teal transition-colors cursor-pointer"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-navy/60 text-sm">
          © {new Date().getFullYear()} Fatima Gadea. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

// Floating WhatsApp Button
function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/593993456884"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-navy" />
    </motion.a>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Certifications />
      <Process />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
