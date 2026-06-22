"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { MapPin, Zap, Users } from "lucide-react";
import svgPaths from "@/imports/MacBookPro141/svg-as91ft63kz";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import imgFitness from "@/imports/MacBookPro141/84601a72623e11eaf461f5da5194e98528792350.png";
import { trackCtaClick } from "@/lib/gtag";

type TabMode = "prenota" | "offri";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: smoothEase },
  },
};

// ── Logo ──────────────────────────────────────────────────
function Logo() {
  return (
    <div style={{ width: 68, height: 43, flexShrink: 0 }}>
      <svg width="100%" height="100%" fill="none" viewBox="0 0 96.5172 61.4745">
        <path d={svgPaths.p153aaaf0} fill="#B6FF3B" />
        <path d={svgPaths.pc7ff500} fill="#B6FF3B" />
      </svg>
    </div>
  );
}

// ── Sport icons ───────────────────────────────────────────
function YogaIcon() {
  return (
    <svg width="16" height="17" fill="none" viewBox="0 0 15.3962 16.2512">
      <path d={svgPaths.p2c7ea100} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71" />
      <path d={svgPaths.p100d5bbe} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71" />
    </svg>
  );
}

function BikeIcon() {
  return (
    <svg width="18" height="16" fill="none" viewBox="0 0 18.817 16.2511">
      <path d={svgPaths.p161c6100} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71" />
    </svg>
  );
}

function SwimIcon() {
  return (
    <svg width="22" height="13" fill="none" viewBox="0 0 23.9475 13.1715">
      <path d={svgPaths.p19ccae40} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
    </svg>
  );
}

function ClimbIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 15.6014 15.6014">
      <path d={svgPaths.p30a924c0} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.56" />
      <path d={svgPaths.p12d00980} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.56" />
    </svg>
  );
}

// ── Step card icons ───────────────────────────────────────
function RegisterIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 40 40">
      <path d={svgPaths.pfcdd580} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
      <path d={svgPaths.p1517b200} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
      <path d="M31.6667 13.3333V23.3333" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
      <path d="M36.6667 18.3333H26.6667" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 40 40">
      <path d={svgPaths.p3d885880} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
      <path d={svgPaths.p108df500} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
      <path d={svgPaths.p2f46cda0} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 40 40">
      <path d="M13.3333 3.33333V10" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
      <path d="M26.6667 3.33333V10" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
      <path d={svgPaths.p36a93880} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
      <path d="M5 16.6667H35" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
    </svg>
  );
}

function TrainIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 40 40">
      <path d="M24 24L16 16" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
      <path d={svgPaths.p3927dd00} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
      <path d="M35.8333 35.8333L33.5 33.5" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
      <path d="M6.5 6.5L4.16667 4.16667" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
      <path d={svgPaths.p3d354080} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33" />
    </svg>
  );
}

// ── Floating class card ───────────────────────────────────
function ClassCard({
  icon,
  label,
  time,
  delay = 0,
  floatDuration = 3,
}: {
  icon: React.ReactNode;
  label: string;
  time: string;
  delay?: number;
  floatDuration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl cursor-default"
      style={{
        animation: `floatCard ${floatDuration}s ease-in-out ${delay * 0.4}s infinite`,
      }}
    >
      <div className="bg-[#B6FF3B] rounded-full w-9 h-9 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[#43474E] text-[10px] leading-tight">Prossima Classe</p>
        <p className="text-[#0A0A0A] text-sm font-medium whitespace-nowrap">{label} • {time}</p>
      </div>
    </motion.div>
  );
}

// ── Header ────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/[0.07] py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "#come-funziona", label: "Come Funziona" },
            { href: "#download", label: "Download l'app" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[#B6FF3B] text-sm font-medium tracking-wide relative group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <button
          className="hidden md:flex items-center gap-2 bg-[#B6FF3B] text-[#0A0A0A] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#ccff60] hover:scale-[1.04] active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(182,255,59,0.25)]"
          onClick={() => trackCtaClick("cta_signup_header", "header_desktop", "Sign up")}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p7662700} />
          </svg>
          Sign up
        </button>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0A0A0A]/98 backdrop-blur-xl border-t border-white/[0.07] px-6 py-6 flex flex-col gap-5"
        >
          <a
            href="#come-funziona"
            className="text-[#B6FF3B] text-base font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Come Funziona
          </a>
          <a
            href="#download"
            className="text-[#B6FF3B] text-base font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Download l'app
          </a>
          <button
            className="flex items-center justify-center gap-2 bg-[#B6FF3B] text-[#0A0A0A] text-sm font-semibold px-5 py-3 rounded-full"
            onClick={() => trackCtaClick("cta_signup_header", "header_mobile", "Sign up")}
          >
            Sign up
          </button>
        </motion.div>
      )}
    </header>
  );
}

