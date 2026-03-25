import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us — Get a Free Digital Marketing Consultation',
  description:
    "Reach out to AdCheckup for a free consultation. Tell us about your business and we'll build a custom growth strategy for you.",
  openGraph: {
    title: 'Contact AdCheckup — Free Consultation',
    description: 'Get a free digital marketing consultation from AdCheckup. We respond within 24 hours.',
    url: 'https://adcheckup.com/contact',
  },
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@adcheckup.com',
    href: 'mailto:hello@adcheckup.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+1 (888) 000-0000',
    href: 'tel:+18880000000',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
];

const faqs = [
  {
    q: 'How quickly will I see results?',
    a: 'SEO results typically appear in 60–90 days, while PPC campaigns can generate leads within days of launch. We set clear milestones from day one.',
  },
  {
    q: 'Do you offer month-to-month contracts?',
    a: "Yes. While we recommend 3-month engagements for meaningful results, we don't lock you into long-term contracts you're not happy with.",
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We work across healthcare, e-commerce, SaaS, professional services, and local businesses throughout the U.S.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No hidden setup fees. Our pricing is straightforward and discussed upfront during your free consultation.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Page Header ────────────────────────────────────────────── */}
      <section
        className="bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-page-heading"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h1 id="contact-page-heading" className="text-4xl md:text-5xl font-extrabold mb-5">
            Let's Grow Your Business{' '}
            <span className="text-emerald-400">Together</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Tell us about your goals. We'll reach back within 24 hours with ideas tailored to your business.
          </p>
        </div>
      </section>

      {/* ── Contact Section ────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-label="Contact information and form">
        <div className="container-max grid md:grid-cols-5 gap-12">
          {/* Left: Info */}
          <aside className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Contact Information</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Prefer to reach us directly? Use the details below. Otherwise, fill out the form
                and we'll be in touch.
              </p>
            </div>

            <ul className="space-y-4" role="list">
              {contactInfo.map(({ icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 flex-shrink-0" aria-hidden="true">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                    {href ? (
                      <a href={href} className="text-gray-800 font-medium text-sm hover:text-emerald-500 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium text-sm">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Mini FAQ */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-4">Common Questions</h3>
              <div className="space-y-4">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="border-l-2 border-emerald-200 pl-4">
                    <p className="text-sm font-semibold text-gray-800 mb-1">{q}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Right: Form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100" aria-label="Trust indicators">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { num: '200+', label: 'Happy Clients' },
              { num: '24h', label: 'Response Time' },
              { num: '5★', label: 'Average Rating' },
              { num: '100%', label: 'U.S.-Based Team' },
            ].map(({ num, label }) => (
              <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <p className="text-2xl font-extrabold text-emerald-500">{num}</p>
                <p className="text-gray-500 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
