import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 text-on-surface-variant">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl border-b border-outline-variant/30">
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-md">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiFkSsBl2JUjCMPRUVoytV_WmyDcM0QT6muYx1E1UhivgkL7dQ380JZq0n94bST6cVj6BnXzDGYk1dOzPUgrp923h6HmD3efc-fWqyk23_HR-yvar601v6rQTvSGQVHXXCF3Hlv6HRJLtI8H0fqo0r77ppUmuHJTJaYUxCrLtkIVQzg8N8yLROJ9uwX9PHbkc9wiPZ8AAfU4qAh3EMwJA7jedyngV_7Oo__ZFb0K3PLcr35jJNw2Hi"
                alt="PTTF Logo"
                className="h-9 w-auto object-contain rounded"
              />
              <div className="flex flex-col"><span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface uppercase">PTTF</span><span className="font-label-caption text-label-caption text-on-surface-variant uppercase tracking-wider">Pakistan Textile Testing Foundation</span></div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Delivering comprehensive testing, inspection, and quality assurance solutions to industries worldwide. Our services combine technical expertise, advanced testing capabilities, and internationally recognized standards to help businesses ensure product quality, safety, reliability, and regulatory compliance across diverse industrial sectors.</p>
          </div>
          <div className="flex flex-col gap-space-md">
            <span className="font-label-mono-tech text-label-mono-tech text-on-surface uppercase tracking-wider">OUR LOCATIONS</span>
            <div className="flex flex-col gap-space-sm font-body-sm text-body-sm">
              <div className="flex flex-col gap-1"><strong className="text-on-surface">Main Laboratory & Head Office</strong><span className="text-on-surface-variant"><span className="font-semibold text-on-surface">Address:</span> 1st Floor, PTEA Building, Faisalabad Bypass, Civil Lines, Faisalabad</span><span className="text-outline font-label-caption"><span className="font-semibold text-on-surface-variant">Contact:</span> +92 41 9201578-80</span></div>
              <div className="flex flex-col gap-1 pt-2"><strong className="text-on-surface">Lahore Marketing & Sample Drop-off</strong><span className="text-on-surface-variant"><span className="font-semibold text-on-surface">Address:</span> 188 - G4, Johar Town, Lahore</span><span className="text-outline font-label-caption"><span className="font-semibold text-on-surface-variant">Contact:</span> +92 302 4744715</span></div>
              <div className="flex flex-col gap-1 pt-2"><strong className="text-on-surface">Client Support & Inquiries</strong><span className="text-on-surface-variant"><span className="font-semibold text-on-surface">Email:</span> info@pttflab.com</span><span className="text-outline font-label-caption"><span className="font-semibold text-on-surface-variant">Marketing:</span> marketing@pttflab.com</span></div>
            </div>
          </div>
          <div className="flex flex-col gap-space-md">
            <span className="font-label-mono-tech text-label-mono-tech text-on-surface uppercase tracking-wider">Core Capabilities</span>
            <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm">
              <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span><a className="hover:text-secondary transition-colors" href="#services-grid">Textile Physical & Performance Testing</a></li>
              <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span><a className="hover:text-secondary transition-colors" href="#services-grid">Leather, Footwear & PPE Testing</a></li>
              <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span><a className="hover:text-secondary transition-colors" href="#services-grid">Restricted Substances & Chemical Analysis</a></li>
              <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span><a className="hover:text-secondary transition-colors" href="#services-grid">Environmental & Wastewater Testing</a></li>
              <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span><a className="hover:text-secondary transition-colors" href="#services-grid">Petroleum & By-Products Testing</a></li>
              <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 mt-2"></span><a className="hover:text-secondary transition-colors" href="#services-grid">Inline & Final Random Inspection (FRI)</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-space-md">
            <span className="font-label-mono-tech text-label-mono-tech text-on-surface uppercase tracking-wider">Accreditations</span>
            <div className="flex flex-col gap-space-sm font-body-sm text-body-sm">
              <div className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-on-tertiary-container">verified_user</span><span>ISO/IEC 17025 Accredited (PNAC)</span></div>
              <div className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-on-tertiary-container">verified_user</span><span>ISO/IEC 17020 Inspection Body</span></div>
              <div className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-on-tertiary-container">verified_user</span><span>US CPSC Approved Laboratory</span></div>
              <div className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-on-tertiary-container">verified_user</span><span>NEXT UK Accredited</span></div>
              <div className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-on-tertiary-container">verified_user</span><span>SDL-ATLAS Testing Standards (FRI)</span></div>
            </div>
          </div>
        </div>
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm">
          <div className="flex items-center gap-space-sm"><span className="font-label-mono-tech text-label-mono-tech text-outline">© 2026 PAKISTAN TEXTILE TESTING FOUNDATION (PTTF). ALL RIGHTS RESERVED.</span></div>
        </div>
      </div>
    </footer>
  );
};
