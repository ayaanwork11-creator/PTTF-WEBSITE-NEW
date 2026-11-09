import React from 'react';
import { Link } from 'react-router-dom';

export const PetroleumTestingPage: React.FC = () => {
  return (
    <div className="w-full bg-surface">
      {/* 1. HERO SECTION (CENTERED HIGH-IMPACT BANNER LAYOUT) */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface pt-8 pb-16 lg:pb-20">
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-tertiary-fixed-dim/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-center gap-2 text-xs font-medium text-outline">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface-variant">Our Services</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-secondary font-semibold">Petroleum</span>
          </nav>

          {/* Centered Editorial Header */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
            <h1 className="font-headline-lg text-headline-md lg:text-headline-lg font-bold text-primary-container tracking-tight leading-tight">
              PETROLEUM &amp; REFINED PRODUCTS TESTING
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-3xl leading-relaxed">
              Precision chemical analysis, fuel specification verification, and lubricant condition monitoring. Supporting refineries, industrial operators, and distributors with dependable data to maintain machinery reliability and regulatory compliance.
            </p>

            {/* Standards Bar */}
            <div className="pt-8 mt-2 flex flex-col items-center gap-3">
              <span className="font-label-caption text-label-caption text-outline uppercase tracking-widest font-semibold">
                COMPLIANT WITH GLOBAL PETROLEUM TESTING METHODS: ASTM • IP • ISO • DIN • API
              </span>
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 opacity-75 grayscale hover:grayscale-0 transition-all">
                <span className="font-headline-sm text-headline-sm font-extrabold tracking-widest text-on-surface">ASTM</span>
                <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">IP</span>
                <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">ISO</span>
                <span className="font-headline-sm text-headline-sm font-semibold tracking-normal text-on-surface">DIN</span>
                <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">API</span>
              </div>
            </div>
          </div>

          {/* Panoramic Full-Width Aspect Image Container */}
          <div className="w-full relative mx-auto max-w-6xl mt-4">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant/20">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdlVx6LVPZqt4U0iF-67ZBNJaosCubBDWna442--KbODKcMY8yXAzp3kCBeA2W-YPWZgtsIIYxGcrQiGPYvYk_97xiSEALg6-hERFPPlBX5g-T93vpbRZA77CHK7veSwBk42D0nlKcBPfnGGiWx1as9VlLEFGYe17YAme9kdqDvT710KJhHq2Q7SsLi1XT01LFJL6WC_qCL52VkVZUvBDclCdki71Q-yggmwwRgxBIhL2PQZhogJUz"
                alt="Automated petroleum testing distillation and viscosity glassware analysis"
                className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/70 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE FUEL & LUBRICANT CATEGORIES (4-COLUMN BALANCED GRID) */}
      <section className="w-full py-16 lg:py-20 bg-surface border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              PRODUCT CLASSIFICATIONS
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              CORE FUEL &amp; LUBRICANT TESTING DOMAINS
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Comprehensive analytical capabilities covering light distillates, engine lubricants, marine bunker fuels, and heavy industrial fluids.
            </p>
          </div>

          {/* 4-Column Balanced Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">oil_barrel</span>
                </div>
                <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                  AUTOMOTIVE &amp; AVIATION
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-2 font-bold">
                  Fuel &amp; Diesel Analysis
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Cetane index, distillation profiles, flash point, and sulfur quantification
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Complete quality assurance for commercial automotive diesel, aviation turbine fuels (Jet A-1), and motor gasolines verifying combustion performance and emissions compliance.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">opacity</span>
                </div>
                <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                  POWERTRAIN &amp; GEAR
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-2 font-bold">
                  Lubricants &amp; Engine Oils
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Kinematic viscosity, viscosity index, total base number, and wear metals
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  In-depth condition monitoring and qualification for crankcase engine oils, gear lubes, and transmission fluids ensuring optimum film strength and anti-wear protection.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">directions_boat</span>
                </div>
                <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                  MARINE &amp; POWER GEN
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-2 font-bold">
                  Heavy Fuel Oils &amp; Marine Bunkers
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Viscosity grading, density, carbon residue, and ash content
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Rigorous commercial fuel bunker testing in accordance with ISO 8217 specifications, detecting catalyst fines, aluminum-silicon abrasives, and combustion stability.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
                </div>
                <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                  HEAVY INDUSTRY
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-2 font-bold">
                  Industrial Oils &amp; Hydraulic Fluids
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Dielectric strength, oxidation stability, water demulsibility, and foam limits
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Specialized testing of turbine oils, transformer oils, compressor lubricants, and hydraulic power fluids safeguarding high-pressure industrial systems against catastrophic failure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEEP-DIVE CAPABILITIES (ALTERNATING 2-COLUMN ROWS WITH SUPPORTING IMAGES) */}
      <section className="w-full py-16 lg:py-20 bg-surface-container-low" id="capabilities">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              DEEP-DIVE CAPABILITIES
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              ADVANCED PETROLEUM METROLOGY
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Detailed analytical workflows and instrumentation applied across physical, chemical, and preventative condition monitoring.
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:gap-16">
            {/* ROW 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-surface-container-lowest p-8 lg:p-10 rounded-3xl border border-outline-variant/10 shadow-sm">
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">thermostat</span>
                  </div>
                  <h3 className="font-headline-sm text-2xl font-bold text-on-surface">
                    Physical &amp; Thermal Characteristics
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Essential thermal and flow property determinations defining the safe handling, transport volatility, and low-temperature fluidity of petroleum fractions.
                </p>
                <ul className="flex flex-col gap-3.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Closed and open cup flash point determination (Pensky-Martens / Cleveland)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Atmospheric distillation ranges and boiling point distribution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Cloud point, pour point, and cold filter plugging point (CFPP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Density, relative density, and API gravity measurements</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-surface-container border border-outline-variant/20">
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
                    alt="Thermal distillation and flash point laboratory evaluation"
                    className="w-full h-[280px] lg:h-[320px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* ROW 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-surface-container-lowest p-8 lg:p-10 rounded-3xl border border-outline-variant/10 shadow-sm">
              <div className="lg:col-span-5 order-2 lg:order-1 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-surface-container border border-outline-variant/20">
                  <img
                    src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                    alt="Chemical composition and titration analysis of petroleum"
                    className="w-full h-[280px] lg:h-[320px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">science</span>
                  </div>
                  <h3 className="font-headline-sm text-2xl font-bold text-on-surface">
                    Chemical Composition &amp; Contaminant Analysis
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  High-sensitivity quantification of corrosive sulfur species, trace moisture, inorganic contaminants, and acidic oxidation by-products.
                </p>
                <ul className="flex flex-col gap-3.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Total sulfur analysis and trace sulfur quantification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Water content via Karl Fischer titration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Ash content and carbon residue (Conradson / Micro Carbon)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Total Acid Number (TAN) and Total Base Number (TBN) titrations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ROW 3: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-surface-container-lowest p-8 lg:p-10 rounded-3xl border border-outline-variant/10 shadow-sm">
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">speed</span>
                  </div>
                  <h3 className="font-headline-sm text-2xl font-bold text-on-surface">
                    In-Service Lubricant &amp; Condition Monitoring
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Proactive preventative maintenance analysis tracking machinery component wear, additive depletion, and fluid contamination.
                </p>
                <ul className="flex flex-col gap-3.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Wear metal and additive concentration analysis via spectroscopy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Kinematic viscosity testing at 40°C and 100°C</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Particulate cleanliness contamination levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Varnish potential and oxidation stability monitoring</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-surface-container border border-outline-variant/20">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                    alt="Spectroscopic in-service oil condition monitoring"
                    className="w-full h-[280px] lg:h-[320px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LABORATORY APPARATUS & METROLOGICAL SCOPE (3-COLUMN MINIMALIST TECHNICAL GRID) */}
      <section className="w-full py-16 lg:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              METROLOGICAL SCOPE
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              LABORATORY APPARATUS &amp; METROLOGICAL SCOPE
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              State-of-the-art analytical equipment calibrated against certified reference materials (CRMs) to ensure audit-ready precision.
            </p>
          </div>

          {/* 3-Column Minimalist Technical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">thermostat</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  INSTRUMENTATION 01
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  Automated Distillation &amp; Vapor Pressure Systems
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Exact volumetric recovery profiling and volatility limits
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Automated atmospheric distillation analyzers and Reid vapor pressure (RVP) bomb instruments delivering continuous recovery curves conforming to ASTM D86 and ASTM D323.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">timer</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  INSTRUMENTATION 02
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  High-Precision Automated Viscometers
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Precise temperature bath kinematic viscosity measurements
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Micro-processor controlled capillary viscometer baths maintaining bath stability within ±0.01°C at 40°C and 100°C for strict ASTM D445 compliance.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">biotech</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  INSTRUMENTATION 03
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  Sulfur &amp; Elemental Analyzers
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  XRF and spectroscopic elemental detection down to trace levels
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Monochromatic wavelength-dispersive X-ray fluorescence (WDXRF) and inductively coupled plasma (ICP) spectrometers quantifying sulfur down to sub-ppm thresholds.
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
                  ISO/IEC 17025:2005 (PNAC) • ASTM &amp; IP METHODOLOGIES • RECOGNIZED BY GLOBAL INDUSTRIAL OPERATORS
                </span>
              </div>
            </div>
            <div className="text-xs text-on-primary-container/80 font-mono text-center sm:text-right">
              Audit-Ready Certification for Global Compliance
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
