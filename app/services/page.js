import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export const metadata = {
  title: 'Our Services — SEO, PPC, Web Design & More',
  description:
    "Explore AdCheckup's full range of digital marketing services: SEO, PPC advertising, web design, analytics, social media, and conversion rate optimization for U.S. businesses.",
  openGraph: {
    title: 'Our Services — AdCheckup Digital Marketing',
    description: 'Full-service digital marketing: SEO, PPC, web design, analytics, and more.',
    url: 'https://adcheckup.com/services',
  },
};

const services = [
  {
    id: 'seo',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO Optimization',
    tagline: 'Rank Higher. Get Found. Grow Organically.',
    description:
      'We perform comprehensive technical SEO audits, build high-authority backlinks, and craft keyword-rich content that pushes your site to the top of Google — and keeps it there.',
    bullets: [
      'Technical SEO audit & fixes',
      'Keyword research & mapping',
      'On-page & off-page optimization',
      'Local SEO for U.S. markets',
      'Content strategy & blogging',
    ],
  },
  {
    id: 'ppc',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
      </svg>
    ),
    title: 'PPC Advertising',
    tagline: 'Every Dollar Spent, Accounted For.',
    description:
      'Our certified Google Ads and Meta Ads specialists build, manage, and optimize campaigns that target ready-to-buy audiences — maximizing your ROAS from day one.',
    bullets: [
      'Google Search & Display Ads',
      'Meta (Facebook/Instagram) Ads',
      'Retargeting campaigns',
      'Landing page optimization',
      'Monthly performance reports',
    ],
  },
  {
    id: 'web-design',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Web Design & Development',
    tagline: 'Fast, Beautiful, and Built to Convert.',
    description:
      'We design and build modern, mobile-first websites using Next.js and React — optimized for Core Web Vitals, SEO, and conversion from the ground up.',
    bullets: [
      'Custom design & branding',
      'Next.js / React development',
      'Core Web Vitals optimization',
      'CMS integration (Sanity, Contentful)',
      'E-commerce solutions',
    ],
  },
  {
    id: 'analytics',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Analytics & Reporting',
    tagline: 'Know Where Every Lead Comes From.',
    description:
      "We set up robust tracking with GA4, GTM, and custom dashboards that give you crystal-clear visibility into what's working — so you can invest smarter.",
    bullets: [
      'GA4 setup & configuration',
      'Google Tag Manager implementation',
      'Custom Looker Studio dashboards',
      'Conversion tracking',
      'Monthly executive reports',
    ],
  },
  {
    id: 'social',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Social Media Marketing',
    tagline: 'Build Authority. Drive Engagement.',
    description:
      'From content calendars to community management, we build social media presences that grow audiences and turn followers into paying customers.',
    bullets: [
      'Platform strategy (LinkedIn, IG, X)',
      'Content creation & scheduling',
      'Community management',
      'Paid social campaigns',
      'Influencer outreach',
    ],
  },
  {
    id: 'cro',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Conversion Rate Optimization',
    tagline: 'More Customers. Same Traffic.',
    description:
      'We analyze your funnel, identify drop-off points, and run structured A/B tests to systematically improve conversions — turning existing traffic into more revenue.',
    bullets: [
      'Heatmap & session recording analysis',
      'A/B & multivariate testing',
      'Landing page redesign',
      'Form & checkout optimization',
      'Funnel analysis & reporting',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Header ────────────────────────────────────────────── */}
      <section
        className="bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8"
        aria-labelledby="services-page-heading"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h1 id="services-page-heading" className="text-4xl md:text-5xl font-extrabold mb-5">
            Services Built for{' '}
            <span className="text-emerald-400">Real Business Growth</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Every service we offer is designed to generate measurable ROI for your business — not
            vanity metrics.
          </p>
        </div>
      </section>

      {/* ── Services Detail ────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-label="Services list">
        <div className="container-max space-y-16">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`grid md:grid-cols-2 gap-10 items-start pb-16 border-b border-gray-100 last:border-0 last:pb-0 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-5 text-emerald-500">
                  {service.icon}
                </div>
                <p className="text-emerald-500 font-semibold text-sm mb-2">{service.tagline}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                <Link href="/contact" className="btn-primary text-sm">
                  Get Started
                </Link>
              </div>
              {/* Bullets card */}
              <div className={`bg-gray-50 rounded-2xl p-6 border border-gray-100 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="font-semibold text-gray-900 mb-4 text-base">What's included:</h3>
                <ul className="space-y-3" role="list">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg
                        className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Services Grid Summary ──────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="services-overview-heading">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 id="services-overview-heading" className="section-title">
              All Services at a Glance
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <ServiceCard key={s.id} id={undefined} icon={s.icon} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────── */}
      <section className="section-padding bg-emerald-600 text-white" aria-labelledby="services-cta-heading">
        <div className="container-max text-center">
          <h2 id="services-cta-heading" className="text-3xl font-bold mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Tell us about your business and we'll recommend the right mix of services to hit your
            growth goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:bg-emerald-50 active:scale-95 transition-all duration-200"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </>
  );
}
