import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, Car, Tractor, Truck, TrendingUp, 
  CheckCircle2, ShieldCheck, Star, Bell, ArrowRight, Lock, Gift, Clock, User, Phone, Loader2, ArrowUp,
  MessageCircle, Mail, MapPin, Calculator, ChevronRight, X, Sparkles, ArrowLeft
} from 'lucide-react';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value);
};

const BG_IMAGE = "https://res.cloudinary.com/dsevqnhts/image/upload/e_trim/v1788544895/Isolar_logo_sem_mudan%C3%A7as_202609041454_qmmoju.png";
const LOGO_IMAGE = "https://res.cloudinary.com/dsevqnhts/image/upload/e_trim/v1788544895/Isolar_logo_sem_mudan%C3%A7as_202609041454_qmmoju.png";

// Reusable Luxury Brand Badge that presents the complete logo without any clipping
export const LogoBrand = ({ 
  size = "lg", 
  variant = "circle",
  className = "" 
}: { 
  size?: "sm" | "md" | "lg" | "xl"; 
  variant?: "circle" | "card";
  className?: string 
}) => {
  const dimensions = {
    sm: "w-20 h-20 p-2.5",
    md: "w-28 h-28 p-3",
    lg: "w-36 h-36 sm:w-44 sm:h-44 p-3.5 sm:p-4",
    xl: "w-48 h-48 sm:w-56 sm:h-56 p-4 sm:p-5"
  }[size];

  const roundedClass = variant === "circle" ? "rounded-full" : "rounded-3xl";

  return (
    <div className={`relative group inline-flex items-center justify-center ${className}`}>
      {/* Multi-tone animated ambient glow matching logo: Royal Blue & Ruby Red */}
      <div className={`absolute -inset-2.5 ${roundedClass} bg-gradient-to-tr from-[#073691] via-[#D4090B] to-[#38BDF8] opacity-65 blur-xl group-hover:opacity-90 transition-opacity duration-700 animate-pulse`}></div>
      
      {/* Executive Badge - Crisp white frosted container ensuring 100% full logo visibility */}
      <div className={`relative ${dimensions} ${roundedClass} bg-white/95 backdrop-blur-xl border-2 border-white shadow-[0_12px_36px_rgba(7,54,145,0.4)] flex items-center justify-center`}>
        <img 
          src={LOGO_IMAGE} 
          alt="MM FINANCEIRA" 
          className="w-full h-full object-contain filter contrast-[1.02] drop-shadow-sm select-none"
        />
      </div>
    </div>
  );
};

const testimonials = [
  { name: "Carlos Silva", text: "Consegui planejar a troca da minha frota pagando parcelas justas e sem juros abusivos." },
  { name: "Mariana Costa", text: "O atendimento foi excepcional! Realizei o sonho da casa própria com um consórcio que cabe no meu bolso." },
  { name: "Roberto Almeida", text: "Comprei meu trator novo sem descapitalizar minha fazenda. Recomendo muito a MM FINANCEIRA." },
  { name: "Fernanda Lima", text: "Processo transparente e rápido. Em poucos meses fui contemplada e peguei meu carro zero." }
];

