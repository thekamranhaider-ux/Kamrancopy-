import React, { useState } from 'react';
import { X, Copy, Check, Mail, Target, ShieldCheck } from 'lucide-react';
import { SpecProject } from '../types';

interface ProjectDetailModalProps {
  project: SpecProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!project) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-[#F8FAFC] w-full max-w-4xl rounded-2xl border border-slate-300 shadow-soft-lg overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-white border-b border-slate-200/90 flex items-start justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#0F4C81]/10 text-[#0F4C81] border border-[#0F4C81]/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0F4C81]" />
                Spec Work / Practice Piece
              </span>
              <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md font-semibold">
                {project.category === 'email' ? 'Category 1: Email Copywriting' : 'Category 2: Meta Ads Copy'}
              </span>
              <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md font-semibold">
                {project.industry}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {project.brandDescription}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-800 flex-1">
          
          {/* Strategy Meta Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-5 rounded-2xl border border-slate-200 text-xs shadow-soft-sm">
            <div>
              <span className="font-heading font-bold text-slate-400 uppercase tracking-wider block text-[10px]">
                Project Goal
              </span>
              <p className="font-semibold text-slate-900 mt-0.5 text-xs">{project.goal}</p>
            </div>
            <div>
              <span className="font-heading font-bold text-slate-400 uppercase tracking-wider block text-[10px]">
                Scope / Pieces
              </span>
              <p className="font-semibold text-slate-900 mt-0.5 text-xs">{project.pieceCount}</p>
            </div>
            <div>
              <span className="font-heading font-bold text-slate-400 uppercase tracking-wider block text-[10px]">
                Framework Applied
              </span>
              <p className="font-bold text-[#0F4C81] mt-0.5 text-xs">{project.frameworkUsed}</p>
            </div>
          </div>

          {/* Avatar if exists */}
          {project.customerAvatar && (
            <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs shadow-soft-sm">
              <span className="font-heading font-bold text-[#0F4C81] uppercase tracking-wider text-[11px] block mb-2">
                Target Customer Avatar: {project.customerAvatar.name} ({project.customerAvatar.role})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-200/80">
                  <span className="font-heading font-bold text-slate-900 block text-[11px]">Core Frustration:</span>
                  <p className="text-slate-600 mt-0.5">{project.customerAvatar.frustration}</p>
                </div>
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-200/80">
                  <span className="font-heading font-bold text-slate-900 block text-[11px]">Dream Outcome:</span>
                  <p className="text-slate-600 mt-0.5">{project.customerAvatar.dreamOutcome}</p>
                </div>
              </div>
            </div>
          )}

          {/* CATEGORY 1: EMAIL SEQUENCE DETAILS */}
          {project.category === 'email' && project.emailSequence && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h3 className="text-sm font-heading font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0F4C81]" />
                  <span>Full Email Sequence Copy</span>
                </h3>
                <span className="text-xs text-slate-500 font-mono font-semibold">
                  {project.emailSequence.length} Emails
                </span>
              </div>

              {/* Email Selector Tabs */}
              <div className="flex gap-1.5 overflow-x-auto pb-2 border-b border-slate-200/60 scrollbar-none">
                {project.emailSequence.map((email, idx) => (
                  <button
                    key={email.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      activeTab === idx
                        ? 'bg-[#0F4C81] text-white shadow-soft-sm'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span>Email {email.stepNumber}</span>
                  </button>
                ))}
              </div>

              {/* Selected Email Card View */}
              {project.emailSequence[activeTab] && (
                <div className="bg-white rounded-2xl border border-slate-300/80 shadow-soft-sm overflow-hidden">
                  {/* Email Header Bar */}
                  <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold text-[#0F4C81] uppercase tracking-widest block font-mono mb-1">
                        {project.emailSequence[activeTab].label}
                      </span>
                      <p className="text-xs text-slate-600">
                        <strong className="text-slate-800">Objective:</strong> {project.emailSequence[activeTab].objective}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        handleCopy(
                          `Subject: ${project.emailSequence[activeTab].subjectLine}\n\n${project.emailSequence[activeTab].body}`,
                          `email-${activeTab}`
                        )
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 transition-colors shrink-0 shadow-soft-sm"
                    >
                      {copiedId === `email-${activeTab}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                          <span className="text-emerald-700 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#0F4C81]" />
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Subject Line & Preview Text */}
                  <div className="p-4 bg-[#0F4C81]/5 border-b border-slate-200 space-y-2 text-xs">
                    <div>
                      <span className="font-heading font-bold text-slate-500 uppercase tracking-wider text-[10px] block">
                        Subject Line:
                      </span>
                      <p className="text-slate-900 font-bold text-sm">
                        {project.emailSequence[activeTab].subjectLine}
                      </p>
                    </div>
                    {project.emailSequence[activeTab].previewText && (
                      <div>
                        <span className="font-heading font-bold text-slate-500 uppercase tracking-wider text-[10px] block">
                          Preview Text:
                        </span>
                        <p className="text-slate-700 italic">
                          {project.emailSequence[activeTab].previewText}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Email Body Copy */}
                  <div className="p-5 sm:p-6 text-slate-800 text-sm leading-relaxed whitespace-pre-line font-sans bg-white border-b border-slate-200">
                    {project.emailSequence[activeTab].body}
                  </div>

                  {/* CTAs & Psychology rationale */}
                  <div className="p-4 bg-slate-50 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="font-heading font-bold text-slate-900 block text-[11px] mb-1">
                        Primary & Secondary CTAs:
                      </span>
                      <div className="flex gap-2 flex-wrap">
                        {project.emailSequence[activeTab].primaryCta && (
                          <span className="px-3 py-1 rounded-lg bg-[#0F4C81] text-white font-bold text-[11px]">
                            {project.emailSequence[activeTab].primaryCta}
                          </span>
                        )}
                        {project.emailSequence[activeTab].secondaryCta && (
                          <span className="px-3 py-1 rounded-lg bg-white border border-slate-300 text-slate-700 font-medium text-[11px]">
                            {project.emailSequence[activeTab].secondaryCta}
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <span className="font-heading font-bold text-slate-900 block text-[11px] mb-1">
                        Conversion Rationale & Psychology:
                      </span>
                      <p className="text-slate-600 leading-snug">
                        {project.emailSequence[activeTab].whyItConverts}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CATEGORY 2: META ADS DETAILS */}
          {project.category === 'ads' && project.adVariations && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h3 className="text-sm font-heading font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#0F4C81]" />
                  <span>Meta Ad Creative Variations</span>
                </h3>
                <span className="text-xs text-slate-500 font-mono font-semibold">
                  {project.adVariations.length} Versions
                </span>
              </div>

              {/* Ad Variations Cards */}
              <div className="space-y-4">
                {project.adVariations.map((ad, idx) => (
                  <div
                    key={ad.id}
                    className="bg-white rounded-2xl border border-slate-300/80 shadow-soft-sm overflow-hidden"
                  >
                    <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0F4C81] uppercase tracking-wider font-mono">
                        {ad.versionName}
                      </span>

                      <button
                        onClick={() =>
                          handleCopy(
                            `Headline: ${ad.headline}\n\nPrimary Text:\n${ad.primaryText}\n\nCTA: ${ad.ctaButton}`,
                            `ad-${idx}`
                          )
                        }
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 transition-colors shadow-soft-sm"
                      >
                        {copiedId === `ad-${idx}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                            <span className="text-emerald-700 font-bold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#0F4C81]" />
                            <span>Copy Ad Text</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-4 sm:p-5 space-y-3">
                      <div>
                        <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                          Headline:
                        </span>
                        <h4 className="text-base font-heading font-bold text-slate-900">
                          {ad.headline}
                        </h4>
                      </div>

                      <div>
                        <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                          Primary Text (Body):
                        </span>
                        <div className="p-4 bg-slate-50 rounded-xl text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line border border-slate-200 font-sans">
                          {ad.primaryText}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-400">
                            CTA Button:
                          </span>
                          <span className="px-3 py-1 rounded-lg bg-[#0F4C81] text-white text-xs font-bold">
                            {ad.ctaButton}
                          </span>
                        </div>
                        {ad.whyItWorks && (
                          <p className="text-xs text-slate-500 italic max-w-sm text-right">
                            {ad.whyItWorks}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Instagram Caption Version if available */}
              {project.instagramCaption && (
                <div className="p-5 rounded-2xl bg-[#0F4C81]/5 border border-[#0F4C81]/20 space-y-2 shadow-soft-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C81] block font-mono">
                    Instagram Platform-Native Version
                  </span>
                  <p className="text-sm font-heading font-bold text-slate-900">
                    {project.instagramCaption.headline}
                  </p>
                  <p className="text-xs text-slate-700 whitespace-pre-line leading-relaxed">
                    {project.instagramCaption.caption}
                  </p>
                  <div className="pt-1 flex items-center gap-2">
                    <span className="text-[10px] text-slate-500 uppercase font-bold">CTA Button:</span>
                    <span className="text-xs font-semibold bg-white px-2.5 py-0.5 rounded-md border border-slate-300">
                      {project.instagramCaption.ctaButton}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Skills Demonstrated */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-soft-sm">
            <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-400 block">
              Skills Demonstrated in this Spec Project:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.skillsDemonstrated.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <p className="text-xs text-slate-500 italic">
            *All copy is original spec work created by Kamran Haider to demonstrate copywriting ability.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#0F4C81] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0A375E] transition-colors shadow-soft-sm"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
