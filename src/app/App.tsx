import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Building2, PenLine, BarChart3, ShieldCheck, BookOpen, Landmark, ClipboardList, Users, Check, ChevronRight, Lock, HelpCircle, Heart, Shield, TrendingUp, Menu, X, ChevronDown, Facebook } from "lucide-react";
import { InteractiveDashboard } from "./components/InteractiveDashboard";
import imgLogoFull from "../assets/a65d01e22650a649bffd6b81718207659fb69d94.png";
import imgRectangle5 from "../assets/0c7863a730a70d564f7f174eadec97b8e83a5295.png";
import imgBanner from "../assets/05796020c94b6ec4f0869d691e82f08a72ca68e2.png";
import imgBanner1 from "../assets/3d6d9461d8c2e4f6d161413dd436f9d4c6bfb491.png";
import imgBanner2 from "../assets/6d9bc74846af2bfb75e46af2d6c0f5063f54395f.png";
import imgBanner3 from "../assets/3868d4a7cac88c8d3b4c7322c0485c18c7b09085.png";
import imgLogoFull1 from "../assets/195d19c3912b64142c49b51f4624398d7b2c2be9.png";
import imgHero from "../assets/hero-image.png";
import imgQuoteSection from "../assets/quote-section.png";
import heroVideo from "../assets/hero-video-5.mp4";

// ─── Fonts ──────────────────────────────────────────────────────────────────
const U = { fontFamily: "Urbanist, sans-serif" } as const;
const DM = { fontFamily: "DM Sans, sans-serif" } as const;

