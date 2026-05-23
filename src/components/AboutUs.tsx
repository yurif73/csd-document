import React from 'react';
import { Award, Briefcase, Users, FileText, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const achievements = [
    {
      icon: Briefcase,
      count: 'ООО «ЦСД»',
      title: 'Технический фокус',
      desc: 'Специализируемся исключительно на техническом переводе и профессиональной вёрстке сложных документов.'
    },
    {
      icon: Users,
      count: '120+',
      title: 'Внештатных переводчиков',
      desc: 'Действующие инженеры, кандидаты наук, практикующие технические эксперты'
    },
    {
      icon: FileText,
      count: '25 000+',
      title: 'Выполненных чертежей AutoCAD',
      desc: 'Стремимся к сохранению оригинальной структуры слоев графических макетов'
    },
    {
      icon: Award,
      count: 'Максимальная',
      title: 'Точность верстки',
      desc: 'Стремимся к высочайшей точности верстки и соблюдению оригинальной структуры сложных таблиц и формул'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-900/10 scroll-mt-24">
      {/* Background decoration elements */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-10 w-80 h-80 ambient-glow-cyan pointer-events-none opacity-10 filter blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* About Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-400/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="text-xs font-mono text-cyan-300 tracking-wider">
                ООО "ЦСД" — ЦЕНТР СЕРТИФИКАЦИИ И ДЕКЛАРИРОВАНИЯ
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Индустриальная точность и научная безупречность
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"></div>
            </div>

            <div className="space-y-5 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Бюро переводов ООО "ЦСД" — "Центр сертификации и декларирования" — безупречный партнёр для промышленных предприятий, инжиниринговых корпораций, фармацевтических синдикатов и ИТ-компаний. Мы выстроили выделенные производственные мощности, способные переводить тысячи страниц тексто-графической документации высочайшего уровня сложности.
              </p>
              <p>
                В отличие от классических переводческих агентств, которые работают только с простыми текстовыми файлами в Word, мы берём на себя полную технологическую работу: переводим напрямую в чертежах AutoCAD/MicroStation, верстаем сложные оригинальные макеты, восстанавливаем сложные формулы в LaTeX и собираем валидные DITA-структуры. Стремимся к высочайшей точности верстки и соблюдению оригинальной структуры исходных файлов для сборки на производстве или публикации.
              </p>
              <p className="border-l-2 border-cyan-400 pl-4 italic text-slate-400 text-xs sm:text-sm">
                "Наша миссия — стереть языковой барьер для сложнейших технических достижений человечества. Мы понимаем цену каждого штампа на чертеже, каждого знака в медицинской формуле и каждого символа в коде."
              </p>
            </div>

            {/* Quality Standard Badges list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-white/5 col-span-1 sm:col-span-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-mono">Специализируемся исключительно на техническом переводе и профессиональной вёрстке сложных документов.</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-mono">Высочайшая точность верстки макетов</span>
              </div>
            </div>

          </div>

          {/* About Stats Cards grid display */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 shadow-xl hover:border-cyan-400/20 transition-all duration-300 group hover:-translate-y-1 text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`font-display font-extrabold text-white mb-1.5 ${
                      item.count.length > 8 ? 'text-lg sm:text-xl' : 'text-2xl sm:text-3xl'
                    }`}>
                      {item.count}
                    </div>
                    <h4 className="text-xs font-semibold text-slate-300 mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-light leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
