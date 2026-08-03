import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A375E] text-slate-300 py-12 border-t border-[#0F4C81] text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-heading font-bold text-lg text-white">
                Kamran Haider
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F7D64A] bg-[#0F4C81] px-2.5 py-0.5 rounded-md border border-[#F7D64A]/30">
                Copywriter
              </span>
            </div>
            <p className="text-slate-300 mt-1 max-w-md font-normal">
              A beginner copywriter building expertise through original spec projects.
            </p>
          </div>

          <div className="flex items-center gap-6 text-slate-200 font-medium">
            <a href="#about" className="hover:text-[#F7D64A] transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-[#F7D64A] transition-colors">
              Services
            </a>
            <a href="#spec-projects" className="hover:text-[#F7D64A] transition-colors">
              Spec Projects
            </a>
            <a href="#skills" className="hover:text-[#F7D64A] transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-[#F7D64A] transition-colors">
              Contact
            </a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div className="flex items-center gap-1.5 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-[#F7D64A]" />
            <span>100% Spec Work Transparency &bull; No Fabricated Client Claims</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>&copy; {new Date().getFullYear()} Kamran Haider. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#0F4C81] hover:bg-white/20 text-[#F7D64A] hover:text-white transition-colors flex items-center gap-1 font-bold uppercase tracking-wider text-[10px]"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
