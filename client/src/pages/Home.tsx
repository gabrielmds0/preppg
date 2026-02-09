import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle2, Stethoscope, Video, Users, BookOpen, Clock, Globe, MessageSquare, PlayCircle, ShieldCheck, Star, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { EnrollmentModal } from "@/components/EnrollmentModal";
import { useGoogleSheetsPreppg } from "@/hooks/useGoogleSheetsPreppg";

/**
 * Página de Vendas - Pré-especialização em Paciente Grave
 * Theme: "Ultra-Premium Medical Tech"
 * Optimization: Mobile-First (90% traffic)
 */

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function Home() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, 100]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: preppgData } = useGoogleSheetsPreppg();
  const heroDate = preppgData?.Data ?? "24/02 - 20h";

  // Handle enrollment click
  const handleEnrollmentClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 font-sans selection:bg-[#E53935] selection:text-white relative overflow-x-hidden">

      {/* Cinematic Noise Overlay - Optimized opacity for mobile */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[60]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Global Ambient Glow - Reduced intensity on mobile to prevent banding */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-blue-900/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[600px] bg-[#E53935]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Navbar Premium - Mobile Optimized */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#02040a]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#02040a]/60"
      >
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/preppg/images/lm-logo.webp"
              alt="Liberdade Médica"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </div>
          {/* Mobile: Smaller CTA, visible */}
          <Button
            size="sm"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full px-4 md:px-6 h-8 md:h-10 text-xs md:text-sm font-medium transition-all backdrop-blur-md"
            onClick={handleEnrollmentClick}
          >
            Inscrever-se
          </Button>
        </div>
      </motion.nav>

      {/* Seção 1: Hero (Cinematic & Mobile Centric) */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-12 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <img
            src="/preppg/images/intubacao.jpg"
            alt="Background Intubação"
            className="absolute inset-0 w-full h-full object-cover opacity-30 md:opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#02040a]/90 via-[#02040a]/50 to-[#02040a]" />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute top-[15%] md:top-[20%] left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-b from-[#E53935]/15 to-transparent rounded-full blur-[60px] md:blur-[100px] pointer-events-none"
          />
        </div>

        <div className="relative z-10 container max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative"
          >


            {/* Typography: Massive & Elegant - Tuned for Mobile */}
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.1] md:leading-[0.9] mb-6 md:mb-10 text-white relative z-20">
              Pré-especialização
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500">
                em
              </span>
              <span className="relative inline-block ml-2 md:ml-4 text-[#E53935]">
                Paciente Grave
                <div className="absolute -inset-4 md:-inset-8 bg-[#E53935]/20 blur-2xl md:blur-3xl -z-10 rounded-full" />
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed font-light tracking-wide px-2">
              Descubra o Método RPP e aprenda na prática como manejar o paciente grave <span className="text-white font-normal">sem improvisos</span>.
            </motion.p>

            {/* Premium Magnetic Button - Full width on mobile */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6 px-4">
              <div className="relative group w-full max-w-xs md:w-auto md:max-w-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#E53935] to-red-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Button
                  size="lg"
                  className="w-full md:w-auto relative bg-[#0A0A0A] hover:bg-[#111] text-white h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl rounded-full border border-white/10 overflow-hidden"
                  onClick={handleEnrollmentClick}
                >
                  <span className="relative z-10 flex items-center justify-center font-semibold tracking-wide">
                    Quero fazer minha inscrição
                    <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Button Shine Effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats/Features Grid - Mobile: 2x2 grid with tight spacing */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-16 md:mt-32 max-w-6xl mx-auto px-2"
          >
            {[
              { icon: Clock, label: "Carga Horária", value: "3 horas", desc: "Intensivo" },
              { icon: Globe, label: "Aula Magna", value: "100% Online" },
              { icon: Calendar, label: "Data", value: heroDate, desc: "Horário da aula" },
              { icon: PlayCircle, label: "Metodologia", value: "Teoria + Prática", desc: "Filmagens Reais" },
            ].map((item, i) => (
              <div key={i} className="group relative p-4 md:p-8 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500 overflow-hidden text-left md:text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#E53935] mb-2 md:mb-4 opacity-90" />
                <h3 className="text-slate-500 text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-1">{item.label}</h3>
                <p className="text-white text-lg md:text-2xl font-bold mb-0 md:mb-1">{item.value}</p>
                <p className="text-slate-600 text-xs md:text-sm hidden md:block">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator - Hidden on very small screens to save space */}
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hidden md:block"
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </section>

      {/* Seção 2: Problem Awareness (Stacked for Mobile) */}
      <section className="py-16 md:py-32 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-[#E53935]/50 text-[#E53935] tracking-widest uppercase py-1 px-3 text-xs md:text-sm">Realidade</Badge>
              <h2 className="text-3xl md:text-6xl font-bold leading-[1.1] mb-6 md:mb-8">
                O paciente grave <br className="hidden md:block" />
                não aceita <span className="text-[#E53935]">improviso</span>.
              </h2>

              <div className="prose prose-base md:prose-lg prose-invert text-slate-400">
                <p className="text-base md:text-xl leading-relaxed">
                  Ele não tem tempo, nem chance de ser atendido por um médico que fica inseguro no momento crucial.
                  <span className="text-white block mt-2">A hesitação custa vidas.</span>
                </p>

                <div className="mt-8 md:mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#E53935]/10 to-transparent border-l-4 border-[#E53935]">
                  <p className="text-lg md:text-2xl font-light text-white italic mb-2">
                    "Se você domina o paciente grave, você o salva."
                  </p>
                  <p className="text-[#E53935] font-semibold text-xs md:text-sm uppercase tracking-wide">
                    Se você não domina, ele não sobrevive.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Visual: The Card Stack - Scaled for Mobile */}
            <div className="relative perspective-1000 mt-8 md:mt-0">
              <motion.div
                initial={{ rotateX: 10, opacity: 0 }}
                whileInView={{ rotateX: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-20 w-full aspect-[4/5] max-w-[300px] md:max-w-md mx-auto bg-[#0A0A0A] rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden group"
              >
                {/* Simulated Content */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center z-20">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 flex items-center justify-center mb-6 md:mb-8 relative">
                    <div className="absolute inset-0 bg-[#E53935] rounded-full blur-[40px] opacity-20 animate-pulse" />
                    <Stethoscope className="w-10 h-10 md:w-12 md:h-12 text-white relative z-10" />
                  </div>
                  <p className="text-[#E53935] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 md:mb-4">Procedimento Prático</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Intubação</h3>
                  <p className="text-slate-500 text-xs md:text-sm max-w-[200px] md:max-w-none mx-auto">Visualização em alta definição de procedimentos críticos.</p>
                </div>

                {/* Glass Card Overlay */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-3 md:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 z-30"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="bg-green-500/20 p-2 rounded-lg">
                      <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">Domínio Técnico</p>
                      <p className="text-green-400 text-[10px] md:text-xs">Segurança total</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#E53935]/15 blur-[80px] md:blur-[120px] -z-10 rounded-full" />
            </div>

          </div>
        </div>
      </section>

      {/* Seção 3: Curriculum (Bento Architecture) */}
      <section className="py-16 md:py-32 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-4 md:mb-6 border-blue-500/50 text-blue-400 tracking-widest uppercase py-1 px-3 text-xs md:text-sm">Programa</Badge>
              <h2 className="text-3xl md:text-6xl font-bold mb-4">
                O que você vai <span className="text-[#E53935]">aprender</span>
              </h2>
              <p className="text-base md:text-xl text-slate-400">
                Uma imersão completa baseada no Método RPP.
              </p>
            </div>
            <div className="hidden md:block">
              <ArrowRight className="w-12 h-12 text-slate-700 -rotate-45" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6">

            {/* Main Feature: Medicina do Futuro */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="md:col-span-6 lg:col-span-8 bg-[#0F0F12] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden group border border-white/5"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition duration-700" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 md:mb-8">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Medicina do Futuro</h3>
                  <p className="text-slate-400 text-sm md:text-lg max-w-xl">
                    O caminho para o médico se destacar na próxima década. Não é apenas técnica, é visão, liderança e antecipação.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vertical Stack */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="md:col-span-6 lg:col-span-4 bg-[#E53935] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
              <div className="relative z-10">
                <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">3h</h3>
                <p className="text-white/80 font-medium text-base md:text-lg leading-tight">
                  de conteúdo teórico e filmagens práticas de casos reais.
                </p>
              </div>
              <div className="relative z-10 mt-8">
                <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-white/90 rounded-full" />
                </div>
                <p className="text-white/60 text-xs mt-2 uppercase tracking-widest font-bold text-right">Intensivo</p>
              </div>
            </motion.div>

            {/* RPP Trio - Stacks on mobile */}
            {[
              { title: "Raciocínio Clínico Avançado", sub: "Método RPP", icon: BookOpen },
              { title: "Prescrição Médica Sistematizada", sub: "Método RPP", icon: CheckCircle2 },
              { title: "Procedimentos práticos", sub: "Com pacientes reais", icon: Video },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="md:col-span-2 lg:col-span-4 bg-[#0F0F12] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white/5 hover:border-white/10 transition-colors"
              >
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-[#E53935] mb-4 md:mb-6" />
                <p className="text-slate-500 text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1 md:mb-2">{item.sub}</p>
                <h4 className="text-lg md:text-2xl font-bold text-white leading-tight">{item.title}</h4>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Seção 4: Professor (Reference Design Adaptation) */}
      <section className="py-16 md:py-32 bg-[#02040a] relative">
        <div className="container max-w-7xl mx-auto px-4">

          <div className="text-center mb-12 md:mb-20">
            <Badge variant="outline" className="mb-4 border-white/10 text-slate-400 tracking-widest uppercase text-xs">Seu Mentor</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Quem será seu <span className="text-[#E53935]">professor?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">

            {/* Left Column: Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="bg-[#0A0A0C] border border-white/10 rounded-[2rem] p-6 md:p-8 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#E53935]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Photo Circle */}
                <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-[#E53935] to-red-900">
                  <div className="w-full h-full rounded-full bg-[#151518] overflow-hidden flex items-center justify-center relative group">
                    <img
                      src="/preppg/images/Ian.jpg"
                      alt="Dr. Ian Camilo"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Dr. Ian Camilo</h3>
                <p className="text-[#E53935] font-medium text-sm md:text-base mb-6">
                  Especialista em Medicina de Emergência e Cardiologia
                </p>

                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Instrutor certificado pela American Heart Association, com vasta experiência em UTI e ensino médico.
                </p>

                <div className="flex items-center justify-center gap-8 border-t border-white/5 pt-6">
                  <div className="text-center">
                    <span className="block text-white font-bold text-lg">UFMG</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Graduação</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-white font-bold text-lg">AHA</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Instrutor</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 flex flex-col gap-8"
            >
              {/* Credentials Grid */}
              <div>
                <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#E53935] rounded-full" />
                  Formação e Credenciais
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Graduação UFMG", desc: "Medicina pela Universidade Federal de Minas Gerais", icon: BookOpen },
                    { title: "Certificações AHA", desc: "Instrutor ACLS e BLS pela American Heart Association", icon: ShieldCheck },
                    { title: "Pós-Graduação Einstein", desc: "Medicina de Emergência e Cardiologia - Hospital Albert Einstein", icon: Star },
                    { title: "Atuação Clínica", desc: "Diarista UTI Hospital Jacob Facuri e Professor Universitário", icon: Stethoscope },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#white]/[0.02] border border-white/5 hover:border-white/10 rounded-2xl p-4 md:p-5 transition-colors flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center shrink-0 text-[#E53935]">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-sm mb-1">{item.title}</h5>
                        <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Text */}
              <div className="bg-[#0A0A0C] border border-white/5 rounded-2xl p-6 md:p-8">
                <h4 className="text-lg font-bold text-white mb-4">Experiência Profissional</h4>
                <div className="text-slate-400 text-sm md:text-base leading-relaxed space-y-4 font-light">
                  <p>
                    <strong className="text-white">Dr. Ian Camilo</strong> é graduado em Medicina pela <strong className="text-white">UFMG</strong> e possui pós-graduação em Medicina de Emergência e Cardiologia pelo renomado <strong className="text-white">Hospital Albert Einstein</strong>.
                  </p>
                  <p>
                    Como <strong className="text-[#E53935]">Instrutor oficial ACLS e BLS</strong> pela American Heart Association, Dr. Ian domina os protocolos internacionais mais atualizados para atendimento de emergências cardiovasculares.
                  </p>
                  <p>
                    Atualmente atua como <strong className="text-white">diarista na UTI</strong> do Hospital Jacob Facuri e é <strong className="text-[#E53935]">Professor Universitário</strong> na disciplina de Urgência e Emergência, além de preceptor do internato de Clínica Médica.
                  </p>
                </div>
              </div>

              {/* Philosophy Quote */}
              <div className="bg-gradient-to-r from-[#E53935]/10 to-[#E53935]/5 border border-[#E53935]/20 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <MessageSquare className="w-16 h-16 text-[#E53935]" />
                </div>
                <h4 className="text-white font-bold mb-2 relative z-10 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#E53935]" /> Filosofia de Ensino
                </h4>
                <p className="text-slate-300 text-sm md:text-base italic relative z-10">
                  "Acredito que a medicina de emergência exige não apenas conhecimento técnico, mas também confiança e raciocínio rápido. Meu objetivo é formar médicos que sejam capazes de tomar decisões assertivas quando vidas estão em jogo."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-20">
            {[
              { val: "5+", label: "Anos de Experiência", sub: "Em medicina de emergência e UTI" },
              { val: "500+", label: "Médicos Treinados", sub: "Através de cursos e aulas" },
              { val: "2", label: "Especializações", sub: "Emergência e Cardiologia" },
              { val: "AHA", label: "Certificação", sub: "Instrutor Oficial" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#0A0A0C] border border-white/5 rounded-2xl p-6 text-center hover:border-white/10 transition-colors">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.val}</div>
                <div className="text-slate-300 text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-slate-500 text-[10px] uppercase tracking-wider">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Instructor CTA */}
          <div className="mt-12 md:mt-20 rounded-3xl bg-gradient-to-r from-[#1a0b0b] to-[#0A0A0C] border border-[#E53935]/20 p-8 md:p-12 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#E53935]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Aprenda com um Especialista Reconhecido</h3>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8 relative z-10">
              Dr. Ian Camilo combina excelência acadêmica, experiência prática e didática comprovada para formar médicos seguros e competentes.
            </p>
            <Button
              onClick={handleEnrollmentClick}
              className="relative z-10 bg-[#E53935] hover:bg-[#F05A52] text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-red-900/20"
            >
              Quero Aprender com o Dr. Ian
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <div className="flex flex-wrap justify-center gap-4 mt-8 text-[10px] text-slate-600 uppercase tracking-widest relative z-10">
              <span>Instrutor AHA Certificado</span>
              <span>•</span>
              <span>Professor Universitário</span>
              <span>•</span>
              <span>Especialista UTI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Preço e CTA (Final conversion - Mobile Optimized) */}
      <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#E53935]/5 to-transparent pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">
                Investimento Único
              </h2>
              <p className="text-base md:text-xl text-slate-400">
                O conteúdo que transformará sua prática médica.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] md:rounded-[3rem] bg-[#0A0A0C] border border-white/10 p-3 md:p-6"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#E53935] to-transparent opacity-50 blur-sm" />

              <div className="rounded-[2rem] md:rounded-[2.5rem] bg-[#0F0F12] border border-white/5 p-8 md:p-20 text-center relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#E53935]/10 rounded-full blur-[80px]" />

                <p className="text-[#E53935] font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4">Valor Promocional</p>
                <div className="flex items-center justify-center gap-2 mb-8 md:mb-10">
                  <span className="text-slate-500 text-2xl md:text-3xl font-light">R$</span>
                  <span className="text-7xl md:text-9xl font-bold text-white tracking-tighter">37</span>
                </div>

                <div className="flex justify-center mb-8 md:mb-12">
                  <Button
                    size="lg"
                    className="w-full max-w-md bg-[#E53935] hover:bg-[#F05A52] text-white h-16 md:h-20 text-lg md:text-xl rounded-full shadow-[0_0_40px_-10px_rgba(229,57,53,0.5)] hover:shadow-[0_0_60px_-10px_rgba(229,57,53,0.7)] transition-all duration-300"
                    onClick={handleEnrollmentClick}
                  >
                    <span className="font-bold tracking-wide">Quero fazer minha inscrição</span>
                    <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" />
                  </Button>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-xs md:text-sm text-slate-500">
                  <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Minimal */}
        <footer className="mt-20 md:mt-32 border-t border-white/5 py-8 md:py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-600 text-xs md:text-sm mb-4">© 2026 Liberdade Médica Educação. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-4 md:gap-6 text-slate-700 text-[10px] md:text-xs font-medium uppercase tracking-widest">
              <span>Termos</span>
              <span>Privacidade</span>
              <span>Suporte</span>
            </div>
          </div>
        </footer>
      </section>

      <EnrollmentModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}

