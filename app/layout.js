import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://adcheckup.com'),
  title: {
    default: 'AdCheckup — Digital Growth Solutions for U.S. Businesses',
    template: '%s | AdCheckup',
  },
  description:
    'AdCheckup helps U.S. businesses grow online with expert digital marketing, SEO, PPC advertising, web design, and analytics services.',
  keywords: ['digital marketing', 'SEO', 'PPC', 'web design', 'analytics', 'US business'],
  authors: [{ name: 'AdCheckup Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adcheckup.com',
    siteName: 'AdCheckup',
    title: 'AdCheckup — Digital Growth Solutions for U.S. Businesses',
    description:
      'Expert digital marketing, SEO, PPC, and web design services that drive measurable results for U.S. businesses.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AdCheckup Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdCheckup — Digital Growth Solutions',
    description: 'Expert digital marketing services that drive results.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
