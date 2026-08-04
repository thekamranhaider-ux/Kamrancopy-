import React from 'react';
import { ArrowDown, FileCode2, Mail, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9]">
      {/* Subtle royal blue ambient accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0F4C81]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Tag / Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0F4C81]/20 text-[#0F4C81] text-xs font-semibold mb-8 shadow-soft-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F7D64A] ring-2 ring-[#F7D64A]/40 animate-pulse" />
          <span>Building Expertise Through Original Spec Projects</span>
        </div>

        {/* Main Name Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
          Kamran Haider
        </h1>

        {/* CORE POSITIONING LINE */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-[#0F4C81] leading-snug">
            &ldquo;A beginner copywriter building expertise through original spec projects.&rdquo;
          </p>
        </div>

        {/* Tagline / Narrative Summary */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-10">
          Applying detail-oriented research habits and customer psychology to write clear, thoughtful, conversion-focused email, ad, and web copy.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          
            href="#spec-projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0F4C81] text-white text-sm font-semibold tracking-wide hover:bg-[#0A375E] transition-all shadow-soft-md group"
          >
            <FileCode2 className="w-4 h-4 text-[#F7D64A] group-hover:scale-110 transition-transform" />
            <span>View Spec Projects</span>
          </a>
          
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 text-sm font-semibold tracking-wide transition-all shadow-soft-sm"
          >
            <Mail className="w-4 h-4 text-[#0F4C81]" />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Quality Badges */}
        <div className="pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-soft-sm">
            <CheckCircle2 className="w-4 h-4 text-[#0F4C81] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-heading font-bold text-slate-900 uppercase tracking-wider">100% Honest Positioning</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">No fabricated clients or claims. Pure spec practice work.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-soft-sm">
            <CheckCircle2 className="w-4 h-4 text-[#0F4C81] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-heading font-bold text-slate-900 uppercase tracking-wider">Research-Driven</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Grounded in customer avatars, pain points & buyer psychology.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-soft-sm">
            <CheckCircle2 className="w-4 h-4 text-[#0F4C81] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-heading font-bold text-slate-900 uppercase tracking-wider">Framework Trained</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Studying and applying proven frameworks like AIDA & PAS.</p>
            </div>
          </div>
        </div>

        {/* Scroll down subtle hint */}
        <div className="mt-14 flex justify-center">
          
            href="#about"
            className="text-slate-400 hover:text-[#0F4C81] transition-colors p-2 flex flex-col items-center gap-1 text-xs font-medium"
            aria-label="Scroll to About Section"
          >
            <span>Read About Kamran</span>
            <ArrowDown className="w-4 h-4 text-[#0F4C81] animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
