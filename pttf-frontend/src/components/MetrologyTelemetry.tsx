import React from 'react';

export const MetrologyTelemetry: React.FC = () => {
  return (
    <section className="w-full py-16 bg-surface" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">State of the Art Textile Testing &amp; Inspection Laboratory</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Every sample tested at PTTF Lab undergoes rigorous evaluation using over 400 standard test methods. Equipped with premier SDL-ATLAS UK &amp; USA machinery, our accredited facilities provide dependable quality assurance for global textile manufacturers and exporters.</p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm"><span className="font-headline-md text-headline-md font-extrabold text-primary-container block">400+</span><span className="font-title-sm text-title-sm font-semibold text-on-surface">Standard Test Methods</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Strict continuous in-house testing &amp; QC</p></div>
              <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm"><span className="font-headline-md text-headline-md font-extrabold text-secondary block">20+</span><span className="font-title-sm text-title-sm font-semibold text-on-surface">Years of Experience</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Accredited by PNAC, NEXT UK &amp; US CPSC</p></div>
            </div>
          </div>
          <div className="lg:col-span-6 bg-surface-container-lowest p-6 lg:p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-surface-container-high"><div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-secondary-container animate-pulse"></div><span className="font-title-sm text-title-sm font-bold text-on-surface">Laboratory Testing &amp; Quality Assurance Services</span></div></div>
            <div className="mt-4 flex flex-col gap-3 font-body-sm text-body-sm"><div className="flex items-start justify-between p-3 rounded-lg bg-surface"><div className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-secondary-container mt-1.5 shrink-0"></span><div><div className="font-title-sm text-title-sm font-semibold text-on-surface">SDL-ATLAS Testing Apparatus [UK &amp; USA]</div><div className="font-label-caption text-label-caption text-outline">Physical, Tensile &amp; Fabric Performance Testing</div></div></div></div><div className="flex items-start justify-between p-3 rounded-lg bg-surface"><div className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-secondary-container mt-1.5 shrink-0"></span><div><div className="font-title-sm text-title-sm font-semibold text-on-surface">Chemical &amp; Restricted Substances (RSL)</div><div className="font-label-caption text-label-caption text-outline">Colorfastness, pH &amp; Environmental Compliance</div></div></div></div><div className="flex items-start justify-between p-3 rounded-lg bg-surface"><div className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-secondary-container mt-1.5 shrink-0"></span><div><div className="font-title-sm text-title-sm font-semibold text-on-surface">Inspection &amp; Verification Services</div><div className="font-label-caption text-label-caption text-outline">Inline, DUPRO &amp; Final Random Inspection (FRI)</div></div></div></div></div>
            <div className="mt-4 p-4 rounded-xl bg-primary-container text-surface-bright flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div><span className="font-label-mono-tech text-label-caption text-on-primary-container uppercase block">LAB ACCREDITATION STATUS</span><span className="font-label-mono-tech text-label-mono-tech text-surface-bright tracking-wider">ISO/IEC 17025 (PNAC) • US CPSC APPROVED</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
