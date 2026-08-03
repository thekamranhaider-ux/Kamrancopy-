import React, { useState } from 'react';
import { Mail, Target, ShieldCheck, Eye, Plus, Search, Filter } from 'lucide-react';
import { SpecProject, SpecCategory } from '../types';
import { INITIAL_SPEC_PROJECTS } from '../data/projectsData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { AddSpecProjectModal } from './AddSpecProjectModal';

export const SpecProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<SpecProject[]>(INITIAL_SPEC_PROJECTS);
  const [activeCategory, setActiveCategory] = useState<SpecCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<SpecProject | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddProject = (newProject: SpecProject) => {
    setProjects([newProject, ...projects]);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.brandDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="spec-projects" className="py-20 md:py-28 bg-[#F8FAFC] border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#0F4C81]/10 text-[#0F4C81] border border-[#0F4C81]/20 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0F4C81]" />
              <span>Original Practice Pieces</span>
            </div>
            {/* MUST BE LABELED 'SPEC PROJECTS' */}
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Spec Projects
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
              Every project below is original spec work created to demonstrate research, audience psychology, copywriting frameworks, and strategic execution. Clear of fabricated client claims or results.
            </p>
          </div>

          {/* Insert Custom Spec Project Button */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0F4C81] text-white text-xs font-semibold hover:bg-[#0A375E] transition-all shadow-soft-sm shrink-0 uppercase tracking-wider"
          >
            <Plus className="w-4 h-4 text-[#F7D64A]" />
            <span>Insert Spec Project</span>
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-soft-sm">
          
          {/* Category Filter Tabs */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#0F4C81] text-white shadow-soft-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Spec Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveCategory('email')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeCategory === 'email'
                  ? 'bg-[#0F4C81] text-white shadow-soft-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Category 1: Email Copywriting ({projects.filter((p) => p.category === 'email').length})</span>
            </button>
            <button
              onClick={() => setActiveCategory('ads')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeCategory === 'ads'
                  ? 'bg-[#0F4C81] text-white shadow-soft-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Category 2: Meta Ads Copy ({projects.filter((p) => p.category === 'ads').length})</span>
            </button>
          </div>

          {/* Search Field */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search niche or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-slate-900"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md hover:border-[#0F4C81]/40 transition-all flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Card Header */}
              <div className="p-6 space-y-4">
                
                {/* Badges Bar */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#0F4C81]/10 text-[#0F4C81] border border-[#0F4C81]/20">
                    <ShieldCheck className="w-3 h-3 text-[#0F4C81]" />
                    Spec Work / Practice Piece
                  </span>
                  <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md font-medium">
                    {project.category === 'email' ? 'Email Copy' : 'Meta Ads Copy'}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-heading font-bold text-slate-900 group-hover:text-[#0F4C81] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Industry & Scope */}
                <div className="flex items-center gap-3 text-xs text-slate-500 font-mono font-medium">
                  <span>Industry: {project.industry}</span>
                  <span>&bull;</span>
                  <span>{project.pieceCount}</span>
                </div>

                {/* Brand Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {project.brandDescription}
                </p>

                {/* Goal */}
                <div className="pt-1">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Goal of Project:
                  </span>
                  <p className="text-xs text-slate-800 font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    {project.goal}
                  </p>
                </div>

                {/* Actual Copy Preview Snippet */}
                <div className="mt-3 p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200/80 text-xs font-sans text-slate-700 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-heading font-bold text-slate-900 uppercase tracking-wider text-[10px]">
                      {project.category === 'email' ? 'Sample Email Subject Line:' : 'Sample Ad Headline:'}
                    </span>
                    <span className="text-[10px] text-[#0F4C81] font-mono font-bold">
                      Framework: {project.frameworkUsed}
                    </span>
                  </div>

                  <p className="font-medium text-slate-900 italic">
                    &ldquo;
                    {project.category === 'email'
                      ? project.emailSequence?.[0]?.subjectLine || 'Welcome to [Brand]'
                      : project.adVariations?.[0]?.headline || 'Sample Ad Headline'}
                    &rdquo;
                  </p>
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium group-hover:text-slate-900 transition-colors">
                  Click to view full text copy & strategy
                </span>

                <div className="inline-flex items-center gap-1.5 font-bold text-[#0F4C81] uppercase tracking-wider text-[11px]">
                  <span>Read Copy</span>
                  <Eye className="w-4 h-4 group-hover:scale-110 transition-transform text-[#0F4C81]" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 shadow-soft-sm">
            <p className="text-slate-500 text-sm">No spec projects found matching your search filter.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-[#0F4C81] underline uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Footnote reassurance */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-slate-200/90 text-center text-xs text-slate-500 max-w-2xl mx-auto shadow-soft-sm">
          <p>
            <strong className="text-slate-800">Note on Transparency:</strong> Kamran is committed to 100% honesty. All projects in this section are original practice spec pieces created to demonstrate research, strategy, and copy execution — never presented as paid client results.
          </p>
        </div>

      </div>

      {/* Full Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Add Custom Project Modal */}
      <AddSpecProjectModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProject={handleAddProject}
      />
    </section>
  );
};
