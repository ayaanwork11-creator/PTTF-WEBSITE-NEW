import React from 'react';

export const TrustRibbon: React.FC = () => {
  return (
    <section className="w-full py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container mb-4">
                <span className="material-symbols-outlined text-[26px]">workspace_premium</span>
              </div>
              <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">ACCREDITED TESTING</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2 font-bold">Quality & Technical Excellence</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Delivering accurate and reliable testing services through trained technical personnel, established testing procedures, and a commitment to quality.
              </p>
            </div>
            <div className="mt-4 pt-3 flex items-center gap-1.5 text-on-tertiary-container font-label-mono-tech text-label-caption border-t border-surface-container-low">
              <span className="material-symbols-outlined text-[14px]">done_all</span>
              <span>QUALITY ASSURANCE & RELIABLE RESULTS</span>
            </div>
          </div>
          {/* Pillar 2 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container mb-4">
                <span className="material-symbols-outlined text-[26px]">public</span>
              </div>
              <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">TESTING CAPABILITIES</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2 font-bold">Comprehensive Laboratory Services</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Specialized testing solutions for textiles, leather, footwear, petroleum products, and personal protective equipment across diverse industries.
              </p>
            </div>
            <div className="mt-4 pt-3 flex items-center gap-1.5 text-on-tertiary-container font-label-mono-tech text-label-caption border-t border-surface-container-low">
              <span className="material-symbols-outlined text-[14px]">pin_drop</span>
              <span>MULTIPLE INDUSTRIES SERVED</span>
            </div>
          </div>
          {/* Pillar 3 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container mb-4">
                <span className="material-symbols-outlined text-[26px]">speed</span>
              </div>
              <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">INSPECTION SERVICES</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2 font-bold">Reliable Inspection & Verification</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Supporting manufacturers and exporters with professional inspection, product evaluation, and quality verification throughout production and supply chains.
              </p>
            </div>
            <div className="mt-4 pt-3 flex items-center gap-1.5 text-on-tertiary-container font-label-mono-tech text-label-caption border-t border-surface-container-low">
              <span className="material-symbols-outlined text-[14px]">bolt</span>
              <span>PRODUCTION & PRODUCT INSPECTION</span>
            </div>
          </div>
          {/* Pillar 4 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container mb-4">
                <span className="material-symbols-outlined text-[26px]">hub</span>
              </div>
              <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">CUSTOMER COMMITMENT</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2 font-bold">Trusted Industry Partnerships</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Working with businesses to reduce quality risks, meet applicable industry requirements, and maintain confidence in their products through dependable testing services.
              </p>
            </div>
            <div className="mt-4 pt-3 flex items-center gap-1.5 text-on-tertiary-container font-label-mono-tech text-label-caption border-t border-surface-container-low">
              <span className="material-symbols-outlined text-[14px]">format_image_left</span>
              <span>SUPPORTING QUALITY & COMPLIANCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
