export type Service = {
  slug: string
  title: string
  eyebrow: string
  description: string
  image: string
  sourcePath?: string
  sourceNote?: string
  confirmed?: boolean
}

export type InspectionItem = {
  slug: string
  title: string
  description: string
}

export const contact = {
  labAddress: '1st Floor, PTEA Building, 30/7, Faisalabad Bypass, near State Bank, Textile, Civil Lines, Faisalabad, Punjab 38000',
  contactAddress: '1st Floor, PTEA House, 30/7, Civil Lines, Near State Bank, Faisalabad - 38000, Pakistan',
  labPhone: '+92 41 9201578-80',
  servicePhone: '(041) 2616721',
  lahorePhone: '+92 302 4744715',
  email: 'info@pttflab.com',
  marketingEmail: 'marketing@pttflab.com',
  lahoreAddress: 'Lahore / Marketing & Business Development, 188 - G4, Johar Town, Lahore'
}

export const navLinks = [
  { label: 'About us', href: '/about-us/' },
  { label: 'Services', href: '/services/textile/' },
  { label: 'Inspection', href: '/inspection/' },
  { label: 'Global presence', href: '/global-presence/' },
  { label: 'Accreditations', href: '/accreditations/' },
  { label: 'News', href: '/blog/' }
]

export const services: Service[] = [
  {
    slug: 'textile',
    title: 'Textile testing',
    eyebrow: 'Core laboratory service',
    description: 'To become one stop solution provider for textile testing needs of our customers Worldwide. We deliver services by well trained technicians with accuracy at market competitive prices.',
    image: '/assets/pttf/textile.webp',
    sourcePath: '/services/textile/'
  },
  {
    slug: 'leather-and-footwear',
    title: 'Leather, footwear & PPE testing',
    eyebrow: 'Materials & product assurance',
    description: 'The leather, footwear and accessories industry has transformed since last few years. Our extensive range of services are available to leather industry to reduce risks expedite work flow and assure quality standards.',
    image: '/assets/pttf/leather.webp',
    sourcePath: '/services/leather-and-footwear/'
  },
  {
    slug: 'environmental',
    title: 'Environmental testing',
    eyebrow: 'Compliance support',
    description: 'Indigenous peoples and communities manage their environment, forest and other echo systems well. In this regard our environmental services help industrial and public sector clients achieving compliance and reducing, or eliminating risk to damage environment.',
    image: '/assets/pttf/environmental.webp',
    sourcePath: '/services/environmental/'
  },
  {
    slug: 'petroleum',
    title: 'Petroleum testing',
    eyebrow: 'Industrial performance',
    description: 'The petroleum products are used by all the high investment power plants, construction projects, cement and sugar industries etc. Our petroleum testing services saves the risk involved regarding efficiency, performance and damage of industrial equipments.',
    image: '/assets/pttf/petroleum.webp',
    sourcePath: '/services/petroleum/'
  },
  {
    slug: 'restricted-substances',
    title: 'Restricted substances testing',
    eyebrow: 'Listed on the source homepage',
    description: 'Restricted Substances Testing is listed by PTTF among its testing services. Detailed public service copy was not exposed in the current source crawl, so the applicable methods and scope should be confirmed with the laboratory.',
    image: '/assets/pttf/textile-service.webp',
    sourceNote: 'Homepage listing only; dedicated source page not discovered.',
    confirmed: false
  }
]