// ─── Scroll helper ───────────────────────────────────────────────────────────
function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ─── Scroll animation wrapper ────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Who It's For", id: "who-benefits" },
  { label: "Features", id: "features" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
  }, [scrolled]);

  function handleNavLink(id: string) {
    setMenuOpen(false);
    scrollToSection(id);
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/98 shadow-[0_2px_20px_rgba(0,53,29,0.08)]"
          : "bg-[rgba(246,251,243,0.95)]"
      }`}
    >
      {/* Main bar */}
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-24 h-16">
        <div className="flex items-center gap-2 shrink-0">
          <img src={imgLogoFull} alt="StewardTrack" className="h-[28px] w-auto object-contain" />
        </div>

        {/* Desktop links */}
        <div
          className="hidden md:flex items-center gap-8 text-[14px] text-[#4a5a4a] font-medium"
          style={DM}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-[#1a6640] transition-colors duration-200 cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex items-center justify-center size-9 rounded-full hover:bg-[#eaf3e5] transition-colors duration-200 cursor-pointer text-[#1a6640]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button
            className="bg-[#00351d] text-white text-[14px] font-bold px-6 py-2.5 rounded-full hover:bg-[#1a6640] transition-colors duration-200 cursor-pointer"
            style={U}
          >
            Try Free
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-[rgba(0,53,29,0.08)] bg-white/98 px-8 py-3 flex flex-col gap-1"
          style={DM}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavLink(link.id)}
              className="text-left text-[15px] text-[#4a5a4a] font-medium py-3 border-b border-[rgba(0,53,29,0.06)] last:border-0 hover:text-[#1a6640] transition-colors duration-200 cursor-pointer bg-transparent w-full"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!glowRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.background = `radial-gradient(circle 520px at ${x}px ${y}px, rgba(212,175,85,0.18) 0%, rgba(0,155,85,0.07) 45%, transparent 70%)`;
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!glowRef.current) return;
    glowRef.current.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!glowRef.current) return;
    glowRef.current.style.opacity = "0";
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden snap-section flex items-end lg:items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background video — looping, woman on right */}
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "80% center" }}
      />

      {/* Green gradient overlay — solid on left, fades to transparent on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #00351d 28%, rgba(0,53,29,0.85) 45%, rgba(0,53,29,0.2) 62%, transparent 78%)",
        }}
      />

      {/* Mouse-following glow — gold/green radial light tracking cursor */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0,
          transition: "opacity 0.5s ease",
          background: "transparent",
        }}
      />

      {/* Content — left-aligned, sits on top of gradient */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-0">
        <div className="flex flex-col items-start max-w-[540px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[rgba(245,236,208,0.15)] border border-[rgba(245,236,208,0.35)] px-4 py-1.5 rounded-full mb-6"
          >
            <span className="text-[#f5ecd0] text-[12px] font-bold" style={U}>
              ⭐ Built for Filipino Churches
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white font-extrabold text-[36px] lg:text-[56px] leading-[1.1] tracking-[-1px] lg:tracking-[-1.12px] mb-4 lg:mb-5"
            style={U}
          >
            <div>Your faithful work</div>
            <div>
              deserves{" "}
              <span className="text-[#d4af55]">better tools</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[rgba(255,255,255,0.8)] text-[15px] lg:text-[17px] leading-[26px] lg:leading-[28px] mb-6 lg:mb-8"
            style={DM}
          >
            <p>One platform for your people, finances, and ministry.</p>
            <p>Replace notebooks with clarity — without losing control.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mb-8 lg:mb-10"
          >
            <button
              className="bg-[#d4af55] text-[#00351d] text-[15px] font-bold px-7 py-3.5 rounded-full hover:bg-[#f5ecd0] transition-colors duration-200 shadow-[0_8px_30px_rgba(0,0,0,0.25)] cursor-pointer text-center"
              style={U}
            >
              Try StewardTrack Free
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-white text-[15px] font-bold px-7 py-3.5 rounded-full border-[1.5px] border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-200 cursor-pointer text-center"
              style={U}
            >
              See how it works
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex gap-5 lg:gap-10 items-start"
          >
            {[
              { val: "₱0 to start", sub: "No credit card needed" },
              { val: "10 min", sub: "Setup time" },
              { val: "100%", sub: "Your data, always" },
            ].map((s) => (
              <div key={s.val} className="flex flex-col gap-1">
                <span className="text-white font-extrabold text-[20px] lg:text-[26px] leading-none" style={U}>
                  {s.val}
                </span>
                <span className="text-[rgba(255,255,255,0.65)] text-[13px]" style={DM}>
                  {s.sub}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Who Benefits ─────────────────────────────────────────────────────────────
const whoCards = [
  {
    icon: Landmark,
    title: "Treasurers & Finance Teams",
    desc: "Record every transaction, generate financial reports, and prepare for audits.",
    benefit: "Audit-ready books in minutes, not days",
  },
  {
    icon: BookOpen,
    title: "Pastors & Ministry Leaders",
    desc: "See your congregation at a glance — attendance, care plans, and ministry progress.",
    benefit: "Bird's-eye view of the whole church",
  },
  {
    icon: ShieldCheck,
    title: "Church Administrators",
    desc: "Manage the whole platform, user access, and church-wide settings from one place.",
    benefit: "Full system control and audit trail",
  },
  {
    icon: ClipboardList,
    title: "Secretaries",
    desc: "Manage member records, schedule events, and handle communications in one place.",
    benefit: "Less admin chaos, more done",
  },
  {
    icon: Users,
    title: "Volunteers & Members",
    desc: "Participate in events, give online, and stay connected with church activities.",
    benefit: "Stay engaged from anywhere",
  },
];

function WhoBenefits() {
  return (
    <section
      id="who-benefits"
      className="w-full py-14 lg:py-20 px-6 sm:px-10 lg:px-16 xl:px-24 snap-section-overflow"
      style={{
        background: "linear-gradient(68deg, rgb(0,53,29) 13%, rgb(0,155,85) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 items-center">
        <FadeUp className="text-center">
          <p className="text-[#d4af55] text-[12px] font-bold mb-3" style={U}>
            — Who It's For
          </p>
          <h2
            className="text-white font-extrabold text-[28px] lg:text-[40px] tracking-[-0.4px] lg:tracking-[-0.6px] leading-[1.2] mb-3"
            style={U}
          >
            Built for Everyone Who{" "}
            <span className="text-[#b8973a]">Serves Your Church</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.62)] text-[16px] max-w-[726px] mx-auto leading-[26px]" style={DM}>
            StewardTrack gives each role the tools they need — without the complexity they don't.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full items-stretch">
          {whoCards.map((card, i) => (
            <FadeUp key={card.title} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.12)" }}
                transition={{ duration: 0.2 }}
                className="bg-[rgba(255,255,255,0.07)] rounded-[20px] p-6 flex flex-col gap-3 h-full"
              >
                <div className="bg-[rgba(184,151,58,0.22)] rounded-[10px] size-11 flex items-center justify-center">
                  <card.icon size={20} className="text-[#d4af55]" />
                </div>
                <p className="text-white font-bold text-[14px] leading-[1.4]" style={U}>
                  {card.title}
                </p>
                <p
                  className="text-[rgba(255,255,255,0.58)] text-[12px] leading-[18px] flex-1"
                  style={DM}
                >
                  {card.desc}
                </p>
                <div className="border-t border-[rgba(255,255,255,0.12)] pt-3">
                  <p className="text-[#d4af55] text-[11px] font-semibold leading-[1.4]" style={DM}>
                    {card.benefit}
                  </p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pain Points ──────────────────────────────────────────────────────────────
const pains = [
  {
    n: 1,
    title: "Records Live Only in Notebooks",
    desc: "Your faithfulness deserves to be protected forever — not stored in something that can be lost or damaged.",
  },
  {
    n: 2,
    title: "You're the Only One Who Understands",
    desc: "If you leave, the system collapses. No one else knows where anything is.",
  },
  {
    n: 3,
    title: "Finding Old Records Is Detective Work",
    desc: "A 2-year-old donation query takes an hour of notebook hunting.",
  },
  {
    n: 4,
    title: "Audit Season Feels Stressful",
    desc: "Your records are honest. StewardTrack just makes it easier to show that — clearly and confidently.",
  },
  {
    n: 5,
    title: "Members Question Transparency",
    desc: "Imagine answering any financial question on the spot, with confidence and records to match.",
  },
];

function PainPoints() {
  return (
    <section className="bg-[#eaf3e5] w-full py-14 lg:py-20 px-6 sm:px-10 lg:px-16 xl:px-24 snap-section-overflow">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        {/* Left card */}
        <FadeUp className="flex-shrink-0 w-full lg:w-[560px]">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,51,26,0.1)] p-7 flex flex-col divide-y divide-[rgba(0,53,29,0.07)]">
            {pains.map((p) => (
              <motion.div
                key={p.n}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
                className="flex gap-4 items-start py-4 first:pt-0 last:pb-0"
              >
                <div className="bg-[#b8973a] rounded-full size-[30px] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[12px] font-bold" style={U}>
                    {p.n}
                  </span>
                </div>
                <div>
                  <p className="text-[#181d18] font-bold text-[13px] mb-1" style={U}>
                    {p.title}
                  </p>
                  <p className="text-[#4a5a4a] text-[12px] leading-[18px]" style={DM}>
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* Right copy */}
        <FadeUp delay={0.15} className="flex-1">
          <p className="text-[#b8973a] text-[12px] font-bold mb-3" style={U}>
            — Sound Familiar?
          </p>
          <h2
            className="text-[#1a6640] font-extrabold text-[26px] lg:text-[40px] tracking-[-0.4px] lg:tracking-[-0.6px] leading-[1.25] mb-4 lg:mb-5"
            style={U}
          >
            Your notebooks show your dedication.
            <br />
            Now let technology carry the weight they can't.
          </h2>
          <p className="text-[#4a5a4a] text-[16px] leading-[26px] max-w-[420px] mb-8" style={DM}>
            You've been doing this faithfully for years. StewardTrack isn't here to replace that
            faithfulness — it's here to protect it, amplify it, and give you the confidence you deserve.
          </p>
          <button
            onClick={() => scrollToSection("features")}
            className="bg-[#00351d] text-white font-bold text-[15px] px-7 py-3.5 rounded-full hover:bg-[#1a6640] transition-colors duration-200 cursor-pointer"
            style={U}
          >
            See the Solution
          </button>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Dashboard Showcase ───────────────────────────────────────────────────────
function DashboardShowcase() {
  return (
    <section className="bg-[#f6fbf3] w-full py-14 lg:py-20 px-6 sm:px-10 lg:px-16 xl:px-24 snap-section-overflow">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <FadeUp className="text-center mb-10 lg:mb-14">
          <p className="text-[#b8973a] text-[12px] font-bold mb-3" style={U}>
            — See It In Action
          </p>
          <h2
            className="text-[#1a6640] font-extrabold text-[26px] lg:text-[40px] tracking-[-0.4px] lg:tracking-[-0.6px] leading-[1.25]"
            style={U}
          >
            Everything you need, in one clear view.
          </h2>
          <p className="text-[#4a5a4a] text-[16px] leading-[26px] mt-4 max-w-[480px] mx-auto" style={DM}>
            From giving records to ministry budgets, StewardTrack keeps your church's finances organized and transparent.
          </p>
        </FadeUp>
        <FadeUp delay={0.15} className="w-full flex justify-center">
          <InteractiveDashboard />
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Platform Modules ─────────────────────────────────────────────────────────
const modules = [
  {
    title: "Community",
    letter: "C",
    bg: "#134d30",
    img: imgBanner,
    tier: "All Tiers",
    tierColor: "#b8973a",
    tierBg: "#f5ecd0",
    desc: "Know your people. Track giving. Understand your congregation.",
    feats: [
      "Member profiles & giving history",
      "Families & relationships",
      "Pastoral care tracking",
      "Discipleship growth paths",
    ],
  },
  {
    title: "Stewardship",
    letter: "S",
    bg: "#7a5e18",
    img: imgBanner1,
    tier: "Professional",
    tierColor: "#8a6020",
    tierBg: "#fff3d0",
    desc: "Track every peso. See where God's money is going.",
    feats: [
      "Record donations & expenses",
      "Online giving integration",
      "Ministry budgets",
      "Audit-ready financial reports",
    ],
  },
  {
    title: "Planning",
    letter: "P",
    bg: "#1a4a6a",
    img: imgBanner2,
    tier: "Premium+",
    tierColor: "#1f5c7a",
    tierBg: "#e8f4f8",
    desc: "Organize events, coordinate ministries, set goals.",
    feats: [
      "Church event calendar",
      "Service scheduling",
      "Volunteer coordination",
      "Ministry teams & goals",
    ],
  },
  {
    title: "Communication",
    letter: "C",
    bg: "#1d2a50",
    img: imgBanner3,
    tier: "All Tiers",
    tierColor: "#b8973a",
    tierBg: "#f5ecd0",
    desc: "Reach your people. Keep everyone informed.",
    feats: [
      "Email & SMS campaigns",
      "Facebook messaging",
      "Message templates",
      "Targeted outreach",
    ],
  },
];

function PlatformModules() {
  return (
    <section id="features" className="bg-[#f6fbf3] w-full py-14 lg:py-20 px-6 sm:px-10 lg:px-16 xl:px-24 snap-section-overflow">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 items-center">
        <FadeUp className="text-center">
          <p className="text-[#b8973a] text-[12px] font-bold mb-3" style={U}>
            — Platform Modules
          </p>
          <h2
            className="text-[#1a6640] font-extrabold text-[28px] lg:text-[40px] tracking-[-0.4px] lg:tracking-[-0.6px] leading-[1.2] mb-3"
            style={U}
          >
            Built for the Work <span className="text-[#b8973a]">You Actually Do</span>
          </h2>
          <p className="text-[#4a5a4a] text-[16px] leading-[26px] max-w-[500px] mx-auto" style={DM}>
            Organized around your church — not corporate finance jargon.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full items-stretch">
          {modules.map((mod, i) => (
            <FadeUp key={mod.title + i} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.22 }}
                className="flex flex-col h-full"
              >
                {/* Full-bleed photo — all corners rounded */}
                <div
                  className="h-[200px] relative overflow-hidden rounded-[20px] shrink-0"
                  style={{ backgroundColor: mod.bg }}
                >
                  <img
                    src={mod.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: mod.bg, opacity: 0.62 }}
                  />
                  {/* Watermark letter — top-right texture */}
                  <span
                    className="absolute -top-2 -right-2 font-extrabold select-none pointer-events-none leading-none"
                    style={{ ...U, fontSize: 100, color: "rgba(255,255,255,0.09)" }}
                  >
                    {mod.letter}
                  </span>
                </div>

                {/* Floating content card — overlaps photo */}
                <div className="relative -mt-10 bg-white rounded-[16px] shadow-[0_8px_32px_rgba(0,51,26,0.13)] px-5 pb-6 pt-5 flex flex-col gap-3 flex-1 z-10">
                  <p className="text-[#181d18] font-extrabold text-[17px] leading-tight" style={U}>
                    {mod.title}
                  </p>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full self-start cursor-pointer hover:opacity-80 transition-opacity duration-150"
                    style={{
                      color: mod.tierColor,
                      backgroundColor: mod.tierBg,
                      fontFamily: "Urbanist, sans-serif",
                    }}
                  >
                    {mod.tier}
                    <ChevronDown size={10} />
                  </button>
                  <p
                    className="text-[13px] leading-[21px]"
                    style={{ ...DM, color: "#4a5a4a" }}
                  >
                    {mod.desc}
                  </p>
                  <div className="flex flex-col gap-2 flex-1">
                    {mod.feats.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <Check size={13} className="text-[#1a6640] shrink-0 mt-[2px]" />
                        <p
                          className="text-[13px] leading-[20px]"
                          style={{ ...DM, color: "#4a5a4a" }}
                        >
                          {f}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Cinematic Banner ─────────────────────────────────────────────────────────
function CinematicSection() {
  return (
    <section className="relative w-full snap-section flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={imgQuoteSection}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Left-to-right green gradient overlay — matches hero */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #00351d 28%, rgba(0,53,29,0.85) 45%, rgba(0,53,29,0.2) 62%, transparent 78%)",
        }}
      />
      {/* Gold accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right, transparent, #b8973a, transparent)" }}
      />
      {/* Content — left aligned */}
      <div className="relative w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-20">
        <FadeUp className="max-w-[560px]">
          <p
            className="text-[#d4af55] text-[11px] font-bold mb-8 tracking-[0.12em] uppercase"
            style={U}
          >
            — The Heart Behind the Tool
          </p>
          <blockquote
            className="text-white font-extrabold text-[26px] lg:text-[44px] leading-[1.2] tracking-[-0.4px] lg:tracking-[-0.8px] mb-8"
            style={U}
          >
            "Behind every notebook is someone who showed up every Sunday,
            recorded every peso, and never asked for recognition."
          </blockquote>
          <div className="w-12 h-[2px] bg-[#b8973a] mb-6 rounded-full" />
          <p
            className="text-[rgba(255,255,255,0.65)] text-[15px] lg:text-[17px] leading-[28px]"
            style={DM}
          >
            StewardTrack is built for them.
          </p>
        </FadeUp>
      </div>
      {/* Gold accent line bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right, transparent, #b8973a, transparent)" }}
      />
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────────
const steps = [
  { Icon: Mail,      num: 1, title: "Sign Up Free",        desc: "Email + password. No credit card. No pressure." },
  { Icon: Building2, num: 2, title: "Set Up Your Church",  desc: "Enter your church name, accounts, and giving categories." },
  { Icon: PenLine,   num: 3, title: "You Enter Your Data", desc: "Every donation, every expense — you enter it. StewardTrack remembers it forever." },
  { Icon: BarChart3, num: 4, title: "You See Clearly",     desc: "Reports, totals, giving trends — answered instantly, any time." },
];

function HowItWorks() {
  return (
    <section
      className="w-full py-14 lg:py-20 px-6 sm:px-10 lg:px-16 xl:px-24 snap-section-overflow flex flex-col justify-center"
      style={{
        background: "linear-gradient(65deg, rgb(0,53,29) 13%, rgb(0,155,85) 103%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14 items-center">
        <FadeUp className="text-center">
          <p className="text-[#d4af55] text-[12px] font-bold mb-3" style={U}>
            — Getting Started
          </p>
          <h2
            className="text-white font-extrabold text-[28px] lg:text-[40px] tracking-[-0.4px] lg:tracking-[-0.6px] leading-[1.2] mb-3"
            style={U}
          >
            You + StewardTrack as Partners
          </h2>
          <p className="text-[rgba(255,255,255,0.62)] text-[16px]" style={DM}>
            Simple setup. You stay in complete control.
          </p>
        </FadeUp>

        {/* Flow layout — connectors are siblings of steps in the flex-row */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-0">
          {steps.flatMap((step, i) => {
            const stepEl = (
              <FadeUp key={step.title} delay={i * 0.1} className="flex-1 flex flex-col items-start lg:items-center gap-4 text-left lg:text-center px-0 lg:px-4 pb-8 lg:pb-0 relative pl-6 lg:pl-4">
                {/* Mobile vertical connector line */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-[13px] top-[68px] bottom-0 border-l-2 border-dashed border-[rgba(255,255,255,0.2)]" />
                )}

                {/* Number badge + icon */}
                <div className="flex items-center gap-3 lg:flex-col lg:items-center lg:gap-3">
                  <div
                    className="size-7 rounded-full bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.25)] flex items-center justify-center shrink-0"
                    style={{ ...U, color: "#d4af55", fontWeight: 800, fontSize: 12 }}
                  >
                    {step.num}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                    className="size-[60px] rounded-2xl bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] flex items-center justify-center shrink-0"
                  >
                    <step.Icon size={24} color="white" />
                  </motion.div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <p className="text-white font-bold text-[16px]" style={U}>{step.title}</p>
                  <p className="text-[rgba(255,255,255,0.55)] text-[13px] leading-[20px] max-w-[200px] lg:max-w-[180px]" style={DM}>{step.desc}</p>
                </div>
              </FadeUp>
            );
            if (i < steps.length - 1) {
              return [
                stepEl,
                <div key={`connector-${i}`} className="hidden lg:flex items-center shrink-0 w-8 mt-[62px]">
                  <div className="flex-1 border-t-2 border-dashed border-[rgba(255,255,255,0.22)]" />
                  <ChevronRight size={14} className="text-[rgba(255,255,255,0.38)] -ml-1 shrink-0" />
                </div>,
              ];
            }
            return [stepEl];
          })}
        </div>

        {/* CTA after the flow */}
        <FadeUp delay={0.45}>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 16px 40px rgba(184,150,59,0.45)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="bg-[#b8973a] text-white font-bold text-[15px] px-8 py-4 rounded-full shadow-[0_8px_30px_rgba(184,150,59,0.3)] hover:bg-[#a07e2e] transition-colors duration-200 cursor-pointer w-full sm:w-auto"
            style={U}
          >
            Start for Free — Takes 10 Minutes
          </motion.button>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    initials: "M",
    color: "#1a6640",
    name: "Maria",
    role: "Treasurer, Independent Bible Church · Quezon City",
    quote:
      "For years I kept everything in notebooks. I was proud of my records — but I was also the only one who understood them. Now I can show the board exactly where every peso went, and I feel at peace knowing nothing can be lost.",
  },
  {
    initials: "P",
    color: "#b8973a",
    name: "Pastor Jose",
    role: "Full Gospel Church · Cebu City",
    quote:
      "I still enter every transaction myself — I want to. But now they're instantly safe and audit-ready. I can answer any question about God's money with confidence. That peace of mind is priceless.",
  },
  {
    initials: "A",
    color: "#2e6b8a",
    name: "Ate Annie",
    role: "Church Secretary · Community Baptist Church · General Santos City",
    quote:
      "Our annual financial report used to take me two weeks of digging through old notebooks. Now it takes one afternoon. StewardTrack didn't replace my work — it made my faithfulness more visible.",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#eaf3e5] w-full py-14 lg:py-20 px-6 sm:px-10 lg:px-16 xl:px-24 snap-section-overflow">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 items-center">
        <FadeUp className="text-center">
          <p className="text-[#b8973a] text-[12px] font-bold mb-3" style={U}>
            — Real Stories
          </p>
          <h2
            className="text-[#1a6640] font-extrabold text-[28px] lg:text-[40px] tracking-[-0.4px] lg:tracking-[-0.6px] leading-[1.2]"
            style={U}
          >
            From Faithful Church Leaders Like You
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full items-stretch">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,51,26,0.1)" }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,51,26,0.06)] p-7 flex flex-col gap-3 h-full"
              >
                {/* Person first — grounds the quote immediately */}
                <div className="flex items-center gap-3">
                  <div
                    className="size-[38px] rounded-full flex items-center justify-center text-white text-[14px] font-bold shrink-0"
                    style={{ backgroundColor: t.color, ...U }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[#181d18] text-[13px] font-bold" style={U}>
                      {t.name}
                    </p>
                    <p className="text-[#4a5a4a] text-[11px]" style={DM}>
                      {t.role}
                    </p>
                  </div>
                </div>
                <p className="text-[#b8973a] text-[14px]">★★★★★</p>
                <p
                  className="text-[#181d18] text-[13px] leading-[21px] flex-1"
                  style={DM}
                >
                  <span className="text-[#b8973a] font-extrabold text-[18px] leading-none mr-0.5" style={U}>"</span>{t.quote}<span className="text-[#b8973a] font-extrabold text-[18px] leading-none ml-0.5" style={U}>"</span>
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
const plans = [
  {
    name: "Mananampalataya",
    subtitle: "Perfect Start",
    bestFor: "Small churches",
    monthlyPrice: null as string | null,
    annualPrice: null as string | null,
    annualTotal: null as string | null,
    featured: false,
    bg: "#ffffff",
    dotColor: "#1a6640",
    feats: [
      "Up to 25 members",
      "Member profiles & giving records",
      "Basic communication tools",
      "Financial management basics",
    ],
    cta: "Start Free Forever",
    ctaStyle: "border border-[rgba(0,53,29,0.22)] text-[#00351d] hover:bg-[#d0ebd8]",
    badge: undefined as string | undefined,
  },
  {
    name: "Lingkod",
    subtitle: "Growing Together",
    bestFor: "Growing congregations",
    monthlyPrice: "₱499" as string | null,
    annualPrice: "₱299" as string | null,
    annualTotal: "₱3,593/yr" as string | null,
    featured: false,
    bg: "#ffffff",
    dotColor: "#1a6640",
    feats: [
      "Up to 35 members",
      "AI-powered tools",
      "Ministry Planner access",
      "Advanced reports & exports",
    ],
    cta: "Start Free Trial",
    ctaStyle: "border border-[rgba(0,53,29,0.22)] text-[#00351d] hover:bg-[#d0ebd8]",
    badge: undefined as string | undefined,
  },
  {
    name: "Katiwala",
    subtitle: "Full Power",
    bestFor: "Established churches",
    monthlyPrice: "₱1,299" as string | null,
    annualPrice: "₱974" as string | null,
    annualTotal: "₱11,690/yr" as string | null,
    featured: true,
    bg: "linear-gradient(92deg, rgb(0,53,29) 14%, rgb(0,155,85) 175%)",
    dotColor: "#d4af55",
    feats: [
      "Up to 150 members",
      "Online donations & events",
      "Facebook & SMS campaigns",
      "Full financial audit reports",
    ],
    cta: "Start Free Trial",
    ctaStyle: "bg-[#b8973a] text-white hover:bg-[#a07e2e]",
    badge: "Most Popular" as string | undefined,
  },
  {
    name: "Tagapangasiwa",
    subtitle: "Scale Without Limits",
    bestFor: "Large & multi-campus",
    monthlyPrice: "₱2,999" as string | null,
    annualPrice: "₱2,249" as string | null,
    annualTotal: "₱26,990/yr" as string | null,
    featured: false,
    bg: "#ffffff",
    dotColor: "#1a6640",
    feats: [
      "Unlimited members",
      "Multi-campus support",
      "Custom integrations",
      "Priority support",
    ],
    cta: "Talk to Us",
    ctaStyle: "border border-[rgba(0,53,29,0.22)] text-[#00351d] hover:bg-[#d0ebd8]",
    badge: undefined as string | undefined,
  },
];

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="bg-white w-full py-14 lg:py-20 px-6 sm:px-10 lg:px-16 xl:px-24 snap-section-overflow">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 items-center">
        <FadeUp className="text-center">
          <p className="text-[#b8973a] text-[12px] font-bold mb-3" style={U}>
            — Simple Pricing
          </p>
          <h2
            className="text-[#1a6640] font-extrabold text-[28px] lg:text-[40px] tracking-[-0.4px] lg:tracking-[-0.6px] leading-[1.2] mb-3"
            style={U}
          >
            Pricing That Grows With You
          </h2>
          <p className="text-[#4a5a4a] text-[16px] max-w-[480px] mx-auto" style={DM}>
            Start free forever. Upgrade when your church is ready. No hidden costs.
          </p>
        </FadeUp>

        {/* Billing toggle */}
        <FadeUp delay={0.1}>
          <div className="flex items-center gap-1 bg-[#eaf3e5] p-1.5 rounded-full">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-200 cursor-pointer ${
                !annual ? "bg-[#1a6640] text-white shadow-sm" : "text-[#4a5a4a] hover:text-[#1a6640]"
              }`}
              style={U}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                annual ? "bg-[#1a6640] text-white shadow-sm" : "text-[#4a5a4a] hover:text-[#1a6640]"
              }`}
              style={U}
            >
              Annual
              <span className="bg-[#b8973a] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                Save 25%
              </span>
            </button>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full items-stretch">
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.07} className="h-full">
              <motion.div
                whileHover={plan.featured ? {} : { y: -4, boxShadow: "0 16px 48px rgba(0,51,26,0.12)" }}
                transition={{ duration: 0.2 }}
                className="rounded-[20px] p-6 flex flex-col gap-4 relative overflow-hidden h-full"
                style={{
                  background: plan.bg,
                  boxShadow: plan.featured ? "0 24px 64px rgba(0,51,26,0.22)" : "0 2px 12px rgba(0,51,26,0.06)",
                }}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-[#b8973a] text-white text-[10px] font-bold px-2.5 py-1 rounded-full" style={U}>
                    {plan.badge}
                  </div>
                )}

                {/* Name & subtitle */}
                <div className="flex flex-col gap-1">
                  <p className="font-extrabold text-[15px]"
                    style={{ color: plan.featured ? "white" : "#00351d", ...U }}>
                    {plan.name}
                  </p>
                  <p className="text-[11px]"
                    style={{ color: plan.featured ? "rgba(255,255,255,0.6)" : "#4a5a4a", ...DM }}>
                    {plan.subtitle}
                  </p>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full self-start mt-0.5"
                    style={{
                      backgroundColor: plan.featured ? "rgba(255,255,255,0.12)" : "#eaf3e5",
                      color: plan.featured ? "rgba(255,255,255,0.75)" : "#1a6640",
                      fontFamily: "DM Sans, sans-serif",
                    }}>
                    Best for {plan.bestFor}
                  </span>
                </div>

                {/* Price */}
                <div className="border-t border-b py-3"
                  style={{ borderColor: plan.featured ? "rgba(255,255,255,0.12)" : "rgba(0,53,29,0.08)" }}>
                  {plan.monthlyPrice === null ? (
                    <>
                      <p className="font-extrabold text-[30px] leading-none"
                        style={{ color: plan.featured ? "white" : "#00351d", ...U }}>
                        Free
                      </p>
                      <p className="text-[11px] mt-0.5"
                        style={{ color: plan.featured ? "rgba(255,255,255,0.5)" : "#4a5a4a", ...DM }}>
                        forever
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <p className="font-extrabold text-[26px] leading-none"
                          style={{ color: plan.featured ? "white" : "#00351d", ...U }}>
                          {annual ? plan.annualPrice : plan.monthlyPrice}
                        </p>
                        <p className="text-[11px]"
                          style={{ color: plan.featured ? "rgba(255,255,255,0.55)" : "#4a5a4a", ...DM }}>
                          /mo
                        </p>
                      </div>
                      <p className="text-[11px] mt-0.5"
                        style={{ color: plan.featured ? "rgba(255,255,255,0.5)" : "#4a5a4a", ...DM }}>
                        {annual ? `billed ${plan.annualTotal}` : "billed monthly"}
                      </p>
                    </>
                  )}
                </div>

                {/* Features */}
                <div className="flex flex-col gap-2 flex-1">
                  {plan.feats.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <Check size={12} className="shrink-0 mt-[3px]"
                        color={plan.featured ? "#d4af55" : "#1a6640"} />
                      <p className="text-[12px] leading-[18px]"
                        style={{ color: plan.featured ? "rgba(255,255,255,0.85)" : "#181d18", ...DM }}>
                        {f}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-2.5 rounded-full text-[13px] font-bold transition-all duration-200 cursor-pointer ${plan.ctaStyle}`}
                  style={U}
                >
                  {plan.cta}
                </button>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust / Fear ─────────────────────────────────────────────────────────────
