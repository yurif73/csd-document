import React from 'react';
import { Cpu, Binary, CheckSquare, Layers, HelpCircle, Network } from 'lucide-react';

export default function ProcessAndTech() {
  const pipelineSteps = [
    {
      num: '01',
      title: 'Интеллектуальный парсинг макета',
      desc: 'Автоматически извлекаем исходный текст и разметку (AutoCAD, InDesign, DITA XML) с помощью специализированных парсеров. Оригинальные геометрические координаты, слои и формулы блокируются от изменений.',
      tech: 'XLIFF / XML Extraction Engine'
    },
    {
      num: '02',
      title: 'Выравнивание по базам TM и глоссариям',
      desc: 'Сопоставляем сегменты с базами накопленного перевода (Translation Memories) и вашими глоссариями. Повторяющиеся сегменты и устоявшиеся термины переводятся автоматически, сохраняя до 40% бюджета.',
      tech: 'CAT Translation Memory Match'
    },
    {
      num: '03',
      title: 'Отраслевой перевод и редактура',
      desc: 'В систему вовлекаются переводчики и редакторы с профильным техническим образованием. Перевод терминов сверяется со справочниками ГОСТ, DIN, ASME, ISO и внутренними корпоративными стандартами заказчика.',
      tech: 'Subject Matter Expert Peer Review'
    },
    {
      num: '04',
      title: 'Проверка качества и верстка макета',
      desc: 'Текст вшивается обратно в оригинальное графическое полотно. Наши верстальщики корректируют разрывы строк, шрифты, сужения и отступы, чтобы перевод идеально лег в границы исходного дизайна документа.',
      tech: 'Laser-Precision DTP (Desktop Publishing)'
    },
    {
      num: '05',
      title: 'QA-Валидация и экспорт исходников',
      desc: 'Проводится независимый аудит качества и проверка терминологии. Готовый проект компилируется в исходный рабочий формат с сохранением структуры слоев, готовый к отправке вашему заказчику или в типографию на печать.',
      tech: 'Native Binary Export & MD5 Checksum'
    }
  ];

  return (
    <section id="tech" className="relative py-24 bg-slate-950/60 border-y border-white/5 scroll-mt-24">
      {/* Background cyber grid and glow */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 ambient-glow-violet pointer-events-none opacity-30 filter blur-[100px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-400/20 rounded-full">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-300 tracking-wider">
              ВЫСОКОКЛАССНЫЙ ПРОЦЕССНО-ТЕХНОЛОГИЧЕСКИЙ ПАЙПЛАЙН
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Автоматизированный цикл верификации качества
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Мы внедрили передовые стандарты непрерывного контроля документации (Continuous Translation Delivery). Исключаем любые ошибки из-за человеческого фактора.
          </p>
        </div>

        {/* Dynamic Horizontal/Vertical Step Connect Pipeline */}
        <div className="relative space-y-12">
          
          {/* Vertical connecting line for desktop steps */}
          <div className="hidden lg:block absolute left-[45px] top-[40px] bottom-[40px] w-0.5 bg-gradient-to-b from-cyan-400/50 via-violet-500/30 to-violet-500/0"></div>

          {pipelineSteps.map((step, index) => {
            const isLatest = index === pipelineSteps.length - 1;
            return (
              <div 
                key={step.num}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group text-left"
              >
                {/* Visual Circle Counter Node */}
                <div className="lg:col-span-1 flex items-center lg:justify-start gap-4 lg:gap-0 select-none">
                  <div className="relative z-10 w-22 h-22 rounded-2xl bg-slate-900 border-2 border-white/10 group-hover:border-cyan-400 flex items-center justify-center transition-all duration-300 shadow-xl group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                    <span className="font-display font-extrabold text-white text-xl tracking-tight">
                      {step.num}
                    </span>
                    {/* Tiny neon blinking dot */}
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  </div>
                  
                  {/* Small line for mobile steps */}
                  <div className="h-0.5 bg-white/5 flex-1 lg:hidden"></div>
                </div>

                {/* Step Text Content */}
                <div className="lg:col-span-8 space-y-3">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-bold bg-cyan-950/30 px-2 py-1 rounded border border-cyan-400/10 uppercase">
                    {step.tech}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Automation Metric Panel (Right Side-info) */}
                <div className="lg:col-span-3 lg:text-right mt-4 lg:mt-0 pt-4 lg:pt-2 border-t lg:border-t-0 border-white/5 space-y-2">
                  <div className="text-[10px] font-mono tracking-wider text-slate-500">АВТОМАТИЗАЦИЯ KPI</div>
                  <div className="text-xl font-bold font-display text-white">
                    {index === 0 ? 'Оперативный старт' : 
                     index === 1 ? 'Оптимизация бюджета' : 
                     index === 2 ? 'Инженерная вычитка' : 
                     index === 3 ? 'Точная вёрстка' : 'Контроль качества'}
                  </div>
                  <div className="text-xs font-mono text-cyan-400">
                    {index === 0 ? '✓ Авто-сегментация' : 
                     index === 1 ? '✓ Слияние памяти (TM)' : 
                     index === 2 ? '✓ Профессиональный перевод' : 
                     index === 3 ? '✓ native CAD/DTP' : '✓ Финальная верификация'}
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
