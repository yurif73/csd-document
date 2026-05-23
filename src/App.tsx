import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import SpecializedFields from './components/SpecializedFields';
import ProcessAndTech from './components/ProcessAndTech';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import ConsultationModal from './components/ConsultationModal';
import { ArrowUp, ShieldCheck, Mail, Phone, Lock } from 'lucide-react';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 noise-overlay overflow-x-hidden">
      
      {/* Decorative top grid glow elements */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-cyan-950/20 via-slate-950/0 to-slate-950 pointer-events-none z-0"></div>

      {/* Header section with Consultation Trigger */}
      <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Single Page structural sections */}
      <main className="relative z-10">
        
        {/* Section 1: Hero presentation */}
        <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Section 2: Core Benefits & metrics */}
        <Benefits />

        {/* Section 3: Specialized translation directions & slider workflow */}
        <SpecializedFields />

        {/* Section 4: Automated high-tech process & pipeline */}
        <ProcessAndTech />

        {/* Section 5: Corporate About Us profile */}
        <AboutUs />

        {/* Section 6: In-depth contacts, physical office details and valuation calculator */}
        <ContactForm />

      </main>

      {/* Premium Dark B2B Footer */}
      <footer className="relative bg-slate-950 border-t border-white/5 py-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/5 pb-8 mb-8">
            
            <div className="md:col-span-4 flex flex-col items-start gap-2.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 p-[1px]">
                  <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-display font-extrabold text-white text-xs">
                    ЦСД
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-sm tracking-tight text-white">ЦСД</span>
                  <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">Specialized Documents</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 font-light text-left leading-relaxed mt-2 max-w-xs">
                ООО «ЦСД»: Специализируемся исключительно на техническом переводе и профессиональной вёрстке сложных документов.
              </p>
            </div>

            {/* Quick navigations for footer */}
            <div className="md:col-span-5 flex flex-wrap gap-x-8 gap-y-3 justify-start md:justify-center">
              <a href="#benefits" className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors uppercase">Преимущества</a>
              <a href="#directions" className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors uppercase">Сферы работы</a>
              <a href="#tech" className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors uppercase">Технологии</a>
              <a href="#about" className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors uppercase">О нас</a>
              <a href="#contacts" className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors uppercase">Оценка</a>
            </div>

            {/* Floating back-to-top button */}
            <div className="md:col-span-3 flex justify-end">
              <button 
                onClick={handleScrollToTop}
                className="p-3 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/25 transition-all shadow-lg pointer group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
              </button>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-500">
            <div className="text-left space-y-1.5 max-w-2xl">
              <div>© 2026 ООО «Центр сертификации и декларирования» (ООО «ЦСД»). Все права защищены.</div>
              <div className="text-slate-600">
                ИНН/КПП: 7734375768/773401001 • ОГРН: 1167746100720 <br />
                Адрес: 123308, г. Москва, вн. тер. г. муниципальный округ Хорошево-Мневники, ул. Мнёвники, д. 3 к. 1, этаж 3, помещ. I, ком. 20
              </div>
              <div className="text-slate-600 text-[9.5px]">
                Данный сайт не является публичной офертой. Информация носит ознакомительный характер. Мы обеспечиваем конфиденциальность предоставляемых данных в соответствии с законодательством РФ.
              </div>
            </div>
            
            <div className="flex items-center gap-4 shrink-0">
              <span className="flex items-center gap-1.5 text-emerald-500">
                <ShieldCheck className="w-3.5 h-3.5" />
                ПРОФЕССИОНАЛЬНАЯ ВЕРСТКА И ПЕРЕВОД
              </span>
              <span className="flex items-center gap-1 text-slate-600">
                <Lock className="w-3.5 h-3.5" />
                ООО «ЦСД»
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* Premium Consult popup */}
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

    </div>
  );
}
