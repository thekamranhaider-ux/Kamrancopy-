import React, { useState } from 'react';
import { Mail, Linkedin, Send, Copy, Check, ExternalLink, Clock, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Email Copywriting',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'thekamranhaider@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/kamran-haider-8827b83ab?utm_source=share_via&utm_content=profile&utm_medium=member_android';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0F4C81] bg-[#0F4C81]/10 px-3.5 py-1.5 rounded-full border border-[#0F4C81]/20">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Open for freelance projects, sample test assignments, and entry-level copywriting opportunities.
          </p>
          <div className="w-12 h-1 bg-[#0F4C81] rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Links Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm space-y-6">
              <h3 className="text-base font-heading font-bold text-slate-900 border-b border-slate-100 pb-3">
                Direct Contact Information
              </h3>

              {/* Email Block */}
              <div className="space-y-2">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-400 block">
                  Email Address:
                </span>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 gap-2 shadow-soft-sm">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-[#0F4C81] shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-slate-900 truncate font-semibold">
                      {emailAddress}
                    </span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-slate-200/70 text-slate-600 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600 font-bold" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn Link */}
              <div className="space-y-2">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-400 block">
                  LinkedIn Profile:
                </span>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#0F4C81]/40 transition-colors text-xs sm:text-sm font-medium text-slate-900 group shadow-soft-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#0F4C81]" />
                    <span>linkedin.com/in/kamranhaidercopy</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0F4C81] transition-colors" />
                </a>
              </div>

              {/* Availability & Response Time */}
              <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#0F4C81]" />
                  <span><strong>Response Time:</strong> Typically within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0F4C81]" />
                  <span><strong>Availability:</strong> Open for remote projects worldwide</span>
                </div>
              </div>

            </div>

            {/* Note box */}
            <div className="p-5 rounded-2xl bg-[#0F4C81]/5 border border-[#0F4C81]/20 text-xs text-slate-700 leading-relaxed shadow-soft-sm">
              <p>
                <strong className="text-[#0F4C81] font-heading font-bold">Looking for a sample task?</strong> I am happy to write a short spec test piece for your brand to demonstrate my research habits and writing style before committing.
              </p>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm">
              
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the simple form below to discuss an opportunity, spec request, or copywriting task.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#0F4C81]/5 border border-[#0F4C81]/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0F4C81] text-[#F7D64A] flex items-center justify-center mx-auto shadow-soft-sm">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-[#0F4C81]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed font-medium">
                    Thank you, {formData.name}. Kamran will review your message and respond promptly within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'Email Copywriting', message: '' });
                    }}
                    className="mt-2 text-xs font-bold uppercase tracking-wider text-[#0F4C81] underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-slate-900 text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-slate-900 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Project / Interest Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-slate-900 text-xs sm:text-sm"
                    >
                      <option value="Email Copywriting">Email Copywriting</option>
                      <option value="Meta Ads Copy">Meta (Facebook & Instagram) Ads Copy</option>
                      <option value="Website Copy">Website Copy</option>
                      <option value="Landing Page Copy">Landing Page Copy</option>
                      <option value="Sales Copy">Sales Copy</option>
                      <option value="Freelance / Entry-Level Role">Freelance / Entry-Level Role</option>
                      <option value="Other Query">Other Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share details about your brand, audience, or what you are looking for..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-slate-900 text-xs sm:text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0F4C81] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0A375E] transition-all shadow-soft-md flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Message</span>
                    <Send className="w-4 h-4 text-[#F7D64A] group-hover:translate-x-1 transition-transform" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
