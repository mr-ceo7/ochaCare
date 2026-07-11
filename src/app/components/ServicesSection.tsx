'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    id: 'escort',
    icon: 'UserGroupIcon' as const,
    title: 'Patient Escort Services',
    description:
      'Our care agents personally accompany your loved one from home to the clinic or hospital, ensuring they arrive safely, on time, and with a familiar, trusted face beside them.',
    highlight: 'Door-to-door accompaniment',
    image: '/assets/images/hero_care_worker_walk.jpg',
    imageAlt:
      'Care agent walking alongside elderly patient through hospital entrance, soft indoor lighting',
    accent: 'bg-primary',
    colSpan: 'lg:col-span-2',
    tall: true,
  },
  {
    id: 'navigation',
    icon: 'MapPinIcon' as const,
    title: 'Hospital Navigation',
    description:
      'Hospitals can be overwhelming. We guide patients through registration, ward locations, specialist consultations, and discharge — eliminating confusion and wait-time stress.',
    highlight: 'Zero confusion, full guidance',
    image: null,
    imageAlt: '',
    accent: 'bg-secondary',
    colSpan: 'lg:col-span-1',
    tall: false,
  },
  {
    id: 'medication',
    icon: 'BeakerIcon' as const,
    title: 'Medication Pick-Up & Wellness',
    description:
      "We collect prescribed medications, confirm dosage instructions with pharmacists, and deliver them directly — keeping your family member's wellness routine uninterrupted.",
    highlight: 'Pharmacy liaison included',
    image: null,
    imageAlt: '',
    accent: 'bg-secondary',
    colSpan: 'lg:col-span-1',
    tall: false,
  },
  {
    id: 'liaison',
    icon: 'PhoneArrowUpRightIcon' as const,
    title: 'Family Liaison & Follow-Up',
    description:
      'We bridge the distance. After every appointment, we provide you with a clear update — what the doctor said, next steps, test results, and anything you need to know, in plain language.',
    highlight: 'Real-time family updates',
    image: '/assets/images/hero_family_liaison.jpg',
    imageAlt:
      'Care agent on phone call outdoors, bright daylight, communicating update to family member',
    accent: 'bg-primary',
    colSpan: 'lg:col-span-2',
    tall: true,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        }
      );

      cardRefs.current.filter(Boolean).forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%' },
          }
        );
      });
    };
    initGSAP();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-16 lg:py-28 px-4 sm:px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-10 sm:mb-14 opacity-100">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
            Our Services
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <h2 className="text-display font-extrabold text-foreground max-w-xl">
              Everything Your Loved One <span className="text-primary">Needs at Hospital.</span>
            </h2>
            <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
              Four core services designed to give diaspora families peace of mind — knowing someone
              reliable is physically present.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* Card 1: Escort — col-span-2 */}
          <div
            ref={(el) => {
              cardRefs.current[0] = el;
            }}
            className="service-card lg:col-span-2 bg-muted border border-border opacity-100"
          >
            <div className="flex flex-col md:grid md:grid-cols-2 h-full min-h-[280px] md:min-h-[320px]">
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-5">
                    <Icon name={services[0].icon} size={24} />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full mb-3 sm:mb-4">
                    {services[0].highlight}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-3">
                    {services[0].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {services[0].description}
                  </p>
                </div>
                <a
                  href="https://wa.me/254716200098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  Book this service
                  <Icon name="ArrowRightIcon" size={16} />
                </a>
              </div>
              <div className="relative min-h-[200px] md:min-h-0 rounded-b-[2.5rem] md:rounded-r-[2.5rem] md:rounded-bl-none overflow-hidden">
                <AppImage
                  src={services[0].image!}
                  alt={services[0].imageAlt}
                  fill
                  priority={true}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Card 2: Navigation — col-span-1 */}
          <div
            ref={(el) => {
              cardRefs.current[1] = el;
            }}
            className="service-card bg-secondary border border-border p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[280px] opacity-100"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-5">
                <Icon name={services[1].icon} size={24} />
              </div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 sm:mb-4">
                {services[1].highlight}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-foreground mb-3">
                {services[1].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {services[1].description}
              </p>
            </div>
            <a
              href="https://wa.me/254716200098"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
            >
              Learn more <Icon name="ArrowRightIcon" size={16} />
            </a>
          </div>

          {/* Card 3: Medication — col-span-1 */}
          <div
            ref={(el) => {
              cardRefs.current[2] = el;
            }}
            className="service-card bg-secondary border border-border p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[280px] opacity-100"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent mb-4 sm:mb-5">
                <Icon name={services[2].icon} size={24} />
              </div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full mb-3 sm:mb-4">
                {services[2].highlight}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-foreground mb-3">
                {services[2].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {services[2].description}
              </p>
            </div>
            <a
              href="https://wa.me/254716200098"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-accent font-bold text-sm hover:gap-3 transition-all"
            >
              Learn more <Icon name="ArrowRightIcon" size={16} />
            </a>
          </div>

          {/* Card 4: Liaison — col-span-2 */}
          <div
            ref={(el) => {
              cardRefs.current[3] = el;
            }}
            className="service-card lg:col-span-2 bg-muted border border-border opacity-100"
          >
            <div className="flex flex-col md:grid md:grid-cols-2 h-full min-h-[280px] md:min-h-[320px]">
              <div className="relative min-h-[200px] md:min-h-0 rounded-t-[2.5rem] md:rounded-l-[2.5rem] md:rounded-tr-none overflow-hidden order-first md:order-first">
                <AppImage
                  src={services[3].image!}
                  alt={services[3].imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-5">
                    <Icon name={services[3].icon} size={24} />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 sm:mb-4">
                    {services[3].highlight}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-3">
                    {services[3].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {services[3].description}
                  </p>
                </div>
                <a
                  href="https://wa.me/254716200098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  Book this service
                  <Icon name="ArrowRightIcon" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
