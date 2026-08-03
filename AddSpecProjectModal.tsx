import React, { useState } from 'react';
import { X, Plus, Check } from 'lucide-react';
import { SpecProject, SpecCategory } from '../types';

interface AddSpecProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: SpecProject) => void;
}

export const AddSpecProjectModal: React.FC<AddSpecProjectModalProps> = ({
  isOpen,
  onClose,
  onAddProject,
}) => {
  const [category, setCategory] = useState<SpecCategory>('email');
  const [title, setTitle] = useState('');
  const [industry, setIndustry] = useState('');
  const [brandDescription, setBrandDescription] = useState('');
  const [pieceCount, setPieceCount] = useState('');
  const [goal, setGoal] = useState('');
  const [frameworkUsed, setFrameworkUsed] = useState('AIDA');
  
  // Custom Email content
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [emailCta, setEmailCta] = useState('');

  // Custom Ad content
  const [adHeadline, setAdHeadline] = useState('');
  const [adPrimaryText, setAdPrimaryText] = useState('');
  const [adCta, setAdCta] = useState('Shop Now');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !brandDescription) return;

    const newProject: SpecProject = {
      id: `custom-spec-${Date.now()}`,
      title: title || '[Brand/Niche Name] — Spec Project',
      category,
      industry: industry || 'eCommerce & Direct Response',
      brandDescription: brandDescription || 'Original practice piece created to demonstrate copywriting ability.',
      pieceCount: pieceCount || (category === 'email' ? '3-email sequence' : '2 ad variations'),
      goal: goal || 'Drive conversion & trust',
      frameworkUsed: frameworkUsed || 'PAS',
      skillsDemonstrated: [
        category === 'email' ? 'Email Copywriting' : 'Meta Ads Copy',
        'Customer Psychology',
        'Conversion Copywriting',
        'Spec Work'
      ],
      isCustomUserProject: true,
    };

    if (category === 'email') {
      newProject.emailSequence = [
        {
          id: `email-piece-1`,
          stepNumber: 1,
          label: 'EMAIL 1 — SAMPLE COPY',
          objective: goal || 'Introduce brand and drive action',
          subjectLine: emailSubject || 'Sample Subject Line',
          body: emailBody || 'Insert full email body text here...',
          primaryCta: emailCta || 'Learn More',
          whyItConverts: 'Written with clear reader benefit and low friction.',
          psychologyUsed: 'Trust & Value'
        }
      ];
    } else {
      newProject.adVariations = [
        {
          id: `ad-var-1`,
          versionName: 'Version 1 — Primary Angle',
          headline: adHeadline || 'Sample Ad Headline',
          primaryText: adPrimaryText || 'Sample primary ad text...',
          ctaButton: adCta || 'Shop Now',
          whyItWorks: 'Direct response hook addressing core pain point.'
        }
      ];
    }

    onAddProject(newProject);
    onClose();
    // Reset form
    setTitle('');
    setBrandDescription('');
    setEmailSubject('');
    setEmailBody('');
    setAdHeadline('');
    setAdPrimaryText('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-[#F8FAFC] w-full max-w-2xl rounded-2xl border border-slate-300 shadow-soft-lg overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 bg-white border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#0F4C81]/10 text-[#0F4C81] border border-[#0F4C81]/20">
              <Plus className="w-5 h-5 font-bold" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-extrabold text-slate-900">
                Insert New Spec Project
              </h3>
              <p className="text-xs text-slate-500">
                Add your own custom email sequence or ad copy piece to the portfolio.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm flex-1">
          
          {/* Category Toggle */}
          <div>
            <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-2">
              Project Category *
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setCategory('email')}
                className={`py-2.5 px-3.5 rounded-xl font-bold text-xs border transition-all ${
                  category === 'email'
                    ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-soft-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                Category 1: Email Copywriting
              </button>
              <button
                type="button"
                onClick={() => setCategory('ads')}
                className={`py-2.5 px-3.5 rounded-xl font-bold text-xs border transition-all ${
                  category === 'ads'
                    ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-soft-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                Category 2: Meta Ads Copy
              </button>
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-1">
              Project Title *
            </label>
            <input
              type="text"
              required
              placeholder={
                category === 'email'
                  ? '[Brand/Niche Name] — Welcome Email Sequence'
                  : '[Brand/Niche Name] — Instagram Ad Copy'
              }
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-slate-900 text-xs sm:text-sm"
            />
          </div>

          {/* Industry & Scope */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-1">
                Industry / Niche
              </label>
              <input
                type="text"
                placeholder="e.g. Skincare, Fitness, SaaS"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-slate-900 text-xs sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-1">
                Number of Pieces / Scope
              </label>
              <input
                type="text"
                placeholder={category === 'email' ? 'e.g. 3-email welcome series' : 'e.g. 3 ad variations'}
                value={pieceCount}
                onChange={(e) => setPieceCount(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-slate-900 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Brand Description */}
          <div>
            <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-1">
              Short Description of Brand / Offer *
            </label>
            <textarea
              required
              rows={2}
              placeholder="Describe the product or brand this spec copy was written for..."
              value={brandDescription}
              onChange={(e) => setBrandDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-slate-900 text-xs sm:text-sm"
            />
          </div>

          {/* Goal & Framework */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-1">
                Goal of Project
              </label>
              <input
                type="text"
                placeholder="e.g. drive first purchase, build trust, re-engage"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-slate-900 text-xs sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-1">
                Framework Applied
              </label>
              <select
                value={frameworkUsed}
                onChange={(e) => setFrameworkUsed(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-slate-900 text-xs sm:text-sm"
              >
                <option value="AIDA">AIDA (Attention, Interest, Desire, Action)</option>
                <option value="PAS">PAS (Problem, Agitate, Solution)</option>
                <option value="BAB">BAB (Before, After, Bridge)</option>
                <option value="QUEST">QUEST (Qualify, Educate, Transition)</option>
                <option value="4Ps">4Ps (Picture, Promise, Prove, Push)</option>
              </select>
            </div>
          </div>

          {/* Dynamic Copy Input Fields */}
          {category === 'email' ? (
            <div className="space-y-3 pt-3 border-t border-slate-200">
              <h4 className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider">
                Email Copy Details
              </h4>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Subject Line</label>
                <input
                  type="text"
                  placeholder="e.g. Welcome to [Brand] — your discount inside"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Email Body Text</label>
                <textarea
                  rows={4}
                  placeholder="Paste the full email copy text here..."
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 font-sans text-slate-900 text-xs sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Primary Call to Action</label>
                <input
                  type="text"
                  placeholder="e.g. Claim Your Discount"
                  value={emailCta}
                  onChange={(e) => setEmailCta(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3 pt-3 border-t border-slate-200">
              <h4 className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider">
                Ad Copy Details
              </h4>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Ad Headline</label>
                <input
                  type="text"
                  placeholder="e.g. Your skin isn't dull. It's just never had real Vitamin C."
                  value={adHeadline}
                  onChange={(e) => setAdHeadline(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Primary Text (Body)</label>
                <textarea
                  rows={4}
                  placeholder="Paste the primary ad copy text here..."
                  value={adPrimaryText}
                  onChange={(e) => setAdPrimaryText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 font-sans text-slate-900 text-xs sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">CTA Button</label>
                <input
                  type="text"
                  placeholder="e.g. Shop Now, Learn More"
                  value={adCta}
                  onChange={(e) => setAdCta(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm"
                />
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#0F4C81] text-white font-bold text-xs hover:bg-[#0A375E] transition-colors shadow-soft-sm flex items-center gap-1.5"
            >
              <Check className="w-4 h-4 text-[#F7D64A] font-bold" />
              <span>Save to Spec Projects</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
