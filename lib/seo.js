/**
 * Generates consistent Open Graph metadata for each page.
 * @param {object} opts
 * @param {string} opts.title
 * @param {string} opts.description
 * @param {string} opts.path - e.g. '/services'
 * @param {string} [opts.image] - defaults to /og-image.png
 */
export function buildMetadata({ title, description, path, image = '/og-image.png' }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adcheckup.com';
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
