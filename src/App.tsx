import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { article, claims, contact, inspectionByPath, inspections, navLinks, privacySections, serviceByPath, services } from './content/site'

const sourceNote = 'Source-derived content. Claims marked for confirmation reflect labels or statements visible on the current public PTTF site.'

const routeMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'PTTF — Pakistan Textile Testing Foundation', description: 'Pakistan Textile Testing Foundation provides textile testing, inspection, and quality assurance services for manufacturers and exporters.' },
  '/about-us/': { title: 'About PTTF — Pakistan Textile Testing Foundation', description: 'Learn about Pakistan Textile Testing Foundation, established in 2005 and serving textile manufacturers and exporters in the region.' },
  '/contact-us/': { title: 'Contact PTTF — Testing and Inspection Enquiries', description: 'Contact Pakistan Textile Testing Foundation in Faisalabad or Lahore for testing, inspection, and quality assurance enquiries.' },
  '/services/textile/': { title: 'Textile Testing — PTTF', description: 'Textile testing services from Pakistan Textile Testing Foundation for manufacturers, exporters, and quality teams.' },
  '/services/leather-and-footwear/': { title: 'Leather, Footwear & PPE Testing — PTTF', description: 'Leather, footwear, accessories, and PPE testing services from Pakistan Textile Testing Foundation.' },
  '/services/environmental/': { title: 'Environmental Testing — PTTF', description: 'Environmental testing services from Pakistan Textile Testing Foundation to support industrial and public sector compliance.' },
  '/services/petroleum/': { title: 'Petroleum Testing — PTTF', description: 'Petroleum testing services from Pakistan Textile Testing Foundation for industrial efficiency, performance, and equipment risk.' },
  '/inspection/': { title: 'Inspection & Verification — PTTF', description: 'Explore the inspection and verification service family listed by Pakistan Textile Testing Foundation.' },
  '/accreditations/': { title: 'Accreditations — PTTF', description: 'Review the testing laboratory and inspection-body accreditation claims published by Pakistan Textile Testing Foundation.' },
  '/global-presence/': { title: 'Global Presence — PTTF', description: 'Pakistan Textile Testing Foundation supports textile manufacturers and exporters from its Faisalabad and Lahore contact points.' },
  '/photo-gallery/': { title: 'Photo Gallery — PTTF', description: 'View source-derived textile testing, inspection, material, and event imagery from Pakistan Textile Testing Foundation.' },
  '/blog/': { title: 'News & Insights — PTTF', description: 'Read published news and insights from Pakistan Textile Testing Foundation.' },
  '/idex-2022/': { title: 'Textile Asia 2023 — PTTF', description: 'Read the published Textile Asia 2023 update from Pakistan Textile Testing Foundation.' },
  '/feedback/': { title: 'Feedback — PTTF', description: 'Share feedback with Pakistan Textile Testing Foundation.' },
  '/privacy-policy/': { title: 'Privacy Policy — PTTF', description: 'Read the privacy policy text exposed by the Pakistan Textile Testing Foundation public site.' },
  '/terms-and-conditions/': { title: 'Terms and Conditions — PTTF', description: 'Review the terms and conditions page status for Pakistan Textile Testing Foundation.' }
}

function cleanPath(path: string) {
  if (!path || path === '/') return '/'
  return `/${path.replace(/^\/+|\/+$/g, '')}/`
}

function Link({ href, children, className = '', onClick }: { href: string; children: ReactNode; className?: string; onClick?: () => void }) {
  const internal = href.startsWith('/')
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.()
    if (internal) {
      event.preventDefault()
      window.history.pushState({}, '', href)
      window.dispatchEvent(new PopStateEvent('popstate'))
      window.scrollTo({ top: 0, behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
    }
  }
  return <a href={href} className={className} onClick={handleClick}>{children}</a>
}

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span> }

