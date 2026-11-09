import React from 'react';
import { Link } from 'react-router-dom';

export const LeatherFootwearPage: React.FC = () => {
  return (
    <div className="w-full bg-surface">
      {/* 1. HERO SECTION (INVERTED ASYMMETRICAL LAYOUT: IMAGE LEFT, CONTENT RIGHT) */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface pt-8 pb-20 lg:pb-24">
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-tertiary-fixed-dim/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-outline">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface-variant">Our Services</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-secondary font-semibold">Leather &amp; Footwear</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Left Column: Hero Visual (Image on the LEFT) */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant/20">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv46rmoGzAPBSWviEPIvlaxLMRbc9Mzb2hPGFRWR0mAolakiVwdpIj_bo1g1gspVD1iE6-WwwVaaiqLLwWrRwwi_zbOTKtoLy2Wqzbyg841TUxL8ulEWnqXWTefBSsblitpjLtNVWAdEMOV66H46x-GA_k-XfzzQMowaElb-N6n7WB2tIe6APMFGUiQEgsL0mDcxriBQhjIcsVXmyqSF5mfA6VZHS_yyesvvC-J7mBRCqrSJqmcd2v"
                    alt="Leather inspection and footwear testing materials"
                    className="w-full h-[460px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Right Column: Content on the RIGHT */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-space-md">
              {/* Main Heading */}
              <h1 className="font-headline-lg text-headline-md lg:text-headline-lg font-bold text-primary-container tracking-tight leading-tight">
                LEATHER &amp; FOOTWEAR TESTING SERVICES
              </h1>

              {/* Subtitle / Description */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Comprehensive physical, chemical, and performance evaluation for raw hides, finished leather goods, safety footwear, and fashion accessories. Delivering audit-ready compliance to meet international trade and safety benchmarks.
              </p>

              {/* Standards Bar */}
              <div className="pt-8 mt-2 flex flex-col gap-3">
                <span className="font-label-caption text-label-caption text-outline uppercase tracking-widest font-semibold">
                  COMPLIANT WITH GLOBAL LEATHER &amp; FOOTWEAR BENCHMARKS: SATRA • ISO • ASTM • DIN • EN ISO 20345
                </span>
                <div className="flex flex-wrap items-center gap-6 lg:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all">
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">SATRA</span>
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">ISO</span>
                  <span className="font-headline-sm text-headline-sm font-extrabold tracking-widest text-on-surface">ASTM</span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-normal text-on-surface">DIN</span>
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">EN ISO 20345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & MATERIAL SPECTRUM (3-COLUMN MINIMAL GRID) */}
      <section className="w-full py-16 lg:py-20 bg-surface border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              MATERIAL SPECTRUM
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              SPECIALIZED SECTOR TESTING SOLUTIONS
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Rigorous evaluation workflows tailored to the distinct mechanical properties of hides, technical soling compounds, and finished leather articles.
            </p>
          </div>

          {/* 3-Column Minimal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-outline-variant/10">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-6">
                <span className="material-symbols-outlined text-[26px]">layers</span>
              </div>
              <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                GRAIN &amp; TANNERY EVALUATION
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-3 font-bold">
                Finished Leather &amp; Upholstery
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Grain strength, tear resistance, finish adhesion, and flexing endurance. Engineered assessments for automotive interiors, garment nappa, upholstery hides, and gloving leathers to ensure structural grain stability under repeated mechanical stress.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-outline-variant/10">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-6">
                <span className="material-symbols-outlined text-[26px]">directions_walk</span>
              </div>
              <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                SOLING &amp; TREAD METROLOGY
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-3 font-bold">
                Footwear &amp; Soling Materials
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Sole abrasion, slip resistance, heel attachment strength, and flex fatigue. Rigorous testing of vulcanized rubber, PU, EVA midsoles, and leather outsoles for tread wear resistance, bonding permanence, and all-weather traction.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-outline-variant/10">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-6">
                <span className="material-symbols-outlined text-[26px]">work</span>
              </div>
              <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                FINISHED GOODS &amp; HARDWARE
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-3 font-bold">
                Leather Goods &amp; Accessories
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Strap pull strength, hardware corrosion resistance, zipper durability, and seam integrity. Endurance testing for luxury handbags, luggage, belts, and small leather goods validating buckle tensile retention, stitching shear, and finish longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SUB-SERVICES (2x2 ASYMMETRIC DETAILED FEATURE GRID) */}
      <section className="w-full py-16 lg:py-20 bg-surface-container-low" id="capabilities">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              ACCREDITED METHODOLOGIES
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              CORE SUB-SERVICES &amp; PROTOCOLS
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Certified metrological analysis spanning physical durability, safety footwear compliance, surface fastness, and international Restricted Substances Lists (RSL).
            </p>
          </div>

          {/* 2x2 Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Block 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">fitness_center</span>
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                    Mechanical &amp; Physical Durability
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  Quantitative stress, elongation, and tear testing to establish baseline mechanical endurance for raw hides and processed leathers.
                </p>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Bally Flexometer crack resistance and flexing endurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Tensile strength and elongation of leather specimens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Tear resistance (Baumann &amp; trouser tear methods)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Grain crack index and burst strength via lastometer</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">shield</span>
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                    Footwear Safety &amp; Performance Testing
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  Stringent validation for industrial protective footwear and consumer shoes against European and international safety directives.
                </p>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>EN ISO safety footwear toe-cap impact and compression</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Outsole abrasion resistance using rotary drum testers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Whole-shoe flexing and upper-to-sole bonding adhesion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Dynamic water penetration and slip resistance testing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">palette</span>
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                    Colorfastness &amp; Surface Performance
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  Surface finishing assessment measuring resistance to pigment migration, wet rubbing, artificial light, and sweat exposure.
                </p>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Veslic rub fastness testing (dry, wet, and perspiration)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Water spotting and perspiration color change evaluation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Finish adhesion and wet/dry crocking performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Resistance to artificial light fading and xenon arc exposure</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">science</span>
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                    Chemical Compliance &amp; RSL Screening
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  High-precision analytical chemistry detecting hazardous tanning residues, restricted colorants, and heavy metals.
                </p>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Hexavalent Chromium (Cr VI) detection via ISO 17075</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Banned azo colorants and alkylphenol ethoxylates (APEOs)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Formaldehyde content and pH value determinations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Chlorinated phenols (PCP, TeCP) and heavy metal screening</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL TESTING CAPABILITIES (STACKED FULL-WIDTH HORIZONTAL SECTION) */}
      <section className="w-full py-16 lg:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              LABORATORY INFRASTRUCTURE
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              TECHNICAL TESTING CAPABILITIES &amp; APPARATUS
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Specialized machinery engineered specifically for footwear stress analysis, low-temperature cracking, and hazardous compound screening.
            </p>
          </div>

          {/* 3-Part Horizontal Split */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Apparatus 1 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  APPARATUS 01
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  SATRA STM Footwear &amp; Soling Abrasion Units
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Outsole wear simulation and heel fatigue analysis
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Continuous rotary drum abrasion testers and whole-shoe flexometers replicating high-stress biomechanical forces to evaluate sole wear rates and bonding permanence under dynamic load.
                </p>
              </div>
            </div>

            {/* Apparatus 2 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">speed</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  APPARATUS 02
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  Bally Flexometers &amp; Lastometers
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Multi-specimen low-temperature flex cracking evaluation
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Multi-station flexometers operating in conditioned thermal chambers to measure micro-fissuring, grain distension, and finish cracking thresholds under continuous cyclic flexing.
                </p>
              </div>
            </div>

            {/* Apparatus 3 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">biotech</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  APPARATUS 03
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  Spectrophotometry &amp; Chemical Extraction Systems
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Chromium VI analysis and hazardous compound screening
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  High-resolution UV-Vis spectrophotometers and automated solid-phase extraction systems operating according to ISO 17075-1 and ISO 17075-2 analytical methodologies.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Accreditation Banner */}
          <div className="mt-8 p-6 rounded-2xl bg-primary-container text-surface-bright flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[28px] text-secondary-fixed">
                verified
              </span>
              <div>
                <span className="font-label-mono-tech text-label-caption text-on-primary-container uppercase block font-semibold">
                  ACCREDITATION STATUS
                </span>
                <span className="font-label-mono-tech text-label-mono-tech text-surface-bright tracking-wider font-medium">
                  ISO/IEC 17025:2005 (PNAC) • SATRA METHODOLOGIES ALIGNED • INTERNATIONAL ACCEPTANCE
                </span>
              </div>
            </div>
            <div className="text-xs text-on-primary-container/80 font-mono text-center sm:text-right">
              Audit-Ready Certification for Global Export
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

