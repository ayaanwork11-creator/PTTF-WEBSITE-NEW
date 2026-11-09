import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface pt-space-xl pb-24" id="home">
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-tertiary-fixed-dim/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <h1 className="font-headline-lg text-headline-md lg:text-headline-lg font-bold text-primary-container tracking-tight leading-tight">
              TEXTILE, LEATHER, PETROLEUM & PPE TESTING SERVICES
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Reliable Testing. Trusted Quality Assurance. Supporting textile, leather, footwear, petroleum, and PPE industries with accurate testing, professional inspection, and dependable quality assurance to meet international standards and industry requirements.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-2">
              <a className="inline-flex items-center gap-space-xs bg-primary-container hover:bg-inverse-surface text-surface-bright font-title-sm text-title-sm px-6 py-3.5 rounded-lg shadow-md transition-all group" href="#services-grid">
                <span>Explore Our Services</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="pt-8 mt-2 flex flex-col gap-3">
              <span className="font-label-caption text-label-caption text-outline uppercase tracking-widest font-semibold">
                COMPLIANT WITH GLOBAL TESTING & SAFETY STANDARDS
              </span>
              <div className="flex flex-wrap items-center gap-6 lg:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all">
                <span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-on-surface">AATCC</span>
                <span className="font-headline-sm text-headline-sm font-extrabold tracking-widest text-on-surface">ASTM</span>
                <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">ISO</span>
                <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">BS EN</span>
                <span className="font-headline-sm text-headline-sm font-semibold tracking-normal text-on-surface">DIN</span>
                <span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-on-surface">CPSC</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container">
                <img className="w-full h-[440px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhiqiPJYZ60Tauf7Ai9txhRVU7WWqif2Bxznh3jRYWupUPTwPfkzslk8qa7gj37q70eXoEkwX0a1lR30kS7T5D-1z5ivdiSvqZ7V6zr1NsEO2iOtx1wjIpQiN4yJjxoIAu_spiItcxNIOIH6KYXVOo8O4_eTLVfG8WfU_xOnv1Ja62MK3Lt12RbL9wXT9Us6Mn_1ocW6AjHjVE9sNT0Cwp4VYOLD4lKl7LWUZf6giRT7lnzC2M4De5" alt="Laboratory sample testing" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
