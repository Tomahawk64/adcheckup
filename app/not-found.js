import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found — AdCheckup',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="text-center max-w-md">
        <p className="text-7xl font-extrabold text-emerald-500 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
