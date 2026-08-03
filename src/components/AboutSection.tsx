import React from 'react';
import { Stethoscope, BookOpen, Sparkles, Target, Search } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0F4C81] bg-[#0F4C81]/10 px-3.5 py-1.5 rounded-full border border-[#0F4C81]/20">
            Background & Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-4 tracking-tight">
            About Kamran
          </h2>
          <div className="w-12 h-1 bg-[#0F4C81] rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p className="font-heading font-semibold text-slate-900 text-xl leading-snug">
              Kamran is transitioning from a healthcare background as a Home Care Nurse into direct-response copywriting.
            </p>

            <p>
              He is building his skills through original spec projects, studying real brand email sequences and ad campaigns, and learning proven copywriting frameworks like AIDA, PAS, BAB, and QUEST.
            </p>

            <p>
              Nursing taught him active listening, empathy, and deep observation — skills he now applies to customer research and audience psychology. He is detail-oriented, research-driven, and genuinely curious about what makes people pause, read, and take action.
            </p>

            <div className="bg-[#0F4C81]/5 border-l-4 border-[#0F4C81] p-5 text-slate-800 text-base rounded-r-xl shadow-soft-sm">
              <strong className="text-[#0F4C81] font-heading font-bold block mb-1">Current Goal:</strong>
              He is actively seeking his first freelance and entry-level copywriting opportunities with founders, agencies, and e-commerce brands looking for clear, conversion-focused writing.
            </div>
          </div>

          {/* Side Highlights / Pillars Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-soft-sm space-y-5">
              <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-3 flex items-center justify-between">
                <span>What Drives My Work</span>
                <Sparkles className="w-4 h-4 text-[#0F4C81]" />
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#0F4C81] text-[#F7D64A] shrink-0 shadow-soft-sm">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-slate-900">Healthcare Precision</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Bringing the rigorous observation and patient-first empathy of home care nursing directly to copy strategy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#0F4C81] text-[#F7D64A] shrink-0 shadow-soft-sm">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-slate-900">Research & Customer Avatars</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Mapping customer pain points, buying desires, and silent hesitations before drafting a single headline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#0F4C81] text-[#F7D64A] shrink-0 shadow-soft-sm">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-slate-900">Framework Mastery</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Continuous study of classical and modern persuasion structures (AIDA, PAS, BAB, QUEST, 4Ps).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#0F4C81] text-[#F7D64A] shrink-0 shadow-soft-sm">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-slate-900">Spec Work Dedication</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Refining craft through full-length spec projects across skincare, healthcare, fitness, edtech, and e-commerce.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#skills"
                  className="block text-center text-xs font-semibold text-[#0F4C81] hover:text-[#0A375E] uppercase tracking-wider border-t border-slate-200 pt-3"
                >
                  Explore Copywriting Frameworks &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
