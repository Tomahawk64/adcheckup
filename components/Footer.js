import Link from 'next/link';

const footerLinks = {
  Pages: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ],
  Services: [
    { href: '/services#seo', label: 'SEO Optimization' },
    { href: '/services#ppc', label: 'PPC Advertising' },
    { href: '/services#web-design', label: 'Web Design' },
    { href: '/services#analytics', label: 'Analytics' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group" aria-label="AdCheckup home">
              <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              <span className="text-xl font-bold text-white">
                Ad<span className="text-emerald-400">Checkup</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Helping U.S. businesses grow online with data-driven digital marketing, SEO, and web solutions that deliver measurable results.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="mailto:hello@adcheckup.com"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                aria-label="Email AdCheckup"
              >
                hello@adcheckup.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-2.5" role="list">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>&copy; {currentYear} AdCheckup. All rights reserved.</p>
          <p>Built for performance &amp; growth.</p>
        </div>
      </div>
    </footer>
  );
}