const fears = [
  {
    icon: Lock,
    title: "Losing Control",
    ans: "Everything stays in your hands. You enter every transaction. Download all your data anytime — it belongs to you, not us.",
  },
  {
    icon: HelpCircle,
    title: "Not Understanding the System",
    ans: "We speak Filipino. No tech jargon. Simple interface. Our support team has helped churches exactly like yours.",
  },
  {
    icon: Heart,
    title: "Being Replaced",
    ans: "We're not here to replace you. StewardTrack frees you from tedious repetition so you can focus on what truly matters.",
  },
  {
    icon: Shield,
    title: "Data Security",
    ans: "Bank-level encryption. Daily automatic backups. More secure than any filing cabinet or external drive.",
  },
  {
    icon: Building2,
    title: "Company Disappearing",
    ans: "We're Filipinos serving Filipino churches. Not VC-backed. Sustainable and committed to your church long-term.",
  },
  {
    icon: TrendingUp,
    title: "Looking Less Capable",
    ans: "You'll look MORE prepared. Better reports. Instant answers. Your board will see you as more in control, not less.",
  },
  {
    icon: BookOpen,
    title: "I'm Used to My Notebook",
    ans: "Good — that means you already know how to be faithful with records. StewardTrack is just your notebook, but one that never gets lost, adds up automatically, and is always ready for audit.",
  },
];

