import React from 'react';
import { Link } from 'react-router-dom';

export const InspectionVerificationPage: React.FC = () => {
  return (
    <div className="w-full bg-surface">
      {/* 1. HERO SECTION (INSPECTION FIELD LAYOUT WITH SPLIT VISUAL) */}
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
            <span className="text-secondary font-semibold">Inspection &amp; Verification</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Headline and Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <h1 className="font-headline-lg text-headline-md lg:text-headline-lg font-bold text-primary-container tracking-tight leading-tight">
                INSPECTION &amp; QUALITY VERIFICATION SERVICES
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Independent third-party inspection, factory auditing, and production monitoring. Operating as an ISO/IEC 17020 accredited inspection body, PTTF provides end-to-end supply chain visibility to safeguard product quality before shipment.
              </p>

              {/* Standards Bar */}
              <div className="pt-8 mt-2 flex flex-col gap-3">
                <span className="font-label-caption text-label-caption text-outline uppercase tracking-widest font-semibold">
                  COMPLIANT WITH INTERNATIONAL INSPECTION FRAMEWORKS: ISO/IEC 17020 • ANSI/ASQ Z1.4 • ISO 2859-1 • AQL STANDARDS
                </span>
                <div className="flex flex-wrap items-center gap-6 lg:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all">
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">ISO/IEC 17020</span>
                  <span className="font-headline-sm text-headline-sm font-extrabold tracking-widest text-on-surface">ANSI/ASQ Z1.4</span>
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">ISO 2859-1</span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-normal text-on-surface">AQL STANDARDS</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Inspection Photograph */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant/20">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                    alt="On-site garment quality inspection and factory defect scanning"
                    className="w-full h-[460px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/70 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHRONOLOGICAL INSPECTION STAGES (SEQUENTIAL 4-STEP PRODUCTION TIMELINE CARDS) */}
      <section className="w-full py-16 lg:py-20 bg-surface border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              SUPPLY CHAIN QUALITY TIMELINE
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              CHRONOLOGICAL INSPECTION STAGES
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              End-to-end quality interventions from raw material arrival to container loading supervision.
            </p>
          </div>

          {/* Sequential 4-Step Production Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">inventory_2</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  STAGE 01
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-3 font-bold">
                  Pre-Production &amp; Status Check
                </h3>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Raw material, fabric, and trim quality assessment</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Factory capability, machinery calibration, and vendor assessment</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Production planning review and raw batch verification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  STAGE 02
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-3 font-bold">
                  During Production Inspection (DUPRO / Inline)
                </h3>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Early defect detection when 10%–20% of the order is completed</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Verification of sizing, workmanship, colors, and styling</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Alignment with approved tech packs and golden samples</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">fact_check</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  STAGE 03
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-3 font-bold">
                  Final Random Inspection (FRI / Pre-Shipment)
                </h3>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Comprehensive audit conducted once 100% produced and at least 80% packed</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>AQL statistical sampling (ANSI/ASQ Z1.4 / ISO 2859-1)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Packaging, labeling, barcodes, carton markings, and weight checks</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">local_shipping</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  STAGE 04
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-3 font-bold">
                  Loading Supervision &amp; Post-Delivery Check
                </h3>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Container integrity, cleanliness, and moisture checks</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Pallet placement and loading quantity verification</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Tamper-evident container seal verification and post-delivery audit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED VERIFICATION CAPABILITIES (GRID OF 4 CLEAN DETAIL CARDS) */}
      <section className="w-full py-16 lg:py-20 bg-surface-container-low" id="capabilities">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              AUDIT &amp; TECHNICAL VERIFICATION
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              DEDICATED VERIFICATION CAPABILITIES
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Rigorous on-site quality assurance methodologies ensuring full specification adherence and vendor accountability.
            </p>
          </div>

          {/* Grid of 4 Clean Detail Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">assignment_turned_in</span>
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                    Sample Evaluation &amp; Status Verification
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  Rigorous initial prototype and conformance assessments establishing strict alignment with buyer tech specs.
                </p>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Initial prototype and sample conformance reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Verification against buyer technical specifications and tolerances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Material composition and trims authenticity screening</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Defect classification (Critical, Major, Minor)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">domain</span>
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                    Factory &amp; Vendor Capability Audits
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  On-site audits evaluating manufacturing capacity, quality control systems, social standards, and inventory integrity.
                </p>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Quality management system (QMS) on-site evaluations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Factory capacity, machinery status, and workforce audits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Social and workplace safety adherence checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Raw material traceability and inventory management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">inventory</span>
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                    Packaging &amp; Compliance Verification
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  Export packaging validation ensuring retail carton drop survival, barcode scannability, and regulatory labeling compliance.
                </p>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Retail carton drop testing and barcode scannability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Polybag suffocations warnings and apparel labeling laws</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Assortment ratios, packing accuracy, and shipping marks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Moisture and humidity checks in finished packaging</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">engineering</span>
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                    Specialized Industrial Inspections
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  Certified non-destructive testing (NDT), structural weld verification, and pre-shipment factory acceptance testing.
                </p>
                <ul className="flex flex-col gap-3 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>AWS / CWI certified weld inspections for industrial structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Pre-shipment factory acceptance testing (FAT)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Mechanical component fitment and alignment inspection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0 mt-2"></span>
                    <span>Structural integrity and finish verification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INSPECTION STANDARDS & METHODOLOGIES (3-PART HORIZONTAL SPLIT) */}
      <section className="w-full py-16 lg:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-label-mono-tech text-label-mono-tech text-secondary uppercase font-semibold">
              METROLOGICAL FRAMEWORKS
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
              INSPECTION STANDARDS &amp; METHODOLOGIES
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Operating strictly under international accreditation frameworks to guarantee legally defensible, unbiased quality audits.
            </p>
          </div>

          {/* 3-Part Horizontal Split */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Section 1 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">verified_user</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  STANDARD 01
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  ISO/IEC 17020 Inspection Body Accreditation
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Globally accepted impartial third-party inspection reporting
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Accredited by the Pakistan National Accreditation Council (PNAC) under ISO/IEC 17020 Type-A impartial third-party inspection criteria, ensuring full global buyer acceptance and audit integrity.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">analytics</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  STANDARD 02
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  Standard AQL Sampling Systems
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Statistically backed ISO 2859-1 &amp; ANSI/ASQ Z1.4 defect limitation plans
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Structured mathematical sampling plans (General Inspection Level II / Special Levels) providing statistically valid lot acceptance determinations with clear Critical, Major, and Minor defect thresholds.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-5">
                  <span className="material-symbols-outlined text-[26px]">feed</span>
                </div>
                <span className="font-label-mono-tech text-[11px] text-secondary uppercase font-semibold block">
                  STANDARD 03
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 mb-2">
                  Digital Reporting &amp; Documentation
                </h3>
                <p className="font-title-sm text-xs font-semibold text-secondary mb-3">
                  Clear digital photo reports and rapid turnaround findings
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Detailed tamper-proof digital inspection reports generated within 24 hours of audit completion, featuring high-resolution photographic evidence, measurement data, and objective pass/fail findings.
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
                  ISO/IEC 17020 ACCREDITED INSPECTION BODY (PNAC) • GLOBAL BUYER RECOGNITION
                </span>
              </div>
            </div>
            <div className="text-xs text-on-primary-container/80 font-mono text-center sm:text-right">
              Independent Third-Party Verification for Global Supply Chain Integrity
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