const bioReviews = [
  {
    initial: "C",
    name: "Carlos Eduardo",
    rating: 5,
    text: "Atendimento impecável! Consegui minha carta de crédito muito mais rápido do que imaginava."
  },
  {
    initial: "A",
    name: "Ana Paula",
    rating: 5,
    text: "Transparência do início ao fim. Recomendo a MM FINANCEIRA para quem quer segurança e seriedade."
  },
  {
    initial: "M",
    name: "Marcos Viana",
    rating: 5,
    text: "Comprei o caminhão para aumentar minha frota sem juros abusivos. Empresa de extrema confiança!"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const BioLinksView = ({ onStartSimulation }: { onStartSimulation: () => void }) => {
  const [showLocationModal, setShowLocationModal] = useState(false);

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center text-center px-5 pt-8 pb-20 w-full max-w-md mx-auto"
    >
      {/* Profile Header with glowing executive logo badge */}
      <motion.div variants={itemVariants} className="mb-4">
        <LogoBrand size="lg" />
      </motion.div>

      {/* Title & Subtitle */}
      <motion.h1 variants={itemVariants} className="text-2xl font-black text-white tracking-tight mb-1">
        MM FINANCEIRA
      </motion.h1>
      <motion.p variants={itemVariants} className="text-xs font-bold text-[#EF4444] uppercase tracking-widest mb-4 flex items-center justify-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4090B] animate-ping"></span>
        SOLUÇÕES FINANCEIRAS & CRÉDITO
      </motion.p>

      {/* Rating Social Proof Badge */}
      <motion.div variants={itemVariants} className="bg-[#0c224f]/80 border border-blue-400/25 px-5 py-2.5 rounded-2xl flex items-center gap-2 mb-8 shadow-lg shadow-[#040e24]/40 backdrop-blur-xl">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} fill="currentColor" />
          ))}
        </div>
        <span className="text-xs text-blue-100 font-medium">
          Mais de <strong className="text-white font-bold">5 mil</strong> clientes satisfeitos
        </span>
      </motion.div>

      {/* LINK BUTTONS */}
      <div className="w-full space-y-3.5 mb-10">
        {/* HIGHLIGHTED IN-EVIDENCE BUTTON */}
        <motion.div variants={itemVariants} className="w-full">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartSimulation}
            className="relative w-full bg-gradient-to-r from-[#073691] via-[#1A50C2] to-[#073691] text-white font-extrabold text-base sm:text-lg py-4 px-5 rounded-2xl shadow-[0_0_30px_rgba(7,54,145,0.55)] hover:shadow-[0_0_40px_rgba(7,54,145,0.8)] flex items-center justify-between transition-all border border-blue-400/40 group cursor-pointer overflow-hidden"
          >
            {/* Shimmer Sweep Animation */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none"></div>

            <div className="flex items-center gap-3 relative z-10">
              <div className="bg-[#D4090B] p-2.5 rounded-xl text-white shadow-md shadow-red-950/50">
                <Calculator size={22} className="shrink-0" />
              </div>
              <span className="tracking-tight text-left">Faça sua simulação aqui</span>
            </div>
            <ArrowRight size={22} className="shrink-0 group-hover:translate-x-1 transition-transform relative z-10" />
          </motion.button>
        </motion.div>

        {/* WhatsApp Link */}
        <motion.div variants={itemVariants} className="w-full">
          <motion.a
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/558791975063?text=Ol%C3%A1!%20Vim%20pelo%20link%20da%20bio%20da%20MM%20FINANCEIRA%20e%20gostaria%20de%20falar%20com%20um%20consultor."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#0c224f]/70 hover:bg-[#102d68]/85 border border-blue-400/20 hover:border-emerald-400/40 text-white font-semibold text-sm sm:text-base py-3.5 px-4 rounded-2xl shadow-md flex items-center justify-between transition-all group backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/20 text-emerald-400 p-2.5 rounded-xl border border-emerald-500/30 shrink-0">
                <MessageCircle size={20} />
              </div>
              <span className="text-left">Fale com um Consultor (WhatsApp)</span>
            </div>
            <ChevronRight size={18} className="text-blue-300/50 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
          </motion.a>
        </motion.div>

        {/* Email Link */}
        <motion.div variants={itemVariants} className="w-full">
          <motion.a
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:contato@mmfinanceira.com.br?subject=Atendimento%20MM%20FINANCEIRA"
            className="w-full bg-[#0c224f]/70 hover:bg-[#102d68]/85 border border-blue-400/20 hover:border-blue-400/40 text-white font-semibold text-sm sm:text-base py-3.5 px-4 rounded-2xl shadow-md flex items-center justify-between transition-all group backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#073691]/30 text-[#38BDF8] p-2.5 rounded-xl border border-blue-400/30 shrink-0">
                <Mail size={20} />
              </div>
              <span className="text-left">Envie um E-mail</span>
            </div>
            <ChevronRight size={18} className="text-blue-300/50 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
          </motion.a>
        </motion.div>

        {/* Localização Modal Trigger */}
        <motion.div variants={itemVariants} className="w-full">
          <motion.button
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowLocationModal(true)}
            className="w-full bg-[#0c224f]/70 hover:bg-[#102d68]/85 border border-blue-400/20 hover:border-red-400/40 text-white font-semibold text-sm sm:text-base py-3.5 px-4 rounded-2xl shadow-md flex items-center justify-between transition-all group backdrop-blur-xl cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#D4090B]/20 text-[#EF4444] p-2.5 rounded-xl border border-[#D4090B]/30 shrink-0">
                <MapPin size={20} />
              </div>
              <span className="text-left">Nossa Localização</span>
            </div>
            <ChevronRight size={18} className="text-blue-300/50 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
          </motion.button>
        </motion.div>
      </div>

      {/* AVALIAÇÕES SECTION */}
      <motion.div variants={itemVariants} className="w-full">
        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-400/20"></div>
          </div>
          <span className="relative bg-[#071739] px-4 text-xs font-bold text-blue-300/70 uppercase tracking-widest">
            AVALIAÇÕES REAIS
          </span>
        </div>

        <div className="space-y-3.5 text-left">
          {bioReviews.map((rev, idx) => (
            <div key={idx} className="bg-[#0c224f]/75 border border-blue-400/20 p-4 rounded-2xl backdrop-blur-xl shadow-lg shadow-[#040e24]/40">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#073691] to-[#2563EB] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-md border border-blue-300/30">
                  {rev.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm leading-tight">{rev.name}</h4>
                  <div className="flex text-amber-400 mt-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-100/90 text-xs italic leading-relaxed pl-1">
                "{rev.text}"
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* FOOTER */}
      <motion.div variants={itemVariants} className="mt-12 text-center text-xs text-blue-300/60">
        <p className="flex items-center justify-center gap-1 text-blue-200 font-medium mb-1">
          <MapPin size={13} className="text-[#38BDF8]" /> Petrolina - PE
        </p>
        <p>&copy; {new Date().getFullYear()} MM FINANCEIRA. Todos os direitos reservados.</p>
      </motion.div>

      {/* LOCATION MODAL */}
      <AnimatePresence>
        {showLocationModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#040d21]/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowLocationModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a1f4d] border border-blue-400/30 p-6 rounded-3xl max-w-sm w-full text-center relative shadow-2xl shadow-black/80"
            >
              <button 
                onClick={() => setShowLocationModal(false)}
                className="absolute top-4 right-4 text-blue-300 hover:text-white p-1 rounded-full bg-blue-900/40 hover:bg-blue-800/60 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="w-12 h-12 rounded-full bg-[#073691]/30 text-[#38BDF8] flex items-center justify-center mx-auto mb-4 border border-blue-400/40 shadow-inner">
                <MapPin size={24} />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">Atendimento Presencial e Online</h3>
              <p className="text-blue-200 text-sm mb-4">
                Atendemos presencialmente em Petrolina e com especialistas online para todo o Brasil:
              </p>

              <div className="bg-[#061536]/80 p-4 rounded-2xl border border-blue-400/20 text-xs text-blue-200 space-y-2 mb-6 text-left">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4090B]"></span>
                  <strong className="text-white">Petrolina - PE e Região</strong>
                </p>
                <p className="text-blue-300/80 pl-4">
                  Consultoria especializada sob medida para seu objetivo financeiro.
                </p>
              </div>

              <a
                href="https://wa.me/558791975063?text=Ol%C3%A1!%20Gostaria%20de%20saber%20o%20endere%C3%A7o%20ou%20agendar%20uma%20visita%20na%20MM%20FINANCEIRA."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#073691] via-[#1A50C2] to-[#073691] text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-blue-950/60 hover:brightness-110 transition-all text-sm border border-blue-400/40 cursor-pointer"
              >
                <MessageCircle size={18} /> Agendar Visita no WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Landing = ({ onNext }: { onNext: () => void }) => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 55);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center text-center px-6 pt-10 pb-24"
    >
      <motion.div variants={itemVariants} className="mb-6 flex justify-center">
        <LogoBrand size="lg" />
      </motion.div>

      <motion.div variants={itemVariants} className="bg-[#0c224f]/80 text-white px-6 py-3 rounded-2xl flex flex-col items-center mb-8 border border-blue-400/25 shadow-lg shadow-[#040e24]/40 backdrop-blur-xl">
        <div className="flex items-center gap-2 font-bold text-sm mb-2 tracking-wide text-center text-[#EF4444]">
          <Gift size={18} className="shrink-0 text-[#D4090B]" /> CONDIÇÃO EXCLUSIVA MM FINANCEIRA
        </div>
        <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#073691] via-[#1A50C2] to-[#073691] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md border border-blue-400/30">
          <Clock size={16} className="text-[#38BDF8]" /> {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-[1.15] tracking-tight drop-shadow-lg">
        Realize seus planos com a <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-white bg-clip-text text-transparent">MM FINANCEIRA</span> 💫
      </motion.h1>

      <motion.p 
        variants={itemVariants} 
        className="text-blue-100/90 font-medium mb-10 text-[18px] leading-[30.25px] w-full max-w-xs drop-shadow-md"
      >
        Crédito inteligente sem juros abusivos.<br/>
        Descubra seu poder de compra.
      </motion.p>

      <motion.div variants={itemVariants} className="w-full max-w-md mb-12">
        <motion.button 
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.96 }}
          onClick={onNext}
          className="relative w-full bg-gradient-to-r from-[#073691] via-[#1A50C2] to-[#073691] hover:brightness-110 text-white text-xl font-bold py-4.5 rounded-full shadow-2xl shadow-blue-900/50 transition-all flex items-center justify-center gap-2 border border-blue-400/40 cursor-pointer overflow-hidden group"
        >
          {/* Shimmer sweep animation */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none"></div>
          
          <span className="relative z-10 flex items-center gap-2">
            Fazer Simulação <ArrowRight size={24} className="group-hover:translate-x-1.5 transition-transform" />
          </span>
        </motion.button>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
        <div className="flex items-center gap-1.5 bg-[#0c224f]/75 border border-blue-400/20 px-4 py-2 rounded-full text-sm font-semibold text-blue-100 shadow-md backdrop-blur-xl">
          <CheckCircle2 size={18} className="text-[#38BDF8]" /> SEM JUROS
        </div>
        <div className="flex items-center gap-1.5 bg-[#0c224f]/75 border border-blue-400/20 px-4 py-2 rounded-full text-sm font-semibold text-blue-100 shadow-md backdrop-blur-xl">
          <ShieldCheck size={18} className="text-[#EF4444]" /> NEGATIVADOS
        </div>
        <div className="flex items-center gap-1.5 bg-[#0c224f]/75 border border-blue-400/20 px-4 py-2 rounded-full text-sm font-semibold text-blue-100 shadow-md backdrop-blur-xl">
          <User size={18} className="text-[#38BDF8]" /> ESPECIALISTAS
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-4 w-full max-w-md">
        <p className="text-xs font-bold text-blue-300/70 uppercase tracking-widest mb-4">Mais de 5.000 clientes satisfeitos</p>
        <div className="bg-[#0c224f]/80 p-6 rounded-3xl shadow-xl border border-blue-400/20 text-left relative backdrop-blur-xl h-[195px] flex flex-col justify-center">
          <div className="flex text-amber-400 mb-3">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
          </div>
          <div className="relative flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <p className="text-blue-100/90 italic text-[15px] leading-relaxed mb-3">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-white font-bold text-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
                  {testimonials[currentTestimonial].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          document.getElementById('top-of-scroll')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mt-16 flex items-center gap-2 text-blue-200 font-bold hover:text-[#38BDF8] transition-colors bg-[#0a1f4d]/85 px-6 py-3 rounded-full backdrop-blur-xl border border-blue-400/25 shadow-md cursor-pointer"
      >
        <ArrowUp size={20} /> Voltar ao topo
      </motion.button>

      <motion.div variants={itemVariants} className="mt-16 text-center opacity-90">
        <p className="text-white text-base font-bold tracking-wide">MM FINANCEIRA</p>
        <p className="text-blue-300/70 text-xs mt-1">Soluções financeiras inteligentes para seus projetos.</p>
        <p className="text-blue-400/50 text-xs mt-1">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </motion.div>
    </motion.div>
  );
};

const targets = [
  { id: 'imovel', title: 'Imóvel', desc: 'Casa, Apto ou Terreno', icon: Home },
  { id: 'veiculo', title: 'Veículo', desc: 'Carros e Motos', icon: Car },
  { id: 'agricola', title: 'Agrícola', desc: 'Máquinas e Insumos', icon: Tractor },
  { id: 'pesados', title: 'Pesados', desc: 'Caminhões e Frotas', icon: Truck },
  { id: 'investimento', title: 'Investimento', desc: 'Aumento de Patrimônio', icon: TrendingUp },
];

const Step1 = ({ onSelect }: { onSelect: (val: string) => void }) => (
  <div className="px-6 py-8">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Qual é o seu alvo?</h2>
    <p className="text-blue-200/80 mb-8 text-lg">Escolha o segmento desejado.</p>
    
    <div className="flex flex-col gap-3.5">
      {targets.map(t => (
        <motion.button 
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.97 }}
          key={t.id}
          onClick={() => onSelect(t.title)}
          className="flex items-center gap-5 p-4.5 bg-[#0c224f]/75 border border-blue-400/20 rounded-3xl shadow-lg hover:border-blue-400/60 hover:bg-[#102d68]/85 transition-all text-left group backdrop-blur-xl w-full cursor-pointer"
        >
          <div className="bg-[#073691]/30 border border-blue-400/30 p-3.5 rounded-2xl text-[#38BDF8] group-hover:bg-[#073691] group-hover:text-white group-hover:border-blue-300 group-hover:scale-105 transition-all shrink-0">
            <t.icon size={26} strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white text-lg">{t.title}</h3>
            <p className="text-blue-300/60 text-sm mt-0.5">{t.desc}</p>
          </div>
          <ChevronRight size={20} className="text-blue-400/40 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
        </motion.button>
      ))}
    </div>
  </div>
);

const creditPresets = [50000, 100000, 200000, 350000, 500000];

const Step2 = ({ value, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Valor do Crédito</h2>
    <p className="text-blue-200/80 mb-8 text-lg">Quanto você precisa para realizar este objetivo?</p>
    
    <div className="bg-[#0c224f]/80 p-8 rounded-[2rem] shadow-xl border border-blue-400/20 mb-8 backdrop-blur-xl">
      <div className="text-center mb-6">
        <span className="text-[2.65rem] sm:text-[2.85rem] font-black bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent tracking-tight drop-shadow-md">
          {formatCurrency(value)}
        </span>
      </div>
      
      <input 
        type="range" 
        min={20000} 
        max={500000} 
        step={5000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mb-6 cursor-pointer"
      />
      <div className="flex justify-between text-xs font-semibold text-blue-300/60 mb-6">
        <span>R$ 20 mil</span>
        <span>R$ 500 mil</span>
      </div>

      {/* Quick Select Chips */}
      <div className="flex flex-wrap justify-center gap-2 pt-2 border-t border-blue-400/15">
        {creditPresets.map(preset => (
          <button
            key={preset}
            type="button"
            onClick={() => onChange(preset)}
            className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
              value === preset 
                ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/30 border border-blue-300' 
                : 'bg-blue-900/40 text-blue-200 hover:bg-blue-800/60 border border-blue-500/20'
            }`}
          >
            {formatCurrency(preset)}
          </button>
        ))}
      </div>
    </div>

    <motion.button 
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={onNext}
      className="relative w-full bg-gradient-to-r from-[#073691] via-[#1A50C2] to-[#073691] hover:brightness-110 text-white text-xl font-bold py-4.5 rounded-full shadow-xl shadow-blue-900/50 transition-all mt-auto border border-blue-400/40 cursor-pointer overflow-hidden group"
    >
      <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none"></div>
      <span className="relative z-10 flex items-center justify-center gap-2">
        Avançar <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.button>
  </div>
);

const entryPresets = [5000, 15000, 30000, 60000, 100000];

const Step3 = ({ value, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Valor de Entrada</h2>
    <p className="text-blue-200/80 mb-8 text-lg">Qual valor você tem disponível para investir agora?</p>
    
    <div className="bg-[#0c224f]/80 p-8 rounded-[2rem] shadow-xl border border-blue-400/20 mb-8 backdrop-blur-xl">
      <div className="text-center mb-6">
        <span className="text-[2.65rem] sm:text-[2.85rem] font-black bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent tracking-tight drop-shadow-md">
          {formatCurrency(value)}
        </span>
      </div>
      
      <input 
        type="range" 
        min={5000} 
        max={500000} 
        step={1000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mb-6 cursor-pointer"
      />
      <div className="flex justify-between text-xs font-semibold text-blue-300/60 mb-6">
        <span>R$ 5 mil</span>
        <span>R$ 500 mil</span>
      </div>

      {/* Quick Select Chips */}
      <div className="flex flex-wrap justify-center gap-2 pt-2 border-t border-blue-400/15">
        {entryPresets.map(preset => (
          <button
            key={preset}
            type="button"
            onClick={() => onChange(preset)}
            className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
              value === preset 
                ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/30 border border-blue-300' 
                : 'bg-blue-900/40 text-blue-200 hover:bg-blue-800/60 border border-blue-500/20'
            }`}
          >
            {formatCurrency(preset)}
          </button>
        ))}
      </div>
    </div>

    <motion.button 
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={onNext}
      className="relative w-full bg-gradient-to-r from-[#073691] via-[#1A50C2] to-[#073691] hover:brightness-110 text-white text-xl font-bold py-4.5 rounded-full shadow-xl shadow-blue-900/50 transition-all mt-auto border border-blue-400/40 cursor-pointer overflow-hidden group"
    >
      <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none"></div>
      <span className="relative z-10 flex items-center justify-center gap-2">
        Avançar <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.button>
  </div>
);

const installmentPresets = [800, 1500, 2500, 4000, 7000];

const Step4 = ({ value, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Investimento Mensal</h2>
    <p className="text-blue-200/80 mb-8 text-lg">Qual parcela cabe confortavelmente no seu bolso?</p>
    
    <div className="bg-[#0c224f]/80 p-8 rounded-[2rem] shadow-xl border border-blue-400/20 mb-8 backdrop-blur-xl">
      <div className="text-center mb-6">
        <span className="text-[2.65rem] sm:text-[2.85rem] font-black bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent tracking-tight drop-shadow-md">
          {formatCurrency(value)}
        </span>
      </div>
      
      <input 
        type="range" 
        min={500} 
        max={20000} 
        step={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mb-6 cursor-pointer"
      />
      <div className="flex justify-between text-xs font-semibold text-blue-300/60 mb-6">
        <span>R$ 500</span>
        <span>R$ 20.000</span>
      </div>

      {/* Quick Select Chips */}
      <div className="flex flex-wrap justify-center gap-2 pt-2 border-t border-blue-400/15">
        {installmentPresets.map(preset => (
          <button
            key={preset}
            type="button"
            onClick={() => onChange(preset)}
            className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
              value === preset 
                ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/30 border border-blue-300' 
                : 'bg-blue-900/40 text-blue-200 hover:bg-blue-800/60 border border-blue-500/20'
            }`}
          >
            {formatCurrency(preset)}
          </button>
        ))}
      </div>
    </div>

    <motion.button 
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={onNext}
      className="relative w-full bg-gradient-to-r from-[#073691] via-[#1A50C2] to-[#073691] hover:brightness-110 text-white text-xl font-bold py-4.5 rounded-full shadow-xl shadow-blue-900/50 transition-all mt-auto border border-blue-400/40 cursor-pointer overflow-hidden group"
    >
      <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none"></div>
      <span className="relative z-10 flex items-center justify-center gap-2">
        Avançar <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.button>
  </div>
);

const Step5 = ({ formData, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Último passo</h2>
    <p className="text-blue-200/80 mb-10 text-lg">Para onde enviamos seu plano estratégico?</p>
    
    <div className="flex flex-col gap-5 mb-10">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-blue-300">
          <User size={22} />
        </div>
        <input 
          type="text" 
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
          className="w-full pl-14 pr-5 py-4.5 bg-[#0a1f4d]/80 border border-blue-400/30 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent text-lg shadow-inner placeholder:text-blue-300/40 font-medium text-white backdrop-blur-xl"
        />
      </div>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-blue-300">
          <User size={22} />
        </div>
        <input 
          type="text" 
          placeholder="Indicado por (Opcional)"
          value={formData.referredBy}
          onChange={(e) => onChange('referredBy', e.target.value)}
          className="w-full pl-14 pr-5 py-4.5 bg-[#0a1f4d]/80 border border-blue-400/30 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent text-lg shadow-inner placeholder:text-blue-300/40 font-medium text-white backdrop-blur-xl"
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-blue-300">
          <Phone size={22} />
        </div>
        <input 
          type="tel" 
          placeholder="Seu WhatsApp (com DDD)"
          value={formData.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          className="w-full pl-14 pr-5 py-4.5 bg-[#0a1f4d]/80 border border-blue-400/30 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent text-lg shadow-inner placeholder:text-blue-300/40 font-medium text-white backdrop-blur-xl"
        />
      </div>
    </div>

    <motion.button 
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={onNext}
      disabled={!formData.name || !formData.phone}
      className="relative w-full bg-gradient-to-r from-[#073691] via-[#1A50C2] to-[#073691] hover:brightness-110 text-white text-xl font-bold py-4.5 rounded-full shadow-xl shadow-blue-900/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-auto border border-blue-400/40 cursor-pointer overflow-hidden group"
    >
      <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none"></div>
      <span className="relative z-10 flex items-center justify-center gap-2">
        Receber Plano Exclusivo <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.button>
    
    <div className="flex items-center justify-center gap-2 mt-8 text-blue-300/60 text-sm font-semibold tracking-wide">
      <Lock size={16} className="text-[#38BDF8]" /> SEUS DADOS ESTÃO 100% SEGUROS
    </div>
  </div>
);

const LoadingStep = ({ onNext }: { onNext: () => void }) => {
  const [loadingText, setLoadingText] = useState('Analisando seu perfil...');

  useEffect(() => {
    const texts = [
      'Analisando seu perfil...',
      'Buscando as melhores taxas...',
      'Calculando parcelas sem juros...',
      'Gerando plano exclusivo MM FINANCEIRA...'
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % texts.length;
      setLoadingText(texts[i]);
    }, 1200);

    const timer = setTimeout(() => {
      clearInterval(interval);
      onNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onNext]);

  return (
    <div className="px-6 py-8 flex flex-col items-center justify-center h-full min-h-[70vh] text-center">
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full border-4 border-blue-500/20 border-t-[#38BDF8] animate-spin flex items-center justify-center"></div>
        <div className="absolute inset-0 flex items-center justify-center text-[#D4090B]">
          <Sparkles size={28} className="animate-pulse" />
        </div>
      </div>
      <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Processando Análise...</h2>
      <p className="text-blue-200 text-lg font-medium">{loadingText}</p>
    </div>
  );
};

const Step6 = ({ formData }: any) => {
  const handleWhatsApp = () => {
    const text = `Olá! Fiz uma simulação no site da MM FINANCEIRA e gostaria de falar com um especialista.\n\n*Resumo da Simulação:*\nAlvo: ${formData.target}\nCrédito: ${formatCurrency(formData.credit)}\nEntrada: ${formatCurrency(formData.entry)}\nParcela: ${formatCurrency(formData.installment)}\nNome: ${formData.name}\nWhatsApp: ${formData.phone}${formData.referredBy ? `\nIndicado por: ${formData.referredBy}` : ''}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/558791975063?text=${encodedText}`, '_blank');
  };

  return (
    <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 bg-[#D4090B]/20 border border-[#D4090B]/40 text-[#EF4444] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles size={14} /> Condição Especial Liberada
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Plano Gerado!</h2>
        <p className="text-blue-200/80 text-base mt-1">Sua estratégia personalizada está pronta.</p>
      </div>
      
      <div className="bg-[#0c224f]/85 p-7 rounded-[2rem] shadow-2xl border border-blue-400/25 mb-8 backdrop-blur-xl">
        <div className="flex justify-between items-center py-3.5 border-b border-blue-400/15">
          <span className="text-blue-300/70 font-bold text-xs tracking-widest uppercase">Alvo Selecionado</span>
          <span className="text-white font-bold text-lg">{formData.target}</span>
        </div>
        <div className="flex justify-between items-center py-3.5 border-b border-blue-400/15">
          <span className="text-blue-300/70 font-bold text-xs tracking-widest uppercase">Crédito Solicitado</span>
          <span className="text-[#38BDF8] font-black text-2xl">{formatCurrency(formData.credit)}</span>
        </div>
        <div className="flex justify-between items-center py-3.5 border-b border-blue-400/15">
          <span className="text-blue-300/70 font-bold text-xs tracking-widest uppercase">Entrada Prevista</span>
          <span className="text-white font-bold text-lg">{formatCurrency(formData.entry)}</span>
        </div>
        <div className="flex justify-between items-center py-3.5">
          <span className="text-blue-300/70 font-bold text-xs tracking-widest uppercase">Parcela Estimada</span>
          <span className="text-emerald-400 font-black text-xl">{formatCurrency(formData.installment)}</span>
        </div>
      </div>

      <div className="mt-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-blue-200 font-semibold text-sm mb-4 text-center flex items-center gap-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Consultor MM FINANCEIRA disponível agora!
        </motion.p>
        
        <motion.button 
          animate={{ 
            scale: [1, 1.03, 1],
            boxShadow: [
              "0 10px 25px -3px rgba(37, 211, 102, 0.4)",
              "0 20px 35px -5px rgba(37, 211, 102, 0.7)",
              "0 10px 25px -3px rgba(37, 211, 102, 0.4)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsApp}
          className="w-full bg-[#25D366] text-white text-xl font-extrabold py-4.5 rounded-full hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-3 cursor-pointer shadow-xl border border-emerald-300/30"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Falar com Especialista
        </motion.button>
      </div>
    </div>
  );
};

const notifications = [
  { name: 'Letícia M.', action: 'iniciou plano Agrícola', time: 'há 1 min' },
  { name: 'Rafael G.', action: 'iniciou plano Agrícola', time: 'há 2 min' },
  { name: 'João B.', action: 'reservou uma cota', time: 'agora mesmo' },
  { name: 'Marcos T.', action: 'reservou uma cota', time: 'há 1 min' },
  { name: 'Carlos E.', action: 'simulou Pesados', time: 'há 1 min' },
  { name: 'Ana P.', action: 'iniciou plano Imóvel', time: 'agora mesmo' },
];

const RecentActivity = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const current = notifications[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-80 bg-zinc-950/90 p-3.5 rounded-2xl shadow-xl border border-zinc-800 flex items-center gap-4 z-50 backdrop-blur-md"
        >
          <div className="bg-[#073691]/25 text-[#3B82F6] p-2.5 rounded-full shrink-0 border border-[#073691]/40">
            <Bell size={20} />
          </div>
          <div>
            <p className="text-[15px] text-white leading-tight">
              <span className="font-bold">{current.name}</span> {current.action}
            </p>
            <p className="text-xs text-zinc-500 mt-0.5 font-medium">{current.time}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [viewMode, setViewMode] = useState<'bio' | 'funnel'>('bio');
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    target: '',
    credit: 100000,
    entry: 5000,
    installment: 700,
    name: '',
    referredBy: '',
    phone: ''
  });

  const nextStep = () => {
    document.getElementById('top-of-scroll')?.scrollIntoView({ behavior: 'smooth' });
    setStep(s => s + 1);
  };
  const prevStep = () => {
    document.getElementById('top-of-scroll')?.scrollIntoView({ behavior: 'smooth' });
    setStep(s => s - 1);
  };

  const startFunnel = () => {
    setViewMode('funnel');
    setStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const progress = step === 0 ? 0 : Math.round((step / 7) * 100);

  return (
    <div className="min-h-screen font-sans text-white relative overflow-hidden flex justify-center selection:bg-blue-600/40">
      {/* Dynamic Corporate Navy Blue Background */}
      <div className="fixed inset-0 z-0 bg-[#071739]">
        {/* Layer 1: Navy mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E4A] via-[#08183D] to-[#040D21]"></div>
        
        {/* Layer 2: Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

        {/* Layer 3: Animated ambient glowing spheres */}
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] bg-red-600/18 rounded-full blur-[130px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute -bottom-24 left-10 w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[110px] pointer-events-none"></div>

        {/* Layer 4: Subtle brand watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.045] overflow-hidden">
          <img src={BG_IMAGE} alt="" className="w-[500px] max-w-[85vw] h-auto object-contain select-none" />
        </div>
      </div>

      <div className="w-full max-w-md bg-transparent min-h-screen relative z-10 flex flex-col">
        
        {/* Navigation Header when in Funnel mode */}
        {viewMode === 'funnel' && (
          <div className="px-5 py-3.5 flex items-center justify-between sticky top-0 z-30 bg-[#071739]/90 backdrop-blur-xl border-b border-blue-400/20 shadow-lg">
            <button 
              onClick={() => setViewMode('bio')}
              className="flex items-center gap-1.5 text-xs font-bold text-blue-200 hover:text-white transition-colors py-1.5 px-3 rounded-full bg-[#0a1f4d] border border-blue-400/25 shadow-sm cursor-pointer"
            >
              <ArrowLeft size={14} /> Início / Bio Links
            </button>

            {step > 0 && (
              <div className="flex items-center gap-3 flex-1 ml-3">
                <button onClick={prevStep} className="text-xs font-bold text-blue-300/70 hover:text-white transition-colors cursor-pointer">
                  Voltar
                </button>
                <div className="flex-1 h-2 bg-[#0a1e4a] rounded-full overflow-hidden p-0.5 border border-blue-400/20">
                  <div 
                    className="h-full bg-gradient-to-r from-[#073691] via-[#2563EB] to-[#D4090B] transition-all duration-500 ease-out rounded-full shadow-[0_0_12px_rgba(37,99,235,0.7)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-blue-200 w-8 text-right">{progress}%</span>
              </div>
            )}
          </div>
        )}

        {/* Content Area */}
        <div id="scroll-area" className="flex-1 overflow-y-auto pb-28">
          <div id="top-of-scroll" />
          <AnimatePresence mode="wait">
            {viewMode === 'bio' ? (
              <motion.div
                key="bio-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
              >
                <BioLinksView onStartSimulation={startFunnel} />
              </motion.div>
            ) : (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full"
              >
                {step === 0 && <Landing onNext={nextStep} />}
                {step === 1 && <Step1 onSelect={(val) => { updateFormData('target', val); nextStep(); }} />}
                {step === 2 && <Step2 value={formData.credit} onChange={(val: number) => updateFormData('credit', val)} onNext={nextStep} />}
                {step === 3 && <Step3 value={formData.entry} onChange={(val: number) => updateFormData('entry', val)} onNext={nextStep} />}
                {step === 4 && <Step4 value={formData.installment} onChange={(val: number) => updateFormData('installment', val)} onNext={nextStep} />}
                {step === 5 && <Step5 formData={formData} onChange={updateFormData} onNext={nextStep} />}
                {step === 6 && <LoadingStep onNext={nextStep} />}
                {step === 7 && <Step6 formData={formData} />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <RecentActivity />
      </div>
    </div>
  );
}
