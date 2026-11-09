import React from 'react';
import { Link } from 'react-router-dom';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="w-full bg-surface">
      {/* 1. EDITORIAL HERO & EXECUTIVE SUMMARY */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface pt-8 pb-16 lg:pb-20">
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-tertiary-fixed-dim/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-center gap-2 text-xs font-medium text-outline">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-secondary font-semibold">About Us</span>
          </nav>

          {/* Centered Narrative Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-container tracking-tight leading-tight">
              ABOUT PAKISTAN TEXTILE TESTING FOUNDATION
            </h1>

            <p className="font-body-lg text-lg sm:text-xl text-on-surface-variant leading-relaxed mt-6 font-normal">
              Established in 2005, the Pakistan Textile Testing Foundation Lab (PTTF Lab) operates as a leading state-of-the-art testing, quality control, and inspection body. Dedicated to providing independent, technically rigorous verification, PTTF serves a vast market of textile manufacturers, industrial processors, and exporters across the region to ensure global trade compliance.
            </p>
          </div>

          {/* Wide-Format Hero Image Container (No Overlays) */}
          <div className="w-full relative mx-auto max-w-6xl">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant/20">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhiqiPJYZ60Tauf7Ai9txhRVU7WWqif2Bxznh3jRYWupUPTwPfkzslk8qa7gj37q70eXoEkwX0a1lR30kS7T5D-1z5ivdiSvqZ7V6zr1NsEO2iOtx1wjIpQiN4yJjxoIAu_spiItcxNIOIH6KYXVOo8O4_eTLVfG8WfU_xOnv1Ja62MK3Lt12RbL9wXT9Us6Mn_1ocW6AjHjVE9sNT0Cwp4VYOLD4lKl7LWUZf6giRT7lnzC2M4De5"
                alt="Pakistan Textile Testing Foundation central laboratory facility and testing apparatus"
                className="w-full h-[340px] sm:h-[420px] lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL BACKGROUND & MANDATE (TWO-COLUMN EDITORIAL BLOCK) */}
      <section className="w-full py-16 lg:py-24 bg-surface border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Overline */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-secondary uppercase font-semibold text-xs tracking-widest block mb-2">
              INSTITUTIONAL FOUNDATION
            </span>
            <h2 className="font-headline-md text-2xl lg:text-3xl font-bold text-on-surface tracking-tight">
              TWO DECADES OF TECHNICAL INDEPENDENCE &amp; EXCELLENCE
            </h2>
          </div>

          {/* Two-Column Editorial Prose */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pt-8 border-t border-outline-variant/20">
            {/* Left Column */}
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-xl font-bold text-primary-container mb-4">
                FOUNDATIONAL MANDATE &amp; INDUSTRY LEADERSHIP
              </h3>
              <div className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  PTTF Lab was established in 2005 with a clear, strategic mandate: to provide Pakistani manufacturers, process houses, and international exporters with high-precision, unbiased testing services that eliminate export bottlenecks and ensure seamless conformity with global retail specifications.
                </p>
                <p>
                  Situated in the textile capital of Faisalabad, operating out of the landmark Pakistan Textile Exporters Association (PTEA) Building, the foundation serves as an indispensable bridge between local industrial manufacturing and demanding global markets. By delivering rapid turnaround times and accessible metrological support, PTTF empowers exporters to secure commercial acceptance with premier retail brands worldwide.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col lg:border-l lg:border-outline-variant/20 lg:pl-16">
              <h3 className="font-headline-sm text-xl font-bold text-primary-container mb-4">
                TECHNICAL CAPABILITY &amp; APPARATUS STANDARDS
              </h3>
              <div className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  PTTF Lab maintains an uncompromising commitment to technical integrity. Our laboratories are equipped with cutting-edge analytical and mechanical testing machinery sourced directly from SDL-ATLAS (United Kingdom and United States), ensuring full alignment with international metrology standards.
                </p>
                <p>
                  Our senior technologists and certified metrologists routinely execute over 400 continuous standard test protocols across physical, chemical, environmental, and non-destructive domains. Every test run is governed by stringent internal proficiency benchmarks and continuous calibration cycles, guaranteeing repeatable, audit-ready data for regulatory bodies, customs authorities, and commercial buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACCREDITATION SCOPE & REGULATORY FRAMEWORK (STRUCTURED 2-COLUMN SPLIT LIST WITH DIVIDERS) */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low" id="accreditations">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Overline & Narrative */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-secondary uppercase font-semibold text-xs tracking-widest block mb-2">
              REGULATORY RECOGNITION
            </span>
            <h2 className="font-headline-md text-2xl lg:text-3xl font-bold text-on-surface tracking-tight mb-4">
              GLOBAL ACCREDITATIONS &amp; STATUTORY APPROVALS
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              PTTF Lab operates under strict quality management protocols aligned with international testing and inspection benchmarks, holding accreditations that provide audit-ready acceptance in North American, European, and Asian markets.
            </p>
          </div>

          {/* 2-Column Split Editorial Panels with Dividers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pt-8 border-t border-outline-variant/20">
            {/* Left Panel: Testing & Statutory Body Approvals */}
            <div className="flex flex-col gap-8">
              <span className="font-label-mono-tech text-xs text-secondary uppercase tracking-wider font-semibold block pb-2 border-b border-outline-variant/30">
                TESTING &amp; STATUTORY BODY APPROVALS
              </span>

              {/* Approval 1 */}
              <div className="flex flex-col gap-2">
                <h4 className="font-headline-sm text-lg font-bold text-on-surface">
                  ISO/IEC 17025:2005 Laboratory Accreditation
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Formally accredited by the Pakistan National Accreditation Council (PNAC), Ministry of Science &amp; Technology, demonstrating technical competence for physical, chemical, colorfastness, and environmental effluent analysis.
                </p>
              </div>

              {/* Approval 2 */}
              <div className="flex flex-col gap-2 pt-6 border-t border-outline-variant/20">
                <h4 className="font-headline-sm text-lg font-bold text-on-surface">
                  United States Consumer Product Safety Commission (US CPSC)
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Officially accepted testing laboratory by the US CPSC (Laboratory Identification: 1445), certifying apparel, textiles, and protective products for mandatory US safety and flammability regulations.
                </p>
              </div>
            </div>

            {/* Right Panel: Inspection & Buyer Accreditations */}
            <div className="flex flex-col gap-8 lg:border-l lg:border-outline-variant/20 lg:pl-16">
              <span className="font-label-mono-tech text-xs text-secondary uppercase tracking-wider font-semibold block pb-2 border-b border-outline-variant/30">
                INSPECTION &amp; BUYER ACCREDITATIONS
              </span>

              {/* Approval 3 */}
              <div className="flex flex-col gap-2">
                <h4 className="font-headline-sm text-lg font-bold text-on-surface">
                  ISO/IEC 17020 Type-A Inspection Body Accreditation
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Accredited by PNAC as an independent, third-party inspection body authorized to conduct inline production monitoring, factory compliance audits, and final random pre-shipment inspections (FRI).
                </p>
              </div>

              {/* Approval 4 */}
              <div className="flex flex-col gap-2 pt-6 border-t border-outline-variant/20">
                <h4 className="font-headline-sm text-lg font-bold text-on-surface">
                  NEXT UK Retail Laboratory Approval
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Designated laboratory partner for NEXT Retail UK, providing certified quality evaluation, physical durability assessments, and chemical restriction screening accepted across UK and European retail supply networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OPERATIONAL REACH & TESTING FACILITIES (CLEAN INFORMATIONAL SECTION WITH HORIZONTAL RULES) */}
      <section className="w-full py-16 lg:py-24 bg-surface" id="facilities">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Overline */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-secondary uppercase font-semibold text-xs tracking-widest block mb-2">
              LOGISTICAL NETWORK
            </span>
            <h2 className="font-headline-md text-2xl lg:text-3xl font-bold text-on-surface tracking-tight">
              LABORATORY NETWORK &amp; SAMPLE LOGISTICS
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Serving Pakistan's primary manufacturing industrial corridors through dedicated testing facilities and regional collection infrastructure.
            </p>
          </div>

          {/* Facility 1 */}
          <div className="py-8 border-t border-outline-variant/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="font-label-mono-tech text-xs text-secondary uppercase font-semibold block mb-1">
                  CENTRAL FACILITY
                </span>
                <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                  Main Laboratory &amp; Head Office
                </h3>
                <p className="text-xs text-outline font-medium mt-1">Faisalabad Textile Hub</p>
              </div>

              <div className="lg:col-span-4 font-body-sm text-body-sm text-on-surface-variant">
                <p className="font-semibold text-on-surface mb-1">Address:</p>
                <p className="leading-relaxed">
                  1st Floor, PTEA Building, 30/7, Faisalabad Bypass, near State Bank, Civil Lines, Faisalabad, Punjab, Pakistan
                </p>
                <div className="mt-3 flex flex-col gap-1 text-xs text-outline">
                  <p><span className="font-semibold text-on-surface-variant">Tel:</span> +92 41 9201578-80</p>
                  <p><span className="font-semibold text-on-surface-variant">Email:</span> info@pttflab.com</p>
                </div>
              </div>

              <div className="lg:col-span-4 font-body-sm text-body-sm text-on-surface-variant">
                <p className="font-semibold text-on-surface mb-1">Operational Scope:</p>
                <p className="leading-relaxed">
                  Physical fabric &amp; yarn mechanical testing, colorfastness evaluation, chemical RSL screening, environmental effluent &amp; wastewater analysis, and petroleum products testing.
                </p>
              </div>
            </div>
          </div>

          {/* Facility 2 */}
          <div className="py-8 border-t border-b border-outline-variant/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="font-label-mono-tech text-xs text-secondary uppercase font-semibold block mb-1">
                  REGIONAL DROP-OFF &amp; LIAISON
                </span>
                <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                  Lahore Marketing &amp; Sample Drop-off Centre
                </h3>
                <p className="text-xs text-outline font-medium mt-1">Lahore Regional Office</p>
              </div>

              <div className="lg:col-span-4 font-body-sm text-body-sm text-on-surface-variant">
                <p className="font-semibold text-on-surface mb-1">Address:</p>
                <p className="leading-relaxed">
                  188 - G4, Johar Town, Lahore, Punjab, Pakistan
                </p>
                <div className="mt-3 flex flex-col gap-1 text-xs text-outline">
                  <p><span className="font-semibold text-on-surface-variant">Direct:</span> +92 302 4744715</p>
                  <p><span className="font-semibold text-on-surface-variant">Email:</span> marketing@pttflab.com</p>
                </div>
              </div>

              <div className="lg:col-span-4 font-body-sm text-body-sm text-on-surface-variant">
                <p className="font-semibold text-on-surface mb-1">Operational Scope:</p>
                <p className="leading-relaxed">
                  Daily sample collection, courier dispatch to Central Lab, test schedule coordination, commercial customer liaison, and report issuance for Lahore &amp; northern Punjab industrial units.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