// ── Hero Section ──────────────────────────────────────────
function HeroSection() {
  const headlineLines = ["Allenati", "dove vuoi,", "quando vuoi"];

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-24 px-6 lg:px-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B6FF3B]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 xl:gap-20 items-center">
        {/* Left: Text */}
        <div>
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#B6FF3B] animate-pulse" />
            <span className="text-[#B6FF3B] text-xs font-bold tracking-[0.22em] uppercase">MUOVENTO</span>
          </motion.div>

          <div className="mb-8">
            {headlineLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  className="text-5xl sm:text-6xl xl:text-[5.25rem] font-semibold leading-[1.08] text-white"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.12 + i * 0.13,
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            className="text-white/55 text-lg leading-relaxed mb-10 max-w-[400px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.7 }}
          >
            Un abbonamento, centinaia di palestre. Scopri i migliori centri fitness di Torino con un solo piano.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.65 }}
          >
            <button
              className="group flex items-center gap-2 bg-[#B6FF3B] text-[#0A0A0A] font-semibold px-7 py-3.5 rounded-full hover:bg-[#ccff60] hover:scale-[1.03] active:scale-95 transition-all duration-200 shadow-[0_0_28px_rgba(182,255,59,0.22)]"
              onClick={() => trackCtaClick("cta_book_lesson", "hero", "Prenota una lezione")}
            >
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 15 16.6667"
              >
                <path d={svgPaths.p398f0df0} />
              </svg>
              Prenota una lezione
            </button>
            <button
              className="group flex items-center gap-2 bg-transparent text-[#B6FF3B] font-semibold px-7 py-3.5 rounded-full border border-[#B6FF3B]/35 hover:bg-[#B6FF3B]/[0.08] hover:border-[#B6FF3B]/65 active:scale-95 transition-all duration-200"
              onClick={() => trackCtaClick("cta_offer_service", "hero", "Offri una prestazione")}
            >
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                fill="#B6FF3B"
                viewBox="0 0 13.3333 16.6667"
              >
                <path d={svgPaths.p154f1f00} />
              </svg>
              Offri una prestazione
            </button>
          </motion.div>
        </div>

        {/* Right: Image + floating cards */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Fitness image */}
          <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] shadow-[0_48px_100px_rgba(0,0,0,0.6)]">
            <ImageWithFallback
              src={imgFitness.src}
              alt="Persona che si allena con una fascia di resistenza"
              className="w-full h-full object-cover object-center scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>

          {/* Top-left: Yoga */}
          <div className="absolute top-8 -left-6 sm:-left-10 z-10" style={{ rotate: "-3deg" }}>
            <ClassCard icon={<YogaIcon />} label="Yoga" time="Oggi 18:00" delay={0.85} floatDuration={3.6} />
          </div>

          {/* Top-right: Nuoto */}
          <div className="absolute top-12 -right-4 sm:-right-10 z-10" style={{ rotate: "2.5deg" }}>
            <ClassCard icon={<SwimIcon />} label="Nuoto" time="Lun 19:30" delay={1.0} floatDuration={4.1} />
          </div>

          {/* Bottom-left: Arrampicata */}
          <div className="absolute bottom-20 -left-4 sm:-left-8 z-10" style={{ rotate: "2deg" }}>
            <ClassCard icon={<ClimbIcon />} label="Arrampicata" time="Mar 08:00" delay={1.15} floatDuration={3.3} />
          </div>

          {/* Bottom-right: Spinning */}
          <div className="absolute -bottom-2 -right-4 sm:-right-8 z-10" style={{ rotate: "-2deg" }}>
            <ClassCard icon={<BikeIcon />} label="Spinning" time="Sab 13:00" delay={1.05} floatDuration={3.9} />
          </div>

          {/* Decorative glow */}
          <div className="absolute -bottom-12 -right-12 w-52 h-52 bg-[#B6FF3B]/10 rounded-full blur-[70px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

