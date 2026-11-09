import React from 'react';
import { Link } from 'react-router-dom';

export const ServicesGrid: React.FC = () => {
  return (
    <section className="w-full py-16 bg-surface-container-low" id="services-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">COMPREHENSIVE TIC CAPABILITIES</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-2">
              Precision-driven testing solutions for critical industries, ensuring product quality, safety, reliability, and regulatory compliance.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full border border-outline-variant/10">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-surface-container"><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-VL7aXEsnT5jWSmRLryeH702V17OWZaFVx_ksiZdmx9r9XUwP1KH_yr93RTKJ74wZPg5uHWG3raibjcGwrMPDQAQyq4OzHOOocqBh0OvJIkjV-KNoms4wTJTpfle6FiKCwgpJpUzfHQnmqHMIf99H35VkbRSWslYmtSEbQBogJAQMeuFx_Fr99ikhiXpUN-2peSIVkMlhp6HBdEToxgFt0t4JCkw82UHLE0Uqn12vSk717Ahsqcgn" alt="Textiles and fabric rolls inspection" /></div>
              <div className="p-6"><h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1 mb-3 group-hover:text-secondary transition-colors"><Link className="hover:text-secondary transition-colors" to="/services/textile-testing">Textiles &amp; Apparel</Link></h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Comprehensive textile testing solutions designed to ensure product quality, material reliability, and performance. We deliver accurate results through skilled technicians and competitive testing services worldwide.</p>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-on-surface/80 shrink-0 mt-2"></span><span>Textile Quality &amp; Performance Testing</span></li>
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-on-surface/80 shrink-0 mt-2"></span><span>Material Strength &amp; Durability Assessment</span></li>
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-on-surface/80 shrink-0 mt-2"></span><span>Reliable Testing Solutions Worldwide</span></li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto"><Link className="w-full inline-flex items-center justify-between py-2.5 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-title-sm text-title-sm transition-colors" to="/services/textile-testing"><span>View Textiles &amp; Apparel</span><span className="material-symbols-outlined text-[18px]">chevron_right</span></Link></div>
          </div>
          {/* Card 2 */}
          <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full border border-outline-variant/10">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-surface-container"><img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv46rmoGzAPBSWviEPIvlaxLMRbc9Mzb2hPGFRWR0mAolakiVwdpIj_bo1g1gspVD1iE6-WwwVaaiqLLwWrRwwi_zbOTKtoLy2Wqzbyg841TUxL8ulEWnqXWTefBSsblitpjLtNVWAdEMOV66H46x-GA_k-XfzzQMowaElb-N6n7WB2tIe6APMFGUiQEgsL0mDcxriBQhjIcsVXmyqSF5mfA6VZHS_yyesvvC-J7mBRCqrSJqmcd2v" alt="Leather &amp; Footwear Testing" /></div>
              <div className="p-6"><h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1 mb-3 group-hover:text-secondary transition-colors"><Link className="hover:text-secondary transition-colors" to="/services/leather-footwear">Leather &amp; Footwear</Link></h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Specialized testing solutions for the leather, footwear, and accessories industry. Our services help manufacturers minimize risks, improve product quality, streamline workflows, and meet industry standards.</p>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-on-surface/80 shrink-0 mt-2"></span><span>Leather &amp; Footwear Quality Testing</span></li>
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-on-surface/80 shrink-0 mt-2"></span><span>Product Safety &amp; Material Assessment</span></li>
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-on-surface/80 shrink-0 mt-2"></span><span>Quality Standards &amp; Compliance Support</span></li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto"><Link className="w-full inline-flex items-center justify-between py-2.5 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-title-sm text-title-sm transition-colors" to="/services/leather-footwear"><span>View Leather &amp; Footwear</span><span className="material-symbols-outlined text-[18px]">chevron_right</span></Link></div>
          </div>
          {/* Card 3 */}
          <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full border border-outline-variant/10">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-surface-container"><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjAotG_o0In3aszl2FReXrcvc7GDNsDgeM3jq1COZ14HlGPNELNU5Jy7eVPiY-c_G47TGbTNiWOQB_9M4SikzoIDhct7dk4dO01OkvBHC4_9j3k3CmjtPygdVlhTAsjTiaWNQi2yvIYAb2OmKx2nc4TT9aPik8KSfHqGsOi3wkypCbkngUs_EWQdyfFdsyXuuFIdCQiQTFDDkp2Tcu1HBhdTMjKYzUep6MWG_rZItemcwfnaUOa1Jw" alt="Personal Protective Equipment" /></div>
              <div className="p-6"><h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1 mb-3 group-hover:text-secondary transition-colors"><Link className="hover:text-secondary transition-colors" to="/services/ppe-testing">Personal Protective Equipment</Link></h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Comprehensive testing and certification solutions for protective products, helping manufacturers and exporters meet regulatory requirements while ensuring product safety, quality, and performance.</p>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-on-surface/80 shrink-0 mt-2"></span><span>Protective Apparel for OH&amp;S</span></li>
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-on-surface/80 shrink-0 mt-2"></span><span>Protective Apparel for Bikers</span></li>
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-on-surface/80 shrink-0 mt-2"></span><span>PPE for Healthcare Professionals</span></li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto"><Link className="w-full inline-flex items-center justify-between py-2.5 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-title-sm text-title-sm transition-colors" to="/services/ppe-testing"><span>View PPE</span><span className="material-symbols-outlined text-[18px]">chevron_right</span></Link></div>
          </div>
          {/* Card 4 */}
          <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full border border-outline-variant/10">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-surface-container"><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdlVx6LVPZqt4U0iF-67ZBNJaosCubBDWna442--KbODKcMY8yXAzp3kCBeA2W-YPWZgtsIIYxGcrQiGPYvYk_97xiSEALg6-hERFPPlBX5g-T93vpbRZA77CHK7veSwBk42D0nlKcBPfnGGiWx1as9VlLEFGYe17YAme9kdqDvT710KJhHq2Q7SsLi1XT01LFJL6WC_qCL52VkVZUvBDclCdki71Q-yggmwwRgxBIhL2PQZhogJUz" alt="Petroleum" /></div>
              <div className="p-6"><h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1 mb-3 group-hover:text-secondary transition-colors"><Link className="hover:text-secondary transition-colors" to="/services/petroleum-testing">Petroleum</Link></h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Reliable petroleum testing services designed to help industries maintain equipment efficiency, optimize performance, and minimize the risks of machinery damage across critical industrial operations.</p>
                <ul className="flex flex-col gap-2.5 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-on-surface/80 shrink-0 mt-2"></span><span>Petroleum Product Quality Assessment</span></li>
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-on-surface/80 shrink-0 mt-2"></span><span>Pre-Shipment Factory Acceptance Testing</span></li>
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-on-surface/80 shrink-0 mt-2"></span><span>AWS / CWI Certified Weld Inspections</span></li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto"><Link className="w-full inline-flex items-center justify-between py-2.5 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-title-sm text-title-sm transition-colors" to="/services/petroleum-testing"><span>View Petroleum</span><span className="material-symbols-outlined text-[18px]">chevron_right</span></Link></div>
          </div>
        </div>
      </div>
    </section>
  );
};
