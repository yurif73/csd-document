import React from 'react';
import { Shield, Sparkles, Layout, Layers, Cpu } from 'lucide-react';
import { BenefitCard } from '../types';

export default function Benefits() {
  const cards: (BenefitCard & { icon: React.ComponentType<any> })[] = [
    {
      id: 'precision',
      title: 'Терминологическая строгость',
      description: 'Используем САТ-системы, формируем индивидуальные отраслевые глоссарии и базы translation memories для каждого клиента. Обеспечиваем максимальное единообразие терминов.',
      icon: Shield,
      techBadge: 'CAT_TM_COMPLIANCE',
      accentColor: 'cyan'
    },
    {
      id: 'layout',
      title: 'Сохранение сложной верстки',
      description: 'Ваш макет вернется к вам в исходном виде. Переводим чертежи, схемы, графики напрямую в AutoCAD, Adobe InDesign, FrameMaker, LaTeX или DITA, сохраняя исходные стили и привязки.',
      icon: Layout,
      techBadge: 'WYSIWYG NATIVE RESTORE',
      accentColor: 'violet'
    },
    {
      id: 'scale',
      title: 'Экстремальные объемы и скорость',
      description: 'Благодаря распределенному пайплайну переводим до 1500 страниц в сутки без потери качества. Способны запустить масштабные проекты на тысячи листов с жестким дедлайном.',
      icon: Layers,
      techBadge: 'DISTRIBUTED CAT CLUSTERS',
      accentColor: 'emerald'
    },
    {
      id: 'hybrid',
      title: 'Гибридный интеллект (AI + Эксперт)',
      description: 'Объединяем предобученные профильные нейросети последнего поколения со скрупулезной ручной вычиткой редакторов — инженеров, физиков, химиков и квалифицированных юристов.',
      icon: Cpu,
      techBadge: 'NEURAL CAT PIPELINE',
      accentColor: 'cyan'
    }
  ];

  return (
    <section id="benefits" className="relative py-24 bg-slate-950/40 border-y border-white/5 scroll-mt-24">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-glow-cyan pointer-events-none opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-950/40 border border-violet-500/20 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-mono text-violet-300 tracking-wider">
              КЛЮЧЕВЫЕ ЦЕННОСТИ И СТАНДАРТЫ КАЧЕСТВА
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Премиальные B2B-переводы без компромиссов
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Специализируемся исключительно на техническом переводе и профессиональной вёрстке сложных документов. Мы воссоздаем сложнейшую техническую и юридическую экосистему вашей документации на целевом языке.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            
            return (
              <div 
                key={card.id}
                className="relative flex flex-col justify-between p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-cyan-400/30 shadow-2xl transition-all duration-300 group hover:translate-y-[-4px] overflow-hidden"
              >
                {/* Visual subtle glow on card hover */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-cyan-400/10 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
                
                <div className="space-y-6">
                  {/* Top: Icon + tech badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-400/30 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {card.techBadge && (
                      <span className="text-[9px] font-mono tracking-widest text-slate-500 bg-slate-950/60 px-2.5 py-1 rounded border border-white/5 uppercase">
                        {card.techBadge}
                      </span>
                    )}
                  </div>

                  {/* Body: Title + Desc */}
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom line accent */}
                <div className="w-full h-[2px] bg-slate-800 mt-6 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
