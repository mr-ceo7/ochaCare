import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import HowItWorksSection from '@/app/components/HowItWorksSection';
import WhyUsSection from '@/app/components/WhyUsSection';
import CTASection from '@/app/components/CTASection';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: "OchaCare Kenya — Trusted Care When You Can't Be There",
  description:
    'OchaCare Kenya provides trusted, non-medical care support for your loved ones — escorting patients, hospital navigation, and family liaison services across Kenya.',
  openGraph: {
    title: "OchaCare Kenya — Trusted Care When You Can't Be There",
    description:
      "Compassionate, non-medical care support for your loved ones in Kenya when you can't be there.",
    url: baseUrl,
    type: 'website',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'OchaCare Kenya — Trusted Care Support Services',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhyUsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
