import React from 'react';
import { Link } from 'react-router-dom';

export const PPETestingPage: React.FC = () => {
  return (
    <div className="w-full bg-surface">
      {/* 1. HERO SECTION (50/50 SPLIT GRID WITH VERTICAL IMAGE FRAMING) */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface pt-8 pb-20 lg:pb-24">
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-tertiary-fixed-dim/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-medium text-outline">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface-variant">Our Services</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-secondary font-semibold">PPE</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: 50% Content */}
            <div className="flex flex-col gap-space-md">
              <h1 className="font-headline-lg text-headline-md lg:text-headline-lg font-bold text-primary-container tracking-tight leading-tight">
                PERSONAL PROTECTIVE EQUIPMENT (PPE) TESTING
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Comprehensive certification testing and protective barrier evaluations. Supporting manufacturers of industrial workwear, motorcycle protective garments, and medical apparel to verify life-critical safety, mechanical resistance, and regulatory compliance.
              </p>

              {/* Standards Bar */}
              <div className="pt-8 mt-2 flex flex-col gap-3">
                <span className="font-label-caption text-label-caption text-outline uppercase tracking-widest font-semibold">
                  COMPLIANT WITH GLOBAL PPE SAFETY DIRECTIVES: EN ISO • ASTM • CE PPE REGULATION • NFPA • CPSC
                </span>
                <div className="flex flex-wrap items-center gap-6 lg:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all">
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">EN ISO</span>
                  <span className="font-headline-sm text-headline-sm font-extrabold tracking-widest text-on-surface">ASTM</span>
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">CE PPE</span>
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">NFPA</span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-normal text-on-surface">CPSC</span>
                </div>
              </div>
            </div>

            {/* Right Column: 50% Vertical Image Framing */}
            <div className="relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant/20">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjAotG_o0In3aszl2FReXrcvc7GDNsDgeM3jq1COZ14HlGPNELNU5Jy7eVPiY-c_G47TGbTNiWOQB_9M4SikzoIDhct7dk4dO01OkvBHC4_9j3k3CmjtPygdVlhTAsjTiaWNQi2yvIYAb2OmKx2nc4TT9aPik8KSfHqGsOi3wkypCbkngUs_EWQdyfFdsyXuuFIdCQiQTFDDkp2Tcu1HBhdTMjKYzUep6MWG_rZItemcwfnaUOa1Jw"
                    alt="Personal protective equipment testing and safety barrier verification"
                    className="w-full h-[460px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/70 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRIMARY EQUIPMENT SECTORS (3-COLUMN PILLAR CARDS) */}
      <section className="w-full py-16 lg:py-20 bg-surface border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              TARGET SECTOR DIVISIONS
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              PRIMARY PROTECTIVE EQUIPMENT SECTORS
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Specialized testing frameworks aligned with international occupational safety mandates, motorsport directives, and medical barrier standards.
            </p>
          </div>

          {/* 3-Column Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-6">
                  <span className="material-symbols-outlined text-[26px]">construction</span>
                </div>
                <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                  INDUSTRIAL WORKWEAR
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-4 font-bold">
                  Occupational Health &amp; Safety (OH&amp;S) Apparel
                </h3>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Industrial high-visibility workwear photometric performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Flame resistant, thermal, and convective heat protective garments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Arc flash protection and industrial anti-static dissipating apparel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Industrial abrasion, tear resistance, and puncture shielding</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-6">
                  <span className="material-symbols-outlined text-[26px]">sports_motorsports</span>
                </div>
                <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                  MOTORSPORT &amp; IMPACT
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-4 font-bold">
                  Biker &amp; Motorsports Protective Gear
                </h3>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Impact abrasion resistance for motorcyclist jackets and trousers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Seam burst strength and impact energy dissipation testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Garment tear strength and mechanical cut endurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Limb protector impact transmission and shock absorption</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-6">
                  <span className="material-symbols-outlined text-[26px]">medical_services</span>
                </div>
                <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                  MEDICAL &amp; CLINICAL BARRIERS
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-4 font-bold">
                  Healthcare &amp; Medical Protective Equipment
                </h3>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Synthetic blood and viral penetration resistance for surgical gowns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Bacterial filtration efficiency (BFE) and differential pressure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Fluid resistance and particulate penetration barriers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Tensile, tear, and lint generation properties of non-woven PPE</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPREHENSIVE LABORATORY CAPABILITIES (GRID OF 4 CLEAN TECHNICAL CARDS) */}
      <section className="w-full py-16 lg:py-20 bg-surface-container-low" id="capabilities">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              METROLOGY &amp; BARRIER EVALUATION
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              COMPREHENSIVE LABORATORY CAPABILITIES
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Quantitative test procedures evaluating mechanical resilience, thermal shielding, biological containment, and ergonomic comfort.
            </p>
          </div>

          {/* 4 Clean Technical Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">fitness_center</span>
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                    Mechanical Impact &amp; Abrasion Resistance
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  Rigorous physical impact and friction endurance testing designed to quantify barrier survival under severe mechanical friction and shock loads.
                </p>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Impact abrasion resistance using Cambridge/Darmstadt test rigs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Static and dynamic puncture testing for safety fabrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>High-energy drop-weight impact attenuation on limb guards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Bursting resistance of knitted protective barriers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">local_fire_department</span>
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                    Thermal &amp; Flame Protection Analysis
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  Thermal barrier quantification determining flash fire protection, heat flux transmission, and resistance to molten material hazards.
                </p>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Limited flame spread testing and surface ignition behavior</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Radiant and convective heat transmission indexing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Contact heat transmission and molten metal splash resistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Thermal shrinkage and post-exposure material integrity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">water_drop</span>
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                    Liquid &amp; Biological Barrier Filtration
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  High-reliability penetration resistance protocols safeguarding healthcare workers and hazardous material handlers against micro-biological risks.
                </p>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Hydrostatic pressure resistance and spray penetration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Resistance to penetration by blood-borne pathogens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Differential air permeability for breathing resistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Particulate filtration efficiency (PFE) testing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">visibility</span>
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                    Ergonomic &amp; Wearer Safety Evaluation
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  Physiological and optical performance assessments ensuring safety gear provides maximal wearer protection without compromising mobility.
                </p>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>High-visibility retroreflective material luminance and color</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Ergonomic assessment, restraint, and movement restraint checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Innocuousness, pH neutral value, and heavy metal screening</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Washing durability and stability of protective finishes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL TESTING INFRASTRUCTURE (MINIMALIST 3-PART HORIZONTAL ROW) */}
      <section className="w-full py-16 lg:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              LABORATORY RIGOR
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              TECHNICAL TESTING INFRASTRUCTURE
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Calibrated specialized drop towers, combustion chambers, and hydrostatic cells engineered to verify compliance with European and global PPE regulations.
            </p>
          </div>

          {/* 3-Part Horizontal Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Section 1 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">speed</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  INFRASTRUCTURE 01
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  Dynamic Impact Rigs &amp; Drop Towers
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Precise force transducer energy attenuation measuring
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  High-speed instrumented drop rigs simulating severe impact decelerations for limb armor, back protectors, and structural toe-caps with high-frequency piezoelectric load cell data acquisition.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">opacity</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  INFRASTRUCTURE 02
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  Hydrostatic Head &amp; Barrier Penetration Units
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  High-pressure fluid barrier verification
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Automated hydrostatic pressure test apparatus and synthetic blood penetration cells measuring biological liquid holdout under sustained pressure gradients up to 200 kPa.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">thermostat</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  INFRASTRUCTURE 03
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  Thermal Exposure &amp; Cone Radiance Apparatus
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Calibrated flame resistance and heat shield profiling
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Calibrated radiant heat exposure sensors and controlled burner assemblies profiling heat flux transmission through multilayer protective systems under intense thermal stress.
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
                  ISO/IEC 17025:2005 (PNAC) • CE PPE REGULATION CONFORMITY • INTERNATIONAL RECOGNITION
                </span>
              </div>
            </div>
            <div className="text-xs text-on-primary-container/80 font-mono text-center sm:text-right">
              Audit-Ready Certification for Global Protective Equipment Exporters
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

