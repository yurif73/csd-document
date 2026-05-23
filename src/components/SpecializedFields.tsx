import React, { useState } from 'react';
import { Settings, Microscope, HeartPulse, Flame, Database, Scale, Coins, Palette, ArrowRight, Layers, FileCheck } from 'lucide-react';
import { TranslationDirection } from '../types';

export default function SpecializedFields() {
  const [activeTab, setActiveTab] = useState<string>('engineering');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const directions: (TranslationDirection & { icon: React.ComponentType<any> })[] = [
    {
      id: 'engineering',
      title: 'Инженерная документация & AutoCAD',
      description: 'Высокоточное научно-техническое сопровождение крупных промышленных и машиностроительных объектов.',
      iconName: 'Settings',
      icon: Settings,
      examples: [
        'Чертежи AutoCAD, SolidWorks, Kompas (.dwg, .dxf)',
        'Руководства по эксплуатации тяжелых станков',
        'Спецификации авиакосмического оборудования',
        'Проектно-изыскательные папки (BIM, CAD)'
      ],
      features: [
        'Полная вёрстка текстовых выносок на чертежах без смещения стрелок и разрезов',
        'Согласование глоссариев по ГОСТ и отраслевым стандартам',
        'Работа с закрытыми САПР-форматами'
      ]
    },
    {
      id: 'it',
      title: 'IT-сфера & Локализация ПО',
      description: 'Адаптация сложной архитектурной программной документации, баз данных и программного кода.',
      iconName: 'Database',
      icon: Database,
      examples: [
        'Технические задания и спецификации API',
        'Файлы локализации (.json, .xml, .yaml, .strings)',
        'Базы данных и схемы структуры СУБД',
        'Инструкции к комплексным ERP/CRM системам'
      ],
      features: [
        'Сохранение структуры программного синтаксиса и тегов разметки ПО',
        'Проверка длины строк в интерфейсах (строгие ограничения верстки)',
        'Тестирование локализованной сборки'
      ]
    },
    {
      id: 'science',
      title: 'Научные труды & LaTeX',
      description: 'Перевод мирового уровня для академического признания в рецензируемых журналах Scopus/WoS.',
      iconName: 'Microscope',
      icon: Microscope,
      examples: [
        'Научные статьи и монографии в редакторе LaTeX',
        'Диссертации по теоретической и прикладной физике',
        'Патенты на изобретения (согласно ВОИС/WIPO)',
        'Грантовые заявки и технические обзоры'
      ],
      features: [
        'Компиляция исходных .tex документов на целевом языке',
        'Математические формулы, графики сохраняются без изменений кода',
        'Редакторы — носители языка с PhD научными степенями'
      ]
    },
    {
      id: 'pharma',
      title: 'Фармацевтика & Медтехника',
      description: 'Перевод медицинской документации под жесткие регламенты Минздрава и ВОЗ.',
      iconName: 'HeartPulse',
      icon: HeartPulse,
      examples: [
        'Регистрационные досье лекарственных средств (CTD)',
        'Протоколы клинических и доклинических исследований',
        'Инструкции к томографам и роботизированным хирургическим системам',
        'Сертификаты качества ISO 13485 (медтехника)'
      ],
      features: [
        'Многоуровневый медицинский и нотариальный контроль',
        'Привлечение действующих клиницистов и провизоров для сверки терминов',
        'Абсолютная точность дозировок и химических цепочек'
      ]
    },
    {
      id: 'energy',
      title: 'Нефть, газ & Энергетика',
      description: 'Комплексный перевод тяжелой геологоразведочной, добывающей и экологической документации.',
      iconName: 'Flame',
      icon: Flame,
      examples: [
        'Отчеты по сейсморазведке и бурению скважин',
        'Проекты строительства АЭС, ТЭЦ и ГЭС',
        'Проектная документация возобновляемой энергетики',
        'Экологические регламенты и оценки воздействия (ОВД)'
      ],
      features: [
        'Терминологический банк по добыче нефти в экстремальных условиях шельфа',
        'Срочные объемные тендерные пакеты (до 10 000 страниц в месяц)',
        'Сохранение геологических карт с растровыми слоями'
      ]
    },
    {
      id: 'legal',
      title: 'Юриспруденция & Договоры',
      description: 'Многостраничные трансграничные контракты, законы и патентные споры без смысловых разночтений.',
      iconName: 'Scale',
      icon: Scale,
      examples: [
        'Соглашения о неразглашении (NDA), учредительные документы',
        'Документы для международных судов и арбитражей',
        'Тендерная документация международных поставок',
        'Заключения Due Diligence и комплаенс-отчетность'
      ],
      features: [
        'Двойная вычитка профессиональными корпоративными юристами',
        'Абсолютная юридическая точность формулировок и терминологии',
        'Возможность нотариального заверения и апостилирования'
      ]
    },
    {
      id: 'finance',
      title: 'Финансы & Аудит',
      description: 'Трансляция сложных математических матриц, ежегодной финансовой отчетности, отчетов Big 4.',
      iconName: 'Coins',
      icon: Coins,
      examples: [
        'МСФО и РСБУ финансовая отчетность холдингов',
        'Отчеты независимых аудиторов (Deloitte, EY, PwC, KPMG)',
        'Презентации для инвесторов и эмиссионные проспекты',
        'Сложные аналитические таблицы Excel с макросами'
      ],
      features: [
        'Полная синхронизация формул и пересчет данных (при необходимости)',
        'Контроль закруглений чисел и условного форматирования ячеек',
        'Понимание международной финансовой специфики и терминов'
      ]
    },
    {
      id: 'design',
      title: 'Верстка Adobe InDesign & Каталоги',
      description: 'Адаптация многослойных многостраничных изданий с точностью пиксель-в-пиксель.',
      iconName: 'Palette',
      icon: Palette,
      examples: [
        'Промышленные товарные каталоги продукции',
        'Рекламно-информационные брошюры',
        'Интерактивные PDF-файлы корпоративного стиля',
        'Книги, журналы, руководства брендов (.indd, .idml)'
      ],
      features: [
        'Перевод напрямую в исходном файле InDesign без разрушения структуры слоев',
        'Тестирование шрифтов и стилей заголовков на переносы и разрывы',
        'Полный экспорт в печатные форматы высокой плотности (Press Quality)'
      ]
    }
  ];

  const renderSliderContent = (id: string, isSource: boolean) => {
    switch (id) {
      case 'engineering':
        return (
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center text-[10px] font-mono mb-2 md:mb-4">
              <span className={isSource ? "text-cyan-400" : "text-violet-400"}>
                {isSource ? "WELDED JOINT LEAKAGE DIAGRAM" : "СХЕМА АППАРАТА И КЛЕЙМА СВАРНЫХ ШВОВ"}
              </span>
              <span className={isSource ? "text-cyan-500" : "text-violet-500"}>
                {isSource ? "EN ORIGINAL SOURCE" : "RU TARGET EXPORT"}
              </span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-3">
              <div className="flex items-center gap-3">
                <div className={`px-2 py-0.5 rounded text-[10px] font-mono ${isSource ? "bg-cyan-950/60 border border-cyan-500/20 text-cyan-300" : "bg-violet-950/60 border border-violet-500/20 text-violet-300"}`}>
                  {isSource ? "DET_42.ASSY" : "ДЕТ_42.СБ"}
                </div>
                <span className="text-sm font-semibold tracking-tight text-white leading-tight">
                  {isSource ? "LIQUID COOLING LOOP SPECIFICATION" : "СПЕЦИФИКАЦИЯ ЖИДКОСТНОГО ОХЛАЖДАЮЩЕГО КОНТУРА"}
                </span>
              </div>
              
              <div className="border border-white/5 p-3 rounded bg-slate-900/40 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 font-mono gap-2">
                <span>{isSource ? "1. NITROGEN INPUT: [3.4 MPa]" : "1. ПОДАЧА АЗОТА: [3.4 МПа]"}</span>
                <span>{isSource ? "2. BELLOWS OUTLET: ASME SB" : "2. ВЫПУСКНОЙ СИЛЬФОН: ГОСТ"}</span>
              </div>
              
              <div className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-white/10 pl-3">
                {isSource 
                  ? "Note: Titanium structural frame shell thickness must correspond directly to airworthiness requirements OKO-49."
                  : "Примечание: Толщина титановых листов каркаса корпуса должна соблюдать нормативы прочности ОКО-49."}
              </div>
            </div>

            <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-2">
              <span>{isSource ? "PAGE: 4 OF 120" : "ЛИСТ: 4 ИЗ 120"}</span>
              <span className={isSource ? "text-cyan-400" : "text-emerald-400"}>
                {isSource ? "FORMAT: AUTOCAD / INDESIGN" : "ВЕРСТКА: СОВПАДЕНИЕ 100%"}
              </span>
            </div>
          </div>
        );
      case 'it':
        return (
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center text-[10px] font-mono mb-2 md:mb-4">
              <span className={isSource ? "text-cyan-400" : "text-violet-400"}>
                {isSource ? "JSON SPECIFICATION FILE" : "ФРАГМЕНТ API И ФАЙЛА ЛОКАЛИЗАЦИИ"}
              </span>
              <span className={isSource ? "text-cyan-500" : "text-violet-500"}>
                {isSource ? "EN SOURCE SYNTAX" : "RU LOCALIZED VALUE"}
              </span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center font-mono text-xs text-slate-300 bg-slate-900/50 p-3 rounded-lg border border-white/5 space-y-1">
              <div>{"{"}</div>
              <div className="pl-4 text-slate-550">"dashboard": {"{"}</div>
              <div className="pl-8">
                <span className="text-cyan-400">"header_title":</span>{" "}
                <span className="text-emerald-400">{isSource ? '"System Telemetry and Pipeline Status"' : '"Системная телеметрия и статус пайплайна"'}</span>,
              </div>
              <div className="pl-8">
                <span className="text-cyan-400">"payload_limit":</span>{" "}
                <span className="text-emerald-400">{isSource ? '"Max 250MB per document"' : '"Макс 250МБ на документ"'}</span>,
              </div>
              <div className="pl-8">
                <span className="text-cyan-400">"state":</span>{" "}
                <span className="text-amber-400">{isSource ? '"ACTIVE"' : '"АКТИВНО"'}</span>
              </div>
              <div className="pl-4 text-slate-550">{"}"}</div>
              <div>{"}"}</div>
            </div>

            <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-2">
              <span>{isSource ? "STRUCTURE: PRESERVED" : "СТРУКТУРА: СОХРАНЕНА НА 100%"}</span>
              <span className={isSource ? "text-cyan-400" : "text-emerald-400"}>
                {isSource ? "FORMAT: JSON / XML / YAML" : "ВАЛИДАЦИЯ: КОД ПРОШЕЛ ТЕСТИРОВАНИЕ"}
              </span>
            </div>
          </div>
        );
      case 'science':
        return (
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center text-[10px] font-mono mb-2 md:mb-4">
              <span className={isSource ? "text-cyan-400" : "text-violet-400"}>
                {isSource ? "RESEARCH COMPLIANCE LaTeX" : "НАУЧНЫЙ ТРАКТАТ В LaTeX"}
              </span>
              <span className={isSource ? "text-cyan-500" : "text-violet-500"}>
                {isSource ? "EN SOURCE CODE" : "RU COMPILED TEXT"}
              </span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-3">
              <div className="font-mono text-[11px] bg-slate-900/60 p-3 rounded border border-white/5 text-cyan-300">
                {"\\begin{equation}"}<br />
                {"\\psi(x, t) = \\frac{1}{\\sqrt{2\\pi\\hbar}} \\int\\phi(p) e^{i(px-Et)/\\hbar} dp"}<br />
                {"\\end{equation}"}
              </div>
              
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {isSource 
                  ? "Where $\\psi$ is the exact quantum state vector of the accelerated sub-particle within the multi-dimensional Higgs field spectrum."
                  : "Где $\\psi$ — точный вектор квантового состояния ускоренной субчастицы в многомерном спектре поля Хиггса."}
              </p>
            </div>

            <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-2">
              <span>{isSource ? "MATH INDEX: UNCHANGED" : "ФОРМУЛЫ: НЕИЗМЕННЫ (CO-COMPILE)"}</span>
              <span className={isSource ? "text-cyan-400" : "text-emerald-400"}>
                {isSource ? "FORMAT: LaTeX / .TEX" : "СТАТУС: Scopus / WoS READY"}
              </span>
            </div>
          </div>
        );
      case 'pharma':
        return (
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center text-[10px] font-mono mb-2 md:mb-3">
              <span className={isSource ? "text-cyan-400" : "text-violet-400"}>
                {isSource ? "CLINICAL RESEARCH SUMMARY (CTD)" : "МЕДИЦИНСКОЕ ДОСЬЕ И ТАБЛИЦА ФАРМАКОКИНЕТИКИ"}
              </span>
              <span className={isSource ? "text-cyan-500" : "text-violet-500"}>
                {isSource ? "EN ORIGINAL STUDY" : "RU REGULATION COMPLIANT"}
              </span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-2">
              <span className="text-xs font-semibold text-white">
                {isSource ? "Table 4.2. Mean pharmacokinetic parameters after single oral dose:" : "Таблица 4.2. Средние фармакокинетические параметры после однократного приема:"}
              </span>
              
              <div className="overflow-x-auto">
                <table className="w-full text-[10px] font-mono border-collapse border border-white/5 text-slate-300">
                  <thead>
                    <tr className="bg-slate-900 border-b border-white/10 text-slate-400">
                      <th className="p-1 border border-white/5 text-left">{isSource ? "Analyte" : "Аналит"}</th>
                      <th className="p-1 border border-white/5 text-center">{isSource ? "Cmax" : "Cmax"}</th>
                      <th className="p-1 border border-white/5 text-center">{isSource ? "AUC" : "AUC"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1 border border-white/5 font-semibold text-cyan-400">Compound A</td>
                      <td className="p-1 border border-white/5 text-center">254.2 ± 12.8</td>
                      <td className="p-1 border border-white/5 text-center">1240 ± 115</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-2">
              <span>{isSource ? "METRIC CONVERSION: VERIFIED" : "ДОЗИРОВКИ И ХИМИЯ ТЩАТЕЛЬНО ВЕРИФИЦИРОВАНЫ"}</span>
              <span className={isSource ? "text-cyan-400" : "text-emerald-400"}>
                {isSource ? "REGULATORY: CTD MODULE 3" : "ЭКСПЕРТ: КЛИНИЧЕСКИЙ ФАРМАКОЛОГ"}
              </span>
            </div>
          </div>
        );
      case 'energy':
        return (
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center text-[10px] font-mono mb-2 md:mb-4">
              <span className={isSource ? "text-cyan-400" : "text-violet-400"}>
                {isSource ? "GEOLOGICAL SEISMIC DRILLING LOG" : "КАРТА СЕЙСМОРАЗВЕДКИ И БУРЕНИЯ СКВАЖИН"}
              </span>
              <span className={isSource ? "text-cyan-500" : "text-violet-500"}>
                {isSource ? "EN SURVEY MAP" : "RU GRAPHIC RESTORE"}
              </span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-3">
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${isSource ? "bg-cyan-400" : "bg-violet-400"}`}></div>
                <span className="text-sm font-semibold tracking-tight text-white leading-tight">
                  {isSource ? "Exploratory Well #42-B Core Samples Analysis" : "Анализ керна поисково-разведочной скважины №42-Б"}
                </span>
              </div>
              
              <ul className="space-y-1 text-xs text-slate-300 font-mono">
                <li>• {isSource ? "Horizon A-3 Siltstone layer thickness: 14.5m" : "Толщина алевролитового горизонта А-3: 14.5 м"}</li>
                <li>• {isSource ? "Water-gas contact (WGC) level: -2450m" : "Уровень водогазового контакта (ВГК): -2450 м"}</li>
                <li>• {isSource ? "Gas-oil contact (GOC) level: -2410m" : "Уровень газонефтяного контакта (ГНК): -2410 м"}</li>
              </ul>
            </div>

            <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-2">
              <span>{isSource ? "LAYER TAGS: RESTORED" : "СЛОИ КАРТЫ С КООРДИНАТАМИ СОХРАНЕНЫ"}</span>
              <span className={isSource ? "text-cyan-400" : "text-emerald-400"}>
                {isSource ? "FORMAT: MICROSTATION / AUTOCAD" : "ЭКСПЕРТ: ИНЖЕНЕР-ГЕОЛОГ"}
              </span>
            </div>
          </div>
        );
      case 'legal':
        return (
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center text-[10px] font-mono mb-2 md:mb-4">
              <span className={isSource ? "text-cyan-400" : "text-violet-400"}>
                {isSource ? "BILINGUAL LICENSING AGREEMENT" : "ДВУЯЗЫЧНЫЙ ЛИЦЕНЗИОННЫЙ ДОГОВОР"}
              </span>
              <span className={isSource ? "text-cyan-500" : "text-violet-500"}>
                {isSource ? "EN COMPLIANT LAW" : "RU ЮРИДИЧЕСКАЯ СИЛА"}
              </span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-3">
              <div className="grid grid-cols-1 gap-2.5">
                <div className="text-xs p-2 rounded bg-slate-900/60 border border-white/5 text-slate-300 leading-relaxed">
                  <span className="font-bold text-cyan-400">EN:</span>{" "}
                  {isSource 
                    ? "The Licensee shall indemnify and hold harmless the Licensor against any claims, liabilities, or losses arising from breach..."
                    : "The Licensee shall indemnify and hold harmless the Licensor against any claims, liabilities, or losses arising from breach..."}
                </div>
                <div className="text-xs p-2 rounded bg-violet-950/20 border border-violet-500/10 text-slate-300 leading-relaxed font-light">
                  <span className="font-bold text-violet-400">RU:</span>{" "}
                  {isSource 
                    ? "...... (Потяните слайдер вправо для отображения перевода)"
                    : "Лицензиат обязуется обезопасить и освободить Лицензиара от ответственности по любым претензиям, обязательствам или убыткам..."}
                </div>
              </div>
            </div>

            <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-2">
              <span>{isSource ? "LEGAL COMPLIANCE: 100%" : "АРБИТРАЖ LCIA С БЕЗУПРЕЧНОЙ ТОЧНОСТЬЮ"}</span>
              <span className={isSource ? "text-cyan-400" : "text-emerald-400"}>
                {isSource ? "TERMS: STANDARDIZED GLOSSARY" : "ЭКСПЕРТ: МЕЖДУНАРОДНЫЙ ЮРИСТ"}
              </span>
            </div>
          </div>
        );
      case 'finance':
        return (
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center text-[10px] font-mono mb-2 md:mb-3">
              <span className={isSource ? "text-cyan-400" : "text-violet-400"}>
                {isSource ? "CONSOLIDATED FINANCIAL INCOME STATEMENT" : "КОНСОЛИДИРОВАННЫЙ ОТЧЕТ ХОЛДИНГА (IFRS / МСФО)"}
              </span>
              <span className={isSource ? "text-cyan-500" : "text-violet-500"}>
                {isSource ? "EN ORIGINAL (AUDITED)" : "RU LOCALIZED REPORT"}
              </span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-2">
              <span className="text-xs font-semibold text-white">
                {isSource ? "Condensed Statement of Comprehensive Income (RUB thousands):" : "Консолидированный отчет о совокупном доходе (в тыс. руб. / ₽):"}
              </span>
              
              <div className="overflow-x-auto text-[11px] font-mono">
                <table className="w-full border border-white/5">
                  <thead>
                    <tr className="bg-slate-900 border-b border-white/10 text-slate-400">
                      <th className="p-1 text-left font-normal">{isSource ? "Financial Item" : "Статья отчетности"}</th>
                      <th className="p-1 text-right font-normal">31.12.2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1 font-semibold text-slate-300">{isSource ? "Revenue" : "Выручка"}</td>
                      <td className="p-1 text-right text-emerald-400">1 425 800 ₽</td>
                    </tr>
                    <tr>
                      <td className="p-1 text-slate-400">{isSource ? "Cost of sales" : "Себестоимость продаж"}</td>
                      <td className="p-1 text-right text-red-400">(920 400 ₽)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-2">
              <span>{isSource ? "ROUNDINGS: STRICT CHECK" : "ОКРУГЛЕНИЕ ЧИСЕЛ, ЗНАКИ И ФОРМУЛЫ В БАЛАНСЕ"}</span>
              <span className={isSource ? "text-cyan-400" : "text-emerald-400"}>
                {isSource ? "STANDARD: IFRS / МСФО" : "ЭКСПЕРТ: АТТЕСТОВАННЫЙ АУДИТОР"}
              </span>
            </div>
          </div>
        );
      case 'design':
        return (
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center text-[10px] font-mono mb-2 md:mb-4">
              <span className={isSource ? "text-cyan-400" : "text-violet-400"}>
                {isSource ? "ADOBE INDESIGN MULTILAYER BROCHURE" : "СТРАНИЦА КАТАЛОГА С ФОТО И РАЗМЕТКОЙ (InDesign)"}
              </span>
              <span className={isSource ? "text-cyan-500" : "text-violet-500"}>
                {isSource ? "EN CAT WORKSPACE" : "RU EXPORT LAYOUT"}
              </span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-3">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100/10 border border-white/10 rounded flex items-center justify-center text-[10px] font-bold text-rose-500">
                  INDD
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {isSource ? "HEAVY EXTRUDER H-450" : "ЭКСТРУДЕР СЕРИИ H-450"}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
                    {isSource ? "DTP layer locked to grid" : "Позиционный DTP-слой привязан к сетке"}
                  </p>
                </div>
              </div>
              
              <p className="text-xs text-slate-300 leading-normal font-light">
                {isSource 
                  ? "Engineered for high-viscosity synthetic polymers extrusion under extreme thermal pressure (320°C). Dimensions: 2400 x 1200 mm."
                  : "Разработан для экструзии высоковязких синтетических полимеров под экстремальным тепловым давлением (320°C). Габариты: 2400 x 1200 мм."}
              </p>
            </div>

            <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-2">
              <span>{isSource ? "FONTS & SPACING: MATCHED" : "ШРИФТЫ, ОБТЕКАНИЕ И СЕТКА СОХРАНЕНЫ НА 100%"}</span>
              <span className={isSource ? "text-cyan-400" : "text-emerald-400"}>
                {isSource ? "GRID: WYSIWYG STANDARD" : "ЭКСПЕРТ: ВЕРСТАЛЬЩИК ПЕЧАТИ"}
              </span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const currentTab = directions.find(d => d.id === activeTab) || directions[0];

  return (
    <section id="directions" className="relative py-24 bg-slate-900/20 scroll-mt-24 cyber-grid">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 ambient-glow-cyan pointer-events-none opacity-20 filter blur-[120px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-400/20 rounded-full">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono text-cyan-300 tracking-wider">
                ОТРАСЛЕВЫЕ СПЕЦИАЛИЗАЦИИ И ФОРМАТЫ ДОКУМЕНТОВ
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              8 направлений специализированного перевода
            </h2>
            <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
              Мы сформировали выделенные экспертные группы под каждое направление — верстальщики, переводчики и профильные редакторы работают в единой связке.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <div className="text-xs font-mono text-slate-500 mb-1 font-semibold">НАРЯДУ С КЛАССИЧЕСКИМИ ФОРМАТАМИ:</div>
            <div className="text-sm font-bold text-cyan-400">XML, IDML, TEX, DWG, BIM, Framemaker</div>
          </div>
        </div>

        {/* Tab Selection Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {directions.map((dir) => {
            const Icon = dir.icon;
            const isSelected = activeTab === dir.id;
            return (
              <button
                key={dir.id}
                onClick={() => setActiveTab(dir.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-300 pointer group focus:outline-none ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400/80 shadow-[0_0_15px_rgba(0,240,255,0.15)] text-cyan-400'
                    : 'bg-slate-950/40 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                }`}
              >
                <div className={`p-2 rounded-lg mb-2 transition-colors duration-300 ${
                  isSelected ? 'bg-cyan-950/60' : 'bg-slate-900/60 group-hover:bg-slate-800'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-display font-semibold leading-tight tracking-tight leading-snug">
                  {dir.title.split(' & ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Active Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Active Tab Details */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl glass-panel border border-white/5 space-y-8 text-left">
            
            <div className="space-y-5">
              <div className="inline-flex px-2.5 py-1 bg-cyan-950/40 border border-cyan-400/10 rounded text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                СФЕРА ЭКСПЕРТИЗЫ
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {currentTab.title}
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                {currentTab.description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono tracking-widest text-slate-400 font-semibold uppercase">
                ЧАСТО ПЕРЕВОДИМЫЕ ДОКУМЕНТЫ:
              </h4>
              <ul className="space-y-2.5">
                {currentTab.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <FileCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <h4 className="text-xs font-mono tracking-widest text-slate-400 font-semibold uppercase">
                ТЕХНОЛОГИЧЕСКИЕ СТАНДАРТЫ:
              </h4>
              <ul className="space-y-2">
                {currentTab.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-400 hover:text-slate-300 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 mt-1.5"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Active Tab Premium Live Interactive Slide Component */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 relative overflow-hidden text-left">
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-mono tracking-wider text-slate-400">
                  ИНТЕРАКТИВНОЕ СРАВНЕНИЕ ВЕРСТКИ (BEFORE / AFTER)
                </span>
                <span className="text-[10px] font-mono text-cyan-400 animate-pulse bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-400/10">
                  ШТАМП ПИКСЕЛЬ-В-ПИКСЕЛЬ COMPLIANCE
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-normal font-light">
                Потяните слайдер, чтобы увидеть, как переводчики сохраняют технические чертежи, графическое позиционирование и оригинальную блочную сетку AutoCAD/InDesign.
              </p>
            </div>

            {/* Before / After Slider Box */}
            <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden mt-6 bg-slate-950 border border-white/10 select-none">
              
              {/* After: Russian Translated Overlay (Always visible on bottom) */}
              <div className="absolute inset-0 w-full h-full p-6 flex flex-col justify-between bg-slate-950">
                <div className="border border-dashed border-violet-500/30 rounded-lg p-5 h-full">
                  {renderSliderContent(activeTab, false)}
                </div>
              </div>

              {/* Before: English Source Overlay (Clipped based on slider position) */}
              <div 
                className="absolute inset-0 h-full p-6 flex flex-col justify-between bg-slate-900 border-r border-cyan-400"
                style={{ width: `${sliderPosition}%`, overflow: 'hidden', minWidth: '0px' }}
              >
                {/* Fixed internal width wrapper to prevent text squeezing */}
                <div className="absolute top-6 left-6 bottom-6 flex flex-col justify-between" style={{ width: 'calc(100% - 48px)', minWidth: '320px' }}>
                  <div className="border border-dashed border-cyan-500/30 rounded-lg p-5 h-full">
                    {renderSliderContent(activeTab, true)}
                  </div>
                </div>
              </div>

              {/* Slider Line handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-cyan-400 cursor-ew-resize flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-display font-bold text-xs shadow-lg shadow-cyan-400/50">
                  ↔
                </div>
              </div>

              {/* Real Input slider overlay range to capture drag events perfectly */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPosition} 
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
                aria-label="Before after translator slider"
              />

            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Слева: Исходный документ
              </span>
              <span className="flex items-center gap-1.5 text-violet-400">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                Справа: Проверенная локализация
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
