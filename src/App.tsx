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

const BG_IMAGE = "https://res.cloudinary.com/dsevqnhts/image/upload/v1789581810/Extracting_featured_logo_image_20260916144958_xjb7co.jpg";
const LOGO_IMAGE = "https://res.cloudinary.com/dsevqnhts/image/upload/c_crop,x_120,y_370,w_760,h_280/v1789581810/Extracting_featured_logo_image_20260916144958_xjb7co.jpg";

// Reusable Luxury Brand Badge presenting the complete Sabino Investimentos logo banner
export const LogoBrand = ({ 
  size = "lg", 
  className = "" 
}: { 
  size?: "sm" | "md" | "lg" | "xl"; 
  variant?: "circle" | "card";
  className?: string 
}) => {
  const dimensions = {
    sm: "w-48 h-16 p-2 rounded-2xl",
    md: "w-60 h-20 p-2.5 rounded-2xl",
    lg: "w-72 sm:w-80 h-24 sm:h-28 p-3 rounded-2xl",
    xl: "w-80 sm:w-96 h-28 sm:h-32 p-3.5 rounded-3xl"
  }[size];

  return (
    <div className={`relative group inline-flex items-center justify-center ${className}`}>
      {/* Multi-tone animated ambient glow matching Sabino Investimentos: Electric Teal & Deep Oceanic Cyan */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#1DD7D4] via-[#0EA5E9] to-[#042D3D] opacity-65 blur-xl group-hover:opacity-90 transition-opacity duration-700 animate-pulse"></div>
      
      {/* Executive Dark Badge - Seamless dark oceanic card framing the crisp symbol and typography */}
      <div className={`relative ${dimensions} bg-[#031d2b]/95 backdrop-blur-xl border-2 border-[#1DD7D4]/40 shadow-[0_12px_36px_rgba(29,215,212,0.25)] flex items-center justify-center overflow-hidden`}>
        <img 
          src={LOGO_IMAGE} 
          alt="SABINO INVESTIMENTOS" 
          className="w-full h-full object-contain filter contrast-[1.04] drop-shadow-sm select-none"
        />
      </div>
    </div>
  );
};

const testimonials = [
  { name: "Carlos Silva", text: "Planejei a renovação da minha frota com a Sabino Investimentos com parcelas justas e sem descapitalizar meu negócio." },
  { name: "Mariana Costa", text: "O atendimento e a consultoria patrimonial foram excepcionais! Conquistei meu imóvel com uma estratégia financeira impecável." },
  { name: "Roberto Almeida", text: "Adquiri maquinário agrícola novo com planejamento estratégico. Recomendo com total confiança a Sabino Investimentos." },
  { name: "Fernanda Lima", text: "Processo 100% transparente, equipe ágil e contemplação rápida para alavancar meus investimentos." }
];

const bioReviews = [
  {
    initial: "C",
    name: "Carlos Eduardo",
    rating: 5,
    text: "Atendimento impecável! Estruturei meu patrimônio e consegui crédito com taxas muito mais vantajosas que os bancos convencionais."
  },
  {
    initial: "A",
    name: "Ana Paula",
    rating: 5,
    text: "Transparência do início ao fim. Recomendo a Sabino Investimentos para quem busca seriedade, governança e rentabilidade inteligente."
  },
  {
    initial: "M",
    name: "Marcos Viana",
    rating: 5,
    text: "Adquiri caminhões pesados para expandir minhas operações sem juros abusivos. Empresa de altíssima credibilidade!"
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
        SABINO INVESTIMENTOS
      </motion.h1>
      <motion.p variants={itemVariants} className="text-xs font-bold text-[#1DD7D4] uppercase tracking-widest mb-4 flex items-center justify-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1DD7D4] animate-ping"></span>
        CRÉDITO INTELIGENTE & GESTÃO PATRIMONIAL
      </motion.p>

      {/* Rating Social Proof Badge */}
      <motion.div variants={itemVariants} className="bg-[#042435]/80 border border-teal-500/25 px-5 py-2.5 rounded-2xl flex items-center gap-2 mb-8 shadow-lg shadow-black/40 backdrop-blur-xl">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} fill="currentColor" />
          ))}
        </div>
        <span className="text-xs text-teal-100 font-medium">
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
            className="relative w-full bg-gradient-to-r from-[#1DD7D4] via-[#0EA5E9] to-[#0D9488] text-[#021722] font-black text-base sm:text-lg py-4 px-5 rounded-2xl shadow-[0_0_30px_rgba(29,215,212,0.45)] hover:shadow-[0_0_40px_rgba(29,215,212,0.7)] flex items-center justify-between transition-all border border-teal-200/50 group cursor-pointer overflow-hidden"
          >
            {/* Shimmer Sweep Animation */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none"></div>

            <div className="flex items-center gap-3 relative z-10">
              <div className="bg-[#021722] p-2.5 rounded-xl text-[#1DD7D4] shadow-md shadow-black/50">
                <Calculator size={22} className="shrink-0" />
              </div>
              <span className="tracking-tight text-left">Faça sua simulação aqui</span>
            </div>
            <ArrowRight size={22} className="shrink-0 group-hover:translate-x-1 transition-transform relative z-10 text-[#021722]" />
          </motion.button>
        </motion.div>

        {/* WhatsApp Link */}
        <motion.div variants={itemVariants} className="w-full">
          <motion.a
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/558791975063?text=Ol%C3%A1!%20Vim%20pelo%20link%20da%20bio%20da%20Sabino%20Investimentos%20e%20gostaria%20de%20falar%20com%20um%20consultor."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#042435]/75 hover:bg-[#06334a]/90 border border-teal-500/20 hover:border-emerald-400/40 text-white font-semibold text-sm sm:text-base py-3.5 px-4 rounded-2xl shadow-md flex items-center justify-between transition-all group backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/20 text-emerald-400 p-2.5 rounded-xl border border-emerald-500/30 shrink-0">
                <MessageCircle size={20} />
              </div>
              <span className="text-left">Fale com um Consultor (WhatsApp)</span>
            </div>
            <ChevronRight size={18} className="text-teal-300/50 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
          </motion.a>
        </motion.div>

        {/* Email Link */}
        <motion.div variants={itemVariants} className="w-full">
          <motion.a
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:contato@sabinoinvestimentos.com.br?subject=Atendimento%20Sabino%20Investimentos"
            className="w-full bg-[#042435]/75 hover:bg-[#06334a]/90 border border-teal-500/20 hover:border-[#1DD7D4]/40 text-white font-semibold text-sm sm:text-base py-3.5 px-4 rounded-2xl shadow-md flex items-center justify-between transition-all group backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#1DD7D4]/20 text-[#1DD7D4] p-2.5 rounded-xl border border-[#1DD7D4]/30 shrink-0">
                <Mail size={20} />
              </div>
              <span className="text-left">Envie um E-mail</span>
            </div>
            <ChevronRight size={18} className="text-teal-300/50 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
          </motion.a>
        </motion.div>

        {/* Localização Modal Trigger */}
        <motion.div variants={itemVariants} className="w-full">
          <motion.button
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowLocationModal(true)}
            className="w-full bg-[#042435]/75 hover:bg-[#06334a]/90 border border-teal-500/20 hover:border-cyan-400/40 text-white font-semibold text-sm sm:text-base py-3.5 px-4 rounded-2xl shadow-md flex items-center justify-between transition-all group backdrop-blur-xl cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="bg-cyan-500/20 text-[#38BDF8] p-2.5 rounded-xl border border-cyan-500/30 shrink-0">
                <MapPin size={20} />
              </div>
              <span className="text-left">Nossa Localização</span>
            </div>
            <ChevronRight size={18} className="text-teal-300/50 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
          </motion.button>
        </motion.div>
      </div>

      {/* AVALIAÇÕES SECTION */}
      <motion.div variants={itemVariants} className="w-full">
        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-teal-500/20"></div>
          </div>
          <span className="relative bg-[#021722] px-4 text-xs font-bold text-teal-300/70 uppercase tracking-widest">
            AVALIAÇÕES REAIS
          </span>
        </div>

        <div className="space-y-3.5 text-left">
          {bioReviews.map((rev, idx) => (
            <div key={idx} className="bg-[#042435]/75 border border-teal-500/20 p-4 rounded-2xl backdrop-blur-xl shadow-lg shadow-black/40">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0891B2] to-[#1DD7D4] text-[#021722] font-black text-xs flex items-center justify-center shrink-0 shadow-md border border-teal-200/40">
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
              <p className="text-teal-100/90 text-xs italic leading-relaxed pl-1">
                "{rev.text}"
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* FOOTER */}
      <motion.div variants={itemVariants} className="mt-12 text-center text-xs text-teal-300/60">
        <p className="flex items-center justify-center gap-1 text-teal-200 font-medium mb-1">
          <MapPin size={13} className="text-[#1DD7D4]" /> Petrolina - PE
        </p>
        <p>&copy; {new Date().getFullYear()} SABINO INVESTIMENTOS. Todos os direitos reservados.</p>
      </motion.div>

      {/* LOCATION MODAL */}
      <AnimatePresence>
        {showLocationModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#010c12]/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowLocationModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#042435] border border-teal-500/30 p-6 rounded-3xl max-w-sm w-full text-center relative shadow-2xl shadow-black/80"
            >
              <button 
                onClick={() => setShowLocationModal(false)}
                className="absolute top-4 right-4 text-teal-300 hover:text-white p-1 rounded-full bg-teal-950/40 hover:bg-teal-900/60 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="w-12 h-12 rounded-full bg-[#1DD7D4]/20 text-[#1DD7D4] flex items-center justify-center mx-auto mb-4 border border-teal-400/40 shadow-inner">
                <MapPin size={24} />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">Atendimento Presencial e Online</h3>
              <p className="text-teal-200 text-sm mb-4">
                Atendemos presencialmente em Petrolina e com especialistas online para todo o Brasil:
              </p>

              <div className="bg-[#021722]/80 p-4 rounded-2xl border border-teal-500/20 text-xs text-teal-200 space-y-2 mb-6 text-left">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1DD7D4]"></span>
                  <strong className="text-white">Petrolina - PE e Região</strong>
                </p>
                <p className="text-teal-300/80 pl-4">
                  Consultoria especializada sob medida para seu objetivo patrimonial.
                </p>
              </div>

              <a
                href="https://wa.me/558791975063?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20com%20um%20especialista%20da%20SABINO%20INVESTIMENTOS."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#1DD7D4] via-[#0EA5E9] to-[#0D9488] text-[#021722] font-black py-3 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-teal-950/60 hover:brightness-110 transition-all text-sm border border-teal-300/40 cursor-pointer"
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

      <motion.div variants={itemVariants} className="bg-[#042435]/85 text-white px-6 py-3 rounded-2xl flex flex-col items-center mb-8 border border-teal-500/25 shadow-lg shadow-black/40 backdrop-blur-xl">
        <div className="flex items-center gap-2 font-bold text-sm mb-2 tracking-wide text-center text-[#1DD7D4]">
          <TrendingUp size={18} className="shrink-0 text-[#1DD7D4]" /> CONDIÇÃO EXCLUSIVA SABINO INVESTIMENTOS
        </div>
        <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#0E7490] via-[#0891B2] to-[#042D3D] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md border border-teal-400/30">
          <Clock size={16} className="text-[#1DD7D4]" /> {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-[1.15] tracking-tight drop-shadow-lg">
        Realize seus planos com a <span className="bg-gradient-to-r from-[#1DD7D4] via-teal-100 to-white bg-clip-text text-transparent">SABINO INVESTIMENTOS</span> 📈
      </motion.h1>

      <motion.p 
        variants={itemVariants} 
        className="text-teal-100/90 font-medium mb-10 text-[18px] leading-[30.25px] w-full max-w-xs drop-shadow-md"
      >
        Crédito inteligente sem juros abusivos.<br/>
        Descubra seu poder de compra e alavancagem.
      </motion.p>

      <motion.div variants={itemVariants} className="w-full max-w-md mb-12">
        <motion.button 
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.96 }}
          onClick={onNext}
          className="relative w-full bg-gradient-to-r from-[#1DD7D4] via-[#0EA5E9] to-[#0D9488] hover:brightness-110 text-[#021722] text-xl font-black py-4.5 rounded-full shadow-[0_0_35px_rgba(29,215,212,0.45)] transition-all flex items-center justify-center gap-2 border border-teal-200/50 cursor-pointer overflow-hidden group"
        >
          {/* Shimmer sweep animation */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none"></div>
          
          <span className="relative z-10 flex items-center gap-2 text-[#021722]">
            Fazer Simulação <ArrowRight size={24} className="group-hover:translate-x-1.5 transition-transform" />
          </span>
        </motion.button>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
        <div className="flex items-center gap-1.5 bg-[#042435]/75 border border-teal-500/20 px-4 py-2 rounded-full text-sm font-semibold text-teal-100 shadow-md backdrop-blur-xl">
          <CheckCircle2 size={18} className="text-[#1DD7D4]" /> SEM JUROS BANCÁRIOS
        </div>
        <div className="flex items-center gap-1.5 bg-[#042435]/75 border border-teal-500/20 px-4 py-2 rounded-full text-sm font-semibold text-teal-100 shadow-md backdrop-blur-xl">
          <ShieldCheck size={18} className="text-emerald-400" /> ALAVANCAGEM SEGURA
        </div>
        <div className="flex items-center gap-1.5 bg-[#042435]/75 border border-teal-500/20 px-4 py-2 rounded-full text-sm font-semibold text-teal-100 shadow-md backdrop-blur-xl">
          <User size={18} className="text-[#1DD7D4]" /> CONSULTORES SÊNIOR
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-4 w-full max-w-md">
        <p className="text-xs font-bold text-teal-300/70 uppercase tracking-widest mb-4">Mais de 5.000 clientes satisfeitos</p>
        <div className="bg-[#042435]/80 p-6 rounded-3xl shadow-xl border border-teal-500/20 text-left relative backdrop-blur-xl h-[195px] flex flex-col justify-center">
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
                <p className="text-teal-100/90 italic text-[15px] leading-relaxed mb-3">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-white font-bold text-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1DD7D4]"></span>
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
        className="mt-16 flex items-center gap-2 text-teal-200 font-bold hover:text-[#1DD7D4] transition-colors bg-[#042435]/85 px-6 py-3 rounded-full backdrop-blur-xl border border-teal-500/25 shadow-md cursor-pointer"
      >
        <ArrowUp size={20} /> Voltar ao topo
      </motion.button>

      <motion.div variants={itemVariants} className="mt-16 text-center opacity-90">
        <p className="text-white text-base font-bold tracking-wide">SABINO INVESTIMENTOS</p>
        <p className="text-teal-300/70 text-xs mt-1">Soluções financeiras inteligentes, consórcios e investimentos estratégicos.</p>
        <p className="text-teal-400/50 text-xs mt-1">&copy; {new Date().getFullYear()} SABINO INVESTIMENTOS. Todos os direitos reservados.</p>
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
    <p className="text-teal-200/80 mb-8 text-lg">Escolha o segmento desejado.</p>
    
    <div className="flex flex-col gap-3.5">
      {targets.map(t => (
        <motion.button 
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.97 }}
          key={t.id}
          onClick={() => onSelect(t.title)}
          className="flex items-center gap-5 p-4.5 bg-[#042435]/75 border border-teal-500/20 rounded-3xl shadow-lg hover:border-teal-400/60 hover:bg-[#06334a]/90 transition-all text-left group backdrop-blur-xl w-full cursor-pointer"
        >
          <div className="bg-[#021722] border border-teal-500/30 p-3.5 rounded-2xl text-[#1DD7D4] group-hover:bg-[#1DD7D4] group-hover:text-[#021722] group-hover:border-teal-200 group-hover:scale-105 transition-all shrink-0">
            <t.icon size={26} strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white text-lg">{t.title}</h3>
            <p className="text-teal-300/60 text-sm mt-0.5">{t.desc}</p>
          </div>
          <ChevronRight size={20} className="text-teal-400/40 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
        </motion.button>
      ))}
    </div>
  </div>
);