function Brand({ compact = false }: { compact?: boolean }) {
  return <Link href="/" className={`brand ${compact ? 'brand--compact' : ''}`} aria-label="PTTF home">
    <span className="brand-mark"><img src="/assets/pttf/logo.png" alt="" /></span>
    <span className="brand-copy"><strong>PTTF</strong><span>Pakistan Textile Testing Foundation</span></span>
  </Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('popstate', close)
    return () => window.removeEventListener('popstate', close)
  }, [])
  return <>
    <div className="topline"><div className="container topline__inner"><span>Testing, inspection & quality assurance</span><span className="topline__contact"><a href={`mailto:${contact.email}`}>{contact.email}</a><span className="dot" /> <a href={`tel:${contact.labPhone.replace(/\s/g, '')}`}>{contact.labPhone}</a></span></div></div>
    <header className="site-header">
      <div className="container header__inner">
        <Brand />
        <button className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}><span /> <span /> <span /><b>{open ? 'Close' : 'Menu'}</b></button>
        <nav id="primary-nav" className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link href="/contact-us/" className="button button--small button--nav" onClick={() => setOpen(false)}>Request a quote <Arrow /></Link>
        </nav>
      </div>
    </header>
  </>
}

function Footer() {
  return <footer className="site-footer">
    <div className="container footer__top">
      <div className="footer__intro"><Brand compact /><p>Pakistan Textile Testing Foundation Lab, established in 2005, provides a vast range of textile testing facilities to manufacturers and exporters in the region.</p><div className="socials"><a href="https://pk.linkedin.com/in/pttf-pakistan-97a5b528" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div></div>
      <div><p className="footer__label">Site links</p><div className="footer__links"><Link href="/about-us/">About us</Link><Link href="/contact-us/">Contact us</Link><Link href="/blog/">Blog & news</Link><Link href="/feedback/">Feedback</Link><Link href="/privacy-policy/">Privacy policy</Link><Link href="/terms-and-conditions/">Terms and conditions</Link></div></div>
      <div><p className="footer__label">Services</p><div className="footer__links">{services.slice(0, 4).map((service) => <Link key={service.slug} href={`/services/${service.slug}/`}>{service.title}</Link>)}<Link href="/inspection/">Inspection & verification</Link></div></div>
      <div className="footer__contact"><p className="footer__label">Contact us</p><p><strong>Faisalabad laboratory</strong><br />{contact.labAddress}</p><a href={`tel:${contact.labPhone.replace(/\s/g, '')}`}>{contact.labPhone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><p className="footer__contact--secondary"><strong>Lahore sample pickup / marketing</strong><br />{contact.lahoreAddress}</p><a href={`tel:${contact.lahorePhone.replace(/\s/g, '')}`}>{contact.lahorePhone}</a><a href={`mailto:${contact.marketingEmail}`}>{contact.marketingEmail}</a></div>
    </div>
    <div className="container footer__bottom"><span>© 2024 PTTF. All rights are reserved.</span><span>{sourceNote}</span></div>
  </footer>
}

function PageShell({ children }: { children: ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>
}

function PageHero({ eyebrow, title, intro, image, dark = false }: { eyebrow: string; title: string; intro?: string; image?: string; dark?: boolean }) {
  return <section className={`page-hero ${dark ? 'page-hero--dark' : ''}`}>
    <div className="container page-hero__grid"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{intro && <p className="page-hero__intro">{intro}</p>}</div>{image && <div className="page-hero__media"><img src={image} alt={`${title} — PTTF`} /></div>}</div>
  </section>
}

function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'section-heading--light' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{intro && <p>{intro}</p>}</div>
}

function Disclosure({ children }: { children: ReactNode }) { return <div className="disclosure"><span className="disclosure__mark">!</span><p>{children}</p></div> }

function Button({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'outline' | 'text' }) {
  return <Link href={href} className={`button button--${variant}`}>{children} <Arrow /></Link>
}

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  return <article className="service-card"><div className="service-card__image"><img src={service.image} alt={`${service.title} service imagery`} /><span className="service-card__index">0{index + 1}</span></div><div className="service-card__body"><p className="eyebrow">{service.eyebrow}</p><h3>{service.title}</h3><p>{service.description}</p><Link href={`/services/${service.slug}/`} className="text-link">Explore service <Arrow /></Link></div></article>
}

function AccreditationBand() {
  return <section className="accreditation-band"><div className="container accreditation-band__inner"><div><p className="eyebrow eyebrow--teal">Quality credentials</p><h2>Built around evidence, method and confidence.</h2></div><div className="credential-list"><div><strong>ISO/IEC<br />17025</strong><span>Testing laboratory claim</span></div><div><strong>ISO/IEC<br />17020</strong><span>Inspection body claim</span></div><div><strong>US CPSC</strong><span>Approved laboratory claim</span></div><img src="/assets/pttf/pnac.png" alt="PNAC accreditation mark from the source site" /></div></div></section>
}

