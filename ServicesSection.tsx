import React from 'react';
import { Mail, Target, Layout, FileText, ShoppingBag, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/projectsData';

export const ServicesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Mail':
        return <Mail className="w-5 h-5 text-[#0F4C81] group-hover:text-[#F7D64A] transition-colors" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#0F4C81] group-hover:text-[#F7D64A] transition-colors" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#0F4C81] group-hover:text-[#F7D64A] transition-colors" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#0F4C81] group-hover:text-[#F7D64A] transition-colors" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#0F4C81] group-hover:text-[#F7D64A] transition-colors" />;
      default:
        return <FileText className="w-5 h-5 text-[#0F4C81] group-hover:text-[#F7D64A] transition-colors" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0F4C81] bg-[#0F4C81]/10 px-3.5 py-1.5 rounded-full border border-[#0F4C81]/20">
            Focused Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-4 tracking-tight">
            Services & Copy Specialties
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Focused exclusively on core direct-response and brand communication channels where clear messaging moves readers to take action.
          </p>
          <div className="w-12 h-1 bg-[#0F4C81] rounded-full mt-3" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm hover:border-[#0F4C81]/40 hover:shadow-soft-md transition-all flex flex-col justify-between group ${
                index === 0 || index === 1 ? 'md:col-span-1 ring-1 ring-[#0F4C81]/5' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0F4C81]/10 border border-[#0F4C81]/20 flex items-center justify-center group-hover:bg-[#0F4C81] transition-colors shadow-soft-sm">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 font-mono">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-[#0F4C81] transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs">
                <span className="font-heading font-bold text-slate-900 uppercase tracking-wider text-[10px] block mb-0.5">
                  Core Outcome:
                </span>
                <p className="text-slate-500 italic">
                  {service.benefit}
                </p>
              </div>
            </div>
          ))}

          {/* Quick CTA Box in grid */}
          <div className="p-6 rounded-2xl bg-[#0F4C81] text-white flex flex-col justify-between border border-[#0A375E] shadow-soft-md">
            <div>
              <span className="text-[11px] text-[#F7D64A] uppercase tracking-widest font-bold block mb-2">
                Need a Custom Brief?
              </span>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Have a specific spec request or project in mind?
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Open to writing custom sample test copy or collaborating on entry-level copywriting projects.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#F7D64A] hover:text-yellow-300 uppercase tracking-wider group"
              >
                <span>Send a Message</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
