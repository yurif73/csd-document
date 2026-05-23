import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Преимущества', href: '#benefits' },
    { label: 'Направления работы', href: '#directions' },
    { label: 'Наши технологии', href: '#tech' },
    { label: 'О компании', href: '#about' },
    { label: 'Контакты', href: '#contacts' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 p-[1px] shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-display font-black text-white text-xs tracking-normal px-3">
                ЦСД
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base tracking-normal text-white group-hover:text-cyan-400 transition-colors">
                ООО «ЦСД»
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-violet-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Status badge + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-900/60 border border-cyan-500/10 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                ENGINEERING ACCURACY
              </span>
            </div>
            
            <button 
              onClick={onOpenConsultation}
              className="relative px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-xs font-bold font-display tracking-wide uppercase shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Обсудить проект
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-md bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-xs font-bold font-display uppercase tracking-wider"
            >
              Проект
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-1.5 bg-slate-900 border border-white/5 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-6 px-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-100 hover:text-cyan-400 py-2 border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/60 border border-cyan-500/10 rounded-lg justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest leading-none">
                  HIGH-PRECISION TRANSLATION
                </span>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-bold font-display tracking-widest uppercase shadow-lg text-center"
              >
                Обсудить проект
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
