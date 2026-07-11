import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "OchaCare Kenya — Trusted Care When You't Be There",
  description:
    'OchaCare Kenya provides trusted, non-medical care support for your loved ones — escorting patients, hospital navigation, and family liaison services across Kenya.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: "OchaCare Kenya — Trusted Care When You Can't Be There",
    description:
      "Compassionate, non-medical care support for your loved ones in Kenya when you can't be there.",
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'OchaCare Kenya — Trusted Care Support Services',
        type: 'image/png',
      },
    ],
    siteName: 'OchaCare Kenya',
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    title: "OchaCare Kenya — Trusted Care When You Can't Be There",
    description:
      "Compassionate, non-medical care support for your loved ones in Kenya when you can't be there.",
    images: ['/assets/images/app_logo.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OchaCare Kenya',
    url: baseUrl,
    logo: `${baseUrl}/assets/images/app_logo.png`,
    description: 'Trusted, non-medical care support for your loved ones in Kenya.',
    sameAs: [],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: "OchaCare Kenya — Trusted Care When You Can't Be There",
    url: baseUrl,
    description:
      'OchaCare Kenya provides trusted, non-medical care support for your loved ones — escorting patients, hospital navigation, and family liaison services across Kenya.',
    publisher: {
      '@type': 'Organization',
      name: 'OchaCare Kenya',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/assets/images/app_logo.png`,
      },
    },
  };

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />

        <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fochacare1687back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.19"
        />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" />
      </head>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