function TrustSection() {
  return (
    <section id="faq" className="bg-[#eaf3e5] w-full py-14 lg:py-20 px-6 sm:px-10 lg:px-16 xl:px-24 snap-section-overflow">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 items-center">
        <FadeUp className="text-center">
          <p className="text-[#b8973a] text-[12px] font-bold mb-3" style={U}>
            — Your Concerns, Answered
          </p>
          <h2
            className="text-[#1a6640] font-extrabold text-[28px] lg:text-[40px] tracking-[-0.4px] lg:tracking-[-0.6px] leading-[1.2]"
            style={U}
          >
            Your Deepest Fears, Directly Addressed
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full items-stretch">
          {fears.map((fear, i) => (
            <FadeUp
              key={fear.title}
              delay={i * 0.07}
              className={i === fears.length - 1 && fears.length % 3 === 1 ? "lg:col-start-2 h-full" : "h-full"}
            >
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 36px rgba(0,51,26,0.1)" }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,51,26,0.05)] p-6 flex flex-col gap-3 h-full"
              >
                <div className="bg-[#e8f4ed] rounded-[10px] size-11 flex items-center justify-center">
                  <fear.icon size={20} className="text-[#1a6640]" />
                </div>
                <p className="text-[#00351d] font-bold text-[15px]" style={U}>
                  {fear.title}
                </p>
                <p className="text-[#4a5a4a] text-[13px] leading-[20px]" style={DM}>
                  {fear.ans}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCta() {
  return (
    <section
      className="w-full py-16 lg:py-24 px-6 sm:px-10 lg:px-16 xl:px-24 flex flex-col items-center justify-center text-center snap-section"
      style={{
        background: "linear-gradient(63deg, rgb(0,53,29) 13%, rgb(0,155,85) 103%)",
      }}
    >
      <FadeUp>
        <h2
          className="text-white font-extrabold text-[30px] lg:text-[52px] tracking-[-0.6px] lg:tracking-[-1.04px] leading-[1.15] max-w-[800px] mx-auto mb-4 lg:mb-5"
          style={U}
        >
          Your church deserves tools as faithful as you are.
        </h2>
        <p
          className="text-[rgba(255,255,255,0.62)] text-[15px] lg:text-[17px] leading-[26px] lg:leading-[28px] max-w-[560px] mx-auto mb-8 lg:mb-10"
          style={DM}
        >
          StewardTrack is built for the people who show up every week — and never ask for recognition.
          <br />
          Start free. No credit card. No obligation.
        </p>
        <motion.button
          whileHover={{ scale: 1.04, boxShadow: "0 16px 48px rgba(184,150,59,0.5)" }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className="bg-[#b8973a] text-white font-bold text-[15px] lg:text-[17px] px-8 lg:px-10 py-4 lg:py-5 rounded-full shadow-[0_8px_30px_rgba(184,150,59,0.35)] hover:bg-[#a07e2e] transition-colors duration-200 cursor-pointer w-full sm:w-auto"
          style={U}
        >
          Start Your Free Account Today
        </motion.button>
        <p
          className="text-[rgba(255,255,255,0.38)] text-[13px] mt-6 max-w-[560px] mx-auto"
          style={DM}
        >
          Built by Filipinos for Filipino churches · Simple. Secure. Solution-Focused.
        </p>
      </FadeUp>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0c2115] w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 snap-section-overflow">
      <img src={imgLogoFull1} alt="StewardTrack" className="h-5 w-auto object-contain" />

      <p className="text-[rgba(255,255,255,0.55)] text-[12px] order-last sm:order-none" style={DM}>
        © 2026 StewardTrack. All rights reserved.
      </p>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-[rgba(255,255,255,0.55)] text-[12px]" style={DM}>
        {[
          { label: "Docs", href: "https://docs.stewardtrack.com" },
          { label: "About", href: "#" },
          { label: "Contact", href: "mailto:hello@stewardtrack.com" },
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
        ].map((l) => (
          <a key={l.label} href={l.href} className="hover:text-white transition-colors duration-200">
            {l.label}
          </a>
        ))}
        <a
          href="https://facebook.com/stewardtrack"
          aria-label="StewardTrack on Facebook"
          className="hover:text-white transition-colors duration-200 flex items-center"
        >
          <Facebook size={13} />
        </a>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-[#f6fbf3]">
      <Nav />
      <Hero />
      <WhoBenefits />
      <PainPoints />
      <DashboardShowcase />
      <PlatformModules />
      <HowItWorks />
      <CinematicSection />
      <Testimonials />
      <Pricing />
      <TrustSection />
      <FinalCta />
      <Footer />
    </div>
  );
}