// ── Stats Section ─────────────────────────────────────────
function StatsSection() {
  const stats = [
    { icon: <MapPin className="w-5 h-5 shrink-0" />, value: "200+", label: "Centri convenzionati" },
    { icon: <Zap className="w-5 h-5 shrink-0" />, value: "15+", label: "Attività sportive" },
    { icon: <Users className="w-5 h-5 shrink-0" />, value: "10K+", label: "Utenti attivi" },
  ];

  return (
    <section className="border-t border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {stats.map(({ icon, value, label }, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`flex flex-col sm:flex-row items-center justify-center gap-3 py-10 ${
                i < 2 ? "border-r border-white/[0.06]" : ""
              }`}
            >
              <span className="text-[#B6FF3B]">{icon}</span>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white leading-none">{value}</div>
                <div className="text-white/45 text-sm mt-0.5">{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Step card ─────────────────────────────────────────────
function StepCard({
  step,
  icon,
  title,
  description,
}: {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-[#1a2535] border border-white/10 rounded-3xl p-6 overflow-hidden hover:border-[#B6FF3B]/25 hover:bg-[#1f2d3f] transition-all duration-300 cursor-default"
    >
      {/* Step watermark */}
      <span className="absolute top-4 right-6 text-[62px] font-bold text-white/[0.06] leading-none select-none group-hover:text-[#B6FF3B]/15 transition-colors duration-300">
        {step}
      </span>

      {/* Icon container */}
      <div className="bg-[#9AE600] rounded-2xl w-16 h-16 flex items-center justify-center mb-5 relative shadow-[0_0_28px_rgba(154,230,0,0.25)]">
        <div className="w-10 h-10">{icon}</div>
      </div>

      <h3 className="text-white text-xl font-semibold mb-3 leading-snug">{title}</h3>
      <p className="text-[#b0bdd0] text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

// ── How It Works Section ──────────────────────────────────
function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<TabMode>("prenota");

  const steps: Record<TabMode, Parameters<typeof StepCard>[0][]> = {
    prenota: [
      {
        step: "01",
        icon: <RegisterIcon />,
        title: "Registrati",
        description:
          "Crea il tuo account in pochi minuti e scegli il piano più adatto alle tue esigenze.",
      },
      {
        step: "02",
        icon: <CertificateIcon />,
        title: "Carica il certificato medico",
        description:
          "Carica il tuo certificato valido o prenota per farlo direttamente in app.",
      },
      {
        step: "03",
        icon: <CalendarIcon />,
        title: "Prenota le Classi",
        description:
          "Esplora i centri convenzionati e prenota le tue attività direttamente dall'app.",
      },
      {
        step: "04",
        icon: <TrainIcon />,
        title: "Inizia ad Allenarti",
        description:
          "Presenta il tuo QR code al centro e goditi il tuo allenamento.",
      },
    ],
    offri: [
      {
        step: "01",
        icon: <RegisterIcon />,
        title: "Registra il Centro",
        description:
          "Crea il profilo del tuo centro sportivo e carica tutte le informazioni necessarie.",
      },
      {
        step: "02",
        icon: <CertificateIcon />,
        title: "Configura le Attività",
        description:
          "Aggiungi le discipline sportive che offri e imposta le istruzioni per i clienti.",
      },
      {
        step: "03",
        icon: <CalendarIcon />,
        title: "Pubblica il Calendario",
        description:
          "Definisci orari, disponibilità e numero massimo di partecipanti per ogni lezione.",
      },
      {
        step: "04",
        icon: <TrainIcon />,
        title: "Accogli i Clienti",
        description:
          "Scansiona i QR code all'ingresso e monitora le presenze in tempo reale.",
      },
    ],
  };

  return (
    <section id="come-funziona" className="py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-[3.75rem] font-semibold text-white mb-4 leading-tight"
          >
            Come funziona
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-white/50 text-lg md:text-xl max-w-lg mx-auto mb-10"
          >
            Muovento è la piattaforma dove si incontrano le persone che vogliono fare attività e i prestatori di servizi.
          </motion.p>

          {/* Toggle */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-[#1E2939] rounded-2xl p-1 gap-1"
          >
            <button
              onClick={() => {
                setActiveTab("prenota");
                trackCtaClick("cta_book_lesson_tab", "how_it_works", "Prenota una lezione");
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "prenota"
                  ? "bg-[#B6FF3B] text-[#0A0A0A] shadow-[0_0_16px_rgba(182,255,59,0.3)]"
                  : "text-[#4a6020] hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 15 16.6667">
                <path
                  d={svgPaths.p398f0df0}
                  fill={activeTab === "prenota" ? "#0A0A0A" : "currentColor"}
                />
              </svg>
              Prenota una lezione
            </button>
            <button
              onClick={() => {
                setActiveTab("offri");
                trackCtaClick("cta_offer_service_tab", "how_it_works", "Offri una prestazione");
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "offri"
                  ? "bg-[#B6FF3B] text-[#0A0A0A] shadow-[0_0_16px_rgba(182,255,59,0.3)]"
                  : "text-[#4a6020] hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 13.3333 16.6667">
                <path
                  d={svgPaths.p154f1f00}
                  fill={activeTab === "offri" ? "#0A0A0A" : "#4a6020"}
                />
              </svg>
              Offri una prestazione
            </button>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
          variants={containerVariants}
        >
          {steps[activeTab].map((step, i) => (
            <StepCard key={i} {...step} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Download Section ──────────────────────────────────────
function DownloadSection() {
  return (
    <section id="download" className="py-16 px-6 lg:px-8 pb-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative rounded-[40px] overflow-hidden bg-[#0D1510] border border-[#B6FF3B]/10 px-8 md:px-20 py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#B6FF3B]/12 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#B6FF3B]/8 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative text-center flex flex-col items-center">
            <motion.span
              className="text-[#B6FF3B] text-xs font-bold tracking-[0.2em] uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              Mobile App
            </motion.span>

            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white uppercase tracking-wide mb-4 leading-none"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.65 }}
            >
              Scarica l'app
            </motion.h2>

            <motion.p
              className="text-white/55 text-xl mb-12 max-w-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.38, duration: 0.65 }}
            >
              e comincia subito il tuo percorso verso uno stile di vita più attivo
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.65 }}
            >
              {/* Apple App Store */}
              <button
                className="flex items-center gap-3 bg-black border border-[#A6A6A6]/35 rounded-xl h-14 px-5 hover:border-white/50 hover:bg-[#111] hover:scale-[1.03] active:scale-95 transition-all duration-200"
                onClick={() => trackCtaClick("cta_download_app_store", "download", "App Store")}
              >
                <svg className="w-6 h-7 shrink-0" fill="none" viewBox="0 0 20 24">
                  <path d={svgPaths.p39414c00} fill="white" />
                  <path d={svgPaths.p279a94f0} fill="white" />
                </svg>
                <div className="text-left">
                  <p className="text-white/55 text-[9px] leading-none mb-0.5">Download on the</p>
                  <p className="text-white text-[18px] font-semibold leading-none tracking-tight">App Store</p>
                </div>
              </button>

              {/* Google Play */}
              <button
                className="flex items-center gap-3 bg-black border border-[#A6A6A6]/35 rounded-xl h-14 px-5 hover:border-white/50 hover:bg-[#111] hover:scale-[1.03] active:scale-95 transition-all duration-200"
                onClick={() => trackCtaClick("cta_download_google_play", "download", "Google Play")}
              >
                <svg className="w-6 h-7 shrink-0" fill="none" viewBox="0 0 21 24">
                  <path d={svgPaths.p3e6f9e80} fill="#EA4335" />
                  <path d={svgPaths.p8018300} fill="#FBBC04" />
                  <path d={svgPaths.p17386100} fill="#4285F4" />
                  <path d={svgPaths.p25fa7f00} fill="#34A853" />
                </svg>
                <div className="text-left">
                  <p className="text-white/55 text-[9px] uppercase leading-none mb-0.5 tracking-widest">Get it on</p>
                  <p className="text-white text-[18px] font-semibold leading-none">Google Play</p>
                </div>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── App ───────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-[#0A0A0A] text-white overflow-x-hidden font-['Inter',sans-serif]">
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          40% { transform: translateY(-7px) rotate(0.4deg); }
          70% { transform: translateY(-3px) rotate(-0.2deg); }
        }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 0; background: transparent; }
      `}</style>
      <Header />
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <DownloadSection />
    </div>
  );
}
