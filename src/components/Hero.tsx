import React, { useState, useEffect } from 'react';
import { ChevronRight, FileCode, CheckCircle, Database } from 'lucide-react';
import CyberCanvas from './CyberCanvas';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [activeDocType, setActiveDocType] = useState(0);
  const docTypes = [
    'Техническая документация (1000+ стр.)',
    'Чертежи AutoCAD / SolidWorks',
    'Каталоги в Adobe InDesign',
    'Научные публикации & LaTeX',
    'Базы знаний DITA / XML',
    'Сложные финансовые отчёты & PDF-макеты'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDocType((prev) => (prev + 1) % docTypes.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: '1.2 млн+', label: 'Переведено страниц', desc: 'Крупных B2B спецификаций' },
    { value: 'Максимальная', label: 'Точность структуры', desc: 'Соблюдение оригинальной верстки' },
    { value: '45+', label: 'Поддерживаемых форматов', desc: 'От AutoCAD до FrameMaker' },
    { value: 'Тройной', label: 'Контроль качества', desc: 'Многоэтапная проверка каждого макета' }
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden cyber-grid">
      
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 ambient-glow-cyan pointer-events-none rounded-full translate-x-[-50%] translate-y-[-50%] filter blur-[80px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] ambient-glow-violet pointer-events-none rounded-full translate-x-[50%] translate-y-[50%] filter blur-[100px]"></div>

      {/* Embedded interactive live simulation mapping particle connections */}
      <CyberCanvas />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            
            {/* Super premium top tag */}
            <div className="inline-flex self-start items-center gap-2.5 px-3 py-1.5 bg-cyan-950/40 border border-cyan-400/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="text-xs font-mono text-cyan-300 tracking-wider">
                СПЕЦИАЛИЗИРОВАННОЕ БЮРО ПЕРЕВОДОВ И ВЕРСТКИ
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Технический перевод и верстка{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-500">
                сложных
              </span>{' '}
              документов
            </h1>

            {/* Sub-headline / Bullet Points */}
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Специализируемся исключительно на техническом переводе и профессиональной вёрстке сложных документов. 
              Синтез отраслевой инженерной экспертизы, строгих CAT-систем и современных глоссариев.
            </p>

            {/* Animated Docu-Types dynamic visual track */}
            <div className="glass-panel rounded-xl p-4 border border-white/5 flex items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-950 flex items-center justify-center border border-cyan-400/25">
                  <FileCode className="w-4.5 h-4.5 text-cyan-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                    Экспертный фокус
                  </div>
                  <div className="text-sm font-semibold text-white h-5 overflow-hidden">
                    <span className="inline-block text-cyan-300 animate-none transition-all duration-500">
                      {docTypes[activeDocType]}
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                [ {activeDocType + 1} / {docTypes.length} ]
              </span>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-xl text-white font-display font-bold text-sm uppercase lg:text-base tracking-widest shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-95 group text-center"
              >
                Обсудить проект
              </button>
              
              <a
                href="#directions"
                className="px-8 py-4 bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 hover:border-cyan-400/30 rounded-xl text-slate-300 font-display font-bold text-xs uppercase lg:text-sm tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Сферы и форматы
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick checkmarks */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                Максимальная точность верстки
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                Интеграция с САТ и глоссариями
              </div>
            </div>

          </div>

          {/* Hero Right Visual: Isometric Live Schema showing raw blueprint translation */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 rounded-3xl blur-2xl transform rotate-6"></div>
            
            {/* Interactive Futuristic Card Visual */}
            <div className="relative glass-panel rounded-2xl p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute top-0 right-0 p-2 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-bl-xl text-[9px] font-mono tracking-widest uppercase text-cyan-400">
                Live Status
              </div>

              {/* Card visual details */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
                <div className="text-xs font-mono tracking-wider text-slate-400">
                  МНОГОКОМПОНЕНТНЫЙ ВЕКТОРНЫЙ КОНТРОЛЬ ПЕРЕВОДА
                </div>
              </div>

              {/* Isometric simulation of document translation */}
              <div className="space-y-4">
                
                {/* Simulated Document Source Row */}
                <div className="flex flex-col gap-1.5 p-3.5 rounded-lg bg-slate-950/80 border border-white/5">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span>SOURCE (EN) .INDD</span>
                    <span className="text-cyan-400">842 PAGES DETECTED</span>
                  </div>
                  <div className="mt-1 font-mono text-xs text-white truncate">
                    {"[CAD_LAYOUT] // Airframe fuselage pressure shell spec Section 4..."}
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-1 mt-1.5 overflow-hidden">
                    <div className="bg-cyan-400 h-full w-[100%]"></div>
                  </div>
                </div>

                {/* Simulated Processing Center */}
                <div className="flex items-center justify-center py-2">
                  <div className="relative w-10 h-10 rounded-full bg-cyan-950/80 border border-cyan-400/30 flex items-center justify-center">
                    <Database className="w-5 h-5 text-cyan-400 animate-pulse" />
                    <div className="absolute -inset-1 border border-dashed border-violet-500/50 rounded-full animate-spin"></div>
                  </div>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-400/20 to-violet-500/20 flex-1 mx-3 border-t border-dashed border-cyan-500/20"></div>
                  <div className="text-[10px] font-mono text-sky-400 tracking-wider">
                    Глоссарии & ИИ + Обученные редакторы
                  </div>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-violet-500/20 to-cyan-400/20 flex-1 mx-3 border-t border-dashed border-cyan-500/20"></div>
                </div>

                {/* Simulated Document Output Row */}
                <div className="flex flex-col gap-1.5 p-3.5 rounded-lg bg-slate-900/40 border border-violet-500/10">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                    <span>TARGET (RU) .INDD</span>
                    <span className="text-violet-400">VERIFIED VALID STRUCTURE</span>
                  </div>
                  <div className="mt-1 font-mono text-xs text-slate-300 truncate">
                    {"[ПРИВЕДЕННЫЙ_МАКЕТ] // Герметичный силовой отсек фюзеляжа..."}
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-1 mt-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-violet-500 h-full w-[100vw] animate-none"></div>
                  </div>
                </div>

                {/* Quality Metrics within simulation */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-2.5 rounded bg-slate-950/40 border border-white/5 text-center">
                    <div className="text-xs font-mono text-slate-400">Аудит качества</div>
                    <div className="text-sm font-bold text-cyan-400">Разбор структуры</div>
                  </div>
                  <div className="p-2.5 rounded bg-slate-950/40 border border-white/5 text-center">
                    <div className="text-xs font-mono text-slate-400">Сохранение XML тегов</div>
                    <div className="text-sm font-bold text-violet-400">Соблюдение структуры</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Stats Row */}
        <div id="stats" className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-24 border-t border-white/5 mt-12">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col space-y-1.5 p-5 rounded-2xl glass-panel text-left decoration-transparent border border-white/5 shadow-inner hover:border-cyan-400/25 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <span className="font-display font-extrabold text-white tracking-tight pointer-events-none bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent text-xl sm:text-2xl">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase font-mono">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 font-light leading-relaxed">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
