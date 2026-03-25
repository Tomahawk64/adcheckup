import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export const metadata = {
  title: 'AdCheckup — Digital Growth Solutions for U.S. Businesses',
  description:
    'AdCheckup helps U.S. businesses grow online with expert SEO, PPC advertising, web design, and data analytics. Get measurable results fast.',
  openGraph: {
    title: 'AdCheckup — Digital Growth Solutions for U.S. Businesses',
    description: 'Expert digital marketing, SEO, PPC, and web design services that drive results.',
    url: 'https://adcheckup.com',
  },
};

const services = [
  {
    id: 'seo',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO Optimization',
    description: 'Rank higher on Google with technical SEO, keyword strategy, and content optimization tailored to your industry.',
  },
  {
    id: 'ppc',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
      </svg>
    ),
    title: 'PPC Advertising',
    description: 'Maximize ROI with targeted Google Ads and Meta campaigns that reach ready-to-buy customers.',
  },
  {
    id: 'web-design',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Web Design & Dev',
    description: 'Beautiful, fast, conversion-optimized websites built with modern frameworks and best practices.',
  },
  {
    id: 'analytics',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Analytics & Reporting',
    description: 'Clear, actionable dashboards and monthly reports that show exactly where your growth is coming from.',
  },
  {
    id: 'social',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Social Media Marketing',
    description: 'Build brand authority and drive engagement with platform-specific content strategies and paid social.',
  },
  {
    id: 'cro',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Conversion Rate Optimization',
    description: 'Turn more visitors into customers through A/B testing, UX improvements, and data-driven funnel optimization.',
  },
];

const trustPoints = [
  {
    icon: '🎯',
    title: 'Results-Driven Approach',
    description: 'Every strategy is backed by data. We set clear KPIs and report transparently on every dollar.',
  },
  {
    icon: '⚡',
    title: 'Fast Time to Value',
    description: 'Our streamlined onboarding means you see measurable results within the first 30 days.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    description: 'You get a dedicated account manager who knows your business and responds within hours.',
  },
  {
    icon: '🔒',
    title: 'Transparent Pricing',
    description: 'No hidden fees, no long-term lock-ins. Pay for what you need and scale as you grow.',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, BrightPath Retail',
    quote:
      'AdCheckup tripled our organic traffic in 4 months. Their SEO team truly understands what it takes to rank in competitive U.S. markets.',
    avatar: 'SM',
  },
  {
    name: 'James Kowalski',
    role: 'Founder, TechVista Solutions',
    quote:
      'Our Google Ads ROAS went from 1.8x to 5.2x in just 60 days. The PPC team at AdCheckup is genuinely world-class.',
    avatar: 'JK',
  },
  {
    name: 'Priya Nair',
    role: 'Marketing Director, HealthFirst Clinic',
    quote:
      'Clean, fast website + stellar SEO = our booking appointments doubled. I recommend AdCheckup to every business owner I know.',
    avatar: 'PN',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 text-white overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        {/* Glow blob */}
        <div
          className="absolute top-[-10%] right-[-5%] w-72 h-72 bg-emerald-500 rounded-full opacity-10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-3xl animate-slide-up">
            <p className="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-5 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
              Trusted by Growing U.S. Businesses
            </p>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              Grow Your Business With{' '}
              <span className="text-emerald-400">Digital Marketing</span> That Delivers
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              From SEO to paid ads, we craft data-driven strategies that bring real customers to your
              door — not just clicks and impressions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
                Get in Touch
              </Link>
              <Link href="/services" className="btn-ghost text-base px-8 py-3.5">
                Explore Services
              </Link>
            </div>
            {/* Social proof numbers */}
            <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-white/10">
              {[
                { num: '200+', label: 'Clients Served' },
                { num: '3.8×', label: 'Avg. ROAS' },
                { num: '98%', label: 'Client Retention' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="text-3xl font-extrabold text-white">{num}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Overview ──────────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="services-heading">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="section-title">
              Everything You Need to Grow Online
            </h2>
            <p className="section-subtitle mx-auto text-center">
              A full suite of digital services, all under one roof — designed to work together for
              compounding growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="trust-heading">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-emerald-500 font-semibold text-sm uppercase tracking-widest mb-3">
                Why AdCheckup
              </p>
              <h2 id="trust-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                We Make Digital Marketing Simple and Profitable
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Running a business is hard enough. Your marketing should pull its weight. We remove
                the guesswork and replace it with proven systems that scale.
              </p>
              <Link href="/contact" className="btn-primary">
                Start Growing Today
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {trustPoints.map(({ icon, title, description }) => (
                <div
                  key={title}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all duration-300"
                >
                  <span className="text-2xl mb-3 block" role="img" aria-hidden="true">{icon}</span>
                  <h3 className="font-semibold text-gray-900 mb-1.5 text-base">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="section-title">
              Loved by Businesses Across the U.S.
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Don't take our word for it — here's what our clients say.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, quote, avatar }) => (
              <figure
                key={name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
              >
                <svg
                  className="w-8 h-8 text-emerald-200 mb-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                  {quote}
                </blockquote>
                <figcaption className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{name}</p>
                    <p className="text-gray-400 text-xs">{role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────── */}
      <section
        className="section-padding bg-gradient-to-r from-emerald-600 to-emerald-500 text-white"
        aria-labelledby="cta-heading"
      >
        <div className="container-max text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
            Let's build a strategy that turns your digital presence into your biggest revenue channel.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:bg-emerald-50 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
          >
            Get a Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
