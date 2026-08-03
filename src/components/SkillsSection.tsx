import React, { useState } from 'react';
import { BookOpen, Check, Layers, Sparkles, Brain, Award } from 'lucide-react';
import { SKILL_CATEGORIES, FRAMEWORKS } from '../data/projectsData';

export const SkillsSection: React.FC = () => {
  const [activeFramework, setActiveFramework] = useState<string>('AIDA');

  const selectedFramework = FRAMEWORKS.find((f) => f.name === activeFramework) || FRAMEWORKS[0];

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0F4C81] bg-[#0F4C81]/10 px-3.5 py-1.5 rounded-full border border-[#0F4C81]/20">
            Competencies & Methodologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-4 tracking-tight">
            Skills & Copywriting Frameworks
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Building expertise through continuous study, audience research habits, and disciplined framework application.
          </p>
          <div className="w-12 h-1 bg-[#0F4C81] rounded-full mt-3" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-soft-sm space-y-4"
            >
              <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-3 flex items-center justify-between">
                <span>{cat.title}</span>
                <Sparkles className="w-4 h-4 text-[#0F4C81]" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {cat.items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 text-slate-800 text-xs font-medium shadow-soft-sm"
                  >
                    <Check className="w-3.5 h-3.5 text-[#0F4C81] shrink-0 font-bold" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Frameworks Deep Dive Section */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F4C81] text-white shadow-soft-md border border-[#0A375E]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-mono text-[#F7D64A] uppercase tracking-widest font-bold block mb-1">
                Continuous Learning & Application
              </span>
              <h3 className="text-xl font-heading font-bold text-white">
                Copywriting Frameworks I Study & Apply
              </h3>
            </div>
            <p className="text-xs text-slate-200 max-w-sm">
              Selecting the right persuasion framework based on audience awareness level and buying decision speed.
            </p>
          </div>

          {/* Framework Selector Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none border-b border-white/10">
            {FRAMEWORKS.map((fw) => (
              <button
                key={fw.name}
                onClick={() => setActiveFramework(fw.name)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeFramework === fw.name
                    ? 'bg-[#F7D64A] text-[#0F4C81] shadow-soft-sm'
                    : 'bg-white/10 text-slate-100 hover:bg-white/20'
                }`}
              >
                {fw.name}
              </button>
            ))}
          </div>

          {/* Active Framework Details Card */}
          <div className="bg-[#0A375E] p-5 rounded-xl border border-white/10 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#F7D64A] font-bold uppercase tracking-wider">
                  {selectedFramework.name} Framework
                </span>
                <h4 className="text-lg font-heading font-bold text-white mt-0.5">
                  {selectedFramework.fullName}
                </h4>
              </div>
              <span className="px-3 py-1 rounded-md bg-[#0F4C81] text-[10px] font-mono text-[#F7D64A] font-bold uppercase tracking-wider border border-[#F7D64A]/30">
                Structure
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="font-bold text-[#F7D64A] uppercase text-[10px] block mb-1 tracking-wider">
                  Sequential Progression:
                </span>
                <p className="text-slate-100 font-mono text-xs leading-relaxed">
                  {selectedFramework.structure}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="font-bold text-[#F7D64A] uppercase text-[10px] block mb-1 tracking-wider">
                  Best Applied To:
                </span>
                <p className="text-slate-100 leading-relaxed font-normal">
                  {selectedFramework.bestUsedFor}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