export const inspections: InspectionItem[] = [
  { slug: 'status-check', title: 'Status check', description: 'A source-listed inspection and verification service. Request the applicable scope and workflow from PTTF.' },
  { slug: 'sample-evaluation', title: 'Sample evaluation', description: 'A source-listed inspection and verification service. Request the applicable scope and workflow from PTTF.' },
  { slug: 'inline-inspection', title: 'Inline inspection', description: 'A source-listed inspection and verification service. Request the applicable scope and workflow from PTTF.' },
  { slug: 'during-production', title: 'During production inspection', description: 'A source-listed inspection and verification service. Request the applicable scope and workflow from PTTF.' },
  { slug: 'final-random-inspection', title: 'Final random inspection', description: 'A source-listed inspection and verification service. Request the applicable scope and workflow from PTTF.' },
  { slug: 'supervision-of-loading', title: 'Supervision of loading', description: 'A source-listed inspection and verification service. Request the applicable scope and workflow from PTTF.' },
  { slug: 'vendor-assessment', title: 'Vendor assessment', description: 'A source-listed inspection and verification service. Request the applicable scope and workflow from PTTF.' },
  { slug: 'post-delivery-inspection', title: 'Post-delivery inspection', description: 'A source-listed inspection and verification service. Request the applicable scope and workflow from PTTF.' }
]

export const claims = [
  { value: '2005', label: 'Established' },
  { value: '400', label: 'In-house methods claim' },
  { value: '17025', label: 'ISO/IEC testing standard' },
  { value: '17020', label: 'Inspection-body standard claim' }
]

export const article = {
  title: 'Textile Asia 2023',
  date: 'May 8, 2024',
  author: 'pttf_admin',
  category: 'Uncategorized',
  excerpt: 'At this prestigious event, we aim to showcase our expertise in providing comprehensive solutions that address the challenges faced by the textile industry.',
  body: 'At this prestigious event, we aim to showcase our expertise in providing comprehensive solutions that address the challenges faced by the textile industry. Our team of seasoned professionals will be delighted to guide you through our innovative offerings, tailored to meet your specific needs. By leveraging our QA/QC/Sustainability Solutions, you can streamline your operations, mitigate risks, and optimize your supply chain processes. Our state-of-the-art technologies and industry-leading practices enable you to achieve the highest standards of quality, while ensuring compliance with regulatory frameworks. We understand the importance of meeting buyer protocols and export requirements in today’s competitive market. Our solutions are designed to empower you with the necessary tools and insights to meet these demands seamlessly, enhancing your market reputation and fostering long-term partnerships.',
  sourcePath: '/idex-2022/'
}

export const privacySections = [
  ['Who we are', 'Our website address is: https://pttflab.com'],
  ['Comments', 'When visitors leave comments on the site we collect the data shown in the comments form and also the visitor’s IP address and browser user agent string to help spam detection. An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service. The Gravatar service privacy policy is available at https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.'],
  ['Media', 'Suggested text: If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.'],
  ['Cookies', 'If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year. If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close the browser. When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of the account, the login cookies will be removed. If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.'],
  ['Embedded content from other websites', 'Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.'],
  ['Who we share your data with', 'If you request a password reset, your IP address will be included in the reset email.'],
  ['How long we retain your data', 'If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue. For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time, except they cannot change their username. Website administrators can also see and edit that information.'],
  ['What rights you have over your data', 'If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.'],
  ['Where we send your data', 'Visitor comments may be checked through an automated spam detection service.']
]

export const sourceRoutes = [
  '/', '/about-us/', '/contact-us/', '/blog/', '/terms-and-conditions/', '/feedback/', '/privacy-policy/', '/accreditations/', '/global-presence/', '/photo-gallery/', '/idex-2022/', '/category/uncategorized/', '/author/mczind_admin/', '/2024/05/08/', '/services/textile/', '/services/leather-and-footwear/', '/services/environmental/', '/services/petroleum/'
]

export function serviceByPath(pathname: string) {
  const slug = pathname.replace(/^\/services\//, '').replace(/\/$/, '')
  return services.find((service) => service.slug === slug || (slug === 'leather-footwear-ppe' && service.slug === 'leather-and-footwear'))
}

export function inspectionByPath(pathname: string) {
  const slug = pathname.replace(/^\/inspection\//, '').replace(/\/$/, '')
  return inspections.find((item) => item.slug === slug)
}
