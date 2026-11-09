import React from 'react';
import { Link } from 'react-router-dom';

export const TextilesApparelPage: React.FC = () => {
  return (
    <div className="w-full bg-surface">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface pt-8 pb-20 lg:pb-24">
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-tertiary-fixed-dim/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-outline">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface-variant">Our Services</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-secondary font-semibold">Textiles &amp; Apparel</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading, Subtitle, CTAs, Standards */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              {/* Main Heading */}
              <h1 className="font-headline-lg text-headline-md lg:text-headline-lg font-bold text-primary-container tracking-tight leading-tight">
                TEXTILES &amp; APPAREL TESTING SOLUTIONS
              </h1>

              {/* Subtitle */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Precision material evaluation, yarn analysis, and finished garment testing. ISO/IEC 17025 accredited laboratory testing powered by SDL-ATLAS instrumentation to ensure global compliance for textile manufacturers and exporters.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-space-md pt-2">
                <a
                  href="#test-methods"
                  className="inline-flex items-center gap-space-xs bg-primary-container hover:bg-inverse-surface text-surface-bright font-title-sm text-title-sm px-6 py-3.5 rounded-lg shadow-md transition-all group"
                >
                  <span>Explore Test Methods</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>

              {/* Standards Bar */}
              <div className="pt-8 mt-2 flex flex-col gap-3">
                <span className="font-label-caption text-label-caption text-outline uppercase tracking-widest font-semibold">
                  COMPLIANT WITH GLOBAL STANDARDS: AATCC • ASTM • ISO • BS EN • DIN • NEXT UK
                </span>
                <div className="flex flex-wrap items-center gap-6 lg:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all">
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-on-surface">AATCC</span>
                  <span className="font-headline-sm text-headline-sm font-extrabold tracking-widest text-on-surface">ASTM</span>
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">ISO</span>
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">BS EN</span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-normal text-on-surface">DIN</span>
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">NEXT UK</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant/20">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-VL7aXEsnT5jWSmRLryeH702V17OWZaFVx_ksiZdmx9r9XUwP1KH_yr93RTKJ74wZPg5uHWG3raibjcGwrMPDQAQyq4OzHOOocqBh0OvJIkjV-KNoms4wTJTpfle6FiKCwgpJpUzfHQnmqHMIf99H35VkbRSWslYmtSEbQBogJAQMeuFx_Fr99ikhiXpUN-2peSIVkMlhp6HBdEToxgFt0t4JCkw82UHLE0Uqn12vSk717Ahsqcgn"
                    alt="Fabric rolls and precision textile testing apparatus"
                    className="w-full h-[440px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PILLAR CARDS (4-COLUMN GRID) */}
      <section className="w-full py-16 bg-surface border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-outline-variant/10">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container mb-4">
                <span className="material-symbols-outlined text-[26px]">fitness_center</span>
              </div>
              <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                TENSILE &amp; MECHANICAL
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2 font-bold">
                Physical Strength &amp; Durability
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Tensile, tear, burst strength, and seam slippage evaluation to guarantee structural fabric integrity under rigorous wear.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-outline-variant/10">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container mb-4">
                <span className="material-symbols-outlined text-[26px]">palette</span>
              </div>
              <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                VISUAL INTEGRITY
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2 font-bold">
                Colorfastness &amp; Appearance
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Washing, light, crocking, and rubbing fastness assessments ensuring textile shades remain vibrant across lifetime wash cycles.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-outline-variant/10">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container mb-4">
                <span className="material-symbols-outlined text-[26px]">straighten</span>
              </div>
              <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                FIT &amp; RETENTION
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2 font-bold">
                Dimensional Stability &amp; Shrinkage
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Washing shrinkage, spirality, torque, and skewness measurement for knits and woven garments to retain perfect sizing.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-outline-variant/10">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container mb-4">
                <span className="material-symbols-outlined text-[26px]">science</span>
              </div>
              <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                ECOLOGICAL COMPLIANCE
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2 font-bold">
                Chemical &amp; Safety Compliance
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                RSL, azo dyes, heavy metals, formaldehyde, and pH testing certifying textiles comply with global eco and health standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILED SUB-SERVICES GRID */}
      <section className="w-full py-16 bg-surface-container-low" id="test-methods">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                ACCREDITED METHODOLOGIES
              </span>
              <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
                COMPREHENSIVE TEXTILE TESTING CAPABILITIES
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-2">
                Industry-benchmarked testing protocols performed by certified metrologists using SDL-ATLAS testing instruments.
              </p>
            </div>
          </div>

          {/* 4-Card Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sub-Service Card 1 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-outline-variant/10">
              <div className="relative h-44 w-full overflow-hidden bg-surface-container">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-VL7aXEsnT5jWSmRLryeH702V17OWZaFVx_ksiZdmx9r9XUwP1KH_yr93RTKJ74wZPg5uHWG3raibjcGwrMPDQAQyq4OzHOOocqBh0OvJIkjV-KNoms4wTJTpfle6FiKCwgpJpUzfHQnmqHMIf99H35VkbRSWslYmtSEbQBogJAQMeuFx_Fr99ikhiXpUN-2peSIVkMlhp6HBdEToxgFt0t4JCkw82UHLE0Uqn12vSk717Ahsqcgn"
                  alt="Fabric and Yarn Mechanical Testing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-semibold text-primary-container">
                  Mechanical
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1 mb-3 group-hover:text-secondary transition-colors">
                  Fabric &amp; Yarn Mechanical Testing
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Rigorous tensile, burst, and tear evaluations determining fabric stress thresholds and seam strength.
                </p>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Tensile &amp; Tear Strength (ASTM D5034 / ISO 13934)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Martindale Abrasion &amp; Pilling Resistance</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Seam Strength &amp; Seam Slippage</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Yarn Count, Twist &amp; Fabric Density (EPI/PPI)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sub-Service Card 2 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-outline-variant/10">
              <div className="relative h-44 w-full overflow-hidden bg-surface-container">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv46rmoGzAPBSWviEPIvlaxLMRbc9Mzb2hPGFRWR0mAolakiVwdpIj_bo1g1gspVD1iE6-WwwVaaiqLLwWrRwwi_zbOTKtoLy2Wqzbyg841TUxL8ulEWnqXWTefBSsblitpjLtNVWAdEMOV66H46x-GA_k-XfzzQMowaElb-N6n7WB2tIe6APMFGUiQEgsL0mDcxriBQhjIcsVXmyqSF5mfA6VZHS_yyesvvC-J7mBRCqrSJqmcd2v"
                  alt="Colorfastness and Visual Performance Testing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-semibold text-primary-container">
                  Colorfastness
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1 mb-3 group-hover:text-secondary transition-colors">
                  Colorfastness &amp; Visual Performance
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Spectrophotometric and visual evaluations measuring color retention across light, wash, and sweat exposure.
                </p>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Fastness to Home Laundering &amp; Commercial Washing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Dry &amp; Wet Crocking / Rubbing Fastness</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Fastness to Artificial Light &amp; Weathering</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Perspiration &amp; Water Spotting Resistance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sub-Service Card 3 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-outline-variant/10">
              <div className="relative h-44 w-full overflow-hidden bg-surface-container">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjAotG_o0In3aszl2FReXrcvc7GDNsDgeM3jq1COZ14HlGPNELNU5Jy7eVPiY-c_G47TGbTNiWOQB_9M4SikzoIDhct7dk4dO01OkvBHC4_9j3k3CmjtPygdVlhTAsjTiaWNQi2yvIYAb2OmKx2nc4TT9aPik8KSfHqGsOi3wkypCbkngUs_EWQdyfFdsyXuuFIdCQiQTFDDkp2Tcu1HBhdTMjKYzUep6MWG_rZItemcwfnaUOa1Jw"
                  alt="Dimensional Stability and Fit Retention"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-semibold text-primary-container">
                  Stability &amp; Fit
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1 mb-3 group-hover:text-secondary transition-colors">
                  Dimensional Stability &amp; Fit Retention
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Accurate shrinkage, spirality, and recovery metrics ensuring garment patterns maintain exact fit and drape.
                </p>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Dimensional Stability to Washing &amp; Drying (AATCC 135/150)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Spirality / Torque &amp; Skewness in Knits</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Appearance Retention After Multiple Washes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Ironing &amp; Steaming Dimensional Change</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sub-Service Card 4 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-outline-variant/10">
              <div className="relative h-44 w-full overflow-hidden bg-surface-container">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhiqiPJYZ60Tauf7Ai9txhRVU7WWqif2Bxznh3jRYWupUPTwPfkzslk8qa7gj37q70eXoEkwX0a1lR30kS7T5D-1z5ivdiSvqZ7V6zr1NsEO2iOtx1wjIpQiN4yJjxoIAu_spiItcxNIOIH6KYXVOo8O4_eTLVfG8WfU_xOnv1Ja62MK3Lt12RbL9wXT9Us6Mn_1ocW6AjHjVE9sNT0Cwp4VYOLD4lKl7LWUZf6giRT7lnzC2M4De5"
                  alt="Chemical and Ecological Testing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-semibold text-primary-container">
                  Chemical &amp; RSL
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1 mb-3 group-hover:text-secondary transition-colors">
                  Chemical &amp; Ecological Testing
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Detection of hazardous substances, azo dyes, and pH levels ensuring complete international chemical safety compliance.
                </p>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Formaldehyde &amp; Phenol Content Screening</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>pH of Aqueous Extract (ISO 3071 / AATCC 81)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Banned Azo Dyes &amp; Carcinogenic Amines</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Heavy Metals &amp; Phthalates Testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL INFRASTRUCTURE & EQUIPMENT SHOWCASE */}
      <section className="w-full py-16 bg-surface" id="equipment-showcase">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Certified Testing Rigor & SDL-ATLAS Instrumentation */}
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                LABORATORY BENCHMARK
              </span>
              <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">
                Certified Testing Rigor &amp; SDL-ATLAS Instrumentation
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Operating in full compliance with ISO/IEC 17025 standards, our laboratory utilizes SDL-ATLAS UK &amp; USA equipment to provide repeatable, audit-ready data for major international brands and retailers.
              </p>

              {/* Metric Stats */}
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/10">
                  <span className="font-headline-md text-headline-md font-extrabold text-primary-container block">
                    400+
                  </span>
                  <span className="font-title-sm text-title-sm font-semibold text-on-surface">
                    Standard Test Methods
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Strict continuous in-house testing &amp; QC
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/10">
                  <span className="font-headline-md text-headline-md font-extrabold text-secondary block">
                    100%
                  </span>
                  <span className="font-title-sm text-title-sm font-semibold text-on-surface">
                    Brand Acceptance
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Recognized by premier US &amp; EU retailers
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-3">
                <a
                  href="#download-scope"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Textile Testing Scope of Accreditation (PDF) will download.');
                  }}
                  className="inline-flex items-center gap-2 text-secondary hover:text-on-secondary-fixed-variant font-title-sm text-title-sm font-semibold transition-colors"
                >
                  <span>Download Textile Testing Scope (PDF)</span>
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Right Column: Active Textile Laboratory Equipment Status Card */}
            <div className="lg:col-span-6 bg-surface-container-lowest p-6 lg:p-8 rounded-2xl shadow-xl border border-outline-variant/10">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-secondary-container animate-pulse"></div>
                  <span className="font-title-sm text-title-sm font-bold text-on-surface">
                    Active Textile Laboratory Equipment
                  </span>
                </div>
              </div>

              {/* Equipment Rows */}
              <div className="mt-4 flex flex-col gap-3 font-body-sm text-body-sm">
                {/* Row 1 */}
                <div className="flex items-center p-3.5 rounded-lg bg-surface hover:bg-surface-container-low transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container mt-1.5 shrink-0"></span>
                    <div>
                      <div className="font-title-sm text-title-sm font-semibold text-on-surface">
                        SDL-ATLAS Martindale Abrasion &amp; Pilling Tester
                      </div>
                      <div className="font-label-caption text-label-caption text-outline">
                        Multi-head abrasion testing up to 100,000 cycles
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center p-3.5 rounded-lg bg-surface hover:bg-surface-container-low transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container mt-1.5 shrink-0"></span>
                    <div>
                      <div className="font-title-sm text-title-sm font-semibold text-on-surface">
                        SDL-ATLAS Universal Tensile Strength Machine
                      </div>
                      <div className="font-label-caption text-label-caption text-outline">
                        High-precision CRE load cell for grab &amp; strip tensile
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center p-3.5 rounded-lg bg-surface hover:bg-surface-container-low transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container mt-1.5 shrink-0"></span>
                    <div>
                      <div className="font-title-sm text-title-sm font-semibold text-on-surface">
                        Launder-Ometer &amp; Washing Durability Unit
                      </div>
                      <div className="font-label-caption text-label-caption text-outline">
                        Controlled accelerated thermal and liquor wash cycles
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Accreditation Status Bar */}
              <div className="mt-4 p-4 rounded-xl bg-primary-container text-surface-bright flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[24px] text-secondary-fixed">
                    verified
                  </span>
                  <div>
                    <span className="font-label-mono-tech text-label-caption text-on-primary-container uppercase block">
                      ACCREDITATION STATUS
                    </span>
                    <span className="font-label-mono-tech text-label-mono-tech text-surface-bright tracking-wider">
                      ISO/IEC 17025:2005 (PNAC) • NEXT UK APPROVED LAB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