function ContactForm({ feedback = false }: { feedback?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'error' | 'ready'>('idle')
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) { setStatus('error'); form.reportValidity(); return }
    setStatus('ready')
  }
  return <form className="contact-form" onSubmit={handleSubmit} noValidate>
    <div className="form-grid"><label><span>Your name *</span><input required name="name" placeholder="Your name" /></label><label><span>Your email *</span><input required type="email" name="email" placeholder="you@company.com" /></label></div>
    {!feedback && <div className="form-grid"><label><span>Company</span><input name="company" placeholder="Company name" /></label><label><span>Service interest</span><select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.slug}>{service.title}</option>)}<option>Inspection & verification</option></select></label></div>}
    {feedback && <label><span>Phone number</span><input name="phone" placeholder="+92 ..." /></label>}
    <label><span>{feedback ? 'Your feedback *' : 'Your message *'}</span><textarea required name="message" rows={5} placeholder={feedback ? 'Tell us about your experience.' : 'Tell us what you need tested, inspected, or verified.'} /></label>
    <div className="form-actions"><button type="submit" className="button button--primary">{feedback ? 'Send feedback' : 'Send enquiry'} <Arrow /></button>{status === 'error' && <p className="form-message form-message--error">Please complete the required fields with a valid email address.</p>}{status === 'ready' && <p className="form-message form-message--success">Your enquiry is prepared. This preview has no connected submission provider yet; please email <a href={`mailto:${contact.email}`}>{contact.email}</a> or call us to complete the request.</p>}</div>
  </form>
}