const creditPresets = [50000, 100000, 200000, 350000, 500000];

const Step2 = ({ value, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Valor do Crédito</h2>
    <p className="text-teal-200/80 mb-8 text-lg">Quanto você precisa para realizar este objetivo?</p>
    
    <div className="bg-[#042435]/80 p-8 rounded-[2rem] shadow-xl border border-teal-500/20 mb-8 backdrop-blur-xl">
      <div className="text-center mb-6">
        <span className="text-[2.65rem] sm:text-[2.85rem] font-black bg-gradient-to-r from-white via-teal-100 to-[#1DD7D4] bg-clip-text text-transparent tracking-tight drop-shadow-md">
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
      <div className="flex justify-between text-xs font-semibold text-teal-300/60 mb-6">
        <span>R$ 20 mil</span>
        <span>R$ 500 mil</span>
      </div>

      {/* Quick Select Chips */}
      <div className="flex flex-wrap justify-center gap-2 pt-2 border-t border-teal-500/15">
        {creditPresets.map(preset => (
          <button
            key={preset}
            type="button"
            onClick={() => onChange(preset)}
            className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
              value === preset 
                ? 'bg-[#1DD7D4] text-[#021722] shadow-md shadow-teal-500/30 border border-teal-200' 
                : 'bg-teal-950/40 text-teal-200 hover:bg-teal-900/60 border border-teal-500/20'
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
      className="relative w-full bg-gradient-to-r from-[#1DD7D4] via-[#0EA5E9] to-[#0D9488] hover:brightness-110 text-[#021722] text-xl font-black py-4.5 rounded-full shadow-[0_0_35px_rgba(29,215,212,0.45)] transition-all mt-auto border border-teal-200/50 cursor-pointer overflow-hidden group"
    >
      <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none"></div>
      <span className="relative z-10 flex items-center justify-center gap-2 text-[#021722]">
        Avançar <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.button>
  </div>
);

const entryPresets = [5000, 15000, 30000, 60000, 100000];

const Step3 = ({ value, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Valor de Entrada</h2>
    <p className="text-teal-200/80 mb-8 text-lg">Qual valor você tem disponível para investir agora?</p>
    
    <div className="bg-[#042435]/80 p-8 rounded-[2rem] shadow-xl border border-teal-500/20 mb-8 backdrop-blur-xl">
      <div className="text-center mb-6">
        <span className="text-[2.65rem] sm:text-[2.85rem] font-black bg-gradient-to-r from-white via-teal-100 to-[#1DD7D4] bg-clip-text text-transparent tracking-tight drop-shadow-md">
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
      <div className="flex justify-between text-xs font-semibold text-teal-300/60 mb-6">
        <span>R$ 5 mil</span>
        <span>R$ 500 mil</span>
      </div>

      {/* Quick Select Chips */}
      <div className="flex flex-wrap justify-center gap-2 pt-2 border-t border-teal-500/15">
        {entryPresets.map(preset => (
          <button
            key={preset}
            type="button"
            onClick={() => onChange(preset)}
            className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
              value === preset 
                ? 'bg-[#1DD7D4] text-[#021722] shadow-md shadow-teal-500/30 border border-teal-200' 
                : 'bg-teal-950/40 text-teal-200 hover:bg-teal-900/60 border border-teal-500/20'
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
      className="relative w-full bg-gradient-to-r from-[#1DD7D4] via-[#0EA5E9] to-[#0D9488] hover:brightness-110 text-[#021722] text-xl font-black py-4.5 rounded-full shadow-[0_0_35px_rgba(29,215,212,0.45)] transition-all mt-auto border border-teal-200/50 cursor-pointer overflow-hidden group"
    >
      <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none"></div>
      <span className="relative z-10 flex items-center justify-center gap-2 text-[#021722]">
        Avançar <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.button>
  </div>
);

const installmentPresets = [800, 1500, 2500, 4000, 7000];

const Step4 = ({ value, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Investimento Mensal</h2>
    <p className="text-teal-200/80 mb-8 text-lg">Qual parcela cabe confortavelmente no seu bolso?</p>
    
    <div className="bg-[#042435]/80 p-8 rounded-[2rem] shadow-xl border border-teal-500/20 mb-8 backdrop-blur-xl">
      <div className="text-center mb-6">
        <span className="text-[2.65rem] sm:text-[2.85rem] font-black bg-gradient-to-r from-white via-teal-100 to-[#1DD7D4] bg-clip-text text-transparent tracking-tight drop-shadow-md">
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
      <div className="flex justify-between text-xs font-semibold text-teal-300/60 mb-6">
        <span>R$ 500</span>
        <span>R$ 20.000</span>
      </div>

      {/* Quick Select Chips */}
      <div className="flex flex-wrap justify-center gap-2 pt-2 border-t border-teal-500/15">
        {installmentPresets.map(preset => (
          <button
            key={preset}
            type="button"
            onClick={() => onChange(preset)}
            className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
              value === preset 
                ? 'bg-[#1DD7D4] text-[#021722] shadow-md shadow-teal-500/30 border border-teal-200' 
                : 'bg-teal-950/40 text-teal-200 hover:bg-teal-900/60 border border-teal-500/20'
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
      className="relative w-full bg-gradient-to-r from-[#1DD7D4] via-[#0EA5E9] to-[#0D9488] hover:brightness-110 text-[#021722] text-xl font-black py-4.5 rounded-full shadow-[0_0_35px_rgba(29,215,212,0.45)] transition-all mt-auto border border-teal-200/50 cursor-pointer overflow-hidden group"
    >
      <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none"></div>
      <span className="relative z-10 flex items-center justify-center gap-2 text-[#021722]">
        Avançar <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.button>
  </div>
);

const Step5 = ({ formData, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Último passo</h2>
    <p className="text-teal-200/80 mb-10 text-lg">Para onde enviamos seu plano estratégico?</p>
    
    <div className="flex flex-col gap-5 mb-10">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-teal-300">
          <User size={22} />
        </div>
        <input 
          type="text" 
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
          className="w-full pl-14 pr-5 py-4.5 bg-[#042435]/80 border border-teal-500/30 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-[#1DD7D4] focus:border-transparent text-lg shadow-inner placeholder:text-teal-300/40 font-medium text-white backdrop-blur-xl"
        />
      </div>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-teal-300">
          <User size={22} />
        </div>
        <input 
          type="text" 
          placeholder="Indicado por (Opcional)"
          value={formData.referredBy}
          onChange={(e) => onChange('referredBy', e.target.value)}
          className="w-full pl-14 pr-5 py-4.5 bg-[#042435]/80 border border-teal-500/30 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-[#1DD7D4] focus:border-transparent text-lg shadow-inner placeholder:text-teal-300/40 font-medium text-white backdrop-blur-xl"
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-teal-300">
          <Phone size={22} />
        </div>
        <input 
          type="tel" 
          placeholder="Seu WhatsApp (com DDD)"
          value={formData.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          className="w-full pl-14 pr-5 py-4.5 bg-[#042435]/80 border border-teal-500/30 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-[#1DD7D4] focus:border-transparent text-lg shadow-inner placeholder:text-teal-300/40 font-medium text-white backdrop-blur-xl"
        />
      </div>
    </div>

    <motion.button 
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={onNext}
      disabled={!formData.name || !formData.phone}
      className="relative w-full bg-gradient-to-r from-[#1DD7D4] via-[#0EA5E9] to-[#0D9488] hover:brightness-110 text-[#021722] text-xl font-black py-4.5 rounded-full shadow-[0_0_35px_rgba(29,215,212,0.45)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-auto border border-teal-200/50 cursor-pointer overflow-hidden group"
    >
      <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none"></div>
      <span className="relative z-10 flex items-center justify-center gap-2 text-[#021722]">
        Receber Plano Exclusivo <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.button>
    
    <div className="flex items-center justify-center gap-2 mt-8 text-teal-300/70 text-sm font-semibold tracking-wide">
      <Lock size={16} className="text-[#1DD7D4]" /> SEUS DADOS ESTÃO 100% SEGUROS
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
      'Gerando plano exclusivo SABINO INVESTIMENTOS...'
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
        <div className="w-24 h-24 rounded-full border-4 border-teal-500/20 border-t-[#1DD7D4] animate-spin flex items-center justify-center"></div>
        <div className="absolute inset-0 flex items-center justify-center text-[#1DD7D4]">
          <Sparkles size={28} className="animate-pulse" />
        </div>
      </div>
      <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Processando Análise...</h2>
      <p className="text-teal-200 text-lg font-medium">{loadingText}</p>
    </div>
  );
};

const Step6 = ({ formData }: any) => {
  const handleWhatsApp = () => {
    const text = `Olá! Fiz uma simulação no site da Sabino Investimentos e gostaria de falar com um especialista.\n\n*Resumo da Simulação:*\nAlvo: ${formData.target}\nCrédito: ${formatCurrency(formData.credit)}\nEntrada: ${formatCurrency(formData.entry)}\nParcela: ${formatCurrency(formData.installment)}\nNome: ${formData.name}\nWhatsApp: ${formData.phone}${formData.referredBy ? `\nIndicado por: ${formData.referredBy}` : ''}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/558791975063?text=${encodedText}`, '_blank');
  };

  return (
    <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/40 text-[#1DD7D4] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles size={14} /> Condição Especial Liberada
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Plano Gerado!</h2>
        <p className="text-teal-200/80 text-base mt-1">Sua estratégia personalizada está pronta.</p>
      </div>
      
      <div className="bg-[#042435]/85 p-7 rounded-[2rem] shadow-2xl border border-teal-500/25 mb-8 backdrop-blur-xl">
        <div className="flex justify-between items-center py-3.5 border-b border-teal-500/15">
          <span className="text-teal-300/70 font-bold text-xs tracking-widest uppercase">Alvo Selecionado</span>
          <span className="text-white font-bold text-lg">{formData.target}</span>
        </div>
        <div className="flex justify-between items-center py-3.5 border-b border-teal-500/15">
          <span className="text-teal-300/70 font-bold text-xs tracking-widest uppercase">Crédito Solicitado</span>
          <span className="text-[#1DD7D4] font-black text-2xl">{formatCurrency(formData.credit)}</span>
        </div>
        <div className="flex justify-between items-center py-3.5 border-b border-teal-500/15">
          <span className="text-teal-300/70 font-bold text-xs tracking-widest uppercase">Entrada Prevista</span>
          <span className="text-white font-bold text-lg">{formatCurrency(formData.entry)}</span>
        </div>
        <div className="flex justify-between items-center py-3.5">
          <span className="text-teal-300/70 font-bold text-xs tracking-widest uppercase">Parcela Estimada</span>
          <span className="text-emerald-400 font-black text-xl">{formatCurrency(formData.installment)}</span>
        </div>
      </div>

      <div className="mt-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-teal-200 font-semibold text-sm mb-4 text-center flex items-center gap-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Consultor Sabino Investimentos disponível agora!
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
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-80 bg-[#042435]/95 p-3.5 rounded-2xl shadow-xl border border-teal-500/30 flex items-center gap-4 z-50 backdrop-blur-md"
        >
          <div className="bg-teal-500/20 text-[#1DD7D4] p-2.5 rounded-full shrink-0 border border-teal-500/40">
            <Bell size={20} />
          </div>
          <div>
            <p className="text-[15px] text-white leading-tight">
              <span className="font-bold">{current.name}</span> {current.action}
            </p>
            <p className="text-xs text-teal-300/60 mt-0.5 font-medium">{current.time}</p>
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
    <div className="min-h-screen font-sans text-white relative overflow-hidden flex justify-center selection:bg-teal-500/40">
      {/* Dynamic Sabino Investimentos Dark Background */}
      <div className="fixed inset-0 z-0 bg-[#021722]">
        {/* Layer 1: Petrol Navy mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021722] via-[#042435] to-[#010e17]"></div>
        
        {/* Layer 2: Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

        {/* Layer 3: Animated ambient glowing spheres in Sabino colors */}
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-teal-500/18 rounded-full blur-[130px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute -bottom-24 left-10 w-[450px] h-[450px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Layer 4: Subtle brand watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] overflow-hidden">
          <img src={BG_IMAGE} alt="" className="w-[500px] max-w-[85vw] h-auto object-contain select-none" />
        </div>
      </div>

      <div className="w-full max-w-md bg-transparent min-h-screen relative z-10 flex flex-col">
        
        {/* Navigation Header when in Funnel mode */}
        {viewMode === 'funnel' && (
          <div className="px-5 py-3.5 flex items-center justify-between sticky top-0 z-30 bg-[#021722]/90 backdrop-blur-xl border-b border-teal-500/20 shadow-lg">
            <button 
              onClick={() => setViewMode('bio')}
              className="flex items-center gap-1.5 text-xs font-bold text-teal-200 hover:text-white transition-colors py-1.5 px-3 rounded-full bg-[#042435] border border-teal-500/25 shadow-sm cursor-pointer"
            >
              <ArrowLeft size={14} /> Início / Bio Links
            </button>

            {step > 0 && (
              <div className="flex items-center gap-3 flex-1 ml-3">
                <button onClick={prevStep} className="text-xs font-bold text-teal-300/70 hover:text-white transition-colors cursor-pointer">
                  Voltar
                </button>
                <div className="flex-1 h-2 bg-[#021722] rounded-full overflow-hidden p-0.5 border border-teal-500/20">
                  <div 
                    className="h-full bg-gradient-to-r from-[#1DD7D4] via-[#0EA5E9] to-[#0D9488] transition-all duration-500 ease-out rounded-full shadow-[0_0_12px_rgba(29,215,212,0.7)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-teal-200 w-8 text-right">{progress}%</span>
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
