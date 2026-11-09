import React from 'react';
import { Link } from 'react-router-dom';

export const EnvironmentalTestingPage: React.FC = () => {
  return (
    <div className="w-full bg-surface">
      {/* 1. HERO SECTION (OFFSET TEXT WITH DUAL IMAGE MOSAIC) */}
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
            <span className="text-secondary font-semibold">Environmental</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Headline and Descriptive Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <h1 className="font-headline-lg text-headline-md lg:text-headline-lg font-bold text-primary-container tracking-tight leading-tight">
                ENVIRONMENTAL TESTING &amp; COMPLIANCE SERVICES
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Accredited analytical testing for industrial effluent, drinking water, ambient air, stack emissions, and hazardous waste. Assisting textile mills, tanneries, and manufacturing facilities in achieving strict environmental compliance and reducing ecological impact.
              </p>

              {/* Standards Bar */}
              <div className="pt-8 mt-2 flex flex-col gap-3">
                <span className="font-label-caption text-label-caption text-outline uppercase tracking-widest font-semibold">
                  COMPLIANT WITH GLOBAL &amp; NATIONAL ENVIRONMENTAL GUIDELINES: NEQS • PEPA • ZDHC • USEPA • ISO 14001
                </span>
                <div className="flex flex-wrap items-center gap-6 lg:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all">
                  <span className="font-headline-sm text-headline-sm font-extrabold tracking-widest text-on-surface">NEQS</span>
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">PEPA</span>
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">ZDHC</span>
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">USEPA</span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-normal text-on-surface">ISO 14001</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dual Image Mosaic */}
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
                {/* Image 1: Wastewater Sampling Glassware */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container border border-outline-variant/20">
                  <img
                    src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                    alt="Industrial wastewater effluent sampling glassware analysis"
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent"></div>
                </div>

                {/* Image 2: Environmental Ecology & River Protection */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container border border-outline-variant/20">
                  <img
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
                    alt="Natural river ecosystem and clean environmental water resources"
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENVIRONMENTAL MONITORING DOMAINS (3 LARGE STRUCTURAL CARDS) */}
      <section className="w-full py-16 lg:py-20 bg-surface border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              ECOLOGICAL IMPACT DOMAINS
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              ENVIRONMENTAL MONITORING DIVISIONS
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Comprehensive environmental matrix monitoring helping industrial units adhere to local EPA mandates and international buyer sustainability codes.
            </p>
          </div>

          {/* 3 Large Structural Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Domain 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-6">
                  <span className="material-symbols-outlined text-[26px]">water_drop</span>
                </div>
                <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                  EFFLUENT &amp; DISCHARGE
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-4 font-bold">
                  Industrial Effluent &amp; Wastewater Analysis
                </h3>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Biological Oxygen Demand (BOD5) and Chemical Oxygen Demand (COD)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Total Suspended Solids (TSS) and Total Dissolved Solids (TDS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Heavy metal contamination screening (Lead, Cadmium, Chromium, Nickel, Mercury)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Oil, grease, phenol, and surfactant quantification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Domain 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-6">
                  <span className="material-symbols-outlined text-[26px]">air</span>
                </div>
                <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                  EMISSIONS &amp; AIR HYGIENE
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-4 font-bold">
                  Air Quality &amp; Industrial Stack Emissions
                </h3>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Ambient air monitoring for Particulate Matter (PM2.5 and PM10)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Flue gas emissions analysis (SOx, NOx, CO, and Carbon Dioxide)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Volatile Organic Compounds (VOCs) and workplace air hygiene</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Industrial noise level measurement and acoustic surveys</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Domain 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-6">
                  <span className="material-symbols-outlined text-[26px]">yard</span>
                </div>
                <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
                  POTABLE, HYDROLOGICAL &amp; SOIL
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-4 font-bold">
                  Drinking Water, Groundwater &amp; Soil Testing
                </h3>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Potable water microbiological screening (Total Coliform, E. coli)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Ground and surface water chemical profiling (Hardness, Chlorides, Nitrates)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Sludge characterization and toxic waste leachate testing (TCLP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Soil fertility, salinity, and hazardous contaminant analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILED LABORATORY TESTING SCOPE (4-COLUMN CLEAN GRID) */}
      <section className="w-full py-16 lg:py-20 bg-surface-container-low" id="scope">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              TESTING PARAMETERS
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              DETAILED LABORATORY TESTING SCOPE
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Precision qualitative and quantitative analytical procedures executed by certified environmental chemists.
            </p>
          </div>

          {/* 4-Column Clean Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">science</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-4">
                  Water Quality &amp; Physical Parameters
                </h3>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>pH, electrical conductivity (EC), and turbidity</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Color, odor, and temperature monitoring</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Total alkalinity, hardness, and residual chlorine</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Dissolved Oxygen (DO) analysis</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">biotech</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-4">
                  Toxic Heavy Metals &amp; Inorganics
                </h3>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Atomic absorption spectroscopy (AAS) heavy metal analysis</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Cyanide, fluoride, sulfide, and phosphorus detection</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Free and hexavalent chromium screening</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Trace element quantification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">filter_alt</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-4">
                  Organic &amp; Chemical Pollutants
                </h3>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Persistent organic pollutants and pesticide residues</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Oil &amp; grease content via solvent extraction</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Phenolic compounds and anionic detergents</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Chemical oxygen demand via reflux method</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">health_and_safety</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-4">
                  Industrial Hygiene &amp; Workplace Safety
                </h3>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Factory indoor air quality assessment</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Occupational dust exposure monitoring</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Ambient workplace illumination (Lux) surveys</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Noise boundary mapping and acoustic assessments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ANALYTICAL LABORATORY EQUIPMENT (3-PART HORIZONTAL ARCHITECTURE) */}
      <section className="w-full py-16 lg:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              INSTRUMENTATION SUITE
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              ANALYTICAL LABORATORY EQUIPMENT
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              High-sensitivity spectroscopic and chromatographic instrumentation for trace environmental detection.
            </p>
          </div>

          {/* 3-Part Horizontal Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Block 1 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">biotech</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  APPARATUS 01
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  Atomic Absorption Spectrophotometers (AAS)
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Trace-level heavy metal quantification in water and effluent
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  High-resolution graphite furnace and flame atomic absorption systems delivering sub-ppb sensitivity for toxic heavy metal quantification including lead, cadmium, arsenic, and mercury.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">air</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  APPARATUS 02
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  Flue Gas Analyzers &amp; Isokinetic Stack Samplers
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Direct stack emission and gaseous pollutant measurement
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Microprocessor-controlled isokinetic samplers and multi-gas infrared analyzers measuring particulate velocity and gaseous pollutants directly from industrial stacks and combustion exhausts.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">water_drop</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  APPARATUS 03
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  High-Accuracy Respirometric BOD &amp; COD Digestors
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Automated organic pollutant measurement systems
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Temperature-stabilized thermoreactors and automated manometric respirometers providing repeatable biochemical and chemical oxygen demand determinations for industrial effluent monitoring.
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
                  ISO/IEC 17025:2005 (PNAC) • PEPA CERTIFIED LAB • ZDHC ACCEPTED METHODOLOGIES
                </span>
              </div>
            </div>
            <div className="text-xs text-on-primary-container/80 font-mono text-center sm:text-right">
              Audit-Ready Compliance for Industrial Sustainability &amp; Export Benchmarks
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