function HomePage() {
  return <>
    <section className="hero"><div className="hero__image"><img src="/assets/pttf/hero-lab.webp" alt="Textile worker handling fabric in an industrial setting" /></div><div className="container hero__grid"><div className="hero__copy"><p className="eyebrow eyebrow--teal">A state-of-the-art modern testing & inspection laboratory</p><h1>Evidence you can build an <em>export decision</em> on.</h1><p>Pakistan Textile Testing Foundation helps textile manufacturers and exporters turn material questions into clear, dependable quality decisions.</p><div className="hero__actions"><Button href="/services/textile/">Explore services</Button><Button href="/contact-us/" variant="outline">Request a quote</Button></div></div><div className="hero__stamp"><span>PTTF</span><small>Pakistan Textile<br />Testing Foundation</small></div></div></section>
    <section className="intro-section"><div className="container intro-grid"><div className="intro-lede"><p className="eyebrow">About PTTF</p><h2>Quality control that speaks the language of <em>materials.</em></h2></div><div className="intro-copy"><p>Pakistan Textile Testing Foundation Lab (PTTF lab), established in 2005, is accredited under ISO/IEC 17025:2005 standard by Pakistan National Accreditation Council (PNAC). We are also accredited with NEXT UK.</p><p>Our lab is equipped with most latest and state of the art equipment from SDL-ATLAS UK and USA and is providing a vast range of textile testing facilities to a huge market of textile manufacturers and exporters in the region.</p><Button href="/about-us/" variant="text">More about PTTF</Button></div></div></section>
    <section className="claim-strip"><div className="container claim-grid">{claims.map((claim) => <div key={claim.value}><strong>{claim.value}</strong><span>{claim.label}</span></div>)}</div></section>
    <section className="services-section"><div className="container"><SectionHeading eyebrow="Our services" title="Testing that keeps complex supply chains moving." intro="From textile performance to adjacent industrial materials, the published PTTF service portfolio is designed to support quality, compliance, and confident delivery." /><div className="service-grid">{services.slice(0, 4).map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div><div className="section-footer"><Link href="/services/textile/" className="text-link">View all testing services <Arrow /></Link></div></div></section>
    <section className="inspection-section"><div className="container inspection-grid"><div className="inspection-image"><img src="/assets/pttf/inspection.webp" alt="Quality inspection in a production setting" /><span className="image-caption">Inspection & verification / Source-listed service family</span></div><div><p className="eyebrow">Inspection & verification</p><h2>Make the next handoff <em>measurable.</em></h2><p>The homepage of the current PTTF site lists a broad inspection and verification service family. We’ve given each pathway a clearer place in the new experience while keeping scope details open for confirmation.</p><div className="inspection-list">{inspections.slice(0, 6).map((item, index) => <Link key={item.slug} href={`/inspection/${item.slug}/`}><span>0{index + 1}</span>{item.title}<Arrow /></Link>)}</div><Button href="/inspection/" variant="outline">Explore inspection services</Button></div></div></section>
    <AccreditationBand />
    <section className="news-section"><div className="container news-grid"><div><p className="eyebrow">Latest news</p><h2>Updates from the PTTF team.</h2><p className="news-intro">Read the latest published update from Pakistan Textile Testing Foundation and explore the source-derived archive.</p><Button href="/blog/" variant="text">Visit news & insights</Button></div><Link href="/idex-2022/" className="news-card"><img src="/assets/pttf/news.webp" alt="Textile Asia 2023 event image" /><div className="news-card__body"><span>{article.date} · {article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><span className="text-link">Read story <Arrow /></span></div></Link></div></section>
    <section className="contact-cta"><div className="container contact-cta__inner"><div><p className="eyebrow eyebrow--teal">Have a question?</p><h2>Bring us the material, standard, or question.</h2></div><Button href="/contact-us/">Start a conversation</Button></div></section>
  </>
}

function AboutPage() {
  return <><PageHero eyebrow="About PTTF" title="A practical partner for better quality decisions." intro="Pakistan Textile Testing Foundation Lab (PTTF lab), established in 2005, provides testing facilities to textile manufacturers and exporters in the region." image="/assets/pttf/textile-service.webp" /><section className="content-section"><div className="container two-column"><div><SectionHeading eyebrow="The foundation" title="We provide the best textile testing services." /><p>Pakistan Textile Testing Foundation Lab (PTTF lab), established in 2005, is accredited under ISO/IEC 17025:2005 standard by Pakistan National Accreditation Council (PNAC). We are also accredited with NEXT UK.</p><p>Our lab is equipped with most latest and state of the art equipment from SDL-ATLAS UK and USA and is providing a vast range of textile testing facilities to a huge market of textile manufacturers and exporters in the region.</p></div><div className="side-note"><p className="eyebrow">Source-listed principles</p><ul className="check-list"><li>Best quality standards</li><li>100% satisfaction guarantee</li><li>Quality control system</li><li>Commitment to customers</li><li>Highly professional team</li></ul></div></div></section><AccreditationBand /><section className="content-section content-section--paper"><div className="container split-callout"><div><p className="eyebrow">Next step</p><h2>Tell us what you need to know about your material.</h2></div><div><p>Whether you are confirming a textile specification, reducing production risk, or assessing a supplier, start with the question that needs a reliable answer.</p><Button href="/contact-us/">Contact PTTF</Button></div></div></section></>
}

function ServicePage({ service }: { service: typeof services[number] }) {
  const isConfirmed = service.confirmed !== false
  return <><PageHero eyebrow={service.eyebrow} title={service.title} intro={service.description} image={service.image} /><section className="content-section"><div className="container two-column two-column--wide"><div><SectionHeading eyebrow="Published service overview" title="A clearer route from sample to decision." /><p>{service.description}</p><p>PTTF’s public source page presents this service as part of its wider testing portfolio. Use the contact path below to confirm the specific test methods, sample requirements, turnaround expectations, standards, and commercial scope that apply to your request.</p><Button href="/contact-us/">Ask about this service</Button></div><div className="service-facts"><div><span>01</span><strong>Bring the brief</strong><p>Share your material, product, buyer requirement, or concern.</p></div><div><span>02</span><strong>Confirm the scope</strong><p>PTTF can confirm the applicable method and required sample information.</p></div><div><span>03</span><strong>Receive the next step</strong><p>Use the lab or service contact details to continue the request.</p></div></div></div></section>{!isConfirmed && <section className="container disclosure-wrap"><Disclosure>{service.sourceNote} Please confirm current scope and availability with PTTF before relying on this page for a purchasing or compliance decision.</Disclosure></section>}<section className="related-section"><div className="container"><SectionHeading eyebrow="Related capabilities" title="Explore the wider PTTF portfolio." /><div className="service-grid service-grid--compact">{services.filter((item) => item.slug !== service.slug).slice(0, 3).map((item, index) => <ServiceCard key={item.slug} service={item} index={index} />)}</div></div></section></>
}

function InspectionPage({ item }: { item?: typeof inspections[number] }) {
  if (!item) return <><PageHero eyebrow="Inspection & verification" title="Make the next handoff measurable." intro="The current PTTF homepage lists inspection and verification services alongside its testing portfolio. This new route gives each service a clear starting point while keeping unverified scope details visible." image="/assets/pttf/inspection.webp" /><section className="content-section"><div className="container"><SectionHeading eyebrow="Source-listed service family" title="Choose the inspection pathway that matches your stage." /><div className="inspection-cards">{inspections.map((inspection, index) => <Link key={inspection.slug} href={`/inspection/${inspection.slug}/`} className="inspection-card"><span>0{index + 1}</span><h3>{inspection.title}</h3><p>{inspection.description}</p><Arrow /></Link>)}</div><Disclosure>Dedicated public source pages for these inspection services were not discovered during the current crawl. Contact PTTF to confirm the current scope, standards, deliverables, and availability.</Disclosure></div></section></>
  return <><PageHero eyebrow="Inspection & verification" title={item.title} intro={item.description} image="/assets/pttf/inspection.webp" /><section className="content-section"><div className="container two-column"><div><SectionHeading eyebrow="Source-listed pathway" title="A clear place to start the conversation." /><p>The current public PTTF homepage lists <strong>{item.title}</strong> among its inspection and verification services. The dedicated technical page was not exposed in the source crawl, so this redesigned route intentionally avoids inventing a method, standard, turnaround, or deliverable.</p><Button href="/contact-us/">Confirm scope with PTTF</Button></div><Disclosure>Dedicated page not discovered in the current public source. Please confirm details directly with PTTF.</Disclosure></div></section><section className="related-section"><div className="container"><SectionHeading eyebrow="Other pathways" title="Continue exploring inspection & verification." /><div className="inspection-cards">{inspections.filter((other) => other.slug !== item.slug).slice(0, 4).map((other, index) => <Link key={other.slug} href={`/inspection/${other.slug}/`} className="inspection-card"><span>0{index + 1}</span><h3>{other.title}</h3><Arrow /></Link>)}</div></div></section></>
}

function ContactPage({ feedback = false }: { feedback?: boolean }) {
  return <><PageHero eyebrow={feedback ? 'Feedback' : 'Contact PTTF'} title={feedback ? 'Help us improve the experience.' : 'Let’s find the right next step.'} intro={feedback ? 'Share your experience with Pakistan Textile Testing Foundation. The original site offers a feedback form and a downloadable feedback form.' : 'Contact us to find out more or how we can help you better.'} image="/assets/pttf/hero-lab.webp" /><section className="content-section"><div className="container contact-layout"><div className="contact-details"><SectionHeading eyebrow={feedback ? 'Your voice matters' : 'Find us'} title={feedback ? 'Tell us what worked — and what did not.' : 'A direct line to the laboratory and team.'} /><div className="contact-detail-list"><div><span>Address</span><p>{contact.contactAddress}</p></div><div><span>Call us</span><a href={`tel:${contact.labPhone.replace(/\s/g, '')}`}>{contact.labPhone}</a></div><div><span>E-mail us</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div><div><span>Sample pickup / drop-off</span><p>{contact.lahoreAddress}</p><a href={`tel:${contact.lahorePhone.replace(/\s/g, '')}`}>{contact.lahorePhone}</a></div></div></div><div className="form-panel"><p className="eyebrow">{feedback ? 'Feedback form' : 'Send us a message'}</p><ContactForm feedback={feedback} /></div></div></section></>
}

function BlogPage() {
  return <><PageHero eyebrow="News & insights" title="Stories from the PTTF team." intro="The public source currently exposes one published article. We’ve kept its content intact and made the archive easier to scan." image="/assets/pttf/news.webp" /><section className="content-section"><div className="container"><div className="archive-toolbar"><SectionHeading eyebrow="Latest news" title="Published updates" /><span className="archive-count">01 story</span></div><div className="article-grid"><Link href="/idex-2022/" className="article-card"><img src="/assets/pttf/news.webp" alt="Textile Asia 2023 event image" /><div className="article-card__body"><span>{article.date} · {article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><span className="text-link">Read story <Arrow /></span></div></Link></div></div></section></>
}

function ArticlePage() {
  return <><PageHero eyebrow={`${article.date} · ${article.category}`} title={article.title} intro={article.excerpt} image="/assets/pttf/news.webp" /><article className="content-section article-content"><div className="container article-layout"><div><p className="article-byline">Published by <strong>{article.author}</strong></p><p>{article.body}</p><div className="article-share"><span>Share</span><a href={`mailto:?subject=${encodeURIComponent(article.title)}`}>Email <Arrow /></a><a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div></div><aside><p className="eyebrow">In this story</p><p>QA / QC / Sustainability Solutions</p><p>Buyer protocols and export requirements</p><p>Quality and supply chain confidence</p></aside></div></article></>
}

function AccreditationPage() {
  return <><PageHero eyebrow="Quality credentials" title="A foundation for dependable testing." intro="The current public PTTF site presents accreditation and quality credentials as central to its laboratory offer." image="/assets/pttf/pnac.png" /><section className="content-section"><div className="container"><SectionHeading eyebrow="Published claims" title="Read the credentials in context." intro="The following claims are preserved from the public source and should be confirmed with PTTF for current scope and validity." /><div className="credential-cards"><div><span>01</span><h3>ISO/IEC 17025:2005</h3><p>The source states that PTTF is accredited under ISO/IEC 17025:2005 by Pakistan National Accreditation Council (PNAC).</p></div><div><span>02</span><h3>ISO/IEC 17020</h3><p>The homepage describes PTTF as an ISO/IEC 17020 accredited inspection body.</p></div><div><span>03</span><h3>US CPSC</h3><p>The homepage describes PTTF as a US CPSC approved laboratory.</p></div><div><span>04</span><h3>NEXT UK</h3><p>The About Us page states that PTTF is also accredited with NEXT UK.</p></div></div><Disclosure>Accreditation logos and claims are reproduced from the current public website inventory. Confirm current scope, certificate status, and applicable methods with PTTF before publication.</Disclosure></div></section></>
}

function GlobalPresencePage() {
  return <><PageHero eyebrow="Global presence" title="Close to the work, connected to the market." intro="The original site exposes a Global Presence page but provides only the heading and the standard company introduction in its public content." image="/assets/pttf/textile-service.webp" /><section className="content-section"><div className="container two-column"><div><SectionHeading eyebrow="Our global presence" title="A regional laboratory with an export-facing brief." /><p>Pakistan Textile Testing Foundation Lab (PTTF lab), established in 2005, is equipped with state of the art equipment from SDL-ATLAS UK and USA and provides a vast range of textile testing facilities to manufacturers and exporters in the region.</p><p>The public source did not provide a country-by-country office list or map. The redesigned page therefore keeps the global presence claim measured and routes visitors to the Faisalabad laboratory and Lahore marketing/sample pickup contacts.</p></div><div className="presence-card"><p className="eyebrow">Current contact points</p><strong>Faisalabad</strong><p>{contact.labAddress}</p><strong>Lahore</strong><p>{contact.lahoreAddress}</p><Button href="/contact-us/" variant="outline">Talk to the team</Button></div></div></section><section className="contact-cta"><div className="container contact-cta__inner"><div><p className="eyebrow eyebrow--teal">For international clients</p><h2>Bring your buyer protocol or export requirement.</h2></div><Button href="/contact-us/">Request a quote</Button></div></section></>
}

function GalleryPage() {
  const images = [
    ['/assets/pttf/hero-lab.webp', 'Textile worker and fabric handling'],
    ['/assets/pttf/textile-service.webp', 'Textile testing service imagery'],
    ['/assets/pttf/inspection.webp', 'Inspection and verification imagery'],
    ['/assets/pttf/textile.webp', 'Textile materials'],
    ['/assets/pttf/leather.webp', 'Leather and footwear materials'],
    ['/assets/pttf/news.webp', 'Textile Asia 2023 event image']
  ]
  return <><PageHero eyebrow="Photo gallery" title="A closer look at the work." intro="The public source includes a Photo Gallery route but exposes limited image content. This gallery uses source-derived imagery already present in the PTTF site inventory." image="/assets/pttf/textile-service.webp" /><section className="content-section"><div className="container"><div className="gallery-grid">{images.map(([src, alt], index) => <figure key={src}><img src={src} alt={alt} /><figcaption><span>0{index + 1}</span>{alt}</figcaption></figure>)}</div><Disclosure>Gallery captions are descriptive for the redesigned interface. Please confirm any image-specific equipment or facility claims with PTTF.</Disclosure></div></section></>
}

function LegalPage({ privacy = false }: { privacy?: boolean }) {
  return <><PageHero eyebrow={privacy ? 'Privacy' : 'Legal'} title={privacy ? 'Privacy policy' : 'Terms and conditions'} intro={privacy ? 'The following sections preserve the text and structure exposed by the source privacy page.' : 'The current public Terms and Conditions route exposes the page heading and standard footer content, but no additional legal clauses were accessible in the crawl.'} /><section className="content-section legal-content"><div className="container narrow-content">{privacy ? privacySections.map(([heading, copy]) => <section key={heading}><h2>{heading}</h2><p>{copy}</p></section>) : <Disclosure>Full terms copy was not exposed at the source URL during the crawl. No replacement legal terms have been invented here. Please provide the approved PTTF legal text before launch.</Disclosure>}</div></section></>
}

function ArchivePage({ label }: { label: string }) {
  return <><PageHero eyebrow="Archive" title={label} intro="This source archive route is preserved for URL continuity and search discovery." /><section className="content-section"><div className="container empty-state"><p className="eyebrow">Source archive</p><h2>The current archive contains one published story.</h2><p>Explore the Textile Asia 2023 article or return to the main news page.</p><div><Button href="/idex-2022/">Read Textile Asia 2023</Button><Button href="/blog/" variant="text">Back to news</Button></div></div></section></>
}

function NotFoundPage() { return <><PageHero eyebrow="Page not found" title="That route is not in the current PTTF site map." intro="Use the main navigation to find testing, inspection, accreditation, news, or contact information." /><section className="content-section"><div className="container empty-state"><Button href="/">Return to home</Button></div></section></> }

function RoutedPage() {
  const path = cleanPath(window.location.pathname)
  if (path === '/') return <HomePage />
  if (path === '/about-us/') return <AboutPage />
  if (path === '/contact-us/') return <ContactPage />
  if (path === '/feedback/') return <ContactPage feedback />
  if (path === '/blog/') return <BlogPage />
  if (path === '/idex-2022/') return <ArticlePage />
  if (path === '/accreditations/') return <AccreditationPage />
  if (path === '/global-presence/') return <GlobalPresencePage />
  if (path === '/photo-gallery/') return <GalleryPage />
  if (path === '/privacy-policy/') return <LegalPage privacy />
  if (path === '/terms-and-conditions/') return <LegalPage />
  if (path === '/category/uncategorized/' || path === '/author/mczind_admin/' || path === '/2024/05/08/') return <ArchivePage label={path.includes('author') ? 'PTTF admin' : path.includes('2024') ? 'May 8, 2024' : 'Uncategorized'} />
  const service = serviceByPath(path)
  if (service) return <ServicePage service={service} />
  if (path === '/inspection/' || path.startsWith('/inspection/')) return <InspectionPage item={inspectionByPath(path)} />
  return <NotFoundPage />
}

export default function App() {
  const [, setLocation] = useState(window.location.pathname)
  useEffect(() => {
    const updateMeta = () => {
      setLocation(window.location.pathname)
      const path = cleanPath(window.location.pathname)
      const fallback = path.split('/').filter(Boolean).at(-1)?.replace(/-/g, ' ') || 'Page'
      const meta = routeMeta[path] ?? { title: `PTTF — ${fallback.replace(/\b\w/g, (letter) => letter.toUpperCase())}`, description: 'Pakistan Textile Testing Foundation provides testing, inspection, and quality assurance services.' }
      document.title = meta.title
      const setMeta = (selector: 'name' | 'property', key: string, content: string) => {
        let element = document.querySelector(`meta[${selector}="${key}"]`) as HTMLMetaElement | null
        if (!element) { element = document.createElement('meta'); element.setAttribute(selector, key); document.head.appendChild(element) }
        element.content = content
      }
      setMeta('name', 'description', meta.description)
      setMeta('property', 'og:title', meta.title)
      setMeta('property', 'og:description', meta.description)
      setMeta('property', 'og:type', 'website')
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
      canonical.href = window.location.origin + path
    }
    updateMeta()
    window.addEventListener('popstate', updateMeta)
    return () => window.removeEventListener('popstate', updateMeta)
  }, [])
  return <PageShell><RoutedPage /></PageShell>
}
