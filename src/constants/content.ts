// ============================================================
//  SATSET — Central content file
//  Edit text, links, images, and partners here.
// ============================================================

// -------------------- Company / Contact --------------------
export const COMPANY = {
  name: "SATSET",
  legalName: "PT. Satelit Sejahtera Terang",
  tagline: "Your Digital Excellence Partner",
};

export const CONTACT_INFO = {
  email: "sales@satelit-sejahtera.id",
  phone: "021 292 229 67",
  phoneHref: "+622129222967",
  address:
    "Plaza Oleos Lantai 17, Unit G, Jl. T.B. Simatupang No. 53A, RT 002/RW 001, Kel. Kebagusan, Kec. Pasar Minggu, Jakarta Selatan 12520",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/",
  whatsapp: "https://wa.me/622129222967",
};

// -------------------- Navigation --------------------
export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Contact", href: "/contact" },
];

// -------------------- Photos (Unsplash, free) --------------------
export const IMAGES = {
  heroCollab:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80&auto=format&fit=crop",
  aboutTeam:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=80&auto=format&fit=crop",
  ctaOffice:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80&auto=format&fit=crop",
  solutionEnterprise:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&auto=format&fit=crop",
  solutionCustom:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop",
  solutionIntegration:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop",
  solutionSupport:
    "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80&auto=format&fit=crop",
};

// -------------------- Homepage --------------------
export const HOMEPAGE = {
  heroBadge: "Trusted IT Solutions Partner",
  heroTitle: "Transform Your Business with Cutting-Edge Technology",
  heroSubtitle:
    "We deliver fast, reliable, and affordable IT solutions that help modern enterprises stay ahead of the competition.",
  heroCtaPrimary: "Explore Solutions",
  heroCtaSecondary: "Talk to Us",

  stats: [
    { number: "10+", label: "Years of Experience" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "24/7", label: "Dedicated Support" },
    { number: "99.9%", label: "Uptime Guarantee" },
  ],

  solutionsTitle: "Our Solutions",
  solutionsSubtitle:
    "End-to-end technology services designed to move your business forward.",

  whyUsTitle: "Why Choose SATSET",
  whyUsSubtitle:
    "We combine speed, reliability, and value to keep your business competitive.",
  whyUs: [
    {
      icon: "speed",
      title: "Fast Delivery",
      description:
        "Rapid deployment and execution so you get up and running without delays.",
    },
    {
      icon: "shield",
      title: "Reliable & Secure",
      description:
        "Enterprise-grade uptime and a security-first approach you can depend on.",
    },
    {
      icon: "wallet",
      title: "Affordable Pricing",
      description:
        "Competitive rates without compromising on quality or support.",
    },
    {
      icon: "handshake",
      title: "True Partnership",
      description:
        "A long-term collaboration focused on your growth, not just a transaction.",
    },
  ],

  partnersTitle: "Our Partners",
  partnersSubtitle:
    "We work with leading technology brands to deliver the best solutions for our clients.",

  ctaTitle: "Ready to Transform Your Business?",
  ctaSubtitle:
    "Let's build the technology solution your business needs. Reach out for a free consultation.",
  ctaPrimary: "Get Started",
  ctaSecondary: "Schedule a Consultation",
};

// -------------------- Solutions --------------------
export const SOLUTIONS = [
  {
    id: "enterprise",
    icon: "briefcase",
    image: "solutionEnterprise",
    title: "Enterprise Software Solutions",
    description:
      "Integrated hardware and software solutions tailored to your business needs.",
    features: ["Scalable architecture", "High performance", "Security-first design"],
  },
  {
    id: "custom",
    icon: "code",
    image: "solutionCustom",
    title: "Custom Development",
    description:
      "Bespoke software applications designed to solve your unique challenges.",
    features: ["Expert engineering team", "Fast turnaround", "Modern tech stack"],
  },
  {
    id: "integration",
    icon: "link",
    image: "solutionIntegration",
    title: "IT Integration Services",
    description:
      "Seamlessly connect your systems with the latest technology and platforms.",
    features: ["Minimal downtime", "Expert guidance", "Full compatibility"],
  },
  {
    id: "support",
    icon: "headset",
    image: "solutionSupport",
    title: "Support & Maintenance",
    description:
      "Proactive monitoring and responsive support for complete peace of mind.",
    features: ["24/7 monitoring", "Quick response times", "Preventive maintenance"],
  },
];

// -------------------- Partners --------------------
// To ADD a partner: drop a logo file into /public/partners/ and add a line below.
// To REMOVE a partner: delete its line.
export const PARTNERS = [
  { name: "Zimbra", logo: "/partners/zimbra.jpg" },
  { name: "Kaspersky", logo: "/partners/kaspersky.jpg" },
  { name: "AnyDesk", logo: "/partners/mdaemon.jpg" },
  { name: "SentinelOne", logo: "/partners/sentinelone.jpg" },
  { name: "BIPO", logo: "/partners/bipo.jpg" },
  { name: "Veritas", logo: "/partners/dell.jpg" },
  { name: "Microsoft", logo: "/partners/microsoft.jpg" },
  { name: "HPE", logo: "/partners/hpe.jpg" },
  { name: "Samsung", logo: "/partners/samsung.jpg" },
  { name: "Imperva", logo: "/partners/imperva.jpg" },
  { name: "Zoom", logo: "/partners/zoom.jpg" },
  { name: "APC", logo: "/partners/apc.jpg" },
];

// -------------------- About --------------------
export const ABOUT_PAGE = {
  title: "About SATSET",
  tagline: "Your Digital Excellence Partner",
  intro:
    "SATSET (PT. Satelit Sejahtera Terang) is a next-generation IT solutions provider. We prioritize the best service for our customers by delivering fast, reliable, and affordable technology — while building genuine, long-term partnerships.",

  missionTitle: "Our Mission",
  mission:
    "To build and advance the latest IT technology through innovative products and services that keep our clients competitively ahead.",

  visionTitle: "Our Vision",
  vision:
    "To be a leading IT solutions provider in Southeast Asia, delivering fast, reliable, and affordable technology to enterprises everywhere.",

  valuesTitle: "Our Core Values",
  values: [
    { icon: "speed", title: "Speed", description: "Rapid deployment and execution of solutions." },
    { icon: "shield", title: "Reliability", description: "Dependable service with a proven track record." },
    { icon: "wallet", title: "Affordability", description: "Competitive pricing with exceptional value." },
    { icon: "spark", title: "Innovation", description: "Continuous improvement with modern technology." },
    { icon: "handshake", title: "Partnership", description: "Long-term collaboration and mutual success." },
    { icon: "star", title: "Excellence", description: "Quality in every project and interaction." },
  ],

  timelineTitle: "Our Journey",
  timeline: [
    { year: "2014", event: "SATSET founded in Jakarta." },
    { year: "2016", event: "Expanded into enterprise software solutions." },
    { year: "2018", event: "Reached 25+ active enterprise clients." },
    { year: "2020", event: "Established a dedicated custom development team." },
    { year: "2023", event: "Grew to 50+ enterprise clients." },
    { year: "2025", event: "Launched new integrated service offerings." },
  ],
};

// -------------------- Contact --------------------
export const CONTACT_PAGE = {
  title: "Get In Touch",
  subtitle:
    "We're here to help. Reach out to our team for any question, quote, or project inquiry.",
  formFields: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: false },
    { name: "company", label: "Company Name", type: "text", required: false },
    { name: "message", label: "Your Message", type: "textarea", required: true },
  ],
  submitButton: "Send Message",
  successMessage: "Thank you! We'll get back to you shortly.",
};